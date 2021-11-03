import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesPaths} from "./shared/models/constants/routes";
import {FeedPageComponent} from "./feed/components/feed-page/feed-page.component";
import {SeemoLayoutComponent} from "./layout/components/seemo-layout/seemo-layout.component";

const routes: Routes = [
  {
    path: '',
    component: SeemoLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RoutesPaths.Feed,
      },
      {
        path: RoutesPaths.Feed,
        component: FeedPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeemoRoutingModule {
}
