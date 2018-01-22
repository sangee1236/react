import loginService from '../../services/login/login-service.js';

login =(userName , password)=>{
return dispatch =>{
    loginService.login(userName,password)
        .then(

            user =>{dispatch(success(user));
            },
            error=>{
                dispatch(failure(error));
            }
        )
    }
    //function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error } }
}

export default login ;