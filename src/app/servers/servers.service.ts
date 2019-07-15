import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
servers = [
  {id: 1, name: 'server1', status: 'online'},
  {id: 2, name: 'server2', status: 'offline'}
];
  constructor() { }

  getServers() {
    return this.servers.slice();
  }
  getServer(id: number) {
    const server =  this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {id: number, name: string, status: string}) {
      const server = this.getServer(id);
      server.id = serverInfo.id;
      server.name = serverInfo.name;
      server.status = serverInfo.status;
  }
}
