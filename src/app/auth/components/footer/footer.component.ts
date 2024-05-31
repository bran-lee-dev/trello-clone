import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AtlassianLogoComponent } from '../../../shared/components/atlassian-logo/atlassian-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AtlassianLogoComponent],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
