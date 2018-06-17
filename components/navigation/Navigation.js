import Link from 'next/link';

const menuPages = ['Home', 'About', 'Contact'];

const isRoot = page => page === 'home'
const returnUrl = (page, isRoot) => isRoot ? '/' : page;
const determineClassName = current => pageName => `nav__item ${(pageName === current) ? 'active' : ''}`

const RenderLink = ({ pageName, isActive, url }) => {
  return (
    <Link href={url}>
      <a className={isActive}>{pageName}</a>
    </Link>
  )
}

const Navigation = ({ current }) => {
  const isActive = determineClassName(current);
  return (
    <nav className='nav'>
      {
        menuPages.map((pageName) => {
          const pageNameLowerCase = pageName.toLowerCase()
          return (
            <RenderLink
              key={pageNameLowerCase}
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
