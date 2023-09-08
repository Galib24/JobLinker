// import HomeBanner from '@/components/HomePage/Banner/HomeBanner';
import JobCategories from '@/components/HomePage/JobCategories/JobCategories';
import { render, screen } from '@testing-library/react';

describe('Home Page - Rendering', () => {
  it('should have Marketing text in JobCategories', () => {
    render(<JobCategories />);
    const jobTitleText = screen.getByText('Marketing');
  
  });
});
