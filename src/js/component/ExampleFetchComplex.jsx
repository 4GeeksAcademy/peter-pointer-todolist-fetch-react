import React, { useEffect, useState } from "react";

export const ExampleFetchComplex = () => {
    const [characters, setCharacters] = useState(["1", "2"]);
    const base_url = "https://playground.4geeks.com/todo";

    const getCharacters = async () => {
        const uri = `${base_url}/users/blanca`;
        const options = {
            method: "GET",
        };
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log("Error:", response.status, response.statusText);
            return;
        }
        const data = await response.json();
        console.log(data);
        setCharacters(data.todos);
    };
    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center text-dark">            
                <span>
                    <i className="fa fa-check text-success"></i>
                </span>
            </h1>
            <ul className="list-group">
                {characters.map((iterator, index) => (
                    <li key={index} className="list-group-item">
                        {iterator.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
