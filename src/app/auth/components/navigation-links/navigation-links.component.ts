import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationLink } from '../../models';

@Component({
  selector: 'app-navigation-links',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLinksComponent {
  public navigationLinksList = input.required<NavigationLink[]>();
}
