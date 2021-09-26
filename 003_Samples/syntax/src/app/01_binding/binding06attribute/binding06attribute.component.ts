import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding06attribute',
  templateUrl: './binding06attribute.component.html',
  styleUrls: ['./binding06attribute.component.css']
})
export class Binding06AttributeComponent implements OnInit {


    colSpan = 3;
    interpolationContent = 'main value'
    textInfomation = 'some info text'
    consoleDir(elem){
      console.log(elem);
      console.dir(elem);
    }


    valueR: number = 40;

    increase() {
        this.valueR++;
    }

    decrease() {
        this.valueR--;
    }


  ngOnInit(): void {
  }

}
