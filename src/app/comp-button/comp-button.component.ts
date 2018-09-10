import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { persona } from "../card-presentation/class-person.model"
import { AppServices } from "../app.services";

@Component({
  selector: 'app-comp-button',
  templateUrl: './comp-button.component.html',
  styleUrls: ['./comp-button.component.css']
})
export class CompButtonComponent implements OnInit {
  constructor(private objServices: AppServices) { }
  
  @Input() objPersona: persona; 
  @Output() addLike = new EventEmitter<persona>();
  @Output() addDisLike = new EventEmitter<persona>();

  ngOnInit() {
    
    this.objServices.$obs.subscribe((objPersona) =>{
        console.log(this.objPersona);
    });

    //console.log(this.objServices);

  }

  addLike1(){
    //this.objPersona.addLike(this.objPersona);  
    this.objServices.setPersona(this.objPersona);
    this.objServices.addLike();
    //this.objPersona = this.objServices.getPersona();

    //this.addLike.emit(this.objPersona);
  }

  addDisLike1(){
    //this.objPersona.adddisLike(this.objPersona);
    this.objServices.setPersona(this.objPersona);
    this.objServices.adddisLike();
    //this.objPersona = this.objServices.getPersona();
    //this.addDisLike.emit(this.objPersona);
  }
  
/*
  addDisLike = (val: Persona): void=>{
    (val.like > 0 ? val.like -= 1 : 0 );
    val.dislike += 1;
  }   */
}

