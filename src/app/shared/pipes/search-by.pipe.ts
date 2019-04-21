import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    if (!value || !args['searchText'] || args['searchText'] == '') {
      return value;
    }
    const searchtext = args['searchText'].toLowerCase();
    return value.filter((val) => val[args['searchField']].toLowerCase().indexOf(searchtext) >= 0);
  }

}
