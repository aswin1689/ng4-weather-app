import {Pipe, PipeTransform} from "@angular/core";
 
@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
    /**
     *pipe to round off a number. 
     */
    transform(value: number): number {
        return Math.round(value);
    }
}