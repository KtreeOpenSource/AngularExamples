import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChildComponentComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
