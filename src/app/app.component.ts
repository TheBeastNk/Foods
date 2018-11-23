import { Component } from '@angular/core';

import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'food';
  currentPage: number = 1;
  p:number;
  perPage:number = 30;

  flickerList:any;


  constructor(private imgSer :ImageService) {}
  
   getFlickerList(){
    this.imgSer.getFeed(this.perPage ,this.currentPage)
    .subscribe(res => console.log(this.flickerList = res));
     
   }
   ngOnInit(){
     this.getFlickerList();
   }

   setPage(page: number) {
     //this.loading = true;
     //this.usersList = [];
    //event.preventDefault();
    //this.loading = true;
    //this.statusMessage ="Loading data. Please wait.";
   //this.articles = [];
   this.currentPage = page;
   this.p =page;
   //this.getflickrList();
 
 }
     
   
   
}
