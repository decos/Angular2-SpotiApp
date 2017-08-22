import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor( private http:Http ) {  }

  getArtistas( termino:string ){

    let headers = new Headers();
    //Header ejemplo
    headers.append( 'authorization', 'Bearer  BQBFi6F-PkWzFeX1ApxY4zgvgfPyBJz0JpaYkix0grHz12flqYswh6Cvyc5h7mny-wY9gLMRbI-tHFX-DWxsNA');

    let query = `?q=${ termino }&type=artist`;
    let url =  this.urlBusqueda + query;

    //Observable (Decirle a Angular que este pendiente de la data que va regresar)
    return this.http.get( url, { headers } )
          .map( res => {
              //console.log(res);
              //console.log(res.json());
              //console.log(res.json().artists);
              this.artistas = res.json().artists.items;
              console.log(res.json().artists.items);
              //return res.json().artists.items;
          });
  }

}
