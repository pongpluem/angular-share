import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.scss']
  styles: ['h3{color:red}']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false
  serverCreationStatus: string = "no server was created!"
  serverName: string = ""

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)
    
   }

  ngOnInit() {
  }

 
  onCreatedServer(){
    this.serverCreationStatus = "Server was created!"
  }

  onUpdateServerName(event: any){
    console.log(event)
    //this.serverName = event.target.value
    //this.serverName = (<HTMLInputElement>event.target).value
    this.serverName = (event.target as HTMLInputElement).value

  }

}

