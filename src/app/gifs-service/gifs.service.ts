import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private Apikey = environment.Apikey;
  private url = environment.url;

  constructor(private http: HttpClient) { }

getTrendingGifs() {
  return this.http.get(this.url + '/trending?api_key='+this.Apikey);
}
}

