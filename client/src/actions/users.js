import { 
  GET_USERS , 
  GET_USERS_FAIL ,
  GET_USER ,
  GET_USER_FAIL , 
  SEARCH_USER
} from './types';
import axios from 'axios'


export const getAllUsers = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:4000/api/users/superadmin')
    dispatch({
      type: GET_USERS ,
      payload: res.data
    })
  } 
  catch (error) {
    console.log(error.message);
    dispatch({
      type: GET_USERS_FAIL , 
      payload: { msg: error.response.statusText , status: error.response.status }
    })  
  }
}


export const getUser = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:4000/api/users/${id}`)
    dispatch({
      type: GET_USER ,
      payload: res.data
    })
  } 
  catch (error) {
    console.log(error.message);
    dispatch({
      type: GET_USER_FAIL , 
      payload: { msg: error.response.statusText , status: error.response.status }
    })  
  }
}

export const searchUser = info => {  
  return {
    type: SEARCH_USER ,
    payload: info
  }  
}