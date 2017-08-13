import {Pipe, PipeTransform} from "@angular/core";
 
@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    /**
     *pipe to capitalize a string. 
     */
    transform(value:string):string {
        if (value) {
            return value.toLowerCase().charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}