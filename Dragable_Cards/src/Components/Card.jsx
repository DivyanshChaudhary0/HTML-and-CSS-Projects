
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";


const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className=" relative w-60 bg-zinc-700 rounded-[40px] py-10 overflow-hidden">
      <div className="w-full px-4">
        <FaRegFileAlt />
      </div>
      <p className="mt-4 text-sm mb-6 px-4">
        {data.desc}
      </p>
      <div className=" flex items-center justify-between p-4">
        <p className="mr-32 py-4">{data.size}</p>
        <span className="w-6 h-6 rounded-full bg-zinc-400 flex items-center justify-center">
            {
                data.iconDownload ? <GoDownload size="14px" /> : <RxCross2/>
            }
        </span>
      </div>
      {
        data.isDownload && <div className="absolute bottom-0 px-4 py-4 bg-green-400 w-full text-center">
        <p>Download Now.</p>
      </div>
      }
    </motion.div>
  );
};

export default Card;
