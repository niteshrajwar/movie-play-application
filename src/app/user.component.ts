import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import {User} from './user';

import {UserService} from './user.service';

@Component({

	selector: 'user-comp',

   templateUrl: `app/template/user.component.html`,
     styleUrls : [`app/css/user.component.css`]
})
export class UserComponent {
	
		 constructor(private userService: UserService){}
		

	 movietab: User[];

	/*
	 ngOnInit(){
        
          this.userService.getUserData()
          .subscribe((response=>this.movies=response));
          

   }*/

    ngOnInit(){
         
          //this.userService.getUserData()
          //.subscribe((response=>this.users=response));
          	    debugger
            this.movietab = JSON.parse(sessionStorage.getItem('NewMovie'));
            console.log(this.movietab);
   }
  
searchMovies(type:string){

	document.getElementById("head").innerHTML="<tr><th>Movies Name</th><th>Movies Rating</th></tr>" ;
 document.getElementById("tb").innerHTML="";
            for(let movie of this.movietab){

               if(movie.moviesGenre==type){
        
      
           document.getElementById("tb").innerHTML+="<tr><td>"+movie.moviesName+"</td><td>"+
               	          movie.moviesRating+"</td></tr>" ;
               	         
              }
             

}

}


		


 }