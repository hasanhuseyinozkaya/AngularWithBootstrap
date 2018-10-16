import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './not-found/not-found.component';
import { HtmlexamplesComponent } from './htmlexamples/htmlexamples.component';
import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
  {
    path: '',
    component: HtmlexamplesComponent,
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HtmlexamplesComponent
    
  ],
  imports: [
   RouterModule.forRoot(appRoutes),  BrowserModule,DataTablesModule , AngularFontAwesomeModule,BrowserAnimationsModule, ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
