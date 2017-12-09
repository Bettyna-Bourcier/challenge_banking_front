import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Outgoing } from '../models/outgoing.model';

@Component({
  selector: 'app-outgoings',
  templateUrl: './outgoings.component.html',
  styleUrls: ['./outgoings.component.css']
})
export class OutgoingsComponent implements OnInit {
  user: User = new User();
  outgoings: Array<Outgoing> = new Array<Outgoing>();
  // Pie
  pieChartLabels:string[] = ['Accomodation', 'Health', 'Car', 'Subscriptions', 'Shopping', 'Hobbies', 'Food', 'Professional', 'Bank'];
  pieChartData:number[] = [];
  pieChartType:string = 'pie';
  chartColors: any[] = [
  { 
    backgroundColor:["#8B5D33", "#6FC8CE", "#DBB957", "#F28482", "#B9E8E0", "#B5446E", "#9D44B5", "#2F2D2E", "#99D17B"] 
  }];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Get the user and its outgoings from the API
    this.userService.getUserByClientNumber().subscribe((user) => {
      this.user = user;
      // Calculate the sum of each outgoing type
      this.pieChartData = this.pieChartLabels.map(label => 
        this.user.outgoingsList.filter(outgoing => outgoing.outgoingType === label)
        .reduce((reducer, curr) => reducer + curr.amount, 0)
      )
    });
  }
}
