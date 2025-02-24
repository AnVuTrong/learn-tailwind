import { SubscriptionCard } from './subscription-card.component';
import { SubscriptionHeader } from './subscription-header.component';
import { SubscriptionButtons } from './subscription-buttons.component';
import { subscriptionPlans } from '../../constants/subscription.constants';

export const Subscription = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA] py-20">
      <div className="w-full max-w-7xl rounded-lg bg-white p-12 shadow-xl">
        <SubscriptionHeader />
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} />
          ))}
        </div>

        <SubscriptionButtons />
      </div>
    </div>
  );
};
