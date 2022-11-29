import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoralisServicesService } from '../moralis-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  MetaMaskLogin = false

  constructor(private route:Router, private servce:MoralisServicesService) { }

  async logedInSuccess(){
    await this.servce.MetaMaskLogin();
    this.MetaMaskLogin = true

    if(this.MetaMaskLogin !=true){
      this.route.navigateByUrl('login')
    }
    else{
    this.route.navigateByUrl('main');
    }
  }
  ngOnInit(): void {
  }

}
