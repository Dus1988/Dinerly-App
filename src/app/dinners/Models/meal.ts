
import { CopyUtil } from 'src/app/shared/utils/copy-util';

export class IMeal {
  description: string;

}

export class Meal implements IMeal {
  public description: string;

  constructor(options?: IMeal) {
    this.description = '';
    if (options) {
      CopyUtil.copyProps(options, this);
    }
  }

}
