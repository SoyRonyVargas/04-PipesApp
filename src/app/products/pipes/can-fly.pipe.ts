import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    return value ? "Puede volar": "No puede volar";
  }

}
