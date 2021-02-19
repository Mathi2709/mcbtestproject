import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NewbanktransactionComponent } from './newbanktransaction/newbanktransaction.component';
import { SubmitedtranactionComponent } from './submitedtranaction/submitedtranaction.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path: '', redirectTo: 'userlogin', pathMatch: 'full'  },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'newbanktransaction', component: NewbanktransactionComponent },
  { path: 'submitedtranaction', component: SubmitedtranactionComponent },
  { path: 'mainpage', component: MainpageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

