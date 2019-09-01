export class CopyUtil {

  public static copyProps(source, dest) {
    // if (options) {
      const keys = Object.keys(source);
      keys.forEach(key => {
        dest[key] = source[key];
      });
    // }
  }

  deepCopy(source: Object, dest: Object): Object {
    dest = JSON.parse(JSON.stringify(source));
    return dest;
  }
}
