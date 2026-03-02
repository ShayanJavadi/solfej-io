import React from "react"
import BlogPostLayout from "../components/BlogPostLayout"
import Hero from "../components/blogImages/suno-ai-chord-progressions/Hero"
import ShayanJavadi from "../components/ShayanJavadi"

export default function SunoBlogPost({ pageContext }) {
  const { locale, slug, translation } = pageContext

  const blogData = {
    title: translation.title,
    description: translation.description,
    seoTitle: translation.seoTitle,
    image: "/images/blog-post-hero-7.png",
    route: `${locale}/blog/${slug}`,
    authorName: "Shayan Javadi",
    date: "Mar 2026",
    timeToRead: translation.timeToRead,
    authorImage: <ShayanJavadi />,
  }

  return (
    <BlogPostLayout blogData={blogData} hero={<Hero />}>
      <div dangerouslySetInnerHTML={{ __html: translation.body }} />
    </BlogPostLayout>
  )
}
