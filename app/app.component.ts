import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container"
          [style.padding-bottom.px]="dynamicPadding">
      <div class="intro">
        <h1>{{title}}</h1>
        <p>Please introduce the last number : 'n'
        <br>
        You'll have the prime numbers from 2 to the choosen n</p>
        <p>And please not a big number as the web browsers aren't powerful enough =D</p>
        <input #nPrime type="text"/>
        <button (click)="getN()">Introduce 'n'</button>
      </div>
      <div class="primes">
        <ul>
          <li *ngFor="let prime of primeNumbers">
            {{prime}}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('nPrime') nPrime: ElementRef;
  title = 'Prime Numbers Application';
  primeNumbers: number[];
  nTmp: number;
  isPrime: any;
  dynamicPadding = 400;
  
  getN() {
    this.primeNumbers = [];
    this.nTmp = this.nPrime.nativeElement.value;
    let i, j;
    for (i = 2; i <= this.nTmp; i++) {
      this.isPrime = 1;
      for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          this.isPrime = 0;
          break;
        }
      }
      if (this.isPrime === 1) {
        this.primeNumbers.push(i);
      }
    }
    if (this.primeNumbers.length > 3) {
      this.dynamicPadding = 20;
    }
  }
}
