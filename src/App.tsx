import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Background from './components/Background';
import { useEffect } from 'react';

import ReactGA from 'react-ga4';

ReactGA.initialize('G-MYC03LH9EB');

function App() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: location.pathname + location.search,
        });
    }, [location]);

    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Background />
            <div className="fixed inset-0">
                <Navbar />
                <main className="relative w-full h-full overflow-y-auto  min-h-screen">
                    <AppRoutes />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
