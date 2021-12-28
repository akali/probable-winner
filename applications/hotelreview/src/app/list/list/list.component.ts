import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  items,
  ListItem,
} from 'applications/healtcare/src/models/list-item.model';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
} from 'rxjs/operators';

@Component({
  selector: 'hc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, OnDestroy {
  listItems: ListItem[] = [];

  searchFormControl = new FormControl('');

  showSideMenu = false;

  destroyed = new Subject<boolean>();

  constructor(
    private _changeRef: ChangeDetectorRef,
    private _ngZone: NgZone,
    private _route: ActivatedRoute,
    private _httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.listItems = [...this._route.snapshot.data['items']];

    this._ngZone.runOutsideAngular(() => {
      setInterval(() => {}, 1);
    });

    this.searchFormControl.valueChanges
      .pipe(
        takeUntil(this.destroyed),
        debounceTime(250),
        distinctUntilChanged(),
        map(this.mapToArr),
        map((val) => this.mapToItems(val))
      )
      .subscribe();

    this._httpClient
      .get('https://catfact.ninja/fact')
      .pipe(takeUntil(this.destroyed))
      .subscribe((data: any) =>
        console.info('%c' + data.fact, 'background: #222; color: #bada55;')
      );
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
  }

  getItems(): ListItem[] {
    // console.log('here');
    return this.listItems;
  }

  mapToArr(value: string): ListItem[] {
    const arr = items.filter((item) =>
      item.Name.toLowerCase().includes(value.toLowerCase())
    );
    return arr;
  }

  mapToItems(value: ListItem[]): ListItem[] {
    this.listItems = [...value];
    // this._changeRef.markForCheck();
    return this.listItems;
  }

  onClickShowMenu() {
    this.showSideMenu = !this.showSideMenu;
  }

  canDeactivate() {
    return false;
  }
}
