import { ServerResolverService } from './servers/server-resolver.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { AuthService } from './auth.service';
import { ServersService } from './servers/servers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { AppRoutingModule } from './app-routing.module';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServersService,
    AuthGuardService,
    AuthService,
    CanDeactivateGuardService,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
