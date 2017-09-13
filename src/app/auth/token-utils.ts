import { IToken } from './token';
export class TokenUtils{

       convert(token:any):IToken{

        return {
            token :token['access_token'],
            expiry:token['expires_in']
        };

       } 

}