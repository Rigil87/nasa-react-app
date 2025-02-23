import PropTypes from 'prop-types'

// Define and export the SideBar component
export default function SideBar({ handleToggleModal, data }) {
    return (
        <div className="sidebar">
            {/* Overlay that covers the main content and listens for clicks to close the modal */}
            <div onClick={handleToggleModal} className="bgOverlay"></div>

            {/* Sidebar content container */}
            <div className="sidebarContents">
                {/* Display the title of the data (e.g., NASA's picture title) */}
                <h2>{data?.title}</h2>

                {/* Container for the description of the data */}
                <div className="descriptionContainer">
                    {/* Display the date of the data */}
                    <p className="descriptionTitle">{data?.date}</p>

                    {/* Display the explanation or description of the data */}
                    <p>{data?.explanation}</p>
                </div>

                {/* Button to close the sidebar modal */}
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

// Define the prop types for the SideBar component
SideBar.propTypes = {
    handleToggleModal: PropTypes.func.isRequired, // handleToggleModal is a required function
    data: PropTypes.shape({ // data is a required object containing specific properties
        title: PropTypes.string, // title is a string
        date: PropTypes.string, // date is a string
        explanation: PropTypes.string // explanation is a string
    }).isRequired
}

/**
 * Flow Chart:
 * - Import PropTypes for type checking.
 * - Export the SideBar functional component, which receives props (handleToggleModal and data).
 * - Render the component structure:
 *   - A div with class "sidebar".
 *   - A div with class "bgOverlay" that triggers handleToggleModal on click.
 *   - A div with class "sidebarContents" containing:
 *     - h2 element displaying data title.
 *     - A div with class "descriptionContainer" containing:
 *       - p element displaying data date.
 *       - p element displaying data explanation.
 *     - A button to close the sidebar modal, triggering handleToggleModal on click.
 * - Define prop types using PropTypes.
 */
