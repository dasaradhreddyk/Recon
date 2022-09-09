import { Component, OnInit } from '@angular/core';

import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-profilelist',
  templateUrl: './profilelist.component.html',
  styleUrls: ['./profilelist.component.css']
})
export class ProfilelistComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts : ProfileData[] =[];
  public CHARACTERS: any[]=[];
  public Details:string ="";
  public tag:string="";
  public username:string="";
  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    
    };
   
    this.http.get<ProfileData[]>('http://localhost:8840/api/data/GetUserData?input=art')
      .subscribe(posts => {       
		 
		    this.posts = posts;          
		
    });
   
  }
  focusFunction(  value:string )
  {
    this.Details =value;
    //HTTPS://WWW.FACEBOOK.COM/KIM.XYZ
    this.Details = value.split('/')[3];
    this.username = this.Details;
    this.Details = this.Details.split('.')[0];
    var param = this.Details.replace(/[0-9]/g, '');
    // console.log("*********"+'https://api.genderize.io/?name='+value.split('.')[0]);
    this.http.get<string>('https://api.genderize.io/?name='+param)
       .subscribe(details =>{
        console.log(details +"sucess");
        this.Details = JSON.stringify(details);
       })

  }
  getSelectedValue(event:any){
  
    // Prints selected value
    this.tag = event.target.value;
    console.log(event.target.value);
  }
  BookMarkUser()
  {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
  });

    this.http.post<any>
    ('http://localhost:8840/api/BookMark/AddBookMark', 
    { user: this.username,tag:this.tag }, { headers: httpHeaders }).subscribe(data => {
      console.log("sucess");
    })
    
    console.log("inside bookmark");
    
  }
  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
  } 
  private extractData(res: any) {
    let body = res;
    return body;
}
  getProfileData(value: string)
  {
	  console.log("Click Event" + value);
	  while(this.posts.length) {
         let item = this.posts.pop();    
      }
	 
	   this.http.get<ProfileData[]>('http://localhost:8840/api/data/GetUserData?input='+value)
      .subscribe(posts => {       
		 
		    this.posts = posts;          
		
    });
  }
  
   
}
interface ProfileData {
    name: string;
    age: string ;
    species: string;
    occupation: string;
}
