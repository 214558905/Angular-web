import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { GruposComponent } from './grupos/grupos.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ModalComponent } from './modal/modal.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { CongresosComponent } from './congresos/congresos.component';
import { GestionarEventosComponent } from './gestionar-eventos/gestionar-eventos.component';
import { ReglasComponent } from './reglas/reglas.component';

const routes: Routes = [
  {path :'',pathMatch:'full',redirectTo:'home'},
 
  {
    path:'', component:MenuComponent,
    children:[
      {path: HomeComponent.END_POINT, component: HomeComponent},
      {path: EventsComponent.END_POINT, component: EventsComponent},
      {path:GruposComponent.END_POINT, component: GruposComponent, pathMatch:'full'},
      {path:CarrouselComponent.END_POINT, component: CarrouselComponent, pathMatch:'full'},
      {path:AreasComponent.END_POINT, component: AreasComponent, pathMatch:'full'},
      {path:NoticiasComponent.END_POINT, component: NoticiasComponent, pathMatch:'full'},
      {path:QuienesSomosComponent.END_POINT, component: QuienesSomosComponent, pathMatch:'full'},
      {path:OrganizacionComponent.END_POINT, component: OrganizacionComponent, pathMatch:'full'},
      {path:CongresosComponent.END_POINT, component:CongresosComponent, pathMatch:'full' },
      {path:ReglasComponent.END_POINT, component:ReglasComponent, pathMatch: 'full'}
    ]
   
  },
  {path:GestionarEventosComponent.END_POINT, component:GestionarEventosComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static COMPONENT_FACTORY=[
    ModalComponent
  ]
}

