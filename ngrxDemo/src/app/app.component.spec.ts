import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { StoreModule, Store } from '@ngrx/store';
import * as fromRoot from './store/reducers/index';

describe('AppComponent', () => {
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserComponentComponent
      ],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({
          ...fromRoot.reducers
        })
      ],
      providers: [ AppService ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    store = TestBed.get(Store);
    expect(app).toBeTruthy();
  }));
});
