import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-atlassian-logo',
  standalone: true,
  imports: [],
  templateUrl: './atlassian-logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtlassianLogoComponent {}
