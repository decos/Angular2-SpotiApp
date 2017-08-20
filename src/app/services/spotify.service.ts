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
    headers.append( 'authorization', 'Bearer BQCfsKMqglck1vdEritK5WlTzmZNemGZtVM38oaQXzsaIkuGYy-RAXPUjYvE33ERERal6TQ_0_jzuiFoPkgc0Q');

    let query = `q=${ termino }&type=artist`;
    let url =  this.urlBusqueda + query;

    //Observable (Decirle a Angular que este pendiente de la data que va regresar)
    return this.http.get( url, { headers } ).map( res => {
      console.log(res);
    })
  }

}
