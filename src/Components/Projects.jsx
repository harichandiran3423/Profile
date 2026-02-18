export default function Projects() {
    const projects = [
        {
            title: "Kemba Gowda International Airport (BIAL) - Terminal 2",
            description: "Led BIM modeling for the Terminal 2 extension at Bangalore, focusing on high-level accuracy and multidisciplinary coordination.",
            tags: ["LOD 400", "Revit", "Infrastructure"],
            features: ["Terminal Extension", "Structural Modeling", "Clash Detection", "Shop Drawings"],
            link: "#"
        },
        {
            title: "Jaipur International Airport (JIAL) - Terminal 2",
            description: "Coordinated BIM model development and updates for the Jaipur airport extension, ensuring adherence to project schedules and quality standards.",
            tags: ["LOD 350", "Navisworks", "Aviation"],
            features: ["Architecture", "Column Cladding", "Wall Cladding", "Ceiling Layouts"],
            link: "#"
        },
        {
            title: "Embassy Manyata Business Park",
            description: "Developed detailed architectural and structural BIM models for one of India's largest business parks in Bangalore.",
            tags: ["Commercial", "LOD 400", "Model Federation"],
            features: ["Flooring Plans", "Fixture Plans", "Quantity Take-off", "Coordination"],
            link: "#"
        },
        {
            title: "Sattva Lakeridge & Aero Polis",
            description: "BIM modeling and coordination for high-rise residential and commercial developments, ensuring clash-free integration of systems.",
            tags: ["High-Rise", "Sattva Group", "LOD 500"],
            features: ["RCP Drawings", "Typical Details", "LOD Management", "Consultant Coordination"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A showcase of large-scale infrastructure, aviation, and commercial BIM projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                        >
                            {/* Project Header Style */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white p-6">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold mb-2 leading-tight">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                        Project Detail
                                    </span>
                                </div>
                            </div>
                            
                            {/* Project Info */}
                            <div className="p-6">
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technical Focus:</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {project.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-1 text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies/Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
