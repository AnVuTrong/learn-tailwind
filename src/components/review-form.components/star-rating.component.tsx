import { StarRatingProps } from '../../types/review-form.types';

export const StarRating = ({ rating, setRating, hover, setHover }: StarRatingProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Overall Rating</label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            className="text-2xl focus:outline-none"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <span className={`${
              star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}>
              ★
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}; 