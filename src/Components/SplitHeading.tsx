import { motion } from "framer-motion";

type Props = {
  className?: string;
};

const SplitHeading: React.FC<Props> = ({ className = "" }) => {
  const heading = [
    { text: "Welcome to", color: "text-white/80" },
    { text: "Cyber Warrior Training", color: "text-cyan-400" },
  ];

  return (
    <h1
      className={`text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg text-center flex flex-wrap justify-center gap-x-2 ${className}`}
    >
      {heading.map((part, pIndex) => (
        <span className={`${part.color} flex flex-wrap`} key={pIndex}>
          {part.text.split(" ").map((word, wIndex) => (
            <span key={wIndex} className="inline-block mr-2 whitespace-nowrap">
              {word.split("").map((char, cIndex) => (
                <motion.span
                  key={`${wIndex}-${cIndex}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (pIndex * 8 + wIndex * 3 + cIndex) * 0.03 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};

export default SplitHeading;
