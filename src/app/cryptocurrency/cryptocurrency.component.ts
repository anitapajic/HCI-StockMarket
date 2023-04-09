import { Component } from '@angular/core';
import {ChartServiceService} from "../service/chart-service.service";


export type selectedOption = {
  title : String,
  value : String,
  img : String
}

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent {

  public selectedOption : selectedOption | undefined;
  public BTC : selectedOption | undefined;
  public Ethereum : selectedOption | undefined;
  public Solana : selectedOption | undefined;
  chartService : ChartServiceService | undefined;


  constructor(){
    this.BTC = {
      title : "Bitcoin",
      value : (37530.14).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      img : 'btc_logo.png'
    }
    this.Ethereum = {
      title : "Ethereum",
      value : (22130.24).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      img : 'eth_logo.png'
    }
    this.Solana = {
      title : "Solana",
      value : (17570.04).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      img : 'sol_logo.png'
    }
    this.selectedOption = {
      title : "Title",
      value : (10000.03).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      img : ''
    }
  }
getBTC(){
  this.chartService?.getCryptoDaily("BTC").subscribe(
    response => {
      return response;
    }
  )
}
  getETH(){
    this.chartService?.getCryptoDaily("ETH").subscribe(
      response => {
        return response;
      }
    )
  }

  getSOL(){
    this.chartService?.getCryptoDaily("SOL").subscribe(
      response => {
        return response;
      }
    )
  }

}
