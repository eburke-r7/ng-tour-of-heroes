import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // navigate to the dashboard automatically
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // parameterized route (:id is placeholder for specific id)
  { path: 'detail/:id', component: HeroDetailComponent },
  // path: a string that matches the URL in the browser address bar
  // component: the component that router should create when navigating to this route
  { path: 'heroes', component: HeroesComponent }

];

@NgModule({
  // forRoot() method supplies the service providers and directives needed for routing
  imports: [RouterModule.forRoot(routes)],
  // exports RouterModule so it will be available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
