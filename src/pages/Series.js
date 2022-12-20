import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries"; 
import useFetch from "../hooks/useFetch";



export default function Series() {
    const listSeries = useFetch(
      `http://gateway.marvel.com/v1/public/series?ts=1&apikey=c4ec0b8b17c2e90b2c18e16a054044b6&hash=b5e740944246b9b723bc2140788a3578&orderBy=startYear&limit=20`
    );
return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Las últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}