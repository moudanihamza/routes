import { ServersService } from './servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[];
  constructor(private serverService: ServersService) { }

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }

}
