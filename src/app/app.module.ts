import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandService } from './api/command.service';
import { StatusPageComponent } from './status-page/status-page.component';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxComponent } from './box-list/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusPageComponent,
    BoxListComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
