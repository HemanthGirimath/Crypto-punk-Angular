import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
export interface ResponseType {
  total: number, 
  page: number, 
  page_size: number, 
  cursor?: null, 
  result: Array<any>
}

@Injectable({
  providedIn: 'root'
})
export class MoralisServicesService {
  walletaddress: any;
  api = environment.Moralis_api
  chain:any

  constructor(private http:HttpClient) { }


  async MetaMaskLogin(){
    const ethereum = window.ethereum as MetaMaskInpageProvider;
    const accounts:any = await ethereum.request({ method: 'eth_requestAccounts' });
    sessionStorage.setItem('data',accounts[0])
    return accounts[0]
  }

  getwalletAddress(){
    this.walletaddress = sessionStorage.getItem('data')
  }

  getdata(){    
    return this.http.get<ResponseType>(`https://deep-index.moralis.io/api/v2/${this.walletaddress}/nft?chain=mumbai`,
    {headers:new HttpHeaders({accept: 'application/json','X-API-Key':this.api,format: 'decimal', normalizeMetadata: 'false'}),params:new HttpParams().set('limit',6)});
    
  }
}
