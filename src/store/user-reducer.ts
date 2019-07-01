import { combineReducers } from 'redux'
import { userActionTypes } from './user-actions'

export type UserType = {
  key: string
  email: string
  workouts: WorkoutType[]
}

export type WorkoutType = {
  name: string
}

const initialState = {
  key: undefined as Optional<string>,
  email: undefined as Optional<string>,
  workouts: [] as WorkoutType[],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default combineReducers({
  user: userReducer,
})
