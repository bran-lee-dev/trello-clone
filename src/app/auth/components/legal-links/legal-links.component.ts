import { Component, input } from '@angular/core';
import { LegalLink } from '../../models';

@Component({
  selector: 'app-legal-links',
  standalone: true,
  imports: [],
  templateUrl: './legal-links.component.html',
})
export class LegalLinksComponent {
  public legalLinksList = input.required<LegalLink[]>();
}
