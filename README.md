# README

Welcome to [RedwoodJS](https://redwoodjs.com)!

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (=18.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Start by installing dependencies:

```
yarn install
```

Then start the development server:

```
yarn redwood dev
```

Your browser should automatically open to [http://localhost:8910](http://localhost:8910) where you'll see the Fixie Start Page:


```
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
```


<img width="749" alt="image" src="https://github.com/adriatic/screenshots/assets/2712405/47371d36-76fa-41fa-95eb-336c9d3a2297"/>

<h3>Note</h3>
The rest of this sample's functionality (and the related  code) was stripped to make this sample a starter for adding AI code.

---

