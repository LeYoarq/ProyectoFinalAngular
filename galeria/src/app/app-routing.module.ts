import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'pagina-no-encontrada', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'pagina-no-encontrada', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
