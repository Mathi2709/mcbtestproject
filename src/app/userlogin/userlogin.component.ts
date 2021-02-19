import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public mainGrp: FormGroup;
  username: any;  
  passwrd: string = "password";
  showmsg:boolean ;
  showmsg1:boolean ;
  shwhd: string = "password";
  
  constructor(
    public formbuilder:FormBuilder,
    public router: Router,
    public httpservice:HttpService,
    public toastr: ToastrService,

  ) {     
  
  }

    //Mathivathani

  ngOnInit() {   
    this.showmsg = false;
    this.showmsg1= false;
    this.mainGrp = this.formbuilder.group({   
      username:['',[Validators.required]],
      passwrd: ['', [Validators.required]],
    });     
  }

  //Method  to show hide password

  pswrdhideshow(e) {
    console.log(e);
    if (e.target.checked === true) {
      this.shwhd="text";
      }else{
        this.shwhd = "password";
      }
  
  }

  onFocus(){    
    if(this.mainGrp.value.username == "" ||this.mainGrp.value.username == undefined ){
      this.showmsg = true;
    }  if(this.mainGrp.value.passwrd == "" || this.mainGrp.value.passwrd == undefined ){
      this.showmsg1 = true;
    }if(this.mainGrp.value.username != "" && this.mainGrp.value.username != undefined){
      this.showmsg = false;
    }if(this.mainGrp.value.passwrd != "" && this.mainGrp.value.passwrd != undefined){
      this.showmsg1 = false;
    }
  }

  //Method  to submit loginform

  onClickSubmit(){
  if(this.mainGrp.value.username == "" ||this.mainGrp.value.username == undefined ){
    this.showmsg = true;
  }  if(this.mainGrp.value.passwrd == "" || this.mainGrp.value.passwrd == undefined ){
    this.showmsg1 = true;
  } 
  if(this.mainGrp.value.username != "" && this.mainGrp.value.username != undefined && this.mainGrp.value.passwrd != "" && this.mainGrp.value.passwrd != undefined){
    localStorage.setItem("Username",JSON.stringify(this.mainGrp.value.username));
    this.httpservice.toastr.success('Successfully login', '', {
      positionClass: 'toast-top-right', closeButton: true, timeOut: 5000
    });
    this.router.navigate(["mainpage"]);
  }   
  
}
}
  
