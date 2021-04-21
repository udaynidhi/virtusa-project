
export class UserLogin{
    loginEmail!:String;
loginPassword!:string;
    constructor(
 
        ){

    }
    store(
        loginEmail:String,
        loginPassword:string){
this.loginEmail=loginEmail;
this.loginPassword=loginPassword;
    }

}