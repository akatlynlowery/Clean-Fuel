import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, className = "", light = false }: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`font-display font-bold text-4xl md:text-5xl mb-4 ${light ? 'text-white' : 'text-foreground'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg md:text-xl ${light ? 'text-white/80' : 'text-muted-foreground'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 w-24 mx-auto mt-6 rounded-full ${light ? 'bg-white/30' : 'bg-primary'}`}
      />
    </div>
  );
}
