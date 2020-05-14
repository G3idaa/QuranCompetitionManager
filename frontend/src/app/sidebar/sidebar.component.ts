import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: ' الصفحة الرئيسية',  icon: 'pe-7s-home', class: '' },
    { path: '/user', title: 'المعطيات الشخصية',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'المسابقات',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'البريد',  icon:'pe-7s-mail', class: '' },
    { path: '/icons', title: 'الاعدادات',  icon:'pe-7s-settings', class: '' },
    /*{ path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
