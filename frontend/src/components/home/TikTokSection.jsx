import { FaTiktok } from "react-icons/fa";

const videos = [
  {
    id: 1,
    img: "https://shorturl.at/8eVW9",
    title: "Vegan Week Menu",
  },
  {
    id: 2,
    img: "https://shorturl.at/yTMRg",
    title: "Monday Meal Plan",
  },
  {
    id: 3,
    img: "https://kntn.ly/e2e8c927",
    title: "Build Muscle / Lose Weight",
  },
  {
    id: 4,
    img: "https://kntn.ly/81832b83",
    title: "Grilled Chicken Salad",
  },
];

const TikTokSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Quick healthy recipes on TikTok
            </h2>
            <p className="mt-2 text-gray-600">
              60-second dinners, batch-prep ideas, and smart shopping tips — no fluff
            </p>
          </div>

          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition"
          >
            <FaTiktok className="text-xl" />
            Watch on TikTok
          </a>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={video.img}
                alt={video.title}
                className="w-full h-105 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-black text-xl">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TikTokSection;
