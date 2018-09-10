import { Component } from '@angular/core';
import { AppServices } from './app.services';
import { persona } from './card-presentation/class-person.model';
import { DirectivaInicialDirective } from './Directives/directiva-inicial.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private arrayCard;
  constructor(private objServices: AppServices){
    this.arrayCard = objServices.getListCard();
    
  }

  getKeys(map){
    return Array.from(map.keys());
  }

  getCard(val: string): persona{
    return this.objServices.getCard(val);
}

  title = 'ejer130082018';
}
