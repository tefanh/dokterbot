import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './app-name.component.html',
  styleUrls: ['./app-name.component.scss']
})
export class AppNameComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
