import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { SocialNetwork } from '../../models';

@Component({
  selector: 'app-social-wrapper',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './social-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialWrapperComponent {
  public socialMediaList = input.required<SocialNetwork[]>();
}
