import { SubscriptionPlan } from '../types/subscription.types';

export const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 1,
      name: 'Promete Standard',
      description: 'Perfect for getting started',
      price: '$999',
      bgColor: 'bg-blue-50',
      buttonColor: 'bg-blue-600',
      features: [
        'Basic analytics',
        '24/7 support',
        'Up to 10 team members',
        'Basic reporting',
        'API access'
      ]
    },
    {
      id: 2,
      name: 'Promete Pro',
      description: 'Best for growing teams',
      price: '$1299',
      bgColor: 'bg-purple-50',
      buttonColor: 'bg-purple-600',
      features: [
        'Advanced analytics',
        'Priority support',
        'Up to 50 team members',
        'Advanced reporting',
        'Custom integrations',
        'SLA guarantee'
      ]
    },
    {
      id: 3,
      name: 'Promete Master',
      description: 'For enterprise solutions',
      price: 'Contact Us',
      bgColor: 'bg-indigo-50',
      buttonColor: 'bg-indigo-600',
      features: [
        'Custom solutions',
        '1-on-1 support',
        'Unlimited team members',
        'Custom reporting',
        'Dedicated account manager',
        'Custom SLA',
        'On-premise deployment'
      ]
    }
  ];