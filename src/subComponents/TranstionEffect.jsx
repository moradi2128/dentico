import { motion } from "framer-motion"
import { useRouter } from 'next/router';

const TranstionEffect = ({ children }) => {
    const router = useRouter();

    return (
        <motion.div key={router.route}>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary flex justify-center items-center'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-white'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-secondary'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            />
            {children}
        </motion.div>)

}

export default TranstionEffect