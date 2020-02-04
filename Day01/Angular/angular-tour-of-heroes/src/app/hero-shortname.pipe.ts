import { Pipe, PipeTransform } from '@angular/core';
/*
 * Short the Hero Name with the given lenght of the shortage + suffix
*/
@Pipe({name: 'shortHeroName'})
export class shortHeroNamePipe implements PipeTransform {
  transform(value: string, shortinglength?: number, shortingsuffix?: string): string { //value wird durch pipe gegeben, exponent ist optionaler parameter, output ist number typ
    if(shortingsuffix == null){
        shortingsuffix = "";
    }
    
    let shortedName = value.substring(0, (shortinglength)) + shortingsuffix;

    return shortedName;
  }
}