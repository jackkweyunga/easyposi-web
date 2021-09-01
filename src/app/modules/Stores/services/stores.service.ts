import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ListItem } from "../stores.model";


const shopsUrls = {
  get:"../../../../assets/api/stores.json",
  post:"",
  put:"",
  delete:""
}

@Injectable({
  providedIn: 'root'
})
export class StoresService {

private _stores: BehaviorSubject<ListItem[]> = new BehaviorSubject<ListItem[]>([]);

public stores: Observable<ListItem[]> = this._stores.asObservable()

constructor(
  private http: HttpClient,
) { }


public async data() {
  const data: ListItem[] = await (this.getData()).toPromise()
  this._stores.next(data)
}

public async add(store: ListItem) {
  let new_list = this._stores.value
  new_list.push(store)
  this._stores.next(new_list)
}

public async delete(store: ListItem) {
  const new_list = this._stores.value.filter((item: ListItem) => item.id !== store.id)
  this._stores.next(new_list)
}

public async edit(store: ListItem) {
  let all = this._stores.value

  all.forEach(item => {
    if (store.id === item.id) {
      item.name = store.name
      item.location = store.location
    }
  })

  console.log(all);

  this._stores.next(all)
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
