import axios from "axios";

const api = axios.create({baseURL:"http:/192.168.0.17:3100/"});

interface ILoginService{
    email:string;
    password:string;
}

export interface ILoginServiceReturn{
    name: string;
    id: number;
    token: string;
    typeAccount: string;
    email: string;
}
export const loginService = async ({email,password}:ILoginService): Promise<ILoginServiceReturn> =>{
    try{
        const r = await api.post("/login", {email,password});
        const user:ILoginServiceReturn = {email: r.data.email, id:r.data.id, name:r.data.name, token:r.data.token, typeAccount: r.data.typeAccount} 
        console.log(user.id)
        return(user);
    }catch(err){
        return(err)
    }
}