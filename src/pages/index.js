import * as React from 'react';

const mainStyles = {
  height: '100vh',
  display: 'grid',
  placeContent: 'center',
  textAlign: 'center',
};

const IndexPage = () => {
  return (
    <>
      <main style={mainStyles}>
        <h1>Under Construction</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src='https://www.pngkit.com/png/full/88-880178_new-look-blog-site-under-construction-svg.png'
            alt='under construction illustration'
            style={{ width: '40%' }}
          />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
