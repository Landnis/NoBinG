import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data=[
    {
      category:'Rent a Car',
      expanded:true,
      products:[
        {id:0,name:'Toyota-yaris',price:'25$ per day'},
        {id:1,name:'Nissan Micra',price:'20$ per day'},
        {id:2,name:'Ford-Focus',price:'35$ per day'},
        {id:3,name:'Wolfgwagen-Golf',price:'35$ per day'}
      ]
    },
    {
    category:'Hotels',
    products:[
      {id:0,name:'Hotel Terelidis',price:'40$ per day'},
      {id:1,name:'Hotel Ioannou Resort',price:'35$ per day'},
      {id:2,name:'Hotel Pantelidis',price:'25$ per day'},
      {id:3,name:'Hotel Kapsis',price:'20$ per day'}
    ]
    },
    {
    category:"Activities",
    products:[
      {id:0,name:'Ski at Vigla Mountain',price:'50$ per day'},
      {id:1,name:'Snowboarding at 3-5 Pigadia',price:'50$ per day'},
      {id:2,name:'Ice Sliding at Agios Athanasios',price:'15$ per HOUR'},
    ]
    },
  
  ];
  private cart=[]
    constructor() { }
    getProducts(){
      return this.data;
    }
    getCart(){
      return this.cart;
    }
    AddProduct(product){
      this.cart.push(product);
    }
}
