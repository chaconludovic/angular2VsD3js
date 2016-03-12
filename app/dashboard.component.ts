import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {GrapheComponent} from './graphe.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  directives: [GrapheComponent]
})
export class DashboardComponent  implements OnInit{
	constructor(private _router: Router) { }

	ngOnInit() {
   
  	}
}

