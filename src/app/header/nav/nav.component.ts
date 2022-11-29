import { Component, OnInit } from '@angular/core';
import { MoralisServicesService } from 'src/app/moralis-services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  walletAddress:any
  constructor(private s:MoralisServicesService) { }

  async ngOnInit() {
  
   const data = await this.s.MetaMaskLogin();
   sessionStorage.setItem('wallet',data)
   this.walletAddress = sessionStorage.getItem('wallet');
  }

}
