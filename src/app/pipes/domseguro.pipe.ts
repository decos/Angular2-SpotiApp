import { Pipe, PipeTransform } from '@angular/core';

//Importar DomSanitizer
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){

  }

  // transform(value: any, args?: any): any {
  transform(value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value);

    //return null;
  }

}
