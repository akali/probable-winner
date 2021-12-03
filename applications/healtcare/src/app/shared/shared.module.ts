import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoPermPageComponent } from './no-perm-page/no-perm-page.component';

@NgModule({
  declarations: [PageNotFoundComponent, NoPermPageComponent],
  imports: [CommonModule],
  exports: [PageNotFoundComponent, NoPermPageComponent],
})
export class SharedModule {}
