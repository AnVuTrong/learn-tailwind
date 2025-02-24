interface RecommendationInputProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const RecommendationInput = ({ handleInputChange }: RecommendationInputProps) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Would you recommend this to a friend?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="recommend"
              value="yes"
              className="mr-2"
              onChange={handleInputChange}
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="recommend"
              value="no"
              className="mr-2"
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>
    );
  };