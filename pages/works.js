import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article"
import Section from "../components/section";

import thumbStatic from "../public/images/works/static-portfolio-css.png"


const Works = () => {
    return (
        <Layout title={'Works'}>
            <Container>
                <Heading fontSize={22} mb={4} >Works</Heading>
                <SimpleGrid columns={[1,1,2]} spacing={2}>
                    <Section>
                        <WorkGridItem id="static-portfolio" title={"Static Page"} thumbnail={thumbStatic} >
test
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;