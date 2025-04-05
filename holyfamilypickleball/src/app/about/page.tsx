import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="neo-brutalism-title text-black">
            About Holy Family Pickleball
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl font-bold text-black">
            Join our vibrant community of pickleball enthusiasts
          </p>
        </div>

        <div className="mt-12">
          <div className="neo-brutalism-card">
            <h2 className="neo-brutalism-subtitle text-black">Our Story</h2>
            <p className="mt-1 text-black font-bold">
              Building community through pickleball
            </p>
            <div className="mt-4 prose max-w-none">
              <p className="text-black">
                Holy Family Pickleball was established to bring together members
                of our community through the exciting sport of pickleball. Our
                club welcomes players of all skill levels, from beginners to
                advanced players.
              </p>
              <p className="mt-4 text-black">
                We believe in creating an inclusive environment where everyone
                can enjoy the game, improve their skills, and build lasting
                friendships. Our sessions are designed to be fun, engaging, and
                suitable for all participants.
              </p>
            </div>
          </div>

          <div className="mt-8 neo-brutalism-card bg-accent">
            <h2 className="neo-brutalism-subtitle text-black">What We Offer</h2>
            <div className="mt-4 space-y-4">
              <div className="neo-brutalism-card bg-white">
                <h3 className="text-lg font-bold text-black">Equipment</h3>
                <p className="mt-2 text-black">
                  We provide all necessary equipment including paddles and
                  balls. Feel free to bring your own equipment if you prefer.
                </p>
              </div>
              <div className="neo-brutalism-card bg-white">
                <h3 className="text-lg font-bold text-black">Instruction</h3>
                <p className="mt-2 text-black">
                  Basic instruction is available for beginners. Our experienced
                  players are happy to help newcomers learn the game.
                </p>
              </div>
              <div className="neo-brutalism-card bg-white">
                <h3 className="text-lg font-bold text-black">Community</h3>
                <p className="mt-2 text-black">
                  Join our friendly community of players who share a passion for
                  pickleball and good company.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 neo-brutalism-card bg-secondary">
            <h2 className="neo-brutalism-subtitle text-black">
              Getting Started
            </h2>
            <div className="mt-4">
              <ol className="list-decimal list-inside space-y-2 text-black">
                <li>Check our schedule for upcoming sessions</li>
                <li>Arrive 10 minutes before the session start time</li>
                <li>Introduce yourself to our club members</li>
                <li>Join in the fun and enjoy the game!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
