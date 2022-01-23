// MOBILE FIRST APPROACH:

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FOOD_COLORS = {
  1: 'var(--clr-blue)',
  2: 'var(--clr-green)',
  3: 'var(--clr-orange)',
  '1-light': 'var(--clr-blue-light)',
  '2-light': 'var(--clr-green-light)',
  '3-light': 'var(--clr-orange-light)',
};
