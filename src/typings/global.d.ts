import { Action } from 'redux'
import { Store as ReduxStore } from 'redux'
import { RootState as StoreState } from '~/store'

declare global {
  type RootState = StoreState

  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    __STATE__: any
    reduxStore: ReduxStore<RootState, any>
  }

  type Optional<T> = T | undefined
  type Nullable<T> = T | null
}
