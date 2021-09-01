import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) { }

  save() {
    if (this.addForm.valid) {
      const shop = this.addForm.value;
      console.log(shop);
      this.router.navigateByUrl('shops/account/list')

    }
  }


  ngOnInit() {
    this.addForm = this.builder.group({
      name: [''],
      location:['']
    });
  }

}
