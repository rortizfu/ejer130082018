import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    { path: 'detalle/:id', component: DetalleComponent },
    { path: 'AppComponent', component: AppComponent },
    
  ]
  