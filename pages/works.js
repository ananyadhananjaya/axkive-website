import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = () => {
  return (
    <Layout title={'Works'}>
      <Container>
        <Heading fontSize={22} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing={10}>
          <Section>
            <WorkGridItem
              id="static-portfolio"
              title={'Hello world'}
              thumbnail={"/images/works/static-portfolio-css.png"}
              href={'https://ananyadhananjaya.github.io/portfoioAX/'}
            >
              This is my first hosting page.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="nasa-apod"
              title={'Apod'}
              thumbnail={"/images/works/nasa-api-static-site.png"}
              href={'https://api-ax-98.web.app/ '}
            >
              An Application that gives us Astronomy Picture of the Day and a
              small description on the Image.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem 
              id="logs-app"
              title={'Logs'}
              thumbnail={"/images/works/logs-firebase.png"}
              href={'https://logs-tawny.vercel.app/'}
            >
              An Application where we can log. No login or account creation
              required.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="know-more"
              title={'know-more'}
              thumbnail={"/images/works/nextjs-static-portfolio.png"}
              href={'https://know-more-about-me.vercel.app/'}
            >
              A NextJs Application to know more about me.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
