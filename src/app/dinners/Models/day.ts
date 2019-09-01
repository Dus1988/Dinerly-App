import * as moment from 'moment';
import { Meal } from './meal';
import { CopyUtil } from 'src/app/shared/utils/copy-util';

export interface IDay {
  date: moment.Moment;
  // dayOfWeek?: string;
  meals?: Array<Meal>;
}

export class Day implements IDay{
  public date: moment.Moment;
  // public dayOfWeek: string;
  public meals: Meal[];

  constructor(options?: IDay) {
    this.date = moment();
    // this.dayOfWeek = this.date.format('')
    this.meals = [];
    if (options) {
      CopyUtil.copyProps(options, this);
    }
  }


}
