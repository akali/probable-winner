import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelService} from "applications/hotelreview/src/app/hotel/services/hotel.service";
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
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
  constructor(private hotelService: HotelService) {}
}
