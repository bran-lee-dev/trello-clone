import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { SocialNetwork } from '../../models';

@Component({
  selector: 'app-social-wrapper',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './social-wrapper.component.html',
})
export class SocialWrapperComponent {
  @Input({ required: true })
  public socialMediaList!: SocialNetwork[];
}
