import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing GitHub and LinkedIn icons
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink to="/" aria-label="Go to home">
                <span>BudgetNest</span>
            </NavLink>

            {/* GitHub and LinkedIn Icons */}
            <div className="social-icons">
                <a href="https://github.com/JayDubey19" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/jay-dubey-8839aa1a2/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>

            {userName && (
                <Form
                    method="post"
                    action="/logout"
                    onSubmit={(event) => {
                        if (!confirm("Delete user and all data?")) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button type="submit" className="btn btn--warning">
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                    </button>
                </Form>
            )}
        </nav>
    );
};

export default Nav;
