import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers/index';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  public users = [];

  constructor(public store: Store<fromStore.State>) { }

  ngOnInit() {
    this.store.select('user').subscribe(res => {
      this.users = res.users;
    });
  }

  getUsersFromSelectors() {
    this.store.select(fromStore.getUserName).subscribe(res => {
      console.log(res);
    });
  }
}
