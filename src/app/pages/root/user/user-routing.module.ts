import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';

const routes: Routes = [
  { path: 'profil', component: UserProfilComponent },
  { path: 'all', component: UserListComponent },
  { path: '', redirectTo: 'profil' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
