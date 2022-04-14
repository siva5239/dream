import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DreamcatcherService } from '../dreamcatcher.service';

@Component({
  selector: 'app-createdreamcapture',
  templateUrl: './createdreamcapture.component.html',
  styleUrls: ['./createdreamcapture.component.css']
})
export class CreatedreamcaptureComponent implements OnInit {
  dreamCapture = { cost: "", dilevaryDate: "", imagepath: ""}
  constructor(private dreamcaptur: DreamcatcherService, private router: Router) { }

  ngOnInit(): void {
  }
  createDreamCapture() {
    this.dreamcaptur.postDreamcaptureByOwner(this.dreamCapture).subscribe()
    alert("data has posted")
    this.router.navigate(["navbar/home"])
  }
  onFileSelected(event: any) {
    if (event.target?.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const imgBase64Path = e.target.result;
          this.dreamCapture.imagepath = imgBase64Path;
          return imgBase64Path
        };
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
