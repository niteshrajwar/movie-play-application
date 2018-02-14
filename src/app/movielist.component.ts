import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
//import {USER_DATA} from './mock';
import {UserService} from './user.service';
//import { Course }    from './course';
@Component({


	selector:'observe-comp',
	templateUrl:'app/template/observable.component.html'
})
export class MovielistComponent{
  

 constructor(private userService: UserService){}

  movies: User[];
   
  
     

  /* ngOnInit(){
          
          this.userService.getUserData()
          .subscribe((response=>this.movies=response));
}*/

 ngOnInit(){
          
         

           debugger
           if(sessionStorage.getItem("NewMovie") != null && sessionStorage.getItem("NewMovie") != undefined){
                      this.movies= JSON.parse(sessionStorage.getItem("NewMovie"));
                  }
else{

   this.userService.getUserData()
          .subscribe((response=>this.movies=response));
}
}


  
        addMovies(moviename:string,movierating:number,moviegenre:string) {
                 

              
                    this.movies.push(<User> {
                      moviesName: moviename,
                      moviesRating: movierating,
                      moviesGenre: moviegenre
                    });
                    console.log(this.movies);
                    alert("movie added");
                    //localStorage.removeItem("NewCourse");
                    debugger
                    sessionStorage.setItem("NewMovie", JSON.stringify(this.movies));
                    
                 }



 
       } 
        
      