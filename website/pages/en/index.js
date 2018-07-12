/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
   {siteConfig.titleMed}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('WpWoo.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="https://www.tru.ca/forms/science/short-term/" > Register Here ! </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn" background="light">
    {[
      {
        content: 'Easy to manage your website from feature rich smart dashboard and responsive design of themes helps your site get perfect and smooth performance view on every device.',
        image: imgUrl('simplycity.png'),
        imageAlign: 'top',
        title: 'Simplicity and Responsive',
      },
      {
        content: 'Inbuilt 1000s of free themes in store. PreDesigned Website Layout that helps to make your website fresh and new in a click, no more wait to change design of website. and easy to customize with theme option.',
        image: imgUrl('theme.jpg'),
        imageAlign: 'top',
        title: 'Themes',
      },
      {
        content: 'Plugins are the extra feature adding scripts that helps to add more functionality to your site. like automation, social login, email, payments , shop management, etc,.',
        image: imgUrl('plugins.png'),
        imageAlign: 'top',
        title: 'Plugins',
      },
      {
        content: 'Another Great Feature of WordPress CMS is the multipurpose usage, you can use it to make your portfolio, blog, online shop site, almost you can me all type of.. also you can transfer your contents from another blog cms like blogger, etc.',
        image: imgUrl('multipurpose.png'),
        imageAlign: 'top',
        title: ' Multi-Purpose and Easy Migration',
      },
 /*{
        content: 'The content of my second feature',
        image: imgUrl('easyswitch.jpg'),
        imageAlign: 'top',
        title: 'EASYSWITCH',
      }, */
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Workshop Highlights</h2>
    <MarkdownBlock>
       
      > Build an E-Commerce Website
       
      * Portfolio Site
      
      * Blogging Site

    </MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'In this One Day WorkShop you can get better how the E-commerce system works and how you can setup your online store without no coding experience. Adding products, managing order and creating invoices - packaging slips and many more things...! ',
        image: imgUrl('Shop.jpg'),
        imageAlign: 'right',
        title: 'Learn How to make Online Shop Website',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Are you a photographer or hobbyist or want to share something with world though your website then WordPress is perfect solution for that, using it you can build your own portfolio or blogging site.',
        image: imgUrl('portfolioBanner.jpg'),
        imageAlign: 'left',
        title: 'Create a Portfolio Site',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'WooCommerce is a free eCommerce plugin that allows you to sell anything, beautifully. Built to integrate seamlessly with WordPress, WooCommerce is the world’s favorite eCommerce solution that gives both store owners and developers complete control. </br> With endless flexibility and access to hundreds of free and premium WordPress extensions, WooCommerce now powers 30% of all online stores — more than any other platform.',
        image: imgUrl('WPWooBanner.png'),
        imageAlign: 'right',
        title: 'WordPress + E-Commerce = WooCommerce',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
