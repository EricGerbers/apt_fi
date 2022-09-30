import { accountActionType } from './action'

const accountState = {
  connected: false,
  balance: 0,
  address: '',
  type: 'injected'
}

export default function reducer(state = accountState, action) {
  switch (action.type) {
    case accountActionType.UPDATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
