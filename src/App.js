import { motion } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
import logo from "../src/assets/logo.png";

function App() {
  return (
    <div className="h-screen w-full bg-black/95">
      <div className=" flex justify-between items-center">
        <div></div>
        <motion.div className="text-white text-lg flex flex-col text-center">
          <motion.div >
            <img className="h-[160px]" src={logo} alt="Logo" />
          </motion.div>
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
          ></motion.div>
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

      <div className="h-full pb-[20%] pt-[5%] w-full font-workSans flex flex-col justify-between items-center">
        <div className="flex flex-col  items-center">
          <div className="text-5xl font-bold text-indigo-600 font-akshar ">
            We support creators & businesses on their Web3 journeys.
          </div>
          <div className="text-4xl text-white mt-4 text-center">
            All the technological and user experience assistance <br />
            you need for your NFT project.
          </div>
          <div className="mt-4 mb-10 text-2xl text-white">
            Smart Contract and Website Development, Audits, Growth, Consultancy.
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
