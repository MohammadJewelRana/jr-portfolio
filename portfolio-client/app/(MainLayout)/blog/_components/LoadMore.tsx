import { motion } from "framer-motion";

const LoadMoreButton = ({ visibleCount, total, onClick }: any) => {
  if (visibleCount >= total) return null;

  return (
    <div className="text-center mt-14">
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="px-8 py-3 rounded-full bg-main text-black font-semibold cursor-pointer shadow-[0_10px_40px_rgba(40,233,140,0.4)]" 
      >
        Load More Projects ↗
      </motion.button>
    </div>
  );
};

export default LoadMoreButton;