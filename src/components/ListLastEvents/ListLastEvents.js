import { Card, Header } from "semantic-ui-react"
import useFetch from "../../hooks/useFetch"
import Container from "../Container"

export default function ListLastEvents() {
    const lastEventsFetch = useFetch(`http://gateway.marvel.com/v1/public/events?ts=1&apikey=c4ec0b8b17c2e90b2c18e16a054044b6&hash=b5e740944246b9b723bc2140788a3578&orderBy=startDate&limit=12`)
console.log(lastEventsFetch) 
//const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c4ec0b8b17c2e90b2c18e16a054044b6&hash=b5e740944246b9b723bc2140788a3578')
const lastEventsFetcha = useFetch(
    `${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=10`
  );

  console.log(lastEventsFetcha)
    return(
        <div className="container-list-last-events">
            <Header size="large">Ultimos Eventos </Header>
            <Container bg="ligth">
                <Card.Group itemsPerRow={5}>
                    <p>Los Eventos</p>  
                    <p>Los Eventos</p>
                    <p>Los Eventos</p>
                    <p>Los Eventos</p>
                    <p>Los Eventos</p>
                    <p>Los Eventos</p>
                </Card.Group>
            </Container>

        </div>
    )
}