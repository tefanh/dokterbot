import { Component, OnInit, Output } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('inOut', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('0.3s ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({
          transform: 'translateY(-100%)'
        }))
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {
  @Output('addChat') addChatEv = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  addChat() {
    this.addChatEv.emit(true);
  }

}
