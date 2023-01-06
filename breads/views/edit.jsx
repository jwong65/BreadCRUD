const React = require('react')
const Default = require('./layouts/default')

function edit({bread}){
    return(
        <Default>
            <h2> Edit this bread please</h2>
            <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
                {/* Name is required */}
                <label htmlFor='name'>Name</label>
                <input type="text" name = "name" id='name' required defaultValue={bread.name}/>

                <label htmlFor='image'>IMAGE</label>
                <input type="text" name = "image" id='image' defaultValue={bread.image}/>

                {/* Need to have field to update bakers */}
                <label htmlFor='baker'>Baker who baked it</label>
                <select name='baker' id='baker' defaultValue={bread.baker}>
                    <option value='Rachel'>Rachel</option>
                    <option value='Monica'>Monica</option>
                    <option value='Joey'>Joey</option>
                    <option value='Chandler'>Chandler</option>
                    <option value='Ross'>Ross</option>
                    <option value='Phoebe'>Phoebe</option>
                </select>
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