import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsList } from './components';

@NgModule({
  declarations: [
    ...ComponentsList
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...ComponentsList   // have to add it in exports so that it can be consumed outside this module
  ]
})
export class LibSharedUiModule { }
