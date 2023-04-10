import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/views/home/pages/home-page/home-page.component';
import { StartPageComponent } from 'src/app/views/start/page/start-page/start-page.component';


const routes: Routes = [ 

  { path: 'start',// ruta padre el localhost:4200/
  component: StartPageComponent,
  loadChildren: () => import('./views/start/start.module').then(m =>m.StartModule)
  },

  { path: '',
  component: HomePageComponent,
  loadChildren: () => import('./views/home/home.module').then(m =>m.HomeModule)
  }
  
  ];

/*const routes: Routes = [ 

{ path: '',// ruta padre el localhost:4200/
component: StartPageComponent,
loadChildren: () => import('./modules/start/start.module').then(m =>m.StartModule)
},
{ path: 'history',
component: HistoryPageComponent,
loadChildren: () => import('./modules/history/history.module').then(m =>m.HistoryModule)
},
{ path: 'home',
component: HomePageComponent,
loadChildren: () => import('./modules/home/home.module').then(m =>m.HomeModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/


// const routes: Routes = [ 

// { path: '',// ruta padre el localhost:4200/
// component: StartPageComponent,
// loadChildren: () => import('./views/start/start.module').then(m =>m.StartModule)
// },

// { path: 'home',
// children: [
//   {
//     path: 'projects',
//     component: ProjectsPageComponent,
//     loadChildren: () => import('./views/proyects/projects.module').then(m => m.ProjectsModule),
  
//   },
//   {
//     path: 'favorites',
//     component: FavoritePageComponent,
//     loadChildren: () => import('./views/favorites/favorites.module').then(m => m.FavoritesModule),
  
//   },
//   {
//     path: 'history',
//     component: HistoryPageComponent,
//     loadChildren: () => import('./views/history/history.module').then(m => m.HistoryModule),
   
//   },
// ]
// },

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



