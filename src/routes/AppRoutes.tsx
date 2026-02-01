import { Route, Routes } from 'react-router-dom';
import { About, Home, NotFound, Work, Services } from '../pages';
import Contact from '../pages/Contact';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
