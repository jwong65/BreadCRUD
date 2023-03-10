const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>

        <p>
            and it
            {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
            {/* This bread is baked by {bread.baker} instead using bakedBy() instance*/}
            <br></br>
            {bread.bakedBy()}
        </p>


        <img src={bread.image} alt={bread.name} />

        {/* Link back to homepage */}
        <li>          {/* from from activity */}
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
          </form>
        </li>
        <li>
            <a href="/breads"><button>Go Home</button></a>
        </li>
        <li>
          <a href={`/breads/${bread.id}/edit`}><button>Edit This Bread</button></a>
        </li>
      </Default>

    )
}

module.exports = Show
