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
          <motion.div
            className="text-xl font-bold text-indigo-600 font-akshar "
            initial={{ scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                easings: "anticipate",
                duration: 0.4,
              },
            }}
          >
            WAGMNFT: Ready for Building your Web3 Projects.
          </motion.div>
          <div className="text-4xl text-white mt-4 text-center flex flex-row">
            <motion.div
              className="mr-4"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              Smart Contract,
            </motion.div>
            <motion.div
              className="mr-4"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  delay: 1,
                  duration: 0.5,
                },
              }}
            >
              Audits,
            </motion.div>
            <motion.div
              className="mr-4"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
            >
              Growth,
            </motion.div>
            <motion.div
              className="mr-4"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  delay: 1.5,
                  duration: 0.5,
                },
              }}
            >
              Consultancy
            </motion.div>
          </div>

          <motion.div
            className="text-4xl text-white mt-4 text-center flex flex-row"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                delay: 2,
                duration: 0.5,
              },
            }}
          >
            Technical Support and more..
          </motion.div>
          <div className="mt-4 text-5xl text-white flex flex-row">
            {"Everyting You Need To Join World of NFTs!"
              .split("")
              .map((item, index, arr) => {
                console.log(item);
                return (
                  <motion.span
                    className={`relative ${item === " " && "mr-4"} ${
                      arr.length - 5 <= index && "text-indigo-600 font-bold"
                    }`}
                    initial={{ scale: 0, right: -30, top: -30 }}
                    animate={{
                      scale: 1,
                      top: 0,
                      right: 0,
                      transition: {
                        delay: 2.5 + 0.1 * index,
                        duration: 0.1,
                      },
                    }}
                  >
                    {item}
                  </motion.span>
                );
              })}
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
