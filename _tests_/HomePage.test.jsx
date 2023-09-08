import HomeBanner from '@/components/HomePage/Banner/HomeBanner';
import { render, screen, waitFor } from '@testing-library/react';

describe('Home Page - Rendering', () => {
  it('should have Join us text in banner', async () => {
    render(<HomeBanner />);
    
    // Wait for the text to appear asynchronously
    await waitFor(() => {
      expect(screen.getByText('Join us')).toBeInTheDocument();
    });
  });
});
