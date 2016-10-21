import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TimeTrackerService } from './time-tracker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];

  constructor(private http: Http, private timeTracker: TimeTrackerService) {
    http.get('app/data.json')
      .map(res => res.json())
      .subscribe(
        data => {
          var startDate = new Date();
          this.timeTracker.setReviewListLoaded(startDate);
          this.items = data;
        },
        err => console.log(err),
        () => console.log('Completed'));
  }

  getInfo(item) {
    return item.company + item.address + item.about + item.phone + item.email;
  }

  getTags(item) {
    let tags = "";
    for (let i=0; i < item.tags.length; i++) {
      tags = tags + item.tags[i];
    }
    return tags;
  }
}
