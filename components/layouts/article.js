import Head from 'next/head'

const Layout = ({ children, title }) => {
  const t = `Ananya - ${title}`
  return (
      <>
        {title && (
          <Head>
            <title>{t}</title>
          </Head>
        )}
        {children}
      </>
  )
}

export default Layout
