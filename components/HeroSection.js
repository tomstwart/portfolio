import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section className="flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-bold">Hi, I'm a Developer</h1>
      <p className="text-xl mt-4">I build cool web apps</p>
    </motion.section>
  );
}