import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopsService } from '../../services/shops.service';
import { ListItem } from '../../shops.model';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {

  editForm: FormGroup = new FormGroup({})

  shop: any;

  constructor(
    public builder: FormBuilder,
    public router: Router,
    public shopsService: ShopsService,

  ) { }

  save() {
    if (this.editForm.valid) {
      const shop = this.editForm.value;
      // console.log(shop);
      this.shopsService.edit(shop)

      this.router.navigateByUrl('shops/p/list')
    }
  }

  delete() {
      this.shopsService.delete(this.shop)
      this.router.navigateByUrl('shops/p/list')
  }

  ngOnInit() {

    this.shop = window.history.state['row'];
    console.log(this.shop);

    this.editForm = this.builder.group({
      id: [this.shop.id],
      name: [this.shop.name],
      location:[this.shop.location],
    });

  }

}
