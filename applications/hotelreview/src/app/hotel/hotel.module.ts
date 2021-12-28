import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelService} from "applications/hotelreview/src/app/hotel/services/hotel.service";
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {CommentModule} from "applications/hotelreview/src/app/hotel/comment/comment.module";
import {CommentService} from "applications/hotelreview/src/app/hotel/comment/services/comment.service";
import { LayoutComponent } from './layout/layout.component';
import {HotelRoutingModule} from "applications/hotelreview/src/app/hotel/hotel-routing.module";



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CommentModule,
    HotelRoutingModule,
  ],
  exports: []
})
export class HotelModule {
  static forRoot(): ModuleWithProviders<HotelModuleForRoot> {
    return {
      ngModule: HotelModuleForRoot,
    };
  }
}

@NgModule({
  declarations: [],
  imports: [
    HotelModule
  ],
  exports: [HotelModule]
})
export class HotelModuleForRoot {
  constructor(
    private hotelService: HotelService,
    private commentService: CommentService,
    ) {}
}
