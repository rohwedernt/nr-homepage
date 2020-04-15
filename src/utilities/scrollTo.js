export const scrollTo = (breakpointSm) => {
  breakpointSm ? (window.pageYOffset < 685) && window.scrollTo(0, 685) : (window.pageYOffset < 410) && window.scrollTo(0, 410);
  }