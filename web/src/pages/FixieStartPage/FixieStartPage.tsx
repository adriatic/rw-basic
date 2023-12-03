import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FixieStartPage = () => {
  return (
    <>
      <MetaTags title="FixieStart" description="FixieStart page" />

      <h1>FixieStartPage</h1>

      <p>
        This is the simplest possible RedwoodJS application, created by
        following the RedwoodJS tutorial up to the (and including) the section{' '}
        <a href="https://redwoodjs.com/docs/tutorial/chapter1/first-page">
          <h3>First Page</h3>
        </a>
        .
      </p>
    </>
  )
}

export default FixieStartPage
