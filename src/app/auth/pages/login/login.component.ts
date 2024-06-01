import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { ErrorMessages, NavigationLink, SocialNetwork } from '../../models';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { SocialWrapperComponent } from '../../components/social-wrapper/social-wrapper.component';
import { ProtectedSiteMessageComponent } from '../../components/protected-site-message/protected-site-message.component';
import { LegalLinksComponent } from '../../components/legal-links/legal-links.component';
import { NavigationLinksComponent } from '../../components/navigation-links/navigation-links.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthFormComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LegalLinksComponent,
    NavigationLinksComponent,
    ProtectedSiteMessageComponent,
    SocialWrapperComponent,
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public readonly socialMediaList: SocialNetwork[] = [
    {
      image: {
        url: 'https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/google-logo.5867462c.svg',
        alt: 'Google logo',
      },
      name: 'google',
      authenticateWithSocialMedia: () => {
        console.log('Google');
      },
    },
    {
      image: {
        url: 'https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/microsoft-logo.c73d8dca.svg',
        alt: 'Microsoft logo',
      },
      name: 'microsoft',
      authenticateWithSocialMedia: () => {
        console.log('Microsoft');
      },
    },
    {
      image: {
        url: 'https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/apple-logo.54e0d711.svg',
        alt: 'Apple logo',
      },
      name: 'apple',
      authenticateWithSocialMedia: () => {
        console.log('Apple');
      },
    },
    {
      image: {
        url: 'https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/slack-logo.5d730c10.svg',
        alt: 'Slack logo',
      },
      name: 'slack',
      authenticateWithSocialMedia: () => {
        console.log('Slack');
      },
    },
  ];

  public readonly navigationLinksList: NavigationLink[] = [
    {
      label: "Can't log in?",
      routerLink: '/resetpassword',
    },
    {
      label: '•',
    },
    {
      label: 'Create an account',
      routerLink: '/signup',
    },
  ];

  public readonly errorMessages: ErrorMessages = {
    required: 'Enter an email address',
    email: 'Enter a valid email address',
  };
}
