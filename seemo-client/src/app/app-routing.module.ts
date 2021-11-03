import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesPaths} from "./seemo/shared/models/constants/routes";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutesPaths.SEEMO
  },
  {
    path: RoutesPaths.SEEMO,
    loadChildren: () => import('./seemo/seemo.module').then(m => m.SeemoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
