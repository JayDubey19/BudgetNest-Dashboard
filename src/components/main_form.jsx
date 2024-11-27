import { UserPlusIcon } from "@heroicons/react/24/solid"
import { Form } from "react-router-dom"
import ill from "../assets/jill.png"

const Intro = () =>{
    return(
        <div className="intro">
            <div>
                <h1>
                Empower Your Money <span className="accent">Own It</span>

                </h1>
                <p>
                Budget wisely, live freely. Begin your financial journey now.
                </p>
                <Form method="post">
                    <input
                    type="text"
                    name="userName"
                    placeholder="What is you name?"
                    aria-label="Your Name"
                    autoComplete="given-name"
                    />
                    <input type="hidden" name="_action" value="newUser" />
                    <button type="Submit" className="btn btn--dark">
                        <span>Let's Start</span>
                        <UserPlusIcon width={20}/>
                    </button>
                    </Form>
            </div>
            <img src={ill} alt="Person with money" width={400} style={{ marginLeft: '90px' }} />
        </div>
    )
}
export default Intro