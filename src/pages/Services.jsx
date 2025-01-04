{{ ... }}

const ModuleDetail = ({ module, onClose }) => {
  const colors = getCardColor(module.colorIndex || 0);
  
  return (
    <div className={`rounded-xl shadow-lg ${colors.bg}`}>
      <div className="p-8">
        {/* Header */}
        <div className={`flex items-center justify-between pb-6 border-b ${colors.border}`}>
          <div className="flex items-center space-x-4">
            <div className={`p-3 bg-gradient-to-br ${colors.gradient} rounded-xl backdrop-blur-sm flex items-center justify-center`}>
              <div className={`${colors.text} w-8 h-8 flex items-center justify-center`}>
                {module.icon}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">
              {module.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex items-center px-3 py-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <span className="mr-2">Close</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-8">
          {/* Overview Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              {module.description}
            </p>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Process Steps</h3>
            <div className="space-y-4">
              {module.steps?.map((step, index) => (
                <div key={index} className="flex items-center space-x-4 py-2">
                  <div className="w-10 h-10 rounded-full bg-[#1d2639] flex items-center justify-center text-blue-400 border border-blue-500/30">
                    <span className="text-lg">{index + 1}</span>
                  </div>
                  <p className="text-white">{step.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {module.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`p-1 ${colors.text} rounded-full`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <div className="min-h-screen bg-[#0B1120] relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-center"></div>
      
      {/* Subtle Gradient Accent */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 relative pb-32">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Comprehensive HR management solutions designed to transform and streamline your business operations
          </p>
        </div>

        {selectedModule ? (
          <ModuleDetail module={selectedModule} onClose={() => setSelectedModule(null)} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {modules.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} onClick={setSelectedModule} />
            ))}
          </div>
        )}
      </div>

      {/* Extra gradient at bottom to ensure no white space */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent"></div>

      <style jsx>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .service-card-hover {
          transition: all 0.3s ease;
        }

        .service-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

{{ ... }}