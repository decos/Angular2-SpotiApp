import { Component, OnInit } from '@angular/core';

//Importar el servicios
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  constructor( private _spotifyService:SpotifyService) { }

  ngOnInit() {
    //LLama al observable pero no escuchar la respuesta del observavle
    //Para esto necesitamos suscribirnos
    //this._spotifyService.getArtistas("metallica").subscribe();
    this._spotifyService.getArtistas("metallica").subscribe(data => {
      console.log("ESTO ES DEL SearchComponent");
      console.log(data);
    });

  }

}
