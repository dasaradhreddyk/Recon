import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  public videoids1: string[]=[];
  public videoids: any[]=[];
   public videoidsnew: string[]=[];
     safeSrc: SafeResourceUrl;
    safeSrc2: SafeResourceUrl[] = [];
   
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { 
   this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
   var url = "http://localhost:8840/api/data/GetVideolist?input=" + "angular_videos";

   this.safeSrc2.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + ""));
                
           
  }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    

    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
   var url = "http://localhost:8840/api/data/GetVideolist?input=" + "angular_videos";

        this.http.get<WeatherForecast1[]>(url).subscribe
            (
            result => {
                this.videoids = <WeatherForecast1[]>result;
               
                this.videoids1 = this.videoids[0];
				 this.videoids.forEach(x =>this.safeSrc2.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + x.name)));

                console.log(this.videoids1);
                console.log("getVideodata");
                
            }, error => console.error(error));
  
  }

}
interface WeatherForecast1 {
  name: string;
 
}