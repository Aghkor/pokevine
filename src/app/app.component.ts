import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RegisterService} from "./register.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name = 'Angular 5';
  apiRoot = 'https://pokeapi.co/api/v2'
  vinedoURL = 'http://localhost:8080/myapp'
  vinedo: Object = null;
  

  constructor(private http: Http, private registerService: RegisterService) {
  }

  add(nombre, tipo, codigo, longitud, latitud){
    this.registerService.add(nombre,tipo,codigo,longitud,latitud);
  }








  listar(): void {
    let url = `${this.vinedoURL}/vinedo/`;
    this.http.get(url).subscribe(
      res => {
        console.log(res);
        this.vinedo = res.json();
        console.log(res.json().vinedos);
      }
      ,
      err => console.log('Error ' + err),
      () => console.log('yay')
    );
  }


  ngOnInit() {
    this.listar();
  }
}
