import React from 'react'
import { Card, Grid, Button } from 'semantic-ui-react'
import {showPeople} from '../controllers/ShowPeople'


// import fakedata from '../fakedata.json'



const Movies = ({data, setPeople}) => {
    console.log(setPeople)
    return (
        <>
        <h1>Movies</h1>
        <Grid columns={3}>
            {data && data.map((movies, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{movies.title}</Card.Header>
                                <Card.Description>
                                    <strong>Episode</strong>
                                    <p>{movies.episode_id}</p>
                                    <strong>Release</strong>
                                    <p>{movies.release_date}</p>
                                </Card.Description>
                            <Button onClick={ async () => {
                                const people = await showPeople(movies)
                                console.log('test people ',people)
                                setPeople(people)
                            } }>
                                Show People
                            </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </>
    )
}

export default Movies;