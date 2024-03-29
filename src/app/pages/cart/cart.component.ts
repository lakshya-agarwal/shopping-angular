import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cartmodel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Cart = {items:[{
    product:"https://via.placeholder.com/150",
    name:'Sneakers',
    price:150,
    quantity:2,
    id:1
  },
  {
    product:"https://via.placeholder.com/150",
    name:'Shirts',
    price:100,
    quantity:1,
    id:2
  }]}

  dataSource:Array<CartItem> = [];
  displayedColums:Array<string>=[
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action"
  ]
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

  getTotal(items:Array<CartItem>):number{

   return items.map((item)=> item.price*item.quantity).reduce((prev,current) => prev+current,0)
  }

  total(item:CartItem):number{
    return item.price*item.quantity;
  }

}
