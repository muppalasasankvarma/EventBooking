import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { EventsService } from 'src/app/Servises/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private http:EventsService,private toast:NgToastService )
  {
    
  }

  ngOnInit(): void {
    this.http.allevents().subscribe(res => {

      this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000, position:'topCenter'});
    },error =>{
      this.toast.warning({detail:"Dannger",summary:'Your Success Message',duration:5000, position:'topCenter'});
    })
    
      
     
  }


}
