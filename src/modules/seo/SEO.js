import React from 'react';
import useSiteMetadata from './useSiteMetadata';

export default function SEO({
  title,
  description,
  imageSrc,
  article,
  pathname,
  children,
}) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    titleTemplate,
    siteUrl,
    twitterUsername,
    image,
    googleSiteVerification,
  } = useSiteMetadata();

  let url = `${siteUrl}${pathname || ``}`;

  if (!url.endsWith('/')) {
    url = `${url}/`;
  }

  const seo = {
    title: title ? titleTemplate.replace('%s', title) : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${imageSrc || image}`,
    url,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <link rel="icon" href={`${siteUrl}/favicon`} />
      <link rel="canonical" href={seo.url} />
      <meta name="theme-color" content="#fff" />

      <meta name="google-site-verification" content={googleSiteVerification} />

      <meta name="description" content={seo.description} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content="en_US" />
      {article && <meta property="og:type" content="article" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      {children}
    </>
  );
}
