// Import React and necessary dependencies
import PropTypes from 'prop-types';

// Define and export the Footer component
export default function Footer(props) {
    const { showModal, handleToggleModal, data } = props; // Destructure the props

    return (
        <footer>
            {/* Background gradient styling */}
            <div className="bgGradient"></div>

            {/* Footer content */}
            <div>
                {/* Title of the project */}
                <h1>APOD PROJECT</h1>

                {/* Title of the data (e.g., NASA's picture title) */}
                <h2>{data?.title}</h2>
            </div>

            {/* Button to toggle the modal */}
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

// Define the prop types for the Footer component
Footer.propTypes = {
    showModal: PropTypes.bool.isRequired, // showModal is a required boolean
    handleToggleModal: PropTypes.func.isRequired, // handleToggleModal is a required function
    data: PropTypes.shape({ // data is a required object containing specific properties
        title: PropTypes.string, // title is a string
    }).isRequired
}

/**
 * Flow Chart:
 * - Import necessary dependencies, including PropTypes.
 * - Export the Footer functional component, which receives props (showModal, handleToggleModal, and data).
 * - Render the component structure:
 *   - A footer element.
 *   - A div with class "bgGradient" for background styling.
 *   - A div containing:
 *     - An h1 element displaying the project title.
 *     - An h2 element displaying the data title.
 *   - A button to toggle the modal, triggering handleToggleModal on click.
 * - Define prop types using PropTypes.
 */
