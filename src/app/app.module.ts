import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import  {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { APP_ROUTES} from './app.route';


import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import {MyComponent} from './my.component';

import {UserService} from './user.service';
import {MovielistComponent} from './movielist.component';

import {ModelFormComponent} from './modelform.component';



@NgModule({

  imports:   [ BrowserModule, FormsModule, HttpModule ,
                  ReactiveFormsModule,RouterModule.forRoot(APP_ROUTES) ],
  declarations: [ AppComponent,UserComponent,
                 MovielistComponent,
                 ModelFormComponent],
   providers :    [ UserService ],
  
  	     
      
  bootstrap:    [AppComponent]
})
export class AppModule { }


// 