import React, { useState } from 'react';
import Link from 'next/link';

const FloatingSupportButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSupport = () => {
        const supportSection = document.getElementById('support');
        if (supportSection) {
            supportSection.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Main Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition-colors group"
            >
                <span className="text-2xl">🛟</span>
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 mb-4 bg-white rounded-xl shadow-2xl p-4 w-64 border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-3">Support & Policies</h3>
                    
                    <button
                        onClick={scrollToSupport}
                        className="w-full flex items-center p-3 text-left hover:bg-blue-50 rounded-lg transition-colors mb-2"
                    >
                        <span className="mr-3 text-xl">🎯</span>
                        <div>
                            <div className="font-medium text-gray-800">Go to Support</div>
                            <div className="text-sm text-gray-500">Scroll to support section</div>
                        </div>
                    </button>
                    
                    <div className="h-px bg-gray-200 my-2"></div>
                    
                    <Link
                        href="/shipping-policy"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center p-3 text-left hover:bg-blue-50 rounded-lg transition-colors mb-2"
                    >
                        <span className="mr-3 text-xl">🚚</span>
                        <div>
                            <div className="font-medium text-gray-800">Shipping Policy</div>
                            <div className="text-sm text-gray-500">Free delivery info</div>
                        </div>
                    </Link>
                    
                    <Link
                        href="/return-policy"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
                    >
                        <span className="mr-3 text-xl">↩️</span>
                        <div>
                            <div className="font-medium text-gray-800">Return Policy</div>
                            <div className="text-sm text-gray-500">Returns & replacements</div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default FloatingSupportButton;