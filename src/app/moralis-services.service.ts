import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoralisServicesService {

  constructor(private route:Router) { }


  async MetaMaskLogin(){
    //@ts-ignore
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0]
  }
}
