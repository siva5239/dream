import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DreamcatcherService } from '../dreamcatcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dreamCatchers:any = []
  constructor(private dreamCatcherservice : DreamcatcherService, private router: Router) { }

  ngOnInit(): void {
// this.dreamCatcherservice.getDreamcatcher().subscribe((data)=>console.log(data))

this.getDreamCatcherObject()
// console.log(this.dreamCatchers)
console.log("Hello world")

  }
  getDreamCatcherObject(){
  this.dreamCatcherservice.getDreamcatchers().subscribe((data)=>{
// console.log(Object.keys(data));

    for(let i in data){
        
            this.dreamCatchers.push({...data[i],id:i});
            console.log({id:i,...data[i]})
    }
  })
  }
  postDreamCaptureOrder(id:any){
    this.router.navigate(['orderdream', id])

  }
}
