import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DreamcatcherService } from '../dreamcatcher.service';

@Component({
  selector: 'app-listoforders',
  templateUrl: './listoforders.component.html',
  styleUrls: ['./listoforders.component.css']
})
export class ListofordersComponent implements OnInit {
  orderedDreamcaptureList:any = []
  constructor(private dreamCatcherservice: DreamcatcherService, private router:Router) { }

  ngOnInit(): void {
    this.getOrderedDreamCapture()
  }
  getOrderedDreamCapture(){
     this.dreamCatcherservice.getOrderedDreamcatchers().subscribe((data)=>{
      for(let i in data){
        this.orderedDreamcaptureList.push({...data[i],id:i});
        console.log({id:i,...data[i]})
}
       console.log(this.orderedDreamcaptureList)})
  }
  deleteOrderedDreamCapture(id: number) {
    this.dreamCatcherservice.deleteDreamCapture(id)
      .subscribe(
        data => {
          console.log(data);
          this.getOrderedDreamCapture();//after deleting it should be display all the records
        },
        error => console.log(error));
      this.router.navigate(['navbar'])
  }
}
