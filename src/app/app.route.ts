import {Routes } from '@angular/router';
import {UserComponent} from './user.component';
import {MovielistComponent} from './movielist.component';
import {ModelFormComponent} from './modelform.component';


 export const APP_ROUTES :Routes =[
 {path :"",component :ModelFormComponent},
 {path :"addmovies",component : MovielistComponent},
 {path :"displaymovies",component :UserComponent}

 
 ]
