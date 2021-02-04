import './Section1.css';

const section1 = (props) => (
    <div className = "container">
            <h2 className="container-title">{props.title}: </h2>
            <div className="container-results">
            {props.results}
            </div>
    </div>
); 
export default section1; 