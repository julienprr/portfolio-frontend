import React from 'react';

import FadeInOnScroll from './FadeInOnScroll';

const AnimatedSection = ({ children }: { className?: string; children: React.ReactNode; stagger?: boolean }) => (
  <section>
    {React.Children.map(children, (child) => (
      <FadeInOnScroll>{child}</FadeInOnScroll>
    ))}
  </section>
);

export default AnimatedSection;
