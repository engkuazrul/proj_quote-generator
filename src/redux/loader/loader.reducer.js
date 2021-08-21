const INITIAL_STATE = {
  loading:false
}

const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOADER_STATUS':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}

export default loaderReducer;