import {REQUEST_DATA, SUCCESS_DATA,FAILURE_DATA} from '../../Constant/actionType';
import calldata from '../Api/apicall'

export const requestdata = ()=>{
    return{
        type:REQUEST_DATA,
    }
}

export const successdata = (response)=>{
    return{
        type:SUCCESS_DATA,
        Data:response
    }
}

export const failuredata = (err)=>{
    return{
        type:FAILURE_DATA,
        DataErr:err
    }
}
export const CreateCallAction = () => {
    return function (dispatch) {
        dispatch(requestdata())
        // Api.getAbout().then(result => {
            calldata().then((response)=>{
                dispatch(successdata(response))
            }).catch((err)=>{
                const arr = {
                        'home_team':  {
                            'name': "PERTH KNIGHTS",
                            'score': 55
                            },
                         
                            'away_team': {
                             'name': "SYDNEY SHARKS",
                             'score': 59
                            }
                    }
                dispatch(failuredata(arr))
            })
            

        // }).catch(error => {
            
        // })
    }
       
}




