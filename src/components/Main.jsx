// Import React and necessary dependencies
import PropTypes from 'prop-types';

// Define and export the Main component
export default function Main(props) {
    const { data } = props; // Destructure the data prop

    return (
        <div className="imgContainer">
            {/* Display the image fetched from the data with appropriate alt text */}
            <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
        </div>
    )
}

// Define the prop types for the Main component
Main.propTypes = {
    data: PropTypes.shape({
        hdurl: PropTypes.string.isRequired, // hdurl is a required string
        title: PropTypes.string, // title is an optional string
    }).isRequired
}

/**
 * Flow Chart:
 * - Import necessary dependencies, including PropTypes.
 * - Export the Main functional component, which receives props (data).
 * - Render the component structure:
 *   - A div with class "imgContainer".
 *   - An img element displaying the image from data.hdurl with alt text data.title or a fallback 'bg-img'.
 * - Define prop types using PropTypes.
 */
