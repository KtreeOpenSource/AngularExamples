import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ChildComponentComponent } from './components/child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('childComponent') childComponent: ChildComponentComponent;
  @ViewChild('pTag') pTag: ElementRef;

  parentTitle: string;
  counter = 1;

  constructor() {}

  onClick() {
    this.parentTitle = `Hello Angular: ${this.counter}`;
    this.counter++;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.childComponent.name = 'Hello World!';
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    const element = <HTMLElement>this.pTag.nativeElement;
    element.textContent = 'Alter text after view init.';
  }
}
