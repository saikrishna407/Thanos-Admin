import * as actionTypes from  './actionType'


export const login = (email,password)=>({
      type: actionTypes.Login,
      email,password
})
