import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnChanges {

  @Input() title: string;
  name: string;

  constructor() {  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');

    for (const propName in changes) {
      let change = changes[propName];
      if(change.isFirstChange()) {
        console.log(`first change: ${propName}`);
      } else {
        this.name = change.previousValue;
        console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
      }
    }
  }
}
