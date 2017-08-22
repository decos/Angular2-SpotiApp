import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  //transform(value: any, args?: any): any {
  transform(value: any[]): string {

    // Si no viene ese valor quiero hacer un return de una imagen x defecto
    let noimage = "assets/img/noimage.png";

    if(!value){
      return noimage;
    }

    return ( value.length > 0 ) ? value[1].url : noimage;
  }

}
