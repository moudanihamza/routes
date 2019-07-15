import { CanComponantDeactivate } from './can-deactivate-guard.service';
import { ServersService } from './../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponantDeactivate {

  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  editSaved = false;
  constructor(private activatedRoute: ActivatedRoute, private serverService: ServersService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = +params.allowEdit === 0 ? true : false;
      }
    );
    this.activatedRoute.fragment.subscribe();
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serverService.getServer(+params.id);
      }
    );
    console.log(this.server);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  onUpdateServer() {
    this.serverService.updateServer(this.server.id,
      { id: this.server.id, name: this.serverName, status: this.serverStatus }
    );
    this.editSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('je');
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.editSaved) {
      return confirm('do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
