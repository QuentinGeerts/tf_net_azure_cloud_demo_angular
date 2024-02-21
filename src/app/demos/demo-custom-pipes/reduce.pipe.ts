import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce'
})
export class ReducePipe implements PipeTransform {
  transform(initialValue: number, ...args: number[]): number {
    return args.reduce((acc, value) => acc + value, initialValue);
  }
}
