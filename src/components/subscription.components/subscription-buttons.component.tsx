export const SubscriptionButtons = () => {
  return (
    <div className="mt-12 flex justify-center gap-4">
      <button className="rounded-lg bg-[#8222ff] px-6 py-3 text-white transition-colors hover:bg-[#6a1bcc]">
        Add Subscription
      </button>
      <button className="rounded-lg border-2 border-[#8222ff] px-6 py-3 text-[#8222ff] transition-colors hover:bg-[#8222ff] hover:text-white">
        View All Subscriptions
      </button>
    </div>
  );
}; 