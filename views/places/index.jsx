const React = require('react')
const Def = require('../default')

function index (data) {

    let placesFormated = data.places.map((place, index) => {
        return (
            <div key={index} className='col-sm-6'>
                <h2>{place.name}</h2>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}/>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Places to Rant and Rave About</h1>
                <div className='row'>
                    {placesFormated}
                </div>
                
            </main>
        </Def>
    )

}
  
  

module.exports = index