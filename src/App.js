import { motion } from "framer-motion";
import { BsTwitter } from "react-icons/bs";

function App() {
  return (
    <div className="h-screen w-full bg-black/95">
      <div className="h-16 w-full bg-black border-b border-b-slate-800 flex justify-between items-center">
        <div></div>
        <motion.div className="text-white text-lg flex flex-col text-center">
          <motion.div>WAGMNFT.COM</motion.div>
          <motion.div
            className="text-xs"
            initial={{
              opacity: 0.6,
              scale: 1,
            }}
            animate={{
              opacity: 1,
              scale: 1.05,
              transition: {
                duration: 1,
                repeat: Infinity,

                repeatType: "mirror",
              },
            }}
          >
            Join the Decentralized apps world in a powerful way.
          </motion.div>
        </motion.div>
        <div className="">
          {/*     <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            JOIN the Discord
          </button> */}
        </div>
      </div>

      <div className="h-full py-[15%] w-full font-workSans flex flex-col justify-between items-center">
        <div className="flex flex-col  items-center">
          <div className="text-xl font-bold text-indigo-600 font-akshar ">
            WAGMNFT: Ready for Building your Web3 Projects.
          </div>
          <div className="text-4xl text-white mt-4 text-center">
            Growth, Consultancy, Smart Contract Audits
            <br />
            Technical Support and more..
          </div>
          <div className="mt-4 text-5xl text-white">
            Everyting You Need To Join World of NFTs!
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            window.open("https://twitter.com/WAGMNFT", "_blank");
          }}
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <BsTwitter
            className="hover:cursor-pointer hover:fill-indigo-600"
            size={24}
          ></BsTwitter>
        </button>
      </div>
    </div>
  );
}

export default App;
