import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DreamcatcherService {
  
 private apiUrl:any='https://dream-cacher-default-rtdb.firebaseio.com/post.json'
 private apiUrl1:any='https://dream-cacher-default-rtdb.firebaseio.com/post1.json'
 private apiUrlUsers:any = 'https://dream-cacher-default-rtdb.firebaseio.com/Users.json'

  constructor(private http:HttpClient) { }

  getDreamcatchers(): Observable<any> {

    return this.http.get(this.apiUrl)

  }
  postDreamcaptureByOwner(id: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`,id);
  }
  postDreamcapture(id: any): Observable<any> {
    return this.http.post(`${this.apiUrl1}`,id);
  }
  getDreamcapture(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getOrderedDreamcatchers(): Observable<any> {

    return this.http.get(this.apiUrl1)

  }
  deleteDreamCapture(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl1}/${id}`);
  }

}
