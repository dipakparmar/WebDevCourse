/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Dipak Parmar',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/logo.png'.
    image: 'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/33030558_623016548038761_7116252684776112128_n.jpg?_nc_cat=0&oh=0f5c40392279bad04ca4e976edead7ec&oe=5BE68CED&efg=eyJhZG1pc3Npb25fY29udHJvbCI6MCwidXBsb2FkZXJfaWQiOiIxMDAwMDk5MTI2NDQ1MDMifQ%3D%3D',
    infoLink: 'https://www.facebook.com/DipakParmar65',
    pinned: true,
  },
  // Edit this code and uncomment to add your user badge to site...
  /*
  {
    caption: 'Your Name',
    // You will need to prepend the image path with your baseUrl
    image: 'your profile photo img url',
    infoLink: 'your Social media profile url',
    pinned: true,
  },
  */
];

const siteConfig = {
  title: 'WebSite Development Course' /* title for your website */,
  titleMed: ' Website Dev. Course',
  tagline: 'Build a Website using Wordpress',
  url: 'https://dipakparmar.github.io/',
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'WebDevCourse',
  organizationName: 'dipakparmar',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Getting-Started-with-web', label: 'Start Learning'},
    {doc: 'Tools', label: 'Tools'},
    {page: 'help', label: 'Help/FAQ'},
    {blog: true, label: 'Updates'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/logo.png',

  /* colors for website */
  colors: {
    primaryColor: '#003E51',
    secondaryColor: '#00B0B9',
  },

  /* custom fonts for website */
  fonts: {
    myFont: [
      "Serif",
      "Times New Roman",
      "Calibri"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Thopmson Rivers University | Faculty of Computer Science',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],
  stylesheets: ['/css/code-blocks-buttons.css'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/logo.png',
  twitterImage: 'img/logo.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/DipakParmar/WebDevCourse',
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
};

module.exports = siteConfig;
