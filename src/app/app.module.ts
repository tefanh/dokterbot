import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LayoutsModule } from './layouts/layouts.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';

const matModules: any[] = [

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule,
    ComponentsModule,
    DirectivesModule,
    ...matModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
