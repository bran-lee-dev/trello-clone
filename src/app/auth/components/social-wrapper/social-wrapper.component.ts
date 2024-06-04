import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
  PRECONNECT_CHECK_BLOCKLIST,
  TitleCasePipe,
} from '@angular/common';
import { SocialNetwork } from '../../models';

@Component({
  selector: 'app-social-wrapper',
  standalone: true,
  imports: [TitleCasePipe, NgOptimizedImage],
  providers: [
    {
      provide: PRECONNECT_CHECK_BLOCKLIST,
      useValue: 'https://id-frontend.prod-east.frontend.public.atl-paas.net',
    },
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/${config.src}`;
      },
    },
  ],
  templateUrl: './social-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialWrapperComponent {
  public socialMediaList = input.required<SocialNetwork[]>();
}
