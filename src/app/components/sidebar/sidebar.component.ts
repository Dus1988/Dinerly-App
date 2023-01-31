import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavItem } from './models/nav-item';
import { SidebarService } from './services/sidebar-service.service';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public open: boolean;
  public navItems: Array<NavItem>;

  private subs: Array<Subscription>;

  constructor(private service: SidebarService,
    public route: ActivatedRoute) {

    this.open = false;
    this.subs = [];
    this.configureNav();

  }


  ngOnInit() {
    let sub = this.service.toggleSideBar.pipe(debounceTime(200)).subscribe(() => this.toggleSidebar());
    this.subs.push(sub);
    // debugger;
    // this.route;
  }

  public configureNav(): void {
    this.navItems = [
      // new NavItem({
      //   icon: 'fas fa-home',
      //   label: 'Home',
      //   route: '/'
      // }),
      new NavItem({
        icon: 'fas fa-utensils',
        label: 'Dinners',
        route: '/dinners',
      }),
      new NavItem({
        icon: 'fas fa-shopping-cart',
        label: 'Shopping',
        route: '/shopping'
      }),
      new NavItem({
        icon: 'fas fa-clipboard-list',
        label: 'Inventory',
        route: '/inventory',
      })
    ];
  }

  public toggleSidebar(): void {
    this.open = !this.open;
  }


  ngOnDestroy(): void {
    if (this.subs.length > 0) {
      this.subs.forEach(sub => {
        if (!sub.closed) {
          sub.unsubscribe();
        }
      });
    }
  }

}


