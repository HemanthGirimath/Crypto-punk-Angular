import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


export interface ResponseType {
  total: number, 
  page: number, 
  page_size: number, 
  cursor?: null, 
  result: Array<any>
}

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
  api = environment.Moralis_api
  walletaddress:string= '0x8b61FC3df7a5Dd1972f6187Fbc3cc374e9845D2b'

  // 'https://deep-index.moralis.io/api/v2/0x8b61FC3df7a5Dd1972f6187Fbc3cc374e9845D2b/nft'
  
  constructor(private http:HttpClient) { }

  //   getdata(){
  //   return this.http.get<ResponseType>('https://deep-index.moralis.io/api/0x8b61FC3df7a5Dd1972f6187Fbc3cc374e9845D2b/v2/nft',
  //   {headers:new HttpHeaders({accept: 'application/json','X-API-Key':this.api,format: 'decimal', normalizeMetadata: 'false'}),params:new HttpParams().set('chain','mumbai')});
  // }

   getdata(){
    
    return this.http.get<ResponseType>(`https://deep-index.moralis.io/api/v2/${this.walletaddress}/nft`,
    {headers:new HttpHeaders({accept: 'application/json','X-API-Key':this.api,format: 'decimal', normalizeMetadata: 'false'}),params:new HttpParams().set('chain','mumbai')});
    
  }

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
  this.getdata().pipe().subscribe(data=>this.nftData$ = data.result)
  // this.getdata().pipe().subscribe(data=>console.log(data))
  }

}
