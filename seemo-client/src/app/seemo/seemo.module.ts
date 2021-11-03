import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SeemoRoutingModule} from "./seemo-routing.module";
import {SharedModule} from "./shared/shared.module";
import {SeemoLayoutComponent} from "./layout/components/seemo-layout/seemo-layout.component";
import {FeedModule} from "./feed/feed.module";

@NgModule({
  imports: [
    CommonModule,
    SeemoRoutingModule,
    SharedModule,
    FeedModule
  ],
  declarations: [SeemoLayoutComponent],
  exports: [SharedModule],
  providers: [],
})
export class SeemoModule {
}
