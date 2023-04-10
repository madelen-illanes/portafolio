import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SideBarComponent,
    CardProjectComponent,
    SectionGenericComponent,
    ListHeaderComponent,
    OrderListPipe,
    SkillCardComponent,
    ImgBrokenDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
exports:[
  SideBarComponent,
  CardProjectComponent,
  SectionGenericComponent,
  ListHeaderComponent,
  OrderListPipe,
  SkillCardComponent,
  ImgBrokenDirective
]
})
export class SharedModule { }
