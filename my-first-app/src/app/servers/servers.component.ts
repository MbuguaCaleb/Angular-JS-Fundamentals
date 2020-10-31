import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverName="Test Server";
  serverCreationStatus ='No Server was Created';
  serverCreated = false;
  servers =['TestServer','Test Server 2'];
  /**Construtor runs when my component has been mounted */
  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {  }

  /*Event Listener Method for creating a server*/
  /*It is good practice to begin naming event listeners with on*/
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus ='Server was Created! Name is' + this.serverName;
  }

  onUpdateServerName(event:Event){
    /*i must tell  typeScript the type of HTML Element which is my target*/
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
