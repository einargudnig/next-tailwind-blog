import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium text-primaryColor dark:text-primaryColorDark uppercase hover:text-blue-500 dark:hover:text-yellow-300">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
