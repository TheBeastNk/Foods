import { Injectable } from '@angular/core';

import {HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84102d3242db3aade638d39f0c5bbd23&tags=foods&format=json&nojsoncallback=1&api_sig=a412feaf71ab16aa8acb8624c11791fc";

  constructor(private http: HttpClient) {
    //this.url = `../../assets/data.json`;
  }

  getFeed(perPage:number,page:number) {
    if(!page){
       page=1;
     }
    return this.http.get(this.url+"per_page="+perPage+"&page="+page);
  }
}
