import posed from 'react-pose';

export const SocialIconAnimator = posed.div({
    open: {
      x: '0%',
      delayChildren: 0,
      staggerChildren: 450,
      transition: {
          x: { type: 'tween', stiffness: 100, damping: 1000 },
          default: { duration: 1000 }
        }
    },
    closed: { x: '-10%', delay: 300 }
  });
  