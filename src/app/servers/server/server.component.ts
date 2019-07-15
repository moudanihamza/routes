import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private  router: Router) { }

  ngOnInit() {
     /*this.activatedRoute.params.subscribe(
       (params: Params) => {
         this.server = this.serversService.getServer(+params.id);
       }
     );*/
     this.activatedRoute.data.subscribe(
       (data: Data) => this.server = data.server
     );
  }

  onEdit() {
     this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'} );
  }

}
