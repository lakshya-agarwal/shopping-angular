import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
   categories:string[] = ["shoes","sports"];
   l = this.categories;
   value=1;

}
