export const BlogCard = () => {
  return (
    <article className="w-[340px] rounded-lg shadow overflow-hidden">
      <figure className="h-[288px]">
        <img
          className="object-cover w-full h-full"
          src="/img/spacejoy-YqFz7UMm8qE-unsplash.jpg"
          alt="spacejoy-YqFz7UMm8qE-unsplash"
        />
      </figure>

      <div className="px-4 py-6 bg-white">
        <div className="mb-2">
          <span className="text-sm border-green-200 border rounded-2xl bg-green-50 text-green-700 px-2 py-0.5">
            Interior
          </span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            Top 5 Living Room Inspirations
          </h2>
          <p className="text-neutral-600 pt-3 pb-6 font-medium">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
        </div>

        <a
          href="/"
          className="px-0.5 rounded text-indigo-700 font-medium focus:ring-2 ring-indigo-100 inline-block"
        >
          <span className="flex items-center gap-2">
            <span>Read more</span>
            <i className="i-mdi-arrow-right" />
          </span>
        </a>
      </div>
    </article>
  )
}
