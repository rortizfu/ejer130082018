import { Component, OnInit } from '@angular/core';
import { AppServices } from "../app.services";
import { persona } from '../card-presentation/class-person.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private objServices: AppServices, private route: ActivatedRoute) { }

  private personaLocal: persona;
  private parametro: string;
  
  ngOnInit() {
    debugger
    
    this.route.params.subscribe(params => this.parametro = params['id']);
    this.personaLocal = this.objServices.getCard(this.parametro);

    this.objServices.$obs.subscribe((personaLocal) =>{  
      console.log(this.personaLocal.name);
      console.log(personaLocal);
  });

  console.log(this.objServices);

  }

}
