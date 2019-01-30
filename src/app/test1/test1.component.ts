import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public testInput1: string = 'test 1 text';

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit() {
  }

  testFunc() {
    // console.log(this.testInput1);
    // console.log(this.testService);
    // console.log(this.testService.argReceived);
    // this.router.events.subscribe(() => {

      this.router.navigate(['/test2']);
      let that = this;
      // setTimeout(function(){that.testService.argReceived.emit(that.testInput1);}, 2000);
      // .then(() => {
      //   this.testService.argReceived.emit(this.testInput1);
      // });

      this.router.events.forEach((event) => {
        if(event instanceof NavigationEnd) {
          that.testService.argReceived.emit(that.testInput1);
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });


    // });

    // let t = this.testService.argReceived.subscribe(() => {
    // });

    // let that = this;
    // setTimeout(function(){
    //   that.testService.argReceived.emit(that.testInput1);
    // }, 2000);
    // let t = this.testService.argReceived.emit(this.testInput1);
    // console.log(t);
  }

}
