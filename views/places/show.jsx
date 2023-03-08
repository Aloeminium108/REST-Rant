const React = require('react')
const Def = require('../default')

function show (data) {

    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )

    if (data.place.comments.length) {
        comments = data.place.comments.map((comment, index) => {
        return (
            <div className="border" key={`comment-${index}`}>
                <h2 className="rant">{comment.rant ? 'Rant! >:O' : 'Rave! :))'}</h2>
                <h4>{comment.content}</h4>
                <h3>
                    <stong>- {comment.author}</stong>
                </h3>
                <h4>Rating: {comment.stars}</h4>
            </div>
        )
        })
    }

    return (
        <Def>
          <main>
            <div>
                <img src={data.place.pic} alt={data.place.name}/>
                <h1>{data.place.name}</h1>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
            </div>
            <div>
                <h2>Rating</h2>
                <p>No rating available</p>
            </div>
            <div>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
            </div>
            <div>
                <h2>Comments</h2>
                {comments}
            </div>

            <div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a> 
            </div>
            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     

            <h1>Add a New Comment</h1>
            <form method="POST" action={`/places/${data.place.id}/comment`} >
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Content</label>
                    <input type="textarea" className="form-control" id="content" name="content" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Star Rating</label>
                    <input type="number" step={0.5} className="form-control" id="stars" name="stars" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">Rant?</label>
                    <input type="checkbox" id="rant" name="rant" />
                </div>
                <input className="btn btn-primary" type="submit" defaultValue="Add Comment" />
            </form>

          </main>
        </Def>
    )
}

module.exports = show
