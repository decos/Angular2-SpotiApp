import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar HttpModule
import { HttpModule } from '@angular/http';
//Importar FormsModule
import { FormsModule  } from '@angular/forms';

//Importar rutas
import { APP_ROUTING } from './app.routes';

//Importar servicios
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
