import { Directive, Input, AfterViewInit } from '@angular/core';
import { TimeTrackerService } from './time-tracker.service';

@Directive({
  selector: '[postRepeat]'
})
export class PostRepeatDirective implements AfterViewInit {

  @Input('postRepeat') last: boolean;

  constructor(private timeTracker: TimeTrackerService) { }

  ngAfterViewInit() {
    if (this.last) {
      setTimeout(() => {
        var ref = new Date(this.timeTracker.getReviewListLoaded()).getTime();
        var end = new Date().getTime();
        console.log("## DOM rendering list took: " + ((end - ref) / 1000) + " seconds");
      });
    }
  }

}
