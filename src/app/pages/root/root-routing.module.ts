import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildCardComponent } from '../wild-card/wild-card.component';
import { RootComponent } from './root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'user',
        data: {
          title: 'utilisateur',
        },
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'recip',
        data: {
          title: 'recettes',
        },
        loadChildren: () =>
          import('./recip/recip.module').then((m) => m.RecipModule),
      },
      {
        path: 'calendar',
        data: {
          title: 'calendrier',
        },
        loadChildren: () =>
          import('./calendar/calendar.module').then(
            (m) => m.CalendarRecipModule
          ),
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
      { path: '**', component: WildCardComponent },
    ],
  },
  {
    path: '**',
    component: WildCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
