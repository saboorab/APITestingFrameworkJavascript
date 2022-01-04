//This method will generate token based on the BASE_URI=https://api-demo.airwallex.com 
//and AUTH LOGIN=/api/v1/authentication/login which are defined in services->endpoints.js file
import supertest from 'supertest';
import { AUTH_LOGIN, BASE_URI } from '../services/endpoints';

//Defining the BASE_URI
const request = supertest(BASE_URI)

export const generateToken = async () => {
    const response = await request.post(AUTH_LOGIN)
        .set('content-type', 'application/json')
        .set("x-client-id", "KJbr_Xs5TLmhY03JWSi3NQ")
        .set("x-api-key", "2308e2dd300f6b959b7f4e0a52ba9181186fc92f075f7e64ee9fa0b6b1ada094c39c9a9f39f06693d06b17067f78d4e7")
    return response.body.token
}