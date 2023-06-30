import { Component, OnInit } from '@angular/core';

const row_height:{[id:number]:number} ={1:360,2:350,4:300}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  columsCount=3;
  rowHeight = row_height[this.columsCount];
  constructor() { }

  ngOnInit(): void {
  }
  onCloumnChange(columNo:number){
    this.columsCount = columNo
    this.rowHeight = row_height[this.columsCount];
  }

}
