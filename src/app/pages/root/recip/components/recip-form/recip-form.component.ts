import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal/modal.component';

@Component({
  selector: 'app-recip-form',
  templateUrl: './recip-form.component.html',
  styleUrls: ['./recip-form.component.scss'],
})
export class RecipFormComponent implements OnInit {
  @ViewChild('userWelcome', { static: true }) userWelcome:
    | ModalComponent
    | undefined;
  constructor() {}

  ngOnInit(): void {
    this.userWelcome?.open();
  }
}
