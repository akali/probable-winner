import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'hr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  onSearch(query: string) {
    this.router.navigate(['hotel', 'list', query])
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
