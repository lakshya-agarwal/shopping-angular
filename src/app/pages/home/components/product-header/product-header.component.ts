import { Component,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "Desc";
  itemsShowCount=10;
  constructor() { }

  ngOnInit(): void {
  }

  changeSorting(newSort:string):void{
    this.sort=newSort;
  }
  onItemsUpdated(count:number):void{
    this.itemsShowCount=count;
  }
  onCoumnsUpdated(noOfColumns:number):void{
    this.columnsCountChange.emit(noOfColumns);
  }

}
