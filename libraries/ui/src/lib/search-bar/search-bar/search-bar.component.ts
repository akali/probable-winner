import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'ui-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>()
  searchForm = this.fb.group({
    query: [''],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSearchClick() {
    const queryControl = this.searchForm.get('query')
    if (queryControl == null) return;
    const query = queryControl.value;
    this.search.emit(query);
  }
}
