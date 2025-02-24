export interface ReviewFormData {
  title: string;
  review: string;
  recommend: string;
  acceptTerms: boolean;
}

export interface ReviewInputProps {
  formData: ReviewFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  showErrors?: boolean;
}

export interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
  hover: number;
  setHover: (hover: number) => void;
} 