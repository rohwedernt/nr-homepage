import posed from 'react-pose';

export const SocialIconAnimator = posed.div({
    open: {
      y: '0%',
      delayChildren: 0,
      staggerChildren: 300,
      transition: {
          y: { type: 'spring', stiffness: 500, damping: 5 },
          default: { duration: 300 }
        }
    },
    closed: { y: '-10%', delay: 300 }
  });
  