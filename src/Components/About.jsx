export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* About Text */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900">
                            BIM Architect & Structural Designer
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            I am an accomplished BIM Architect and Structural Designer with over 2 years of experience 
                            delivering complex architectural and structural solutions across commercial, residential, 
                            and infrastructure sectors. I hold a Bachelor of Engineering in Civil Engineering 
                            from the Government College of Engineering, Bodinayakkanur.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            My expertise lies in Building Information Modeling (BIM) using Revit, Navisworks, and AutoCAD. 
                            I am highly skilled in clash detection, 4D/5D simulations, and model-based quantity take-offs, 
                            which drive cost-effective and time-saving project execution.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            I have a proven ability to lead multidisciplinary teams through all project phases—from 
                            conceptual design to construction documentation—ensuring high levels of accuracy, 
                            compliance, and efficiency.
                        </p>

                        {/* Professional Highlights */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Core Expertise
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>High-Rise Coordination & Multi-discipline Integration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>LOD 300-500 Standards & BIM Execution Plans (BEPs)</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">7.66</p>
                                <p className="text-gray-600 text-sm">CGPA</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">8+</p>
                                <p className="text-gray-600 text-sm">Key Projects</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">2+</p>
                                <p className="text-gray-600 text-sm">Years Exp</p>
                            </div>
                        </div>
                    </div>

                    {/* Education & Experience Timeline */}
                    <div className="space-y-6">
                        <h3 className="text-2xl uppercase font-semibold text-gray-900 mb-6">Education</h3>
                        <div className="space-y-6">
                            {/* Education */}
                            <div className="relative pl-8 border-l-2 border-blue-600">
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                <div className="mb-1">
                                    <span className="text-sm font-medium text-blue-600">2020 - 2024</span>
                                </div>
                                <h4 className="font-semibold text-gray-900">B.E. Civil Engineering</h4>
                                <p className="text-gray-600 text-sm">Government College of Engineering, Bodinayakkanur</p>
                                <p className="text-gray-500 text-sm mt-1">CGPA: 7.66/10</p>
                            </div>

                            <h3 className="text-2xl uppercase font-semibold text-gray-900 mb-6">Experience</h3>
                            
                            {/* Senior BIM Modeler */}
                            <div className="relative pl-8 border-l-2 border-blue-400">
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                <div className="mb-1">
                                    <span className="text-sm font-medium text-gray-600">July 2025 - Present</span>
                                </div>
                                <h4 className="font-semibold text-gray-900">Senior BIM Modeler</h4>
                                <p className="text-gray-600 text-sm">HSS Integrated Pvt Ltd, Chennai</p>
                                <p className="text-gray-500 text-sm mt-1">Leading projects like BIAL Terminal 2 and JIAL Terminal 2 extensions.</p>
                            </div>

                            {/* Junior BIM Modeler */}
                            <div className="relative pl-8 border-l-2 border-blue-400">
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                <div className="mb-1">
                                    <span className="text-sm font-medium text-gray-600">July 2024 - June 2025</span>
                                </div>
                                <h4 className="font-semibold text-gray-900">Junior BIM Modeler</h4>
                                <p className="text-gray-600 text-sm">HSS Integrated Pvt Ltd, Chennai</p>
                                <p className="text-gray-500 text-sm mt-1">Worked on Embassy Manyata Business Park and Sattva Song Bird.</p>
                            </div>

                            {/* Internships */}
                            <div className="relative pl-8 border-l-2 border-blue-400">
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
                                <div className="mb-1">
                                    <span className="text-sm font-medium text-gray-600">June 2024 - July 2024</span>
                                </div>
                                <h4 className="font-semibold text-gray-900">BIM Intern</h4>
                                <p className="text-gray-600 text-sm">HSS Integrated / Max Property Pvt Ltd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
