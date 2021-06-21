import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import External from './external.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  external: External,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={` text-gray-700 dark:text-gray-200 hover:text-primaryColor dark:hover:text-primaryColorDark h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
