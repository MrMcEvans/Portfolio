import { motion, useScroll } from "framer-motion"
import { useInView, useAnimation } from "framer-motion";


const line1 = "Thank you for taking the time"
const line2 = "to view my portfolio."
const line3 = "-Andrew Evans"
const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.05
        }
    }
}
const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0
    }
}

export const OpenPage = () => {
    return(
        <div className="opening">
            <motion.h1
                className="load-screen--message"
                initial="hidden"
                animate="visible"
                variants={sentence}
            >
                {line1.split("").map((char, index) => {
                    return(
                        <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                    )
                })}
                <br />
                {line2.split("").map((char, index) => {
                    return(
                        <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                    )
                })}
                <br />
                {line3.split("").map((char, index) => {
                    return(
                        <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                    )
                })}
            </motion.h1>
            </div>
    )
    
}