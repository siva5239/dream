import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dreamcatcher } from '../dreamCatcher';
import { DreamcatcherService } from '../dreamcatcher.service';

@Component({
  selector: 'app-orderdreamcapture',
  templateUrl: './orderdreamcapture.component.html',
  styleUrls: ['./orderdreamcapture.component.css']
})
export class OrderdreamcaptureComponent implements OnInit {
  id: any;
  dreamCather:any = {};
  constructor(private route: ActivatedRoute, private dreamCatcherservice: DreamcatcherService, private router: Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    
    this.dreamCatcherservice.getDreamcatchers()
      .subscribe(data => {
        for(let i in data){
          debugger
          if(i === this.id){
            this.dreamCather = {...data[i],id:i}
          };
          console.log(typeof this.id)
  }
      }, error => console.log(error));
    
  }
  postDreamCaptureOrder() {
    this.dreamCatcherservice.postDreamcapture(this.dreamCather)
      .subscribe(data => {
        console.log(data);
        this.dreamCather = new Dreamcatcher();
        this.gotolistofdreamcapture();
      }, error => console.log(error));
      alert(" your order is delivered successfully")
      this.router.navigate(['navbar'])
      // this.gotolistofdreamcapture()
  }

  gotolistofdreamcapture(){
    this.router.navigate(['home'])
  }
  
}
