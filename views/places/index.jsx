const React = require('react')
const Def = require('../default')

function index (data) {

    let placesFormated = data.places.map((place, index) => {
        return (
            <div key={index}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormated}
            </main>
        </Def>
    )

}
  
  

module.exports = index