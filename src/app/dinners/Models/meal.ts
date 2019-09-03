
import { CopyUtil } from 'src/app/shared/utils/copy-util';
import { MealTypes } from '../components/enums/meal-types.enum';

export class IMeal {
  description: string;
  mealType?: string;
}

export class Meal implements IMeal {

  public description: string;
  public mealType: string;

  constructor(options?: IMeal) {
    this.description = '';
    this.mealType = MealTypes.Dinner;
    if (options) {
      CopyUtil.copyProps(options, this);
    }
  }

}
