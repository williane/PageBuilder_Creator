import React from 'react';
import { Button, Container, Header, Image, Main, PageLanding, Section, Titulo } from '../components/page-landing';
import Logo from '../assets/images/logo.svg'
import Arrow from '../assets/images/arrow.svg'

function Home() {
  return (
    <PageLanding>
      <Container>
        <Header>
          <Image src={Logo} />
        </Header>
        <Main>
          <Titulo>Com apenas alguns cliques uma nova Page Builder prontinha para você!</Titulo>
          <Section>
            <Titulo></Titulo>
            <Button as="a" href="/CreatePagebuilder">
              <Image src={Arrow} />
            </Button>
          </Section>
        </Main>
      </Container>
    </PageLanding>
  );
}

export default Home;