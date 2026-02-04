import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Background from './components/Background';

function App() {
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
                <main className="relative w-full h-full">
                    <AppRoutes />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
