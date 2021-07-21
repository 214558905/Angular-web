import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventosService } from './api/eventos.service';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { GruposComponent } from './grupos/grupos.component';
import { AreasComponent } from './areas/areas.component';
import { enableProdMode } from '@angular/core';
import { NoticiasComponent } from './noticias/noticias.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalNoticiaComponent } from './modal-noticia/modal-noticia.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { CongresosComponent } from './congresos/congresos.component';
import { ReglasComponent } from './reglas/reglas.component';
import { GestionarEventosComponent } from './gestionar-eventos/gestionar-eventos.component';
import { ModalGestionarEventosComponent } from './modal-gestionar-eventos/modal-gestionar-eventos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    EventsComponent,
    GruposComponent,
    AreasComponent,
    NoticiasComponent,
    CarrouselComponent,
    FooterComponent,
    ModalNoticiaComponent,
    QuienesSomosComponent,
    OrganizacionComponent,
    CongresosComponent,
    ReglasComponent,
    GestionarEventosComponent,
    ModalGestionarEventosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    
  ],
  providers:[
    EventosService
  ],
  entryComponents: [AppRoutingModule.COMPONENT_FACTORY],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
