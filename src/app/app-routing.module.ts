import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusPageComponent } from './status-page/status-page.component';
import { BoxListComponent } from './box-list/box-list.component';

const routes: Routes = [
  { path: '', component: BoxListComponent },
  { path: 'status/:name', component: StatusPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
