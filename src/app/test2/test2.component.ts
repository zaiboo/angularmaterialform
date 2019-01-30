import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router, NavigationEnd } from '@angular/router';
import { Test1Component } from '../test1/test1.component';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component implements OnInit {

  testInput2: string = 'test 2 text';

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit() {

    let that= this;

    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        that.testService.argReceived
    .subscribe(
      (testInput1: string) => {
        console.log("TEST2Comp: ", testInput1);
        that.testInput2 = testInput1;
      },
      (error => console.log(error))
    );
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });

    
  }

}
