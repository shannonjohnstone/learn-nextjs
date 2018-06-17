import Link from 'next/link';

const pages = ['Home', 'About', 'Contact'];

const renderLinks = (page) => {
  const link = page.toLowerCase()
  return <Link key={link} href={link === 'home' ? 'index' : link}><a className='nav__item'>{page}</a></Link>
}

const Navigation = (current) => (
  <nav className='nav'>{pages.filter(page => page !== current).map(renderLinks)}</nav>
)

export default Navigation;
