import React from 'react'

import {
  Section,
  Container,
  Row,
  Column,
  Button,
} from 'otep'


const OtepDemo = () =>
  <Section>
    <Container>
      <Row>
        <Column tablet="one-half">
          <Button>Click me</Button>
        </Column>
        <Column tablet="one-half">
          <Button>Click me too</Button>
        </Column>
      </Row>
    </Container>
  </Section>

export default OtepDemo
