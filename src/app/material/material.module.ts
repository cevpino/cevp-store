import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
