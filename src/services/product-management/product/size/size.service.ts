import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { fullUris } from './size.keys';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  private _fullUris = fullUris;

  constructor(private http: HttpClient) { }

  readByHeadquarter(_idHeadquarter:string) {
    const _uri = this._fullUris._readByHeadquarter(_idHeadquarter);
    
    return this.http.get(_uri);
  }
}
