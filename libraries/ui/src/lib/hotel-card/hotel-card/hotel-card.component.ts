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
  @Input() statIconColor = 'bg-green-600';
  @Input() statDescription = '';
  @Input() rating = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
