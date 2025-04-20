import PropTypes from "prop-types";
const PersonCard = ({ data }) => {
  return (
    <div className="flex-center-col">
      {data.map((person) => {
        <div key={person.firstName}>
          <h1 className="text">{person.firstName}</h1>
          <h1 className="text">{person.lastName}</h1>
          <h1 className="text">{person.age}</h1>
        </div>
      })}
    </div>
  )
}

PersonCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default PersonCard