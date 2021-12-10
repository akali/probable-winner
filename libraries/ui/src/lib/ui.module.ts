import { NgModule } from '@angular/core';
import { ButtonModule } from './button';
import { CardModule } from './card';
import { LoaderModule } from './loader/loader.module';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [],
  imports: [ButtonModule, CardModule, LoaderModule, SideMenuModule],
  exports: [ButtonModule, CardModule, LoaderModule, SideMenuModule],
})
export class UiModule {}
