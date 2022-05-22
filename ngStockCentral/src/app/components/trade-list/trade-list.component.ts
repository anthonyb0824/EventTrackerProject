import { Component, OnInit } from '@angular/core';
import { Trade } from 'src/app/models/trade';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

newTrade: Trade = new Trade();
 trades: Trade[] = [];
 selected : Trade | null = null;
 updateTrade:Trade = new Trade();

  constructor(private tradeSvc:TradeService) {
  }



 ngOnInit(): void {
   this.loadTrades();
 }

 loadTrades(){
   this.tradeSvc.index().subscribe(
     suceess => this.trades = suceess,
     err => console.log('Failed to load trades' + err)
   )
 }

 createTrade(newTrade:Trade){
   this.tradeSvc.create(newTrade).subscribe(
     success =>{
       this.loadTrades();
       this.newTrade = new Trade();
     },
     err => console.log('Error creating trade' + err)
   )

 }

 setTrade(trade:Trade){
   this.selected = trade;
   this.updateTrade = trade;
 }

 updateTradef(updateTrade:Trade){
   this.tradeSvc.update(updateTrade).subscribe(
     data => {
       this.selected = null
       this.loadTrades()
     },
     err => console.log(err)
   )
 }

 destroy(trade:Trade){
   this.tradeSvc.destroy(trade.id).subscribe(
     data =>{this.loadTrades()},
     err => console.log(err)

   )
 }
}



