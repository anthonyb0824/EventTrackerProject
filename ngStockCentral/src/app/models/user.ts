export class User {
  id:number;
  firstName:string;
  lastName:string
  username:string;
  password:string;
  email:string;
  phoneNumber:string;
  role:string;

  constructor(id:number = 0, firstName:string = '', lastname:string = '', username:string = '',password:string = "",email:string="",phoneNumber:string="",role:string=""){
    this.firstName = firstName;
    this.id=id;
    this.lastName = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.role = role;
  }
}
