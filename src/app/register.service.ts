import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type vinedo = {
  codigo: string;
  nombre: string;
  longitud: String;
  latitud: String;
  tipo: String;
}

@Injectable()
export class RegisterService {

  uri = 'http://localhost:8080/myapp/vinedo'


  constructor(private http: HttpClient) {
  }

  add(nombre, tipo, codigo, longitud, latitud) {
    const obj = {
      nombre: nombre,
      tipo: tipo,
      codigo: codigo,
      longitud: longitud,
      latitud: latitud
    };
    console.log(obj);

    this.http.post(`${this.uri}`,obj).subscribe(res => console.log('done'));

  }

}