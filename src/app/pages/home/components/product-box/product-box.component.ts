import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/productmodel';
import EventEmitter = require('events');

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode=false;
  @Output() addToCart= new EventEmitter();
  product:Product ={
    id:1,
    title:'shoes',
    price:150,
    category:'footwear',
    description:'comfortable shoed',
    image:'https://via.placeholder.com/150'

  };
  constructor() { }

  ngOnInit(): void {
  }

  onClickShopping():void{ 
    this.addToCart.emit(this.product.title);  
  }
}
