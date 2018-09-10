import { Component, OnInit, Input } from '@angular/core';
import { persona } from "../card-presentation/class-person.model"

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() objPersona: persona;

}
