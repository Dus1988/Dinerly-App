export interface INavItem {
  icon: string;
  label: string;
  route: string;
}

export class NavItem implements INavItem {
  public icon: string;
  public label: string;
  public route: string;

  constructor(options?: INavItem) {
    this.icon = 'fas fa-exclamation-triangle';
    this.label = 'Not Configured';
    this.route = '/';

    if (options) {
      const keys = Object.keys(options);
      keys.forEach(opt => this[opt] = options[opt]);
    }
  }
}
