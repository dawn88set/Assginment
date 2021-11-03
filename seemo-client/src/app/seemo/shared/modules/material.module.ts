import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule],
  providers: [],
  declarations: [],
})
export class MaterialModule {
}
