import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  @Input() image = '';
  @Input() statSubtitle = '';
  @Input() statTitle = '';
  @Output() onIconClick = new EventEmitter<void>();
  @Input() statIconColor = '';
  @Input() statDescripiron = '';

  constructor() { }

  ngOnInit(): void {
  }
}
