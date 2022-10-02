import Form from "./Form";
import { motion } from "framer-motion";

export default function Main({
  cantStart,
  startGame,
  shuffleOptions,
  handleChange,
  handleSubmit,
  api,
}) {
  return (
    <main className="pt-12">
      <div className="shapedividers_com-main h-40"></div>
      <div className="bg-[#dde6f8]">
        <motion.div
          whileInView={{
            opacity: [0, 0.5, 1],
            y: [50, -30, 0],
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          id="main"
          className="flex items-center justify-center"
        >
          <h2 className="font-karla font-bold leading-tight text-4xl z-10">
            Let's Go
          </h2>
          <i className="ri-fire-fill ri-3x text-[#94D7A2] mb-2"></i>
        </motion.div>
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, delay: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="font-medium text-lg">Good luck, and have fun!</span>
        </motion.div>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          api={api}
          cantStart={cantStart}
          startGame={startGame}
          shuffleOptions={shuffleOptions}
        />
      </div>
    </main>
  );
}
