import { UserType } from './user-reducer'

export const userActionTypes = {
  SET_USER: 'SET_USER',
}

export const userActions = {
  setUser: (user: UserType) => ({
    type: userActionTypes.SET_USER,
    payload: user,
  }),
}
