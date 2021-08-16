import 'cleave.js/dist/cleave.js';
declare var Cleave: any;
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { fade } from '../../script/animation';
import { routes } from './root-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [fade],
})
export class RootComponent implements OnInit {
  time1: any;
  cleave: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  show(ref: string) {
    console.log(ref);
  }
  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById('cleave')).value = '00:00';
    this.time1 = new Cleave('#cleave', {
      time: true,
      timePattern: ['h', 'm'],
    });
    this.time1 = new Cleave('#val', {
      date: true,
      delimiter: '/',
      datePattern: ['d', 'm', 'Y'],
    });
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
  logout() {
    this.authService.signOutUser();
  }
}

@Component({
  styleUrls: ['./root.component.scss'],
  selector: 'root-nav',
  template: `<div class="navbar">
    <ul>
      <li *ngFor="let menu of Menu" [routerLink]="[menu.link]" class="link">
        {{ menu.label }}
      </li>
    </ul>
  </div>`,
})
export class RootNavComponent implements OnInit {
  Menu: { label: string; link: string }[] = [];
  constructor() {}

  ngOnInit() {
    routes.map((e) =>
      e.children?.map((r) => {
        r.path && this.Menu.push({ label: r.data?.title, link: r.path });
      })
    );
  }
}
