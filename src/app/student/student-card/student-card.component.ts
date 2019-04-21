import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IStudent } from 'src/app/core/model/models';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  @Input() cardData: IStudent;
  @Output() viewBtnClick = new EventEmitter();
  @Output() editBtnClick = new EventEmitter();
  @Output() deleteBtnClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onViewClick(){
    this.viewBtnClick.emit(this.cardData);
  }

  onEditClick(){
    this.editBtnClick.emit(this.cardData);
  }

  onDeleteClick(){
    this.deleteBtnClick.emit(this.cardData);
  }

}
