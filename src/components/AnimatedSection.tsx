import React from 'react';

import { motion } from 'framer-motion';

import FadeInOnScroll from './FadeInOnScroll';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const AnimatedSection = ({
  className,
  children,
  stagger = true,
}: {
  className?: string;
  children: React.ReactNode;
  stagger?: boolean;
}) => (
  <section>
    {React.Children.map(children, (child) => (
      <FadeInOnScroll>{child}</FadeInOnScroll>
    ))}
  </section>
);

export default AnimatedSection;
