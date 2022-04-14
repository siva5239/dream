import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dream';
 
  getDate:Date = new Date()

  getMonth(month:any){
     this.getDate = month.target.value;
     console.log(this.getDate, month.target.value)
  }

}
