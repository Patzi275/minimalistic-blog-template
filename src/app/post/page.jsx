import Avatar from '@/components/avatar'
import Link from 'next/link'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

function Post() {
  return (
    <main className='mb-auto'>
      <div className='text-center'>
        <div className='mb-4 font-bold'>Saturday, August 5, 2023</div>
        <h1 className='title-xl m-0 border-b-0 p-0 lg:mb-12 lg:border-b lg:pb-8'>Article Title : Version 20.2</h1>
        <div className='mt-4 flex items-center justify-center gap-4 text-left lg:hidden'>
          <Avatar
            src='https://picsum.photos/300/200?random=1'
            alt='avatar'
            size={48}
          />
          <div>
            <div>Name of author</div>
            <a className='text-primary' href="#">@Twitter</a>
          </div>
        </div>

        <div className='mt-8 flex gap-16 text-left'>
          <div className='hidden min-w-2 max-w-48 flex-col items-start gap-12 lg:flex'>
            <div className='flex items-center justify-center gap-4 text-left'>
              <Avatar
                src='https://picsum.photos/300/200?random=1'
                alt='avatar'
                size={48}
              />
              <div>
                <div>Name of author</div>
                <a className='text-primary' href="#">@Twitter</a>
              </div>
            </div>
            <div>
              <h2 className='text-sm uppercase'>Tags</h2>
              <div className='flex flex-wrap gap-2'>
                <a href="#" className='uppercase text-primary'>tag1</a>
                <a href="#" className='uppercase text-primary'>tag2</a>
                <a href="#" className='uppercase text-primary'>tag3</a>
              </div>
            </div>
            <div>
              <h2 className='text-sm uppercase'>Previous article</h2>
              <Link href="#" className="text-primary">How to fix a code in the browser ?</Link>
            </div>
            <Link href="/posts" className='flex items-center gap-2 text-primary'>
              <TbArrowBack /> Back to the blog
            </Link>
          </div>

          {/* Content of the article */}
          <div className='flex-1'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-2xl text-primary'>Subtitle 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ullam eaque optio temporibus asperiores quas amet similique architecto dolorum sequi suscipit dolores, sint provident maxime magni beatae, commodi vel? Necessitatibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ullam eaque optio temporibus asperiores quas amet similique architecto dolorum sequi suscipit dolores, sint provident maxime magni beatae, commodi vel? Necessitatibus!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam nulla tempore reprehenderit error ad labore distinctio aut deleniti necessitatibus. Saepe laudantium facilis autem cupiditate illum voluptate laborum quas quae!
              </p>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Post