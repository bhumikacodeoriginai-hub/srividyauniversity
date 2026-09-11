// src/App.jsx
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Sections
import HomeSection from './components/Sections/HomeSection';
import AboutSection from './components/Sections/AboutSection';
import DisciplinesSection from './components/Sections/DisciplinesSection';
import CoursesSection from './components/Sections/CoursesSection';
import FacultySection from './components/Sections/FacultySection';
import GallerySection from './components/Sections/Gallerysection';
import EventsSection from './components/Sections/EventsSection';
import ContactSection from './components/Sections/ContactSection';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

// Import UI Components
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import LoadingScreen from './components/UI/LoadingScreen';
import ScrollProgress from './components/UI/ScrollProgress';

// Import Theme Context
import { ThemeProvider, useTheme } from './context/ThemeContext';

// 3D Components
import Hero3D from './components/3D/Hero3D';

// Styles
import './styles/App.css';
import './styles/animations.css';
import './styles/traditional.css'; // traditional theme — loaded last so it wins
import './styles/motion.css';      // tasteful animation layer

const AppContent = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/dashboard');
    const { isDarkMode } = useTheme();

    useEffect(() => {
        document.body.style.background = isDarkMode ? '#0a0500' : '#FAF3E0';   // ✅ Light = cream beige
        document.body.style.color = isDarkMode ? '#fff8e7' : '#1a0a00';
    }, [isDarkMode]);

    return (
        <div className="app" style={{
            background: isDarkMode
                ? 'radial-gradient(ellipse at center, #1a0a00, #0a0500)'      // ✅ Dark = black
                : 'radial-gradient(ellipse at center, #FAF3E0, #EFE6D0)'      // ✅ Light = cream beige
        }}>
            {/* 3D Background - Only in dark mode */}
            {isDarkMode && (
                <div className="three-container">
                    <Canvas
                        camera={{ position: [0, 2, 8], fov: 60 }}
                        shadows
                        gl={{ antialias: true, alpha: true }}
                        dpr={[1, 2]}
                    >
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                            <directionalLight position={[-10, -10, -5]} intensity={0.3} />
                            <pointLight position={[0, 5, 0]} intensity={0.5} color="#FF9933" />
                            <pointLight position={[5, -3, 5]} intensity={0.3} color="#C5A059" />
                            <Environment preset="sunset" />
                            <Hero3D />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                autoRotate
                                autoRotateSpeed={0.2}
                                maxPolarAngle={Math.PI / 2.5}
                                minPolarAngle={Math.PI / 4}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            )}

            {/* UI Overlay */}
            <div className="ui-overlay">
                {!isDashboard && <Navbar />}
                <ScrollProgress />

                {isDashboard ? (
                    <Routes>
                        <Route path="/dashboard/*" element={<Dashboard />} />
                    </Routes>
                ) : (
                    <>
                        <main>
                            <Routes>
                                <Route path="/" element={<HomeSection />} />
                                <Route path="/about" element={<AboutSection />} />
                                <Route path="/disciplines" element={<DisciplinesSection />} />
                                <Route path="/courses" element={<CoursesSection />} />
                                <Route path="/faculty" element={<FacultySection />} />
                                <Route path="/events" element={<EventsSection />} />
                                <Route path="/gallery" element={<GallerySection />} />
                                <Route path="/contact" element={<ContactSection />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                            </Routes>
                        </main>
                        <Footer />
                    </>
                )}
            </div>

            <LoadingScreen />
        </div>
    );
};

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 100,
        });
    }, []);

    return (
        // basename keeps client-side routes working when the app is served
        // from a sub-path (e.g. GitHub Pages: /srividyauniversity/).
        <Router basename={import.meta.env.BASE_URL}>
            <ThemeProvider>
                <AppContent />
            </ThemeProvider>
        </Router>
    );
}

export default App;