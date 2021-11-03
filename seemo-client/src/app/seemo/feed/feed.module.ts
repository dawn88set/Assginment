import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FeedPageComponent} from './components/feed-page/feed-page.component';
import {SharedModule} from "../shared/shared.module";
import {FeedService} from "./services/feed.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [FeedService],
  declarations: [
    FeedPageComponent,
  ],
})
export class FeedModule {
}
