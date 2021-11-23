import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './app.component';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<Data[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
}
