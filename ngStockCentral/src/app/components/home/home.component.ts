import { TradeService } from './../../services/trade.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { Trade } from 'src/app/models/trade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }


}
