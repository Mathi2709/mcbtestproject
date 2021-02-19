import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-submitedtranaction',
  templateUrl: './submitedtranaction.component.html',
  styleUrls: ['./submitedtranaction.component.css']
})
export class SubmitedtranactionComponent implements OnInit {
  userDetails: any=[];

  constructor(
    public router:Router,
    public httpservice:HttpService,

  ) { }

  ngOnInit() {    
    this.getSubmitedTransaction();
  }

  onClickval(){
    this.router.navigate(['userlogin']);
  }

  onClickBack(){
    this.router.navigate(['newbanktransaction']);
  }

  getSubmitedTransaction(){
    var sumbmitedtransactionUrl = this.httpservice.baseUrl + this.httpservice.newTransaction;
    this.httpservice.ajaxCallService(sumbmitedtransactionUrl,'get','').subscribe(response =>{  
  if(response.length > 0){
    this.userDetails = response;
  }  
    })
  }

  

}
