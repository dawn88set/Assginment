import {NgModule} from '@angular/core';
import {WhenDatePipe} from './pipes/whenDate.pipe';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./modules/material.module";

@NgModule({
  imports: [CommonModule, FormsModule,MaterialModule],
  declarations: [WhenDatePipe],
  exports: [WhenDatePipe, FormsModule,MaterialModule]
})
export class SharedModule {
}
