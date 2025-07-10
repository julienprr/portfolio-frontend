import { motion } from 'framer-motion';

const FadeInOnScroll = ({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount:0.2 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeInOnScroll;
