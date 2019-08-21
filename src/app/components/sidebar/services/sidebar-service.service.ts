import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  toggleSideBar: Subject<any>;

  constructor() {
    this.toggleSideBar = new Subject();
  }
}
