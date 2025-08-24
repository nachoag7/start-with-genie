"use client";

import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Personalize Your Setup",
      description: "Answer six short questions and we'll create your custom LLC formation plan.",
      image: "/how-it-works-1.png"
    },
    {
      id: 2,
      title: "Follow Your Guide",
      description: "Get instructions to file your LLC, apply for your EIN and sign your Operating Agreement.",
      image: "/how-it-works-2.png"
    },
    {
      id: 3,
      title: "Launch Your Business",
      description: "Start operating with confidence.",
      image: "/how-it-works-3.png"
    }
  ];

  return (
    <section className="pt-0 pb-12 sm:pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get your LLC set up in three simple steps. No confusion, no delays.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 sm:space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Step Number */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">
                {step.id}
              </div>

              {/* Content */}
              <div className="text-center max-w-md mb-4 sm:mb-6 px-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className={`w-full ${step.id === 3 ? 'max-w-lg sm:max-w-2xl' : 'max-w-md sm:max-w-lg'}`}>
                <img 
                  src={step.image} 
                  alt={step.title}
                  className={`w-full h-auto ${step.id === 3 ? '' : 'rounded-lg shadow-lg'}`}
                />
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="w-px h-12 sm:h-16 bg-gray-300 mt-6 sm:mt-8"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 