import { Route, Routes, useLocation } from 'react-router-dom';
import { About, Home, NotFound, Work, Services } from '../pages';
import Contact from '../pages/Contact';
import { AnimatePresence, motion, type Variants } from 'framer-motion';

const pageVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        // x: 0, scale: 1
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        // x: "100%", scale: 0.95
        transition: {
            duration: 0.4,
            ease: 'easeIn',
        },
    },
};

export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Home />
                        </motion.div>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <About />
                        </motion.div>
                    }
                />

                <Route
                    path="/work"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Work />
                        </motion.div>
                    }
                />

                <Route
                    path="/services"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Services />
                        </motion.div>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Contact />
                        </motion.div>
                    }
                />

                <Route
                    path="*"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <NotFound />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}
