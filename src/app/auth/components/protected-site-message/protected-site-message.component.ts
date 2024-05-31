import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-protected-site-message',
  standalone: true,
  templateUrl: './protected-site-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtectedSiteMessageComponent {}
