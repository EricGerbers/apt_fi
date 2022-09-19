export const accountActionType = {
  UPDATE: 'UPDATE',
}

export const updateAccount = (payload) => (dispatch) => {
  return dispatch({ type: accountActionType.UPDATE, payload })
}
