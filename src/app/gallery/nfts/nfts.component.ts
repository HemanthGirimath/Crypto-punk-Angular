import { Component, OnInit } from '@angular/core';
import { MoralisServicesService } from 'src/app/moralis-services.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})

export class NftsComponent implements OnInit {
  nftData$:any =[];
  v = 0
  ItemClicked:any; 
  defaultView:boolean = false

  constructor(private service:MoralisServicesService) { }

    getId(data:any){
    this.ItemClicked = data;
    this.defaultView = true
  }

  getImgUrl(metadata: any){
    let meta = JSON.parse(metadata)
    if (!meta.image.includes("ipfs://")) {
      return meta.image;
    } else {
      return "https://ipfs.io/ipfs/" + meta.image.substring(7);
    }
  }

  getNftname(metadata:any){
    let meta = JSON.parse(metadata)
    return meta.name 
  }

  getNftTokenId(metadata:any){
    let meta = JSON.parse(metadata)
    if(!meta.attributes[0].value){
      return this.v
    }
    else{
    return meta.attributes[0].value

    }
  }
  
  ngOnInit(): void {
    this.service.getwalletAddress();
  this.service.getdata().subscribe(data=>this.nftData$ = data.result)
  }

}
