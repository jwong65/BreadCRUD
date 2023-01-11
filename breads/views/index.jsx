const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, bakers, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread.</p> */}
        <h3>Bread</h3>
        <ul>
            {
                    breads.map((bread)=> {
                      return (
                      <ul>
                        <li key={bread._id}>
                          <a href={`/breads/${bread._id}`}>
                            {/* index is changed to bread.id since it's a database not an array index */}
                              {bread.name}
                          </a>
                        </li>
                      </ul>)
                  
                    })

            }
        </ul>
        <h3>Bakers</h3>
        <ul>
          {
            bakers.map((baker)=>{
              return(
                <li key={baker._id}>
                  <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                </li>
              )
            })
          }
        </ul>
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div>

      </Default>
    )
}

module.exports = Index
