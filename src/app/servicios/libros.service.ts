import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../interfaces/libro.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url: string = 'http://localhost:3000/libros';

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url);
  }
}
