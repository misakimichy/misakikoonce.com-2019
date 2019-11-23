import React from 'react'
import { Link } from 'gatsby'

const Works = () => (
    <div>
        <div>
            <Link to='/'>
                <a>Go back</a>
            </Link>
            <div>
                <span>avator.img</span><span>author</span>
            </div>
        </div>
        <div>
            <div>
                <h1>Project Name</h1>
                <p>The project description comes here. The project name and project description be called from the template file.</p>
            </div>
            <div>
                <h2>Stack</h2>
                <p>tag from template</p>
            </div>
            <div>
                <h2>Showcases</h2>
                <p>showcase tag from template</p>
            </div>
            <iframe>iframe comes here</iframe>
        </div>
    </div>
)

export default Works