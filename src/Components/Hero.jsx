import profile from "../assets/profile.jpeg"; // Update this with your actual image path
import cv from "../assets/HARICHANDIRAN_CV.pdf"; // Update this with your actual PDF path

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-blue-600 font-semibold text-lg">Hello, I'm</p>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 times-new-roman-text">
                                Harichandiran R
                            </h1>
                            <p className="text-lg text-gray-500 italic border-l-0">
                                Senior BIM Modeler | Architecture & Structure
                            </p>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Experienced Senior BIM Modeler specializing in architectural and structural projects, with advanced expertise in high-quality 3D modeling, BIM coordination, and construction documentation. Proficient in Revit, AutoCAD, and Navisworks, delivering precise, constructible, and fully coordinated BIM solutions. Committed to ensuring model accuracy, clash-free integration, and efficient project execution from design through construction.
                           </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                                View Projects
                            </a>
                            <a
                                href={cv}
                                download
                                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg"
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Social Links - Update with Harichandiran's specific links if available */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href="mailto:your-email@example.com"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harichandiran-r-a23a3027"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Profile Image Column */}
                    <div className="relative flex justify-center">
                        <div className="w-64 h-64 md:w-90 md:h-100 rounded-full overflow-hidden border-4 border-black-600 shadow-2xl">
                            <img src={profile} alt="Harichandiran R" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
