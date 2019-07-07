import React, { Component } from 'react'
import { connect } from 'react-redux'
import Firebase from '~/firebase-config'
import Container from '~/generics/Container'
import { UserType } from '~/store/user-reducer'
import theme from '~/styles/theme'
import Input from '~/generics/Input'
import { Text } from 'react-native'
import Card from '../generics/Card'
import CreateWorkout from './CreateWorkout'

type StateProps = {
  user: UserType
}

type DispatchProps = {}

type OwnProps = {}

type WorkoutListProps = StateProps & DispatchProps & OwnProps

class WorkoutList extends Component<WorkoutListProps> {
  public state = {
    inputValue: '',
  }

  public render() {
    const { user } = this.props

    if (user && user.email) {
      const workouts = Object.values(user.workouts)
      return (
        <Container>
          <Text>
            user: {user.email} - {user.key}
          </Text>

          {workouts.map(item => (
            <Card key={item.name} title={item.name} />
          ))}

          <CreateWorkout />
        </Container>
      )
    }

    return null
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
})

export default connect(mapStateToProps)(WorkoutList)
