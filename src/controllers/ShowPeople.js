function getStarWarsPeople(progress, url = 'https://swapi.dev/api/people/', people = []) {
  return new Promise((resolve, reject) => fetch(url)
    .then(response => {
        if (response.status !== 200)  {
          throw `${response.status}: ${response.statusText}`;
        }
        response.json().then(data => { 
            people = people.concat(data.results);

          if(data.next) {
            progress && progress(people);
            getStarWarsPeople(progress, data.next, people).then(resolve).catch(reject)
          } else {
            resolve(people);
          }
        }).catch(reject);
    }).catch(reject));
}

function progressCallback(people) {
  // render progress
  console.log(`${people.length} loaded`);
}

getStarWarsPeople(progressCallback)
  .then(people => {
    // all planets have been loaded
    console.log(people.map(p => p.name))
  })
  .catch(console.error);

  export const showPeople = async (movies) => {
    const people = await getStarWarsPeople();
    const matchingPeople = [];
    console.log('char count: ', movies.characters.length);
    console.log('people count: ', people.length);
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

export default showPeople;