import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBarComponent } from './filter-bar.component';
import { FormsModule } from '@angular/forms';

const mockCategories = ['International','Domestic']

describe('FilterBarComponent', () => {
  let component: FilterBarComponent;
  let fixture: ComponentFixture<FilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBarComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBarComponent);
    component = fixture.componentInstance;
    component.categories = mockCategories;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on seatch change', () => {
    component.searchtext = "search";
    component.onSearchChange.subscribe((value) => 
    expect(value).toBe('search')
    );
  });

  it('should handle list click', () => {
    component.listClick();
    expect(component.isListActive).toBeTruthy();
  });

  it('should handle grid click', () => {
    component.gridClick();
    expect(component.isListActive).toBeFalsy();
  });

  it('should handle category click', () => {
    component.categoryClick(mockCategories[0]);
    expect(component.selectedCategory).toBe(mockCategories[0]);
  });

});
