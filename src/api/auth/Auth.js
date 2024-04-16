import api from "../api";

export const  AuthService={
        sendCode:async (code)=>{
           const data=await  api.post('auth/sendCode',{code:code});
           console.log(data);
           return data;
        }
}