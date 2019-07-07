import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Firebase from '~/firebase-config'
import { userActions } from '~/store/user-actions'
import theme from '~/styles/theme'
import Container from '~/generics/Container'
import { UserType } from '~/store/user-reducer'
import Input from '~/generics/Input'

type StateProps = {
  user: UserType
}

type DispatchProps = {
  handleChange: () => void
  handleSubmit: () => void
  setUser: (user: UserType) => void
}

type OwnProps = {}

type LoginProps = StateProps & DispatchProps & OwnProps

class Login extends Component<LoginProps> {
  public state = {
    userRef: null,
    inputValue: '',
  }

  public componentDidMount() {
    const userRef = Firebase.database()
      .ref()
      .child('users')

    this.setState({
      userRef,
    })

    //Temp auto login
    setTimeout(() => {
      this.setState({
        inputValue: 'thylle',
      })
      this.checkUser()
    }, 300)
    //Temp auto login
  }

  public checkUser() {
    const { inputValue, userRef } = this.state

    //To lowercase and remove spaces
    const inputEmail = inputValue.toLocaleLowerCase().replace(/\s/g, '')

    if (inputEmail) {
      userRef
        .orderByChild('email')
        .equalTo(inputEmail)
        .on('value', snapshot => {
          //If user already exists - login'
          const res = snapshot.val()

          if (res) {
            const user = Object.values(res) as UserType[]

            this.props.setUser(user[0])
          } else {
            this.createUser(inputEmail)
          }
        })
    }
  }

  public createUser(inputEmail: string) {
    const { userRef } = this.state

    const newRef = userRef.push()
    const newUser = {
      key: newRef.key,
      email: inputEmail,
    } as UserType

    console.warn('create new user', newUser.email)
    newRef.set(newUser).then(() => {
      this.props.setUser(newUser)
    })
  }

  handleChange(input) {
    this.setState({
      inputValue: input,
    })
  }

  handleSubmit() {
    this.checkUser()
  }

  public render() {
    const { user } = this.props
    const { userRef } = this.state

    if (!user.email && userRef) {
      return (
        <LoginContainer behavior="padding" enabled>
          <Container>
            <Input
              value={this.state.inputValue}
              placeholder="Type your email to login..."
              onChangeText={input => this.handleChange(input)}
              onSubmitEditing={() => this.handleSubmit()}
            />
          </Container>
        </LoginContainer>
      )
    }

    return null
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user: UserType) => dispatch(userActions.setUser(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

const LoginContainer = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`
