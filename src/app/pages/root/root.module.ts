import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent, RootNavComponent } from './root.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';

@NgModule({
  declarations: [RootComponent, RootNavComponent],
  imports: [CommonModule, RootRoutingModule, FormsModule, ModalModule],
})
export class RootModule {}
