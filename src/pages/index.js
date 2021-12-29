import * as React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Logo from '../images/puszafalat_LOGO-01.svg';

const mainStyles = {
  height: '100vh',
  color: '#2e2e2e',
  display: 'grid',
  placeContent: 'center',
  textAlign: 'center',
  fontFamily:
    'Agrandir, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
};

const IndexPage = () => {
  return (
    <>
      {/* TODO: Move GlobalStyles & Typography to Layout Component when ready */}
      <GlobalStyles />
      <Typography />
      <main style={mainStyles}>
        <h1>Itt a</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '2rem 0',
          }}
        >
          <img src={Logo} alt='puszafalat logo' />
        </div>
        <h1>weboldal épül!</h1>
      </main>
    </>
  );
};

export default IndexPage;
