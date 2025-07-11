import { motion } from 'framer-motion';

const FadeInOnScroll = ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.4 }}
    className={className}
    style={{ willChange: 'opacity, transform' }}
  >
    {children}
  </motion.div>
);

export default FadeInOnScroll;
