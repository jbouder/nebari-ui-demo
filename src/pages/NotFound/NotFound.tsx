import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <p className="mt-4 text-muted-foreground">Page not found.</p>
      <Link
        to="/"
        className="mt-8 inline-block text-primary underline-offset-4 hover:underline"
      >
        Go home
      </Link>
    </div>
  );
}

export default NotFound;
