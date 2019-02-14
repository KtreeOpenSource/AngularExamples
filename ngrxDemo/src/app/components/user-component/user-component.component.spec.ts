import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponentComponent } from './user-component.component';
import { StoreModule, Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import { HttpClientModule } from '@angular/common/http';
import * as UserActions from '../../store/actions/user.actions';

describe('UserComponentComponent', () => {
  let component: UserComponentComponent;
  let fixture: ComponentFixture<UserComponentComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponentComponent ],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({
            ...fromRoot.reducers
        })
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponentComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check users exists or not in init', () => {
    const users = [{
      'id': 1,
      'userName': 'test1',
      'email': 'test1@gmail.com'
    }, {
      'id': 2,
      'userName': 'test2',
      'email': 'test@gmail.com'
    }];

    store.dispatch(new UserActions.LoadUsers(users));

    component.ngOnInit();
    expect(component.users).toEqual(users);
  });
});
