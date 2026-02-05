'use client';

import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeInUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const buttonVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
    hover: {
        scale: 1.06,
        boxShadow: '0 20px 35px -10px rgba(59, 130, 246, 0.4)',
        transition: { duration: 0.3 },
    },
    tap: {
        scale: 0.94,
        boxShadow: '0 10px 15px -5px rgba(59, 130, 246, 0.3)',
        transition: { duration: 0.2 },
    },
};

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="max-w-4xl w-full text-center space-y-10 py-16">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
                >
                    We ship code that lasts.
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl text-gray-300 font-light tracking-wide"
                >
                    Web. Mobile. Full-stack.
                </motion.p>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ delay: 0.4 }}
                    className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    From idea to app store — fast, clean, and completely yours.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariants}
                    transition={{ delay: 0.7 }}
                    className="pt-6"
                >
                    <motion.button
                        onClick={() => navigate('/contact')}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-gray from-blue-600 to-indigo-600 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-colors duration-300"
                    >
                        Start Project
                        <svg
                            className="ml-3 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
