import * as React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import { graphql } from 'gatsby';

const mainStyles = {
  height: '100vh',
  display: 'grid',
  placeContent: 'center',
  textAlign: 'center',
  fontFamily: 'Agrandir',
};

const IndexPage = ({ data }) => {
  const puszafalatok = data.puszafalatok.nodes;
  console.log(puszafalatok);
  return (
    <>
      {/* TODO: Move GlobalStyles & Typography to Layout Component when ready */}
      <GlobalStyles />
      <Typography />
      <main style={mainStyles}>
        <h1
          style={{
            fontSize: 40,
            marginBottom: 32,
            fontWeight: 700,
          }}
        >
          Itt a <span style={{ borderBottom: '4px solid' }}>Puszafalat</span>{' '}
          weboldal épül!
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src='https://s3-alpha-sig.figma.com/img/5dfd/78f7/a23f220917fa4fcf3d916429d26537fa?Expires=1639958400&Signature=X2f2fTCDmLpZCwBVm8MZcxQfSpfWMy6427ps49dgyyo0jx2VpmBeSY0XpOd3XnrJa5TMmHeEMBP7A-NqZEqk5Ec76i3an0E9spcDd4o1PKdlQvZW6Z39FrCRR61~EhZY2DnpxxF4m~ZrEKIyOWYS8QnX4ODDyWhOXm9KOf9tFoP2oC3pnK1UDWF5XZT2LMDlunO4EFrJkjttrs~UXuMojX2MYwyV5cDLvZ4~XQUiq2T2uCv9XyP~l9g-H~YZ5ssnrdde3RvOULlH0uU-OEG~Yh4uRrNP3n4CWFFDeTh2954sHBrYLY5Uik2uKaHol60QrQmuelPCGDVbQCxmXIneLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            alt='under construction illustration'
            style={{ width: '70%' }}
          />
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    puszafalatok: allSanityPuszafalat {
      nodes {
        origin {
          hu
        }
        title {
          hu
        }
        story {
          hu
        }
        slug {
          current
        }
        song {
          title {
            hu
          }
          lyrics {
            hu
          }
        }
      }
    }
  }
`;
