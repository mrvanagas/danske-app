async function fetchPeople() {
    let res = await fetch('https://swapi.dev/api/people/');
    let data = await res.json();
    return data.results;
}


export const showPeople = async (movies) => {
    const people = await fetchPeople();
    const matchingPeople = [];
    console.log('char count: ', movies.characters.length);
    console.log('peopel count: ', people.length);
    movies.characters.forEach((movieCharacter) => {
        people.forEach((person) => {
            const isMatching = person.url === movieCharacter;
            if (isMatching) {
                matchingPeople.push(person);
            }
        });
    });
    return matchingPeople;
}
