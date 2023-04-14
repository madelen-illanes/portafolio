import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/views/home/pages/home-page/home-page.component';
import { StartPageComponent } from 'src/app/views/start/page/start-page/start-page.component';


const routes: Routes = [ 

  { path: '',
  component: StartPageComponent,
  loadChildren: () => import('./views/start/start.module').then(m =>m.StartModule)
  },

  { path: '',
  component: HomePageComponent,
  loadChildren: () => import('./views/home/home.module').then(m =>m.HomeModule)
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



