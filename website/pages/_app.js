import Theme from 'styles/theme'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

import { JsonLd } from 'react-schemaorg'

export default ({ Component, pageProps }) => (
  <Theme>
    <JsonLd
          item={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://imrodriguez.com"
          }}
    />
    <Nav links={pageProps.menuItems} transparent={pageProps.NavTransparent ? true : false} />
    <main style={{marginTop: pageProps.NavTransparent ? '0' : '100px' }}>
      <Component {...pageProps} />
    </main>
    <Footer/>
  </Theme>
)