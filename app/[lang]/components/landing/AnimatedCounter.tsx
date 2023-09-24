import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  className: string;
};

function AnimatedCounter({ from, to, className }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const count = useMotionValue(from);
  const toValue = useTransform(count, (latest) => latest.toFixed(2));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2 });
    }
  }, [count, isInView, to]);

  return (
    <motion.span ref={ref} className={className}>
      {toValue}
    </motion.span>
  );
}

export default AnimatedCounter;