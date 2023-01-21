import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataValueByKey'
})
export class DataValueByKeyPipe implements PipeTransform {

  transform(Object: any,key : string, ...args: unknown[]): unknown {
    return Object[key];
  }

}
