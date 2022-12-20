import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {
  const [renderComics, setRenderComics] = useState(10);

  const listComics = useFetch(
    `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c4ec0b8b17c2e90b2c18e16a054044b6&hash=b5e740944246b9b723bc2140788a3578&orderBy=focDate&limit=${renderComics}`
  );

  

  return (
    <div className="comics-page">
      <div id="slide-comics-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Los mejores Cómics</Header>
            <ListComics
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}