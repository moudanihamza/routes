import { ServersService } from './servers.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

interface Server {
  id: number;
  name: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {

    return this.serverService.getServer(+route.params.id);
  }

  constructor(private serverService: ServersService) { }
}
