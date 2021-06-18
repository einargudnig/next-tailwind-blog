import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

import { currentDayName } from '@/lib/utils/dateUtils'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row justify-between mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="5" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            {siteMetadata.author} | Have a good {currentDayName()}!
          </div>
        </div>
      </div>
    </footer>
  )
}
