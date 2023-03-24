import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { StartPageComponent } from '@modules/start/page/start-page/start-page.component';

const routes: Routes = [ 

{ path: 'start',//TODO: Aaqui va la ruta padre el localhost:4200/
component: StartPageComponent,
loadChildren: () => import('./modules/start/start.module').then(m =>m.StartModule)
},

{ path: '',
component: HomePageComponent,
loadChildren: () => import('./modules/home/home.module').then(m =>m.HomeModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
