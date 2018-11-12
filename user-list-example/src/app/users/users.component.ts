import { Component, OnInit } from '@angular/core';
import {RestUserService} from '../rest-user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(
    public rest: RestUserService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users = [];
    this.rest.getUsers().subscribe((data: {results:[]}) => {
      let {results} = data;
      this.users = results;
      console.log(results);
    });
  }
}
