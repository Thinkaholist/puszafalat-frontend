import { createGlobalStyle } from 'styled-components';
import AgrandirGrandLight300 from '../assets/fonts/agrandir_grand_light_300-webfont.woff2';
import AgrandirRegular400 from '../assets/fonts/agrandir_regular_400-webfont.woff2';
import AgrandirBold700 from '../assets/fonts/agrandir_text_bold_700-webfont.woff2';
import AgrandirHeavy800 from '../assets/fonts/agrandir_grand_heavy_800-webfont.woff2';
import AdelleRegular400 from '../assets/fonts/adelle_reg-webfont.woff2';
import AdelleItalic400 from '../assets/fonts/adelle_italic-webfont.woff2';
import AdelleBold700 from '../assets/fonts/adelle_bold-webfont.woff2';
import AdelleBoldItalic700 from '../assets/fonts/adelle_bolditalic-webfont.woff2';

const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Agrandir';
        src: url(${AgrandirGrandLight300}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Agrandir';
        src: url(${AgrandirRegular400}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Agrandir';
        src: url(${AgrandirBold700}) format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Agrandir';
        src: url(${AgrandirHeavy800}) format('woff2');
        font-weight: 800;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Adelle';
        src: url(${AdelleRegular400}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Adelle';
        src: url(${AdelleItalic400}) format('woff2');
        font-weight: 400;
        font-style: italic;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Adelle';
        src: url(${AdelleBold700}) format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Adelle';
        src: url(${AdelleBoldItalic700}) format('woff2');
        font-weight: 700;
        font-style: italic;
        font-display: fallback;
    }
`;

export default Typography;
