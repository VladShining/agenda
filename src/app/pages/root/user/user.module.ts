import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { ModalModule } from 'angular-custom-modal';
import { UserProfilService } from './services/user-profil.service';

@NgModule({
  declarations: [UserListComponent, UserFormComponent, UserProfilComponent],
  imports: [ModalModule, CommonModule, UserRoutingModule],
  providers: [UserProfilService],
})
export class UserModule {}
