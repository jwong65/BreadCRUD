const React = require('react')
const Default = require('./layouts/default')


function page404(){
    return(
        <Default>
            <h2>This is a 404 error. Please Test</h2>
            <li><a href='/breads'>Return to the homepage</a></li>
        </Default>
    )

}

module.exports = page404