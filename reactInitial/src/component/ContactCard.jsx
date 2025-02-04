import React from "react";
import star from "../assets/star.png";
import fillStar from "../assets/fillStar.png";
import avatar from "../assets/profile.png";

function ContactCard(){
    const [contact, setContact] = React.useState({
        firstName : "Neamoth",
        lastName: "Ullah",
        email: "neamoth15-8202@diu.edu.bd",
        number: "+880 01789-400417",
        isFavourite: false,
    })
    function toggleFavourite(){
        setContact(preState => {
            return{
                ...preState,
                isFavourite:!preState.isFavourite,
            }
        })
    }
    return(
        <main>
            <article className="card">
                <h1
                    aria-level={`${contact.firstName} ${contact.lastName}`}
                >
                    {contact.firstName} {contact.lastName}
                </h1>
                <img
                    className="avatar"
                    src={avatar} 
                    alt="User Profile of Neamoth Ullah"
                />
                <div className="info">
                    <button
                        onClick={toggleFavourite}
                        aria-pressed={contact.isFavourite}
                        aria-level={contact.isFavourite ? "Remove from Favorite" : "Add to Favorite"}
                        className="favourite-btn"
                        >
                        <img 
                            src={contact.isFavourite ? fillStar : star}
                            alt={contact.star ? "Empty Star" : "Filled Star"}
                            className="fav"
                        />
                    </button>
                    <p
                        aria-level={`Phone Number ${contact.number}`}
                        alt="Phone Number"
                        >
                        {contact.number}
                    </p>
                    <p
                        aria-level={`Email is ${contact.email}`}
                        alt="Email"
                        >
                        {contact.email}
                    </p>

                </div>
            </article>
        </main>
    )
}

export default ContactCard;