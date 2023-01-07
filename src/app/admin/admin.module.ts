import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

// Containers
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

// Components
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';

// Services
import {DonutService} from "./services/donut.service";

// Guards

// Directives

const routes: Routes = [
  { path: 'donuts', component: DonutListComponent },
  { path: 'donut', component: DonutSingleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'donuts' },
];

@NgModule({
  declarations: [
    DonutListComponent,
    DonutSingleComponent,
    DonutCardComponent,
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [DonutService],
})
export class AdminModule { }
