import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root'})
export class BookingService {
  constructor(private http: HttpClient) {}

  getBookingList(id: number){
    return this.http.get(`${environment.apiUrl}/users/${id}/historybooking`);
  }
}

