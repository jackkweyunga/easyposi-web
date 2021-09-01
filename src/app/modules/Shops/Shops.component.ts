import { Component, OnInit } from '@angular/core';
import { ShopsService } from './services/shops.service';

@Component({
  selector: 'app-Shops',
  templateUrl: './Shops.component.html',
  styleUrls: ['./Shops.component.scss']
})
export class ShopsComponent implements OnInit {

  constructor(
    private shopsService: ShopsService,
  ) { }

  async ngOnInit() {
    await this.shopsService.data()
  }

}
