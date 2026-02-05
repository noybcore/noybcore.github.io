import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../components/buttons/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen  text-white flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center max-w-lg"
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.7,
                        type: 'spring',
                        stiffness: 120,
                    }}
                    className="text-9xl md:text-[12rem] font-black leading-none tracking-tighter"
                    style={{
                        background:
                            'linear-gradient(90deg, #a78bfa, #7c3aed, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-2xl md:text-3xl font-semibold mt-4 mb-6"
                >
                    Oops! Page not found
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-gray-400 text-lg mb-10"
                >
                    The page you're looking for might have been moved, deleted,
                    or never existed.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <Button
                        to="/"
                        variant="primary"
                        size="lg"
                        icon={<Home size={20} />}
                        delay={0.9}
                    >
                        Back to Home
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="mt-16 text-sm text-gray-600"
                >
                    Maybe the page went on vacation? 🌴
                </motion.div>
            </motion.div>
        </div>
    );
}
