import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  userName ="";
  isUserNameEmpty=true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onCheckWhetherEmpty(event:Event){

  let inputLength =(<HTMLInputElement>event.target).value.length;

  console.log(inputLength);

  if (inputLength > 0){

    this.isUserNameEmpty = !this.isUserNameEmpty;
  }else{

    this.isUserNameEmpty  =this.isUserNameEmpty;
  }
  //inputLength > 0 ? !this.isUserNameEmpty:this.isUserNameEmpty;
  
  }
  
  onClearInputData(){

    this.userName ='';
  }
}
