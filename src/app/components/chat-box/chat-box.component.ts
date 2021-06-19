import { Component, Input, OnInit } from '@angular/core';

import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  animations: [
    trigger('inOut', [
      state('receiver', style({
        transform: 'translateX(0)'
      })),
      state('sender', style({
        transform: 'translateX(0)'
      })),
      transition('void => receiver', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in', style({
          transform: 'translateX(0)'
        })),
      ]),
      transition('void => sender', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('0.2s ease-in', style({
          transform: 'translateX(0)'
        })),
      ]),
    ])
  ]
})
export class ChatBoxComponent implements OnInit {
  @Input() from!: string;
  @Input() message!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
