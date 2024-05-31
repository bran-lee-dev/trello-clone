import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  standalone: true,
  imports: [],
  templateUrl: './navigation-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLinksComponent {}
