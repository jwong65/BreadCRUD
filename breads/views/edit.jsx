const React = require('react')
const Default = require('./layouts/default')

function edit({bread, index}){
    return(
        <Default>
            <h2> Edit this bread please</h2>
            <form action={`/breads/${index}?_method=PUT`} method="POST">
                {/* Name is required */}
                <label htmlFor='name'>Name</label>
                <input type="text" name = "name" id='name' required defaultValue={bread.name}/>

                <label htmlFor='image'>IMAGE</label>
                <input type="text" name = "image" id='image' defaultValue={bread.image}/>

{/* This form has a checkbox for just yes/no */}
                <label htmlFor='hasGluten'>Does it have Gluten?</label>
                <input type="checkbox" name = "hasGluten" id='hasGluten' defaultChecked={bread.hasGluten}/>
{/* Break because button is being overlapped by checkbox. */}
                <br></br>


                <input type = "submit"></input>
            </form>

        </Default>
    )
}

module.exports=edit