import React from 'react';
import FeatureCard from './FeatureCard';
import mobile from "./mobile.jpg.jpeg"
const FeaturesSection = () => {
  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-bold mb-6">One app. One banking.</h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-6 max-w-2xl">
          <FeatureCard title="Instant transactions" description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis." />
          <FeatureCard title="Saving accounts" description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis." />
          <FeatureCard title="Mobile banking" description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis." />
          <FeatureCard title="Advanced statistics" description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis." />
          <FeatureCard title="Virtual cards" description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis." />
          <FeatureCard title="Contactless payments" description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis." />
        </div>
        <div className="ml-2 h-auto max-w-lg">
          <img src={mobile} alt="Mobile App" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
