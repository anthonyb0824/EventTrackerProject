import { Component, OnInit } from '@angular/core';
import { Trade } from 'src/app/models/trade';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trades: Trade[] = [];

  constructor(private tradeSvc:TradeService) { }

  ngOnInit(): void {
    this.loadTrades();
  }

  loadTrades(){
    this.tradeSvc.index().subscribe(
      suceess => this.trades = suceess,
      err => console.log('Failed to load trades' + err)
    )
  }



}
