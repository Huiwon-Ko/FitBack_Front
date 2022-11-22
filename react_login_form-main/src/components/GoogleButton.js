import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios'


function GoogleButton(){
    const clientId = "372495721999-tkdujncr3rjq27huenf9en6ja1v48tid.apps.googleusercontent.com"

    
    const onSuccess = async(response) => {
    	console.log(response);
        
        const result = response.profileObj
        const token = response.tokenId

        let body = {
            data: {
                profile: result,
                tokenId: token
            }
        }

        axios.post('/api/google/login', body)
        .then(response =>{
            console.log('구글로그인 성공');
        })
        .catch(err => alert(err))
    }
    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
            />
        </div>
    )
}

export default GoogleButton