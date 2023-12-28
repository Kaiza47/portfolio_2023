import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container m-auto font-sans py-5 place-content-center">
      <nav>
        <ol className="list-inside flex font-medium">
          <li className='px-5'><Link to="/">Home</Link></li>
          <li className='px-5'><Link to="/about">About</Link></li>
        </ol>
      </nav>
      <main>
        <h1 className="font-semibold text-5xl py-5 text-purple-700">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout;