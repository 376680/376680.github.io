import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  initialY?: number;
  delay?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  initialY = 20,
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  once?: boolean;
}

export function AnimatedCard({
  children,
  className = "",
  index = 0,
  once = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  once?: boolean;
}

export function AnimatedItem({
  children,
  className = "",
  index = 0,
  once = true,
}: AnimatedItemProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {children}
    </motion.div>
  );
}