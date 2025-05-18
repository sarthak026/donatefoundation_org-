
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-20">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          <span className="text-primary text-2xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. The page may have been moved, 
          deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" className="flex gap-2">
            <Link to="/">
              <Home size={18} />
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex gap-2">
            <Link to="javascript:history.back()">
              <ArrowLeft size={18} />
              Go Back
            </Link>
          </Button>
        </div>
        <div className="mt-10 pt-8 border-t">
          <p className="text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search our website"
            />
            <Button className="rounded-l-none">
              <Search size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
