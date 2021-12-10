import { useState } from "react";

function Conditionalrendering() {

    const [loggedIn, setLoggedIn] = useState(1)
    // const loggedIn = 1
    // setLoggedIn(1);

    return (
        <div>
            {
                loggedIn === 1 ? <h2>User 1 </h2> : loggedIn === 2 ? <h2>User 2</h2> : <h2>User 3</h2>
            }

        </div>
    )
}
export default Conditionalrendering;