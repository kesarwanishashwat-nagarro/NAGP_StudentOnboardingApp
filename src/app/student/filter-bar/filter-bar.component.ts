import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  constructor() { }
  searchtext: string;
  isListActive = false;
  selectedCategory = 'ALL';
  @Input() categories: string[];
  @Output() onSearchChange = new EventEmitter<string>();
  @Output() onListClicked = new EventEmitter();
  @Output() onGridClicked = new EventEmitter;
  @Output() categoryChanged = new EventEmitter<string>();
  ngOnInit() {
    if (this.categories.indexOf('ALL') < 0)
      this.categories.push('ALL');
  }

  onInputChange() {
    this.onSearchChange.emit(this.searchtext);
  }

  listClick() {
    this.isListActive = true;
    this.onListClicked.emit();
  }

  gridClick() {
    this.isListActive = false;
    this.onGridClicked.emit();
  }

  categoryClick(ct) {
    this.selectedCategory = ct;
    this.categoryChanged.emit(this.selectedCategory);
  }

}
