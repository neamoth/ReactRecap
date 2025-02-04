import React from 'react';

function AddItem(){
    const database = ["Abdus Salam", "Nasrin Akter", "Neamoth", "Mitu", 'Saima', "Nahid", "Samira", "Noor"];
    const [name, setName] = React.useState([]);
    const members = name.map((value,index) => <p key={index}>{value}</p>)

    function add(){
        setName(preValue =>{
            
            return [...preValue, database[preValue.length]];
        })
    }

    return(
        <section onClick={add} className='family'>
            <h1>Add Family Member:</h1>
            <button>Add Now</button>
            <h3>List:</h3>
            <div className="div">
                {members}
            </div>
        </section>
    );
}

export default AddItem;