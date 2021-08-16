import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarFormComponent } from './components/calendar-form/calendar-form.component';
import { CalendarContainer } from './components/container/calendar.container';
import { ModalModule } from 'angular-custom-modal';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarGridComponent } from './components/calendar-grid/calendar-grid.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    CalendarFormComponent,
    CalendarContainer,
    CalendarGridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarRoutingModule,
    ModalModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class CalendarRecipModule {}
