import { Component } from '@angular/core';
import { InlineShareButtonsConfig } from 'sharethis-angular';
import { StickyShareButtonsConfig } from 'sharethis-angular';

//Inline Share Buttons
const inlineShareButtonsConfig: InlineShareButtonsConfig = {
  alignment: 'center', // alignment of buttons (left, center, right)
  color: 'white', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  font_size: 14, // font size for the buttons
  labels: null, // button labels (cta, counts, null)
  language: 'en', // which language to use (see LANGUAGES)
  networks: [
    // which networks to include (see SHARING NETWORKS)
    'whatsapp',
    'linkedin',
    // 'messenger',
    'facebook',
    // 'twitter',
    //'email',
    //'print'
  ],
  padding: 16, // padding within buttons (INTEGER)
  radius: 0, // the corner radius on each button (INTEGER)
  show_total: false,
  size: 18, // the size of each button (INTEGER)

  // OPTIONAL PARAMETERS

  url: 'https://mabundagroup.com/', // (defaults to current url)
  image: 'https://mabundagroup.com/seo-img/share-img.png',  // (defaults to og:image or twitter:image)
  description: 'Mabunda Group Pty - EHS consulting company, geared to assist the clients to comply with OHS.',       // (defaults to og:description or twitter:description)
  title: 'Mabunda Group', // (defaults to og:title or twitter:title)
  message: 'Good day, I would like to hear more about your services. Can we please have a discussion? Thanks.',     // (only for email sharing)
  subject: 'EHS and Engineering services enquiries',  // (only for email sharing)
  username: 'custom twitter handle' // (only for twitter sharing)

};

//Sticky Share Buttons
const stickyShareButtonsConfig: StickyShareButtonsConfig = {
  alignment: 'left',    // alignment of buttons (left, right)
  color: 'white',      // set the color of buttons (social, white)
  enabled: true,        // show/hide buttons (true, false)
  font_size: 16,        // font size for the buttons
  hide_desktop: false,  // hide buttons on desktop (true, false)
  labels: 'counts',     // button labels (cta, counts, null)
  language: 'en',       // which language to use (see LANGUAGES)
  min_count: 0,         // hide react counts less than min_count (INTEGER)
  networks: [           // which networks to include (see SHARING NETWORKS)
    'linkedin',
    //'messenger',
    'facebook',
    //'twitter',
    'whatsapp',
    'email',
    //'print'
   
  ],
  padding: 12,          // padding within buttons (INTEGER)
  radius: 4,            // the corner radius on each button (INTEGER)
  show_total: false,     // show/hide the total share count (true, false)
  show_mobile: true,    // show/hide the buttons on mobile (true, false)
  show_toggle: false,    // show/hide the toggle buttons (true, false)
  size: 38,             // the size of each button (INTEGER)
  top: 260,             // offset in pixels from the top of the page


  // OPTIONAL PARAMETERS

  url: 'https://mabundagroup.com/', // (defaults to current url)
  image: 'https://mabundagroup.com/seo-img/share-img.png',  // (defaults to og:image or twitter:image)
  description: 'Mabunda Group Pty - EHS consulting company, geared to assist the clients to comply with OHS.',       // (defaults to og:description or twitter:description)
  title: 'Mabunda Group', // (defaults to og:title or twitter:title)
  message: 'Good day, I would like to hear more about your services. Can we please have a discussion? Thanks.',     // (only for email sharing)
  subject: 'EHS and Engineering services enquiries',  // (only for email sharing)
  username: 'custom twitter handle' // (only for twitter sharing)
};


@Component({
    selector: 'app-social-media-buttons',
    templateUrl: './social-media-buttons.component.html',
    styleUrl: './social-media-buttons.component.scss',
    standalone: false
})
export class SocialMediaButtonsComponent {
    inlineShareButtonsConfig = inlineShareButtonsConfig;
    stickButton = stickyShareButtonsConfig;

}