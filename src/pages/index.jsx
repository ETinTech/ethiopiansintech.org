import React from 'react';
import { Container, Heading, Text } from 'rebass';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading is="h1" my={3}>
        Some catchy tagline
      </Heading>
      <Text is="p">Let's put our vision/mission here</Text>
    </Container>
  </Layout>
);

export default IndexPage;
