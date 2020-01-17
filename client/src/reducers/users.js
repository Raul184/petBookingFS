import {
  GET_USERS ,
  GET_USER ,
  GET_USERS_FAIL,
  GET_USER_FAIL ,
  SEARCH_USER
} from '../actions/types';

const initState = {
  users: [] ,
  value: '' ,
  user: null ,
  loading: true ,
  error: []
}

export default ( state=initState , action ) => {
  const { type , payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state ,
        users: [ ...payload ] , 
        loading: false
      }
    case GET_USERS_FAIL:
      return {
        ...state ,
        loading: false ,
        error: [ payload ]
      }
    case GET_USER:
      return {
        ...state ,
        user: payload ,
        loading: false 
      }
    case SEARCH_USER: 
        return {
          ...state , 
          users: state.users.filter( el => el.name.toLowerCase().startsWith(payload.toLowerCase()) )
        }
    case GET_USER_FAIL:
      return {
        ...state ,
        error: payload ,
        loading: false
      }
    default:
      return state;
  }
}