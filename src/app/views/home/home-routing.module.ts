import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
{
  path:'projects',
  loadChildren:() => import('src/app/views/proyects/projects.module').then(m =>m.ProjectsModule)
},
{
  path:'favorites',
  loadChildren:() => import('src/app/views/favorites/favorites.module').then(m =>m.FavoritesModule)
},
{
  path:'history',
  loadChildren:() => import('src/app/views/history/history.module').then(m =>m.HistoryModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
