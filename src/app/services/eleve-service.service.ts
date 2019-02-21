import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  URL = 'http://localhost:8090/api/eleves';

  constructor(private http: HttpClient) { }

  getAllEleves() {
    return this.http.get(this.URL);
  }
}
