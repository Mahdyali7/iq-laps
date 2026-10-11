import React from 'react';
import Link from 'next/link';

const SupportSection = () => {
    return (
        <section id="support" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Support & Policies
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Learn about our shipping, return policies, and how we ensure your satisfaction
                    </p>
                </div>

                {/* Policy Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Shipping Policy Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-start mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">🚚</span>
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Shipping Policy</h3>
                                <p className="text-blue-600 font-semibold">Free Shipping • Pay on Delivery</p>
                            </div>
                        </div>
                        
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Free delivery for all orders</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Pay only when you receive your order</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Cash on delivery available</span>
                            </li>
                        </ul>
                        
                        <Link 
                            href="/shipping-policy"
                            className="inline-flex items-center justify-center w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
                        >
                            Read Shipping Policy
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Return Policy Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-start mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">↩️</span>
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Return Policy</h3>
                                <p className="text-green-600 font-semibold">Easy Returns • Free Replacements</p>
                            </div>
                        </div>
                        
                        <div className="mb-8">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center p-4 bg-red-50 rounded-xl">
                                    <p className="text-sm text-gray-600 mb-1">Standard Return</p>
                                    <div className="text-2xl font-bold text-red-600">5,000 IQD</div>
                                    <p className="text-xs text-gray-500">Pickup fee</p>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-xl">
                                    <p className="text-sm text-gray-600 mb-1">Defective Item</p>
                                    <div className="text-2xl font-bold text-green-600">FREE</div>
                                    <p className="text-xs text-gray-500">Replacement</p>
                                </div>
                            </div>
                            
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Free replacement for defective items</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>7-day return window</span>
                                </li>
                            </ul>
                        </div>
                        
                        <Link 
                            href="/return-policy"
                            className="inline-flex items-center justify-center w-full py-4 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors group"
                        >
                            Read Return Policy
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Additional Support Info */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Need More Help?</h3>
                        <p className="text-gray-600 text-lg">Contact our support team for any questions</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📞</span>
                            </div>
                            <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
                            <p className="text-gray-600">+964 XXX XXX XXXX</p>
                            <p className="text-sm text-gray-500">10 AM - 8 PM daily</p>
                        </div>
                        
                        <div className="text-center p-6 bg-green-50 rounded-xl">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">✉️</span>
                            </div>
                            <h4 className="font-bold text-gray-800 mb-2">Email Us</h4>
                            <p className="text-gray-600">support@yourstore.com</p>
                            <p className="text-sm text-gray-500">24/7 email support</p>
                        </div>
                        
                        <div className="text-center p-6 bg-purple-50 rounded-xl">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💬</span>
                            </div>
                            <h4 className="font-bold text-gray-800 mb-2">Live Chat</h4>
                            <p className="text-gray-600">Chat with support</p>
                            <p className="text-sm text-gray-500">Available 9 AM - 6 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;