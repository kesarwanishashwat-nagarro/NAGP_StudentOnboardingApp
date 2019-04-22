import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from 'src/app/core/constants';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    if (!value || !args[Constants.searchPipe.searchText] || args[Constants.searchPipe.searchText] == Constants.common.emptyString) {
      return value;
    }
    const searchtext = args[Constants.searchPipe.searchText].toLowerCase();
    return value.filter((val) => val[args[Constants.searchPipe.searchField]].toLowerCase().indexOf(searchtext) >= 0);
  }

}
