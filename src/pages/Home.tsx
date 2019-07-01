import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import styled from 'styled-components/native'
import theme from '~/styles/theme'
import Login from '~/components/Login'
import WorkoutList from '~/components/WorkoutList'
import { UserType } from '~/store/user-reducer'

type StateProps = {
  user: UserType
}

type DispatchProps = {}

type OwnProps = {}

type HomeProps = StateProps & DispatchProps & OwnProps

class Home extends Component<HomeProps> {
  public render() {
    return (
      <Wrapper
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Login />

        {this.props.user.email && <WorkoutList />}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Home)

const Wrapper = styled.ScrollView`
  width: 100%;
  background: ${theme.bodyBg};
`
