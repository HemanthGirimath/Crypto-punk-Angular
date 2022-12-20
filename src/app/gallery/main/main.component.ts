import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnChanges {
  @Input() nftId:any= [];
  @Input() clicked:boolean | undefined
  
  constructor() { }

  getURL(){
    let meta = this.nftId
    let info = JSON.parse(meta.metadata)
    if (!info.image?.includes("ipfs://")) {
      return info.image;
    } else {
      return "https://ipfs.io/ipfs/" + info.image.substring(7); 
    }
  }

  getName(){
    let meta = this.nftId
    let info = JSON.parse(meta.metadata)
    return info.name
   
  }

  ngOnInit(){
  }

  ngOnChanges(change: SimpleChanges) {
    if (change['nftId']) {
      this.nftId = change['nftId'].currentValue;
      
    } 
  }
}
