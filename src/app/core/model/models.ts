export interface IUserLogon{
    username:string;
    password:string;
}

export class UserLogOn implements IUserLogon{
    constructor(uname?: string, pwd?: string){
        this.username = uname || '';
        this.password = pwd || '';
    }
    username:string;
    password:string;
}