import Image from "next/image"
import Link from "next/link"

// Data models
interface BlogPost {
  id: string
  title: string
  excerpt: string
  dateLabel: string
  imageAlt: string
  image?: string // local asset path if available
}

interface TopStoryItem {
  id: string
  title: string
  dateLabel: string
  thumbAlt: string
  image?: string
}

// Helper: easily add new posts by pushing to these arrays
const featurePost: BlogPost = {
  id: "feature-1",
  title: "Our Chancellor\u2019s Cup Progress",
  excerpt:
    "The MIT community is driven by a shared purpose: to make a better world through education, research and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers.",
  dateLabel: "This Week\u2019s Feature",
  imageAlt: "Action shot from a football match",
}

const posts: BlogPost[] = [
  {
    id: "p1",
    title: "Our Chancellor\u2019s Cup Progress",
    excerpt:
      "The MIT community is driven by a shared purpose: to make a better world through education, research and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers.",
    dateLabel: "DEC 26",
    imageAlt: "Vintage TV on wooden backdrop",
  },
  {
    id: "p2",
    title: "Our Chancellor\u2019s Cup Progress",
    excerpt:
      "The MIT community is driven by a shared purpose: to make a better world through education, research and innovation.",
    dateLabel: "DEC 29",
    imageAlt: "Social media app icons",
  },
]

const topStories: TopStoryItem[] = [
  {
    id: "t1",
    title: "Our Chancellor\u2019s Cup Progress",
    dateLabel: "DEC 26",
    thumbAlt: "Twitter mug on desk",
  },
  { id: "t2", title: "Our Chancellor\u2019s Cup Progress", dateLabel: "DEC 26", thumbAlt: "Design studio" },
  { id: "t3", title: "Our Chancellor\u2019s Cup Progress", dateLabel: "DEC 26", thumbAlt: "Student on campus" },
  { id: "t4", title: "Our Chancellor\u2019s Cup Progress", dateLabel: "DEC 26", thumbAlt: "Laptop on desk" },
  { id: "t5", title: "Our Chancellor\u2019s Cup Progress", dateLabel: "DEC 26", thumbAlt: "Photographer with camera" },
]

// Simple image placeholder since we don\'t have real assets yet
const CardImage = ({ className, alt }: { className?: string; alt: string }) => (
  <div
    aria-label={alt}
    className={`rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 ${className ?? ""}`}
  />
)

const ThumbImage = ({ className, alt }: { className?: string; alt: string }) => (
  <div
    aria-label={alt}
    className={`rounded-md bg-gradient-to-br from-gray-200 to-gray-300 ${className ?? ""}`}
  />
)

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8 sm:mb-10">
        BLOG
      </h1>

      {/* Feature row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start mb-12 sm:mb-16">
        {/* Left: feature text */}
        <div className="space-y-3 sm:space-y-4">
          <p className="uppercase tracking-wide text-xs sm:text-sm text-gray-500">
            {featurePost.dateLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {featurePost.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {featurePost.excerpt}
            <Link href="#" className="ml-2 text-primary-600 hover:underline">
              Read More
            </Link>
          </p>
        </div>
        {/* Right: feature image */}
        <div className="w-full">
          <CardImage className="w-full h-48 sm:h-64 md:h-72 lg:h-[22rem]" alt={featurePost.imageAlt} />
        </div>
      </div>

      {/* Main grid: left post list, right top stories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: posts column (2 cols on large screens) */}
        <div className="lg:col-span-2 space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="grid grid-cols-1 gap-4">
              {/* Image */}
              <CardImage className="w-full h-56 sm:h-72 rounded-lg" alt={post.imageAlt} />
              {/* Meta + Title + Excerpt */}
              <div className="mt-2">
                <p className="text-[11px] sm:text-xs text-gray-500 mb-1">{post.dateLabel}</p>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {post.excerpt}
                  <Link href="#" className="ml-2 text-primary-600 hover:underline">
                    Read More
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Right: top stories sidebar */}
        <aside className="lg:col-span-1">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Top Stories</h4>
          <div className="space-y-6">
            {/* First big card */}
            <div>
              <p className="text-[11px] sm:text-xs text-gray-500 mb-1">{topStories[0].dateLabel}</p>
              <Link href="#" className="block text-sm sm:text-base font-semibold text-gray-900 hover:text-primary-600">
                {topStories[0].title}
              </Link>
              <div className="mt-3">
                <ThumbImage className="w-full h-24 sm:h-28 rounded-md" alt={topStories[0].thumbAlt} />
              </div>
            </div>

            {/* Rest of list */}
            <ul className="space-y-5">
              {topStories.slice(1).map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <ThumbImage className="w-16 h-12 flex-shrink-0" alt={item.thumbAlt} />
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs text-gray-500 mb-0.5">{item.dateLabel}</p>
                    <Link href="#" className="block text-sm font-semibold text-gray-900 hover:text-primary-600 truncate">
                      {item.title}
                    </Link>
                    <p className="text-[11px] text-gray-500 line-clamp-2">The MIT community is driven by a shared purpose.</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}