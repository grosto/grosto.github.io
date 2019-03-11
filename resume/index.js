import path from 'path';
import React from 'react';
import ReactPDF, { Font } from '@react-pdf/renderer';
import { FONT_FAMILY, FONT_FAMILY_BOLD, FONT_FAMILY_ITALIC } from './theme';
import App from './App';

Font.register(`${__dirname}/fonts/OpenSans-Regular.ttf`, {
  family: FONT_FAMILY
});

Font.register(`${__dirname}/fonts/OpenSans-Bold.ttf`, {
  family: FONT_FAMILY_BOLD
});

Font.register(`${__dirname}/fonts/OpenSans-Italic.ttf`, {
  family: FONT_FAMILY_ITALIC
});

ReactPDF.render(
  <App />,
  `${path.resolve(__dirname, '../website')}/GiorgiRostomashviliResume.pdf`
);
