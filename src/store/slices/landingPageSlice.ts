import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LandingPageState {
  isHeroVisible: boolean;
  activeFeatureIndex: number;
  testimonials: Array<{
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
  }>;
}

const initialState: LandingPageState = {
  isHeroVisible: true,
  activeFeatureIndex: 0,
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      content: "This platform has transformed how we build applications. The components are incredibly well-designed.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    // Add more testimonials here
  ]
};

export const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    setHeroVisibility: (state, action: PayloadAction<boolean>) => {
      state.isHeroVisible = action.payload;
    },
    setActiveFeature: (state, action: PayloadAction<number>) => {
      state.activeFeatureIndex = action.payload;
    }
  }
});

export const { setHeroVisibility, setActiveFeature } = landingPageSlice.actions;
export default landingPageSlice.reducer; 