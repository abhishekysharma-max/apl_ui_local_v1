import { Component, OnInit } from '@angular/core';
import { NAVIGATION_ITEMS, NavItem } from '../../shared/navigation';

@Component({
  selector: 'app-sidemenu',
  imports: [],
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.scss',
})
export class Sidemenu implements OnInit{
  readonly navItems: NavItem[] = NAVIGATION_ITEMS;
  selectedNavItemId = 1;

  selectNavItem(id: number) {
    this.selectedNavItemId = id;
    this.navItems.forEach(item => {
        item.isSelected = (item.id === this.selectedNavItemId);        
    });
    console.log(this.navItems)
  }
  ngOnInit(): void {
    console.log(this.navItems,"navitem")
  }
}
