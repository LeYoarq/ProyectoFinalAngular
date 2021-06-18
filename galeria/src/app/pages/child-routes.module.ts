import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RojasComponent } from "./cervezas/components/rojas/rojas.component";
import { RubiasComponent } from "./cervezas/components/rubias/rubias.component";
import { TostadasComponent } from "./cervezas/components/tostadas/tostadas.component";


const childRoutes: Routes = [
  {path: 'cervezas-rubias', component: RubiasComponent},
  {path: 'cervezas-tostadas', component: TostadasComponent},
  {path: 'cervezas-rojas', component: RojasComponent}
    
  ]
  
  
  
  @NgModule({
    imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildRoutesModule { }