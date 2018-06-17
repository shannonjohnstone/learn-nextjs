import Link from 'next/link';

const pages = ['Home', 'About', 'Contact'];

const isRoot = page => page === 'home'
const returnUrl = (page, isRoot) => isRoot ? '/' : page;
const determineClassName = current => pageName => `nav__item ${(pageName === current) ? 'active' : ''}`

const RenderLinks = ({ pageName, isActive, url }) => {
  return (
    <Link key={url} href={url}>
      <a className={isActive}>{pageName}</a>
    </Link>
  )
}

const Navigation = ({ current }) => {
  const isActive = determineClassName(current);
  return (
    <nav className='nav'>
      {
        pages.map((pageName) => {
          const pageNameLowerCase = pageName.toLowerCase()
          return (
            <RenderLinks
              pageName={pageName}
              isActive={isActive(pageNameLowerCase)}
              url={returnUrl(pageNameLowerCase, isRoot(pageNameLowerCase))}
            />
          )
        })
      }
    </nav>
  )
}

export default Navigation;
