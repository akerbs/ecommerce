import { graphql, useStaticQuery } from "gatsby"
import PropTypes, { string } from "prop-types"

function SEO({ description, lang, meta, title }){
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const metaData = [
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata.author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ].concat(meta)
  }

  interface Helmet {
    html: string
    title: string
    titleTemplate: string
    meta: string
  }
  
  return (
    <>
      <Helmet: Helmet
        htmlAttributes={lang: string}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={metaData}
      />
  </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
