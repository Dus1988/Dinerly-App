export class CopyUtil {

  public static copyProps(source, dest) {
    // if (options) {
      const keys = Object.keys(source);
      keys.forEach(key => {
        dest[key] = source[key];
      });
    // }
  }

  public static deepCopy(source: Object, dest?: Object): any {

    if (dest) {
      dest = JSON.parse(JSON.stringify(source));
      return dest;
    } else {
      return JSON.parse(JSON.stringify(source));
    }

  }
}
