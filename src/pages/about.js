import * as React from "react"
import {Link} from "gatsby"

const AboutPage = () => {
    return (
        <main>
        <h1>About Page</h1>
        <Link to="/">Main Page</Link>
        <p>This is About Me hahah</p>
    </main>
    )
}
    
export const Head = () => <title>About Me</title>

export default AboutPage;

