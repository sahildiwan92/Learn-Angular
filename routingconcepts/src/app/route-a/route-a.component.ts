import { Component, OnInit } from '@angular/core';
import { FakeServiceService } from '../fake-service.service';

@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.scss']
})
export class RouteAComponent implements OnInit {
  posts:any;
  constructor(private fakeService:FakeServiceService) { }

  ngOnInit() {
    this.fakeService.getPosts().subscribe(data=>this.posts=data);
  }

}
