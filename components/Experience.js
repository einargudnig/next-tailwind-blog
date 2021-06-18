import Link from '@/components/Link'

const Experience = ({ title, company, location, range, url, text1, text2, text3 }) => {
  return (
    <div className="my-3">
      <div className="flex flex-row">
        <span>{title}</span> <span className="">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primaryColor dark:text-primaryColorDark">
          <Link href={url} className="no-underline">
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-gray-400 dark:text-gray-600 text-sm">{range}</div>
        <div className="p-2">
          <div className="flex flex-row">
            <div className="text-primaryColor dark:text-primaryColorDark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <div>{text1}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-primaryColor dark:text-primaryColorDark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <div>{text2}</div>
          </div>
          <div className="flex flex-row items-top">
            <div className="text-primaryColor dark:text-primaryColorDark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <div>{text3}</div>
          </div>
        </div>
      </div>
      <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200  text-center">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Experience
