import { ReviewFormData } from '../../types/review-form.types';

interface ReviewInputProps {
  formData: ReviewFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  showErrors?: boolean;
}

export const ReviewInput = ({ formData, handleInputChange, showErrors }: ReviewInputProps) => {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Review Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Summarize your experience"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="review" className="block text-sm font-medium text-gray-700">
          Your Review
        </label>
        <textarea
          id="review"
          name="review"
          rows={4}
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Share your experience with this product..."
          value={formData.review}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}; 