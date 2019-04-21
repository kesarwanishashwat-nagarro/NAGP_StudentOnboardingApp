import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupModalComponent } from './component/popup-modal/popup-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { SearchByPipe } from './pipes/search-by.pipe';

@NgModule({
  declarations: [PopupModalComponent, SearchByPipe],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports:[
    PopupModalComponent,
    SearchByPipe
  ]
})
export class SharedModule { }
