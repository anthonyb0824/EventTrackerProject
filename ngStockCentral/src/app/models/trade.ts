export class Trade {
  id:number;
  status:string;
  shares:number;
  price:number;
  description:string;
  pAndl:number;


constructor(id:number = 0,status:string='',shares:number=0,price:number=0,description:string='',pl:number=0){
  this.id = id;
  this.status = status;
  this.shares= shares;
  this.price = price;
  this.description = description;
  this.pAndl = pl;
}

}
