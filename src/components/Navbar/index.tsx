// src/components/Navbar.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface NavItem {
    to: string;
    label: string;
}

const navItems: NavItem[] = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    // { to: '/work', label: 'Work' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    // Mobile menu slide from right
    const menuVariants = {
        closed: {
            x: '100%',
            opacity: 0,
            transition: { duration: 0.4, ease: 'easeIn' },
        },
        open: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const itemVariants = {
        closed: { opacity: 0, y: 20 },
        open: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.07 + 0.15, duration: 0.4 },
        }),
    };

    return (
        <nav className="bg-deep-navy shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo + Brand Name */}
                    <div className="flex items-center gap-3">
                        <NavLink to="/" className="shrink-0">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-soft-white/10">
                                <img
                                    src="/logo_noybcore.svg"
                                    alt="NoYbCore logo"
                                    className="h-9 w-auto rounded-full"
                                />
                            </div>
                        </NavLink>

                        <div className="hidden md:block">
                            <NavLink
                                to="/"
                                className="text-2xl font-bold text-blue-gray tracking-tight hover:text-teal-mid transition-colors"
                            >
                                NoYbCore
                            </NavLink>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-teal-mid font-semibold border-b-2 border-teal-mid pb-1'
                                        : 'text-blue-gray hover:text-teal-mid transition-colors duration-200'
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Hamburger Menu Button */}
                    <button
                        type="button"
                        className={`md:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-teal-mid focus:ring-offset-2 focus:ring-offset-deep-navy rounded p-1 ${
                            isOpen ? 'text-teal-mid' : 'text-blue-gray'
                        }`}
                        onClick={toggleMenu}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        <motion.div
                            animate={isOpen ? 'open' : 'closed'}
                            className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        closed: {
                                            rotate: 0,
                                            y: 0,
                                            opacity: 1,
                                            scaleX: 1,
                                        },
                                        open: {
                                            rotate:
                                                i === 0
                                                    ? -45
                                                    : i === 2
                                                    ? 45
                                                    : 0,
                                            y: i === 0 ? 6 : i === 2 ? -6 : 0,
                                            opacity: i === 1 ? 0 : 1,
                                            scaleX: i === 1 ? 0 : 1,
                                        },
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }}
                                    className="block w-7 h-0.5 bg-current rounded-full origin-center"
                                />
                            ))}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Full-Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants as any}
                        className="fixed inset-0 bg-deep-navy md:hidden z-40 pt-20 overflow-y-auto"
                    >
                        <div className="container mx-auto px-6 py-12 flex flex-col items-center space-y-10 text-2xl font-medium">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.to}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                >
                                    <NavLink
                                        to={item.to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-teal-mid font-bold'
                                                : 'text-soft-white hover:text-teal-mid transition-colors duration-200'
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
