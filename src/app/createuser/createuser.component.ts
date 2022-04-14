import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DreamcatcherService } from '../dreamcatcher.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName:[''],
      phoneNumber:[''],
      email:[''],
      password:['']
    })
  }
signUp(){
   this.http.post<any>('https://dream-cacher-default-rtdb.firebaseio.com/Users.json',this.signupForm.value).subscribe((res)=>{
      alert("You have signed up successfully");
      this.signupForm.reset();
       this.router.navigate(['/login'])
   })
}
}
