import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-lg">&copy; {new Date().getFullYear()} Blynk. All rights reserved.</p>
                <nav className="mt-4 flex justify-center space-x-6">
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <Link to="/services" className="hover:underline">Services</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
