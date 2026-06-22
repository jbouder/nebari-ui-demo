import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('renders the dashboard heading', () => {
    render(<Dashboard />);
    expect(
      screen.getByRole('heading', { name: /workspace overview/i }),
    ).toBeInTheDocument();
  });

  it('renders dummy metrics and project data', () => {
    render(<Dashboard />);
    expect(screen.getByText('Active workspaces')).toBeInTheDocument();
    expect(screen.getByText('Running jobs')).toBeInTheDocument();
    expect(screen.getByText('Climate modeling')).toBeInTheDocument();
  });
});
