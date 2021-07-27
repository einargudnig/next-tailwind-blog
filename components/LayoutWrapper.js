import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import NowPlaying from './NowPlaying'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Personal Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">{/* <Logo /> */}</div>
                <div className="h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block justify-between">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium hover:text-primaryColor sm:p-4 dark:hover:text-primaryColorDark"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <MobileNav />
            <ThemeSwitch />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <div>
          <NowPlaying />
        </div>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
