import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sortedValue = [...value]
    if(direction === 'asc' ){
      sortedValue.sort((a,b) => a>b?1:-1)
    }
    else {
      sortedValue.sort((a,b) => b>a?1:-1)
    }
    return sortedValue;
  }

}
