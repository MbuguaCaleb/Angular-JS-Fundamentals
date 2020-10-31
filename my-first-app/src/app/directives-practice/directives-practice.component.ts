import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css']
})
export class DirectivesPracticeComponent implements OnInit {

  hideButton= false;
  log=[];
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleData(){

    this.hideButton =!this.hideButton;
//    this.log.push(this.log.length + 1);

   //Date is a build in object in javascript that gives us the time.
    this.log.push(new Date());
  }


}
