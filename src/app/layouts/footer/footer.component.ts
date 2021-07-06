import { Component, Input, OnInit, Output } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { EventEmitter } from '@angular/core';
import { Gejala } from 'src/app/shared/model/gejala.model';

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
  @Input('gejalas') gejalas!: Gejala[];
  @Input('end') end!: boolean;
  @Output('answer') answer = new EventEmitter<Gejala | string>();

  constructor() { }

  ngOnInit(): void {
  }

}
