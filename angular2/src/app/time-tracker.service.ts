import { Injectable } from '@angular/core';

@Injectable()
export class TimeTrackerService {

  reviewListLoaded = null;

  constructor() { }

  getReviewListLoaded() {
    return this.reviewListLoaded;
  };

  setReviewListLoaded(date) {
    this.reviewListLoaded = date;
  };
}
