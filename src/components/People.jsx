import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const People = ({data}) => {
    return (
        <>
            <div data-testid="people-1">
                <h1>People</h1>
                <Grid columns={3}>
                    {data && data.map((people, i) => {
                        return (
                            <Grid.Column key={i}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>{people.name}</Card.Header>
                                        <Card.Description>
                                            <strong>Gender</strong>
                                            <p>{people.gender}</p>
                                            <strong>Mass</strong>
                                            <p>{people.mass}</p>
                                            <strong>Gender</strong>
                                            <p>{people.gender}</p>
                                            <strong>Birth Year</strong>
                                            <p>{people.birth_year}</p>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}

export default People
