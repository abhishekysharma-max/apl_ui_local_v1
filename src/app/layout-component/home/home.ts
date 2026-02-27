import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { HOME_DETAILS,HomeDetails } from '../../shared/navigation';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
@Component({
  selector: 'app-home',
  imports: [CardModule, AvatarModule,OverlayBadgeModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    homeItems: HomeDetails = HOME_DETAILS;
    selectedNavItemId = 1;
}
