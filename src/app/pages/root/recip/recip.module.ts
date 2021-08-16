import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipRoutingModule } from './recip-routing.module';
import { RecipFormComponent } from './components/recip-form/recip-form.component';
import { RecipListComponent } from './components/recip-list/recip-list.component';
import { RecipViewComponent } from './components/recip-view/recip-view.component';
import { ModalModule } from 'angular-custom-modal';

@NgModule({
  declarations: [RecipFormComponent, RecipListComponent, RecipViewComponent],
  imports: [CommonModule, RecipRoutingModule, ModalModule],
})
export class RecipModule {}
