import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* 
    https://www.joshwcomeau.com/css/custom-css-reset/
    */

    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
    box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
    margin: 0;
    }
    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
        height: 100%;
    }
    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    /*
    7. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font: inherit;
    }
    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    /*
    9. Create a root stacking context
    */
    #root, #__next {
        isolation: isolate;
    }

    /********************/
    /* END OF CSS RESET */
    /********************/

    /* Global CSS Variables */
    :root {
        --clr-background: hsla(69 47% 97% / 1);
        --clr-black: hsla(0 0% 18% / 1);
        --clr-blue: hsla(202 69% 56% / 1);
        --clr-green: hsla(138 51% 40% / 1);
        --clr-orange: hsla(15 80% 55% / 1);
        --clr-pink: hsla(336 67% 67% / 1);
        
        --font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
    }
    

    /* Custom Global Styles */

    html, body, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;

    }

    body {
        background-color: var(--clr-background);
        color: var(--clr-black);
        font-family: var(--font-family);
    }
`;

export default GlobalStyles;
