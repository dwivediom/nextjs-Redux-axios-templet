import { GET_USER_SUCCESS,GET_USER_FAIL, GET_USER_REQUEST } from "../constants/userConstants"



const userReducer = (state = { users: [],loading:false }, action) => {
    console.log("out side switch")
   switch (action.type) {
     case GET_USER_REQUEST:
     
       return { ... state ,loading: true};
 
     case GET_USER_SUCCESS:
         console.log("action.payload:" ,action.payload)
       return {...state,loading: false, users: [...action.payload] };

            
     case GET_USER_FAIL:
       return {...state, loading: false, error: action.payload };
 
     default:
       return state;
   }


}

export default userReducer