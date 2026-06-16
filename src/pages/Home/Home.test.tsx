import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Home from './Home';

function renderHome() {
  return render(
    <ThemeProvider>
      <Home />
    </ThemeProvider>,
  );
}

describe('Home', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light', 'dark');
  });

  it('renders the demo heading', () => {
    renderHome();
    expect(
      screen.getByRole('heading', { name: /nebari ui demo/i }),
    ).toBeInTheDocument();
  });

  it('renders nebari buttons for each variant', () => {
    renderHome();
    expect(screen.getByRole('button', { name: 'default' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'destructive' }),
    ).toBeInTheDocument();
  });

  it('toggles the theme via the theme button', async () => {
    renderHome();
    await userEvent.click(
      screen.getByRole('button', { name: /toggle theme/i }),
    );
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
