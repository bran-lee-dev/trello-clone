import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TrelloLogoComponent } from '../../../shared/components/trello-logo/trello-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TrelloLogoComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public title = input.required<string>();
}
