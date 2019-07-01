import React, { Component } from 'react'
import { connect } from 'react-redux'
import Firebase from '~/firebase-config'
import { Text } from 'react-native'
import Container from '~/generics/Container'
import { UserType } from '~/store/user-reducer'

type StateProps = {
  user: UserType
}

type DispatchProps = {}

type OwnProps = {}

type WorkoutListProps = StateProps & DispatchProps & OwnProps

class WorkoutList extends Component<WorkoutListProps> {
  public state = {
    workoutsRef: null,
  }

  public componentDidMount() {
    const { user } = this.props
    const workoutsRef = Firebase.database()
      .ref()
      .child(`users/${user.key}/workouts`)

    this.setState({
      workoutsRef,
    })
  }

  public submitWorkout() {
    if (this.state.workoutsRef) {
      const newRef = this.state.workoutsRef.push()
      let newWorkout = {
        name: 'workout name 2',
        exercises: [
          {
            name: 'name 1',
          },
          {
            name: 'name 2',
          },
        ],
      }

      newRef.set(newWorkout)
    }
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

          <Text>WORKOUTS</Text>

          {workouts.map(item => (
            <Text key={item.name}>{item.name}</Text>
          ))}
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
