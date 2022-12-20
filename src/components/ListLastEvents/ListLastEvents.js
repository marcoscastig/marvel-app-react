import { Card, Header } from "semantic-ui-react"
import useFetch from "../../hooks/useFetch"
import Container from "../Container"
import LastEvents from "../LastEvents"
import "./ListLastEvents.scss";

export default function ListLastEvents() {
    const lastEventsFetch = useFetch(`http://gateway.marvel.com/v1/public/events?ts=1&apikey=c4ec0b8b17c2e90b2c18e16a054044b6&hash=b5e740944246b9b723bc2140788a3578&orderBy=startDate&limit=5`)
    return(
        <div className="container-list-last-events">
            <Header size="large">Ultimos Eventos </Header>
            <Container bg="ligth">
                <Card.Group itemsPerRow={5}>
                    <LastEvents lastEventsFetch={lastEventsFetch}/>
                </Card.Group>
            </Container>

        </div>
    )
}