import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  userName:any;

  constructor(
    public router :Router
  ) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem(("Username"))) != undefined && JSON.parse(localStorage.getItem("Username"))!=""){
      this.userName = JSON.parse(localStorage.getItem(("Username")));
    }    
  }

  btnNewClick(){
    this.router.navigate(['newbanktransaction']);
  }
  btnSubmitedClick(){
    this.router.navigate(['submitedtranaction']);
  }

  onClickval(){    
    this.router.navigate(['userlogin']);
  }
  onClickBack(){
    this.router.navigate(['userlogin']);
  }

}
