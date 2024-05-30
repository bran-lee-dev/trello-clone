import { Image, SocialMedia } from '@models/index';

export interface SocialNetwork {
  image: Image;
  name: SocialMedia;
  authenticateWithSocialMedia: () => void;
}
