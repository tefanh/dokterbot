import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

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

  constructor() { }

  ngOnInit(): void {
  }

}
