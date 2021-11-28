import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
// import { Response } from '@angular/http';



@Injectable()
export class ProductService implements OnInit {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
      .map(res => res
    );
  }

  ngOnInit(): void{
    
  }

}
