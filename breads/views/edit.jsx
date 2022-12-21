const React = require('react')
const Default = require('./layouts/default')

function edit(){
    return(
        <Default>
            <h2> Edit this bread please</h2>
            <form>
                {/* Name is required */}
                <label htmlFor='name'>Name</label>
                <input type="text" name = "name" id='name' required/>

                <label htmlFor='image'>IMAGE</label>
                <input type="text" name = "image" id='image'/>

{/* This form has a checkbox for just yes/no */}
                <label htmlFor='hasGluten'>Does it have Gluten?</label>
                <input type="checkbox" name = "hasGluten" id='hasGluten' defaultChecked/>




                <input type = "submit"></input>
            </form>

        </Default>
    )
}

module.exports=edit