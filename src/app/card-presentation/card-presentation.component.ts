import { Component, OnInit, Input } from '@angular/core';
import { persona } from 'src/app/card-presentation/class-person.model';
import { isUndefined } from 'util';

@Component({
selector: 'app-card-presentation',
templateUrl: './card-presentation.component.html',
styleUrls: ['./card-presentation.component.css']
})
export class CardPresentationComponent implements OnInit {
  @Input() objPersona: persona; 

  public objCard: persona;
  
  constructor() { 
  }

  ngOnInit() {
    console.log(this.objPersona);
    if (this.objPersona != undefined){
      this.objCard = new persona(
        this.objPersona.name,
        this.objPersona.profile,
        this.objPersona.description,
        this.objPersona.like,
        this.objPersona.dislike,
        this.objPersona.img);  
    }
  }

  /*public objPersona: Person = {
  name: "Raul Ortiz", 
  profile: "Ingeniero",
  description: "Prueba",
  like: 0,
  dislike: 0
  }*/


  //public objCard = new persona("Raul Ortiz", "Ingeniero","Prueba",0,0,"https://material.angular.io/assets/img/examples/shiba2.jpg");

  
  //addDisLike1(){console.log("aqui");}
  //addLike1(){console.log("aqui");}
}






