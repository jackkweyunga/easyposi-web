import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopsService } from '../../services/shops.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss']
})
export class AddShopComponent implements OnInit {

  addForm: FormGroup = new FormGroup({})

  constructor(
    public builder: FormBuilder,
    public router: Router,
    public shopsService: ShopsService,
  ) { }

  save() {
    if (this.addForm.valid) {
      const shop = this.addForm.value;
      // console.log(shop);
      this.shopsService.add(shop)
      this.router.navigateByUrl('shops/p/list')

    }
  }


  ngOnInit() {
    this.addForm = this.builder.group({
      name: [''],
      location:['']
    });
  }

}
