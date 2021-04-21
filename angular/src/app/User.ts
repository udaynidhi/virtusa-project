

export class User{
  //  userName!:string;
  userEmail!:string;
  userName!:string;
  password!:string;
  mobileNumber!:string;
    constructor(){

    }
    store(
      userEmail:string,
      
      password:string,
      mobileNumber:string,
      userName:string,
      ){
        this.userEmail=userEmail;
        this.password=password;
        this.userName=userName;
        this.mobileNumber=mobileNumber;
      

    }
    // public getname():String{
    //     return this.userName;
    // }

}