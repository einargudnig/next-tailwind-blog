import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import { PageSeo } from '@/components/SEO'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import Tilt from 'react-parallax-tilt'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="">
        <div>
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              About
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8 space-x-2">
              <Tilt>
                {/* <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" /> */}
                <img src={siteMetadata.image} alt="avatar" className="rounded-full w-48 h-48" />
              </Tilt>
            </div>
            <div className="pt-8 pb-8 max-w-none xl:col-span-2 text-gray-500 dark:text-gray-400">
              <p>
                I graduated as a computer scientist from the University of Iceland in the summer of
                2020. I live in Reykjavík.
              </p>
              <br />
              <p>
                <RoughNotation
                  type="bracket"
                  brackets={['left', 'right']}
                  show={true}
                  color="#FF0000"
                >
                  I'm very dedicated to learn new things and to truly belive that you should never
                  stop learning. I enjoy creating different things, whether that be websites,
                  application or anything in between.
                </RoughNotation>
              </p>
              <br />
              <p>
                At my first full-time job as a developer I feel like I've been very lucky to
                experience a broad and diverce part of projects and tasks. I get to deal with
                everything from user feedback, design and to backend tests and improving parts of
                our daily operations. <br />
                <RoughNotation type="underline" show={true} color="#34D399" animationDelay={1000}>
                  <Link
                    href={'/uses'}
                    className="hover:text-primaryColor dark:hover:text-primaryColorDark"
                  >
                    Here{' '}
                  </Link>
                </RoughNotation>{' '}
                you can see what I use on daily basis.
              </p>
              <br />
              <p>
                Feel free to reach out if you have anything to talk about, you can reach me on{' '}
                <RoughNotation type="highlight" show={true} color="#FBCFE8" animationDelay={1200}>
                  einargudnig@gmail.com{' '}
                </RoughNotation>
                or on social media.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="pt-8 pb-8 max-w-none xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}
