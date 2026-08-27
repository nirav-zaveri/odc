import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'
import SEO from '../components/SEO'
import ToothMark from '../components/ToothMark'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <ToothMark className="h-20 w-20 text-primary-200" />
      <h1 className="mt-6 font-display text-4xl font-extrabold text-ink-900">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-500">
        The page you're looking for may have moved. Let's get you back to a healthy smile.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <HomeIcon className="h-4 w-4" /> Back to Home
      </Link>
    </div>
  )
}
