import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 0;

  constructor(private _ngZone: NgZone) {}

  onClickChangeNumber() {
    this._ngZone.runOutsideAngular(() => {
      const interval = setInterval(() => {
        if (this.number % 2 !== 0) {
          if (this.number > 20) {
            clearInterval(interval);
          } else {
            this._ngZone.run(() => {
              console.log(this.number, 'running inside angular');
            });
          }
        }
        this.number++;
      }, 500);
    });
  }

}
