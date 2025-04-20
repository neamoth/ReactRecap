import PersonCard from "../component/PersonCard"
import { personDetails } from "../constant/"
const PropsDocumentation = () => {
  return (

    <div className="container">
      <PersonCard
        data={ personDetails }
      />
    </div>
  )
}

export default PropsDocumentation