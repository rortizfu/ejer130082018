import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardPresentationComponent } from './card-presentation/card-presentation.component';
import {MatCardModule, MatCardSmImage} from '@angular/material/card';
import { CompButtonComponent } from './comp-button/comp-button.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AppServices } from './app.services';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routings';
import { HomeComponent } from './home/home.component';

import {DirectivaInicialDirective } from './Directives/directiva-inicial.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardPresentationComponent,
    CompButtonComponent,
    HeaderComponentComponent,
    DetalleComponent,
    HomeComponent,
    DirectivaInicialDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ AppServices ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
