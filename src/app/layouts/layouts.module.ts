import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from '../components/components.module';

const matModules: any[] = [
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ...matModules
  ]
})
export class LayoutsModule { }
