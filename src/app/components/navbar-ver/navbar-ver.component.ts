import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-ver',
  templateUrl: './navbar-ver.component.html',
  styleUrls: ['./navbar-ver.component.scss']
})
export class NavbarVerComponent implements OnInit {

  constructor() { }
  public app_name = "SmartCody";
  ngOnInit(): void {
  }

}
