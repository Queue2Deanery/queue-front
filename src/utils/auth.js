import axios from 'axios';
const AUTH_SERVER_ADDRESS = "http://localhost:83/api/v1.0";

const login = async (data) => {
    const LOGIN_ENDPOINT = `${AUTH_SERVER_ADDRESS}/token/generate`;

    try {

        let response = await axios.post(LOGIN_ENDPOINT, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.status === 200 && response.data.jwt && response.data.expireAt){
            let jwt = response.data.jwt;
            let expire_at = response.data.expireAt;

            localStorage.setItem("access_token", jwt);
            localStorage.setItem("expire_at", expire_at);
            console.log("Logged");
        }
    } catch(e){
        console.log(e);
    }
};

export {login};