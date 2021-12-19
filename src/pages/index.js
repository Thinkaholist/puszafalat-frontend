import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import localize from '../components/localize';

const IndexPage = ({ data, location }) => {
  return (
    <>
      <Layout
        disclaimerText={data.footer.disclaimerText}
        location={location}
        menuItemText={data.header.recipesMenuItemText}
      >
        <div style={{ display: 'grid', placeContent: 'center' }}>
          <h1
            style={{
              fontSize: 30,
              margin: '32px 0',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {data.homePage.headerText}
          </h1>
          {data.puszafalatok.nodes.map((pf) => (
            <Link
              key={pf.slug.current}
              to={`${
                location.pathname === '/' ? '' : location.pathname
              }/puszafalat/${pf.slug.current}`}
            >
              {pf.title}
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default localize(IndexPage);

export const query = graphql`
  query {
    homePage: sanityHomePage(_id: { eq: "homePage" }) {
      headerText {
        _type
        en
        hu
        sk
      }
    }
    puszafalatok: allSanityPuszafalat {
      nodes {
        slug {
          current
        }
        title {
          _type
          hu
          en
          sk
        }
      }
    }
    header: sanityHeaderPage(_id: { eq: "headerPage" }) {
      recipesMenuItemText {
        _type
        hu
        en
        sk
      }
    }
    footer: sanityFooterPage(_id: { eq: "footerPage" }) {
      disclaimerText {
        _type
        en
        hu
        sk
      }
    }
  }
`;
