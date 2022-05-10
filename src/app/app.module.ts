import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { CarruselComponent } from './componente/carrusel/carrusel.component';
import { CardsComponent } from './componente/cards/cards.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HistoriaComponent } from './componente/historia/historia.component';
import { GaleriaComponent } from './componente/galeria/galeria.component';
import { VideosComponent } from './componente/videos/videos.component';
import { CancionesComponent } from './componente/canciones/canciones.component';
import { InicioComponent } from './componente/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    CarruselComponent,
    CardsComponent,
    FooterComponent,
    HistoriaComponent,
    GaleriaComponent,
    VideosComponent,
    CancionesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
