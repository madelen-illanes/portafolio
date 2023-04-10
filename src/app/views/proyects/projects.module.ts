import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './page/projects-page/projects-page.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
