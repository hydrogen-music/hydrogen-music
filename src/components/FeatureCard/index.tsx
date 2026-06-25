import React from 'react';

export interface FeatureCardProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, children }) => {
  return (
    <div className="hydrogen-feature-card">
      <div className="hydrogen-feature-card__header">
        {icon && <span className="hydrogen-feature-card__icon">{icon}</span>}
        <h3 className="hydrogen-feature-card__title">{title}</h3>
      </div>
      <div className="hydrogen-feature-card__body">{children}</div>
    </div>
  );
};

export default FeatureCard;
