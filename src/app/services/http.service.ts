import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  header = new HttpHeaders({
  'Content-Type': 'application/json',

  });

  constructor(
    public http: HttpClient,
  ) { }

  req(url: any,body: any){
  return this.http.post(url,JSON.stringify(body),{headers: this.header});
  }
}
