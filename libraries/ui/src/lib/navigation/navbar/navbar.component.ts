import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() authenticated: boolean = false;
  @Input() username: string = '';
  @Input() appName: string = 'bokeng.co'

  @Output() onHomeClick = new EventEmitter<void>()
  @Output() onJoinClick = new EventEmitter<void>()
  @Output() onLogoutClick = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
