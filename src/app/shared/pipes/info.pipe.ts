import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'info'
})
export class InfoPipe implements PipeTransform {

  transform(value: any[], id: number, prop?: string): unknown {
    
    if (!Array.isArray(value)) return value;
    
    const foundValue = value.find(o => o.id === id);

    if (prop != undefined) return foundValue ? foundValue[prop] : '';

    return foundValue ? foundValue : '';
  }

}
