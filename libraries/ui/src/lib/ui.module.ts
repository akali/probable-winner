import {NgModule} from '@angular/core';
import {ButtonModule} from './button';
import {CardModule} from './card';
import {LoaderModule} from './loader/loader.module';
import {SideMenuModule} from './side-menu/side-menu.module';
import {CommentItemModule} from "./comment-item/comment-item.module";
import {HotelCardModule} from "./hotel-card/hotel-card.module";
import {SearchBarModule} from "./search-bar/search-bar.module";
import {AuthModule} from "libraries/ui/src/lib/auth/auth.module";

@NgModule({
  declarations: [],
  imports: [ButtonModule, CardModule, LoaderModule, SideMenuModule, CommentItemModule, HotelCardModule, SearchBarModule, AuthModule],
  exports: [ButtonModule, CardModule, LoaderModule, SideMenuModule, CommentItemModule, HotelCardModule, SearchBarModule, AuthModule],
})
export class UiModule {
}
