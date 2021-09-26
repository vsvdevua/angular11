import { Component, OnInit } from '@angular/core';
import { DataForListService } from './data-for-list.service';

@Component({
  selector: 'app-service02-local',
  templateUrl: './service02-local.component.html',
  styleUrls: ['./service02-local.component.css'],
  // регистрация сервиса в компоненте
  providers: [DataForListService]
})
export class Service02LocalComponent implements OnInit {

  listItems: string[];
  // Подключение сервиса к компоненту
  // Сервис зарегистрирован в компоненте
  constructor(private dataList: DataForListService) { }

  ngOnInit() {
    this.listItems = this.dataList.getData();
  }

}
