import { SearchByPipe } from './search-by.pipe';

const mockArray = [{ name: 'A' }, { name: 'B' }];
describe('SearchByPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter array', () => {
    const pipe = new SearchByPipe();
    const rv = pipe.transform(mockArray, { searchText: 'A', searchField: 'name' });
    expect(rv[0].name).toBe(mockArray[0].name);
  });

});
