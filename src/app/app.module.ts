import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from "./home/home.component";
import {provideRouter, RouterModule} from "@angular/router";
import routeConfig from "./routes";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    RouterModule,
  ],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})

export class AppModule { }
