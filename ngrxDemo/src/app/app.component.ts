import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Store } from '@ngrx/store';
import * as fromStore from './store/reducers/index';
import * as UserActions from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private appService: AppService,
    public store: Store<fromStore.State>
  ) {}

  ngOnInit() {
    this.appService.getUser().subscribe(res => {
      this.store.dispatch(new UserActions.LoadUsers(res));
    });
  }
}
