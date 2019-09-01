import * as moment from 'moment';
import { Day } from "./day";
import { CopyUtil } from './../../shared/utils/copy-util';

export interface IWeek {
  startDate: moment.Moment;
  days?: Array<Day>;
}

export class Week implements IWeek {

  public startDate: moment.Moment;
  public days: Array<Day>;

  constructor(options?: IWeek) {
    this.startDate =  moment();
    this.days = [];
    if (options) {
      CopyUtil.copyProps(options, this);
    }
    if (this.days.length === 0) {
      this.populateDays();
    }
  }

  private populateDays() {
    const start = moment(this.startDate);
    for (let i = 0; i < 7; i++) {
      const newDate = moment(this.startDate).add(i, 'd');
      // debugger;
      const day = new Day({date: newDate});
      this.days.push(day);
    }
  }
}
