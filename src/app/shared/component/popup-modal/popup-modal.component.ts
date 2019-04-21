import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  @Input() showModal: boolean;
  @Input() title: string;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Output() modalClosed = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
 
  hideModal(): void {
    this.modalClosed.emit();
  }

}
