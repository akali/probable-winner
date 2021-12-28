import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoPermPageComponent } from './no-perm-page/no-perm-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [PageNotFoundComponent, NoPermPageComponent, AboutUsComponent],
  imports: [CommonModule],
  exports: [PageNotFoundComponent, NoPermPageComponent],
})
export class SharedModule {}
