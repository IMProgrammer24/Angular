import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public hardcodedAuthentication:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

}
