import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trello-logo',
  standalone: true,
  templateUrl: './trello-logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrelloLogoComponent {}
