import { SubscriptionPlan } from '../../types/subscription.types';
import { CheckIcon } from './check-icon.component';
import { ReactComponent as StandardIcon } from '../../assets/subscription.assets/standard.svg';
import { ReactComponent as ProIcon } from '../../assets/subscription.assets/pro.svg';
import { ReactComponent as MasterIcon } from '../../assets/subscription.assets/master.svg';

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
}

export const SubscriptionCard = ({ plan }: SubscriptionCardProps) => {
  const renderIcon = (name: string) => {
    if (name.includes('Promete Standard')) {
      return <StandardIcon className="h-8 w-8 md:h-12 md:w-12" />;
    } else if (name.includes('Promete Pro')) {
      return <ProIcon className="h-8 w-8 md:h-12 md:w-12" />;
    } else if (name.includes('Promete Master')) {
      return <MasterIcon className="h-8 w-8 md:h-12 md:w-12" />;
    }
    return null;
  };

  return (
    <div className={`flex flex-col rounded-2xl p-4 md:p-8 ${plan.bgColor} transition-transform hover:scale-105`}>
      <div className="flex-1">
        <div className="flex items-center justify-center">
          {renderIcon(plan.name)}
        </div>
        
        <h2 className="mt-4 md:mt-6 text-center text-xl md:text-2xl font-bold text-gray-900">{plan.name}</h2>
        
        <p className="mt-2 text-center text-sm md:text-base text-gray-600">{plan.description}</p>
        
        <div className="mt-4 md:mt-6 text-center">
          <span className="text-2xl md:text-4xl font-bold text-gray-900">{plan.price}</span>
          {plan.price !== 'Contact Us' && <span className="text-sm md:text-base text-gray-600">/month</span>}
        </div>
        
        <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon />
              <span className="ml-3 text-sm md:text-base text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={`mt-6 md:mt-8 w-full rounded-lg ${plan.buttonColor} px-4 md:px-6 py-2 md:py-3 text-sm md:text-base text-white transition-colors hover:opacity-90`}>
        Choose Plan
      </button>
    </div>
  );
}; 