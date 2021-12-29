import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import {SearchBarModule} from "libraries/ui/src/lib/search-bar/search-bar.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchBarModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SearchModule { }
