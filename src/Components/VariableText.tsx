import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

const VariableText: React.FC<Props> = ({ text, className = "" }) => {
  return (
    <p className={`mt-4 max-w-2xl text-center text-gray-200 text-sm md:text-base leading-relaxed ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.01,
            duration: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  );
};

export default VariableText;
