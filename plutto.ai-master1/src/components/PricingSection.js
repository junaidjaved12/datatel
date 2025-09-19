"use client";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "399",
      description: "Advanced features for your more stable selection in business",
      features: [
        "Social media management (Limited to 2 platforms)",
        "Basic content creation (Image & captions)",
        "Monthly project performance email outreach"
      ]
    },
    {
      name: "Business",
      price: "699",
      description: "Advanced features for your more stable selection in business",
      features: [
        "Social media management (Limited to 4 platforms)",
        "Basic content creation (Image & captions)",
        "Monthly project performance email outreach"
      ]
    },
    {
      name: "Advance",
      price: "999",
      description: "Advanced features for your more stable selection in business",
      features: [
        "Social media management (Limited to 4 platforms)",
        "Basic content creation (Image & captions)",
        "Monthly project performance email outreach"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl lg:text-4xl font-light text-center mb-16">
          Plans For Every Stage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-[#0f0f0f] rounded-2xl p-8 border border-gray-800">
              <h3 className="text-white text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>
              
              <div className="mb-8">
                <span className="text-white text-4xl font-light">.{plan.price}</span>
                <span className="text-gray-400 text-sm ml-1">/monthly</span>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium mb-8 hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;