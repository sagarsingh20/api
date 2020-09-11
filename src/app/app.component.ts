import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit { 
  
  ngOnInit(){  }

  constructor( private http: HttpClient, private route: Router) { }

  //Post the Value

  postData= {
    id: '',
    name: ''
  }
  postapi(postData){
    //console.log(postData)
    this.http.post('https://data-12877.firebaseio.com/posts.json',postData).subscribe( responseData =>{
      //console.log (responseData);
    })
  }


  //Get the Value

  public user =[];
 // index = ['id', 'name']

  onFetchPosts(){
    this.http.get('https://data-12877.firebaseio.com/posts.json').subscribe(data =>{
      //console.log(data);
       //this.user=Object.values(data);
       this.user.splice(0,this.user.length)
       for (var key in data){
         //var local = data[key];
         this.user.push(data[key]);
       }
       
      //this.user.push(data[key])
    })
    console.log(this.user);
  }
  
 

  //Delete the Value
  delete(){
    this.http.delete('https://data-12877.firebaseio.com/posts.json+id=123').subscribe(()=>{})
  }

 }
