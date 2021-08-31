import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) { }

  ngOnInit() {

    const shop = window.history.state['row'];
    console.log(shop);

    this.editForm = this.builder.group({
      name: [shop.name],
      location:[shop.location],
    });


  }

}
