import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="neo-brutalism-title text-white">
              Welcome to Holy Family Pickleball
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-white font-bold">
              Join our vibrant community of pickleball enthusiasts. All skill
              levels welcome!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule" className="neo-brutalism-button bg-white">
                View Schedule
              </a>
              <a href="/contact" className="neo-brutalism-button bg-accent">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="neo-brutalism-card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mx-auto">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-black">
                Regular Sessions
              </h3>
              <p className="mt-2 text-black">
                Join us for our regular pickleball sessions. All skill levels
                welcome!
              </p>
            </div>

            <div className="neo-brutalism-card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mx-auto">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-black">Community</h3>
              <p className="mt-2 text-black">
                Be part of our growing pickleball community. Make new friends
                and improve your game.
              </p>
            </div>

            <div className="neo-brutalism-card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mx-auto">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-black">
                Equipment Provided
              </h3>
              <p className="mt-2 text-black">
                Don't have equipment? No problem! We provide paddles and balls
                for all players.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="neo-brutalism-card bg-accent text-center">
            <h2 className="neo-brutalism-title text-black">
              Ready to join us?
            </h2>
            <p className="mt-4 text-xl font-bold text-black">
              Sign up for our next session today.
            </p>
            <div className="mt-8">
              <a href="/contact" className="neo-brutalism-button bg-white">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
