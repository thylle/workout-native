import React, { Component } from 'react'
import { connect } from 'react-redux'
import Firebase from '~/firebase-config'
import styled from 'styled-components/native'
import theme from '~/styles/theme'
import Input from '~/generics/Input'
import { UserType } from '~/store/user-reducer'

type StateProps = {
  user: UserType
}

type DispatchProps = {}

type OwnProps = {}

type CreateWorkoutProps = StateProps & DispatchProps & OwnProps

class CreateWorkout extends Component<CreateWorkoutProps> {
  public state = {
    workoutsRef: null,
    workoutName: '',
    exerciseName: '',
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

  handleChange(input) {
    this.setState({
      workoutName: input,
    })
  }

  public submitWorkout() {
    if (this.state.workoutsRef) {
      const { workoutsRef, workoutName, exerciseName } = this.state
      const newRef = workoutsRef.push()
      let newWorkout = {
        name: workoutName,
        exercises: [
          {
            name: exerciseName,
          },
        ],
      }

      newRef.set(newWorkout)

      this.setState({ workoutName: '', exerciseName: '' })
    }
  }

  public renderCreateExercise() {
    const { workoutName } = this.state

    if (workoutName) {
      return (
        <Input
          value={this.state.exerciseName}
          placeholder="Exercise name"
          onChangeText={input => this.handleChange(input)}
        />
      )
    }
  }

  render() {
    const { user } = this.props

    if (user && user.email) {
      return (
        <View>
          <Input
            value={this.state.workoutName}
            placeholder="Your new workouts name..."
            onChangeText={input => this.handleChange(input)}
          />

          {this.renderCreateExercise()}
        </View>
      )
    }
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
})

export default connect(mapStateToProps)(CreateWorkout)

const View = styled.View`
  margin-bottom: ${theme.spacing4};
  padding: ${theme.spacing4};
  background: ${theme.white};
`
