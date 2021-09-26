import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-children-block',
  templateUrl: './content-children-block.component.html'
})
export class ContentChildrenBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
  aquaColor = false;
  toggleBgBlock(){
    this.aquaColor = !this.aquaColor;
  }
}
