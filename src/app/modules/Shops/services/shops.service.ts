import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ListItem } from "../shops.model";


const shopsUrls = {
  get:"../../../../assets/api/shops.json",
  post:"",
  put:"",
  delete:""
}

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

private _shops: BehaviorSubject<ListItem[]> = new BehaviorSubject<ListItem[]>([]);

public shops: Observable<ListItem[]> = this._shops.asObservable()

constructor(
  private http: HttpClient,
) { }


public async data() {
  const data: ListItem[] = await (this.getData()).toPromise()
  this._shops.next(data)
}

public async delete(shop: ListItem) {
  const new_list = this._shops.value.filter((item: ListItem) => item.id !== shop.id)
  this._shops.next(new_list)
}

public async edit(shop: ListItem) {
  const all = this._shops.value

  all.forEach(item => {
    if (shop.id == item.id) {
      item.name = shop.name
      item.location = shop.location
    }
  })

  this._shops.next(all)
}


// crud operations

private getData() {
  return this.http.get<ListItem[]>(shopsUrls.get)
}

private addData() {
  return this.http.get(shopsUrls.post)
}

private editData() {
  return this.http.get(shopsUrls.put)
}

private deleteData() {
  return this.http.get(shopsUrls.delete)
}

}
