import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  public allevents()
  {
    return this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEvents');
  }
}
