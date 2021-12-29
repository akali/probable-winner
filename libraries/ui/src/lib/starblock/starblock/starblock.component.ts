import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Star {
  index: number;
  active: boolean;
}
@Component({
  selector: 'ui-starblock',
  templateUrl: './starblock.component.html',
  styleUrls: ['./starblock.component.scss']
})
export class StarblockComponent implements OnInit {
  starButtons: Star[] = [{
    index: 1,
    active: false,
  }, {
    index: 2,
    active: false,
  }, {
    index: 3,
    active: false,
  }, {
    index: 4,
    active: false,
  }, {
    index: 5,
    active: false,
  }, ];
  @Output() rating = new EventEmitter<number>();
  _rating: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStarClick(index: number) {
    this._rating = index;
    this.rating.emit(index);
  }
}
