import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
	  <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
    `,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true}
])
export class AppComponent { 
  public title = 'lets Try D3Js with Angular2';
}