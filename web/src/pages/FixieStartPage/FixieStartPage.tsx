import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FixieStartPage = () => {
  return (
    <>
      <MetaTags title="FixieStart" description="FixieStart page" />

      <h1>Fixie Start Page</h1>

      <p>
        This is the simplest possible RedwoodJS application, created by
        following the RedwoodJS tutorial up to (and including) the section{' '}
        <a href="https://redwoodjs.com/docs/tutorial/chapter1/first-page">
          Fixie Start Page
        </a>
      </p>
    </>
  )
}

export default FixieStartPage
