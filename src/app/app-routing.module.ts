import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './componente/historia/historia.component';
import { GaleriaComponent } from './componente/galeria/galeria.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { VideosComponent } from './componente/videos/videos.component';
import { CancionesComponent } from './componente/canciones/canciones.component';
const routes: Routes = [
    {path:'historia',component:HistoriaComponent},    
    {path:'galeria',component:GaleriaComponent},
    {path:'inicio',component:InicioComponent},
    {path:'videos',component:VideosComponent},
    {path:'canciones', component:CancionesComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
