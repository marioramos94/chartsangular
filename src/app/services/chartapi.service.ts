import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Curso} from '../models/Curso'

const httpOptions ={
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class ChartapiService {

  cursosUrl:string ='localhost:9200/escuela/curso/_search';
  

  constructor(private http:HttpClient) { }
  //Get Cursos
  getCursos():Observable<Curso[]>{    
   return this.http.get<Curso[]>(`${this.cursosUrl}`);
  }

}

  