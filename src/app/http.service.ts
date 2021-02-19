import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Toast } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string = "http://localhost:3000/";
  newTransaction: string = 'newTransctions';
  custmrDetails: string = 'customerDetails';
  submitedTransaction: string = 'submitedTransctions';

  
  constructor(
    public httpService: HttpClient,
    public toastr: ToastrService,
  ) { }

  
  

   ajaxCallService(dataUrl, dataType, dataParam) : Observable <any> {   
     let headers =new HttpHeaders({"Content-Type" : "application/json"});   
     switch(dataType){       
       case 'get':
         if(dataType == 'get'){
         if(dataParam != ""){
           let dataurl = dataUrl+'?custmrNumber='+dataParam;
          return this.httpService.get(dataurl);
         } else{
          return this.httpService.get(dataUrl);
         }  
        }      
         case 'post':
         return this.httpService.post(dataUrl,dataParam,{ headers: headers });
     }
    
    
  }
}
  



