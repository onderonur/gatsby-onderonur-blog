import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          twitterUsername
          titleTemplate
          linkedinUsername
          mail
          title
          githubUsername
          image
          description
          googleSiteVerification
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
