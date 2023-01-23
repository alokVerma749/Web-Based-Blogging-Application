import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useFetchAllBlogs } from '../hooks/useFetchAllBlogs.js'
import { AllBlogsContext } from "../contexts/AllBlogsContext.js"


const Home = () => {
  const { fetchAllBlogs } = useFetchAllBlogs()
  const { blogs } = useContext(AllBlogsContext)
  const loadBlogs = async () => {
    await fetchAllBlogs()
  }
  useEffect(() => {
    loadBlogs()
  }, [])
  return (
    <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">All Blogs</h2>
          <p className="font-serif text-sm text-gray-600">Share your Knowledge and let's grow together</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {
            blogs && blogs.length > 0 ? blogs.map(blog => (
              <article className="flex flex-col bg-gray-50">
                <Link aria-label="Te nulla oportere reprimique his dolorum">
                  <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <Link aria-label="Te nulla oportere reprimique his dolorum"></Link>
                  <Link className="text-xs tracking-wider uppercase hover:underline text-indigo-600">Convenire</Link>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.title}</h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                    <span>June 1, 2020</span>
                    <span>2.1K views</span>
                  </div>
                </div>
              </article>
            )) : <p className='text-center'>No blog found</p>
          }
        </div>
      </div>
    </section>
  )
}

export default Home