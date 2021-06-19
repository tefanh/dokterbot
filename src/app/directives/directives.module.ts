import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxHeightDirective } from './max-height/max-height.directive';


@NgModule({
  declarations: [
    MaxHeightDirective
  ],
  exports: [
    MaxHeightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
