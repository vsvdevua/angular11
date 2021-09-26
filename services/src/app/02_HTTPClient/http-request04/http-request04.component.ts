import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-request04',
  templateUrl: './http-request04.component.html'
})
export class HttpRequest04Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users',
      {
        headers: new HttpHeaders({
          // значение должна быть только строкой!
          "CustomITVDNHeader": "best courses ever"
        })
      }
    ).subscribe(res=>{
      console.log(res)
    })
  }

}
