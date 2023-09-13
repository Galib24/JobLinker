// import HomeBanner from '@/components/HomePage/Banner/HomeBanner';
import HomeBanner from '@/components/HomePage/Banner/HomeBanner';
import FeaturedJobs from '@/components/HomePage/FeaturedJobs/FeaturedJobs';
import JobCategories from '@/components/HomePage/JobCategories/JobCategories';
import JobSeekers from '@/components/HomePage/JobSeekers/JobSeekers';
import JobsBanner from '@/components/HomePage/JobsBanner/JobsBanner';
import { render, screen} from '@testing-library/react';

describe('Home Page - Rendering', () => {
  it('should have Marketing text in JobCategories', () => {
    render(<JobCategories />);
    const jobTitleText = screen.getByText('Marketing');
  
  });

// job Banner section test
it('should have a link with text GET STARTED', () => {
  render(<JobsBanner></JobsBanner>);
    const GetRole = screen.getByRole('link')
  });

  // in first banner have text field
it('should have a  text field', () => {
  render(<HomeBanner></HomeBanner>);
    const GetTextInput = screen.getByRole('textbox')
  });

});
