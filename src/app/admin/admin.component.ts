import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public loginForm:any = true
  public loginValid :any
  public username = '';
  public password = '';
  loginSuccessfull:boolean = false;
  getAdminList:any = []
  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAdminData()
  }
  getAdminData(){
    this.http.get<any>('https://dream-cacher-default-rtdb.firebaseio.com/Users.json').subscribe((data)=>{
     for(let i in data){
       
       this.getAdminList.push({...data[i],id:i});
       console.log({id:i,...data[i]})
}
    })
 }
  onSubmit(){
    let data = this.getAdminList.find((value:any)=>value.fullName==="sravani")

    if(data && data.password === "9133892400"){
      alert("Sravani Jullapally you have logged in succesfully")
      this.router.navigate (['createdream'])
      this.loginSuccessfull = true
      
    }
    else{
      alert("You have entered the wrong credentials")
    }
  }
}
