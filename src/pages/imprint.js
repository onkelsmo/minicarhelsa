import React from 'react';
import Layout from '@common/Layout';
import { Container } from '@components/global';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import styled from 'styled-components';

const Imprint = () => (
  <Layout>
    <Navbar origin='imprint' />
    <Container>
      <Grid>
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          Minicar Helsa UG<br />
          <br />
          Gesellschafter Inhaber:<br />
          Sascha Marr<br />
          <br />
          Geschäftsführerin:<br />
          Angelika Marr<br />
          <br />
          Am Stubberg 7<br />
          34298 Helsa
        </p>
        <p>
          <strong>Registereintrag: </strong><br />
          Amtsgericht Kassel HRB 16559
        </p>
        <p>
          <strong>Haftungsausschluss: </strong>
          <br />
          <br />
          <strong>Haftung für Inhalte</strong>
          <br />
          <br />
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
          TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
          sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen
          zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.<br /><br /><strong>Urheberrecht</strong><br /><br />
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
          Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
          dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
          werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Inhalte umgehend entfernen.
        </p>
      </Grid>
    </Container>
    <Footer />
  </Layout>
);

const Grid = styled.div`
  display: grid;
  //grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: left;
  align-items: flex-start;
  justify-items: flex-start;
  margin: 124px 0;

  ${props =>
  props.inverse &&
  `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
  props.inverse &&
  `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Imprint;
