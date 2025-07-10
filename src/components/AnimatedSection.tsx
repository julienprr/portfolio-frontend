import { motion } from 'framer-motion';
import React from 'react';

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
  <motion.section
    variants={stagger ? containerVariants : undefined}
    initial="hidden"
    whileInView="visible"
    exit="hidden"
    viewport={{ once: false, amount: 0 }}
    className={className}
  >
    {React.Children.map(children, (child) => (
      <motion.div variants={childVariants}>{child}</motion.div>
    ))}
  </motion.section>
);

export default AnimatedSection;
