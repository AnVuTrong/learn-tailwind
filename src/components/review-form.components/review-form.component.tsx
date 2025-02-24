import { useState } from 'react';
import { StarRating } from './star-rating.component';
import { ReviewInput } from './review-input.component';
import { RecommendationInput } from './recommendation-input.component';
import { ReviewFormData } from '../../types/review-form.types';

export const ReviewForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [formData, setFormData] = useState<ReviewFormData>({
    title: '',
    review: '',
    recommend: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, rating });
  };

  const isFormValid = () => {
    return (
      formData.title.trim() !== '' &&
      formData.review.trim() !== '' &&
      formData.acceptTerms &&
      rating > 0
    );
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA] py-20">
      <div className="w-[36rem] rounded-lg bg-white p-12 shadow-xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Write a Review</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <StarRating 
            rating={rating}
            setRating={setRating}
            hover={hover}
            setHover={setHover}
          />
          {!rating && (
            <p className="text-sm text-red-500">Please select a rating</p>
          )}
          
          <ReviewInput 
            formData={formData}
            handleInputChange={handleInputChange}
            showErrors={formData.title.trim() === '' || formData.review.trim() === ''}
          />
          
          <RecommendationInput 
            handleInputChange={handleInputChange}
          />

          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                className="mr-2"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }))}
              />
              <span className="text-sm text-gray-600">
                I accept the{' '}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
                {!formData.acceptTerms && (
                  <span className="ml-1 text-red-500">*</span>
                )}
              </span>
            </label>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
            <p>
              Note: Your review will be visible to other users and may be used for promotional purposes.
              Please ensure your review follows our community guidelines.
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700 disabled:bg-gray-400"
            disabled={!isFormValid()}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};