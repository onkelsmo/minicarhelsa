import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Minicar Helsa',
  title: 'Minicar Helsa',
  url: 'www.minicarhelsa.de',
  author: 'Minicar Helsa',
  keywords: [
    'gatsby',
    'minicar',
    'helsa',
    'familienbetrieb',
    'Arztbesuche',
    'Rehamaßnahmen',
    'Kuraufenthalt',
    'Einkaufsfahrten',
    'Flughafentransfer',
    'Dialyse',
    'Chemotherapie',
    'Strahlentherapie',
    'Rollstuhlfahrten',
    'Kurierfahrten',
    'Krankenkasse',
    'Arbeitsunfall',
    'Transportschein'
  ],
  img: '',
  twitterId: '',
  facebookId: '',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
    </Helmet>
  );
};

export default SEO;
