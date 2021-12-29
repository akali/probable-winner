import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TextInputModule} from "libraries/ui/src/lib/text-input";



@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextInputModule,
  ],
  exports: [
    SearchBarComponent,
  ]
})
export class SearchBarModule { }
