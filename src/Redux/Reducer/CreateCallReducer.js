import {REQUEST_DATA, SUCCESS_DATA,FAILURE_DATA} from '../../Constant/actionType'
const initilizeState = {
  
}

export default function CreateCallReducer (state=initilizeState, action) {
    switch(action.type){
        case REQUEST_DATA:
            return{
                ...state,
             
            }
        case SUCCESS_DATA:
            return{
                ...state,
                Data: action.Data,
            }
        case FAILURE_DATA:
            return{
                ...state,
                Data:action.DataErr
         
            }
        default:
            return state
    }
}

 
