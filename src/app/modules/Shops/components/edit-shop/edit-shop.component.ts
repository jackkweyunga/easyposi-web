import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopsService } from '../../services/shops.service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {

  editForm: FormGroup = new FormGroup({})

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

      this.router.navigateByUrl('shops/account/list')
    }
  }


  ngOnInit() {

    const shop = window.history.state['row'];
    console.log(shop);

    this.editForm = this.builder.group({
      id: [shop.id],
      name: [shop.name],
      location:[shop.location],
    });

  }

}
