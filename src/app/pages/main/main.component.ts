import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  linkNca49() {
    window.open(`https://nca-49.web.app`);
  }
  ngOnInit(): void {}
}
