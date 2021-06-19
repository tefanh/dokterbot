import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { DirectivesModule } from '../directives/directives.module';
import { AppNameComponent } from './app-name/app-name.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@NgModule({
  declarations: [
    AvatarComponent,
    AppNameComponent,
    ChatBoxComponent
  ],
  exports: [
    AvatarComponent,
    AppNameComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class ComponentsModule { }
