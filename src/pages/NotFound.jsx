import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';

export default function NotFound() {
  return (
    <div className="pt-40 pb-32 min-h-[70vh] flex items-center justify-center text-center">
      <Container>
        <h1 className="text-9xl font-display font-extrabold text-brand-primary mb-6">404</h1>
        <h2 className="text-3xl font-display font-bold text-text-primary mb-6">Page Not Found</h2>
        <p className="text-text-secondary text-lg mb-10 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </Container>
    </div>
  );
}
