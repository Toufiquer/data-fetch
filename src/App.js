import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Single from "./country/Country/Country";

function App() {
    return (
        <div className="App">
            <LoadData></LoadData>
        </div>
    );
}

const LoadData = () => {
    let [countries, SetCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => SetCountries(data));
    }, []);

    return (
        <div>
            <h2>Found {countries.length} Countries</h2>
            <div className="countryParents">
                {countries.map(country => (
                    // <Single country={country}></Single>
                    <Single country={country}></Single>
                ))}
            </div>
        </div>
    );
};

export default App;
