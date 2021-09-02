import React from 'react'
import { Card, Grid } from 'semantic-ui-react'


const Movies = ({data}) => {
    return (
        <>
        <h1>Movies</h1>
        <Grid columns={3}>
            {data.map((movies, i) => {
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
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </>
    )
}

export default Movies
