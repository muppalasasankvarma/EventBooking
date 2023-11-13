import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventsService } from 'src/app/Servises/events.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerformdata:FormGroup | any

  constructor( private fb:FormBuilder,private ser:EventsService,private http:HttpClient){

    this.registerformdata=this.fb.group({
      Name:[],
      Email:[],
      Password:[],
      ContactNo:[],
      Role:[]
    })
    
   }
   ngOnInit(): void {
    
   

     
   }
   registersubmit(registerformdata:any)
   {
    
   

    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser',this.registerformdata.value).subscribe(res=>
    {
      alert("success")
      this.registerformdata.reset();
    },err=>{
      alert("error")
    })
     
   }
    

  




}
