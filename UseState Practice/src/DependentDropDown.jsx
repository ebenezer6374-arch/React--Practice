import { useState } from "react";
const data = {
    India: {
        TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
        Karnataka: ["Bangalore", "Mysore"],
    },
    USA: {
        California: ["Los Angeles", "San Francisco"],
        Texas: ["Dallas", "Austin"],
    },
};
function LocationSelector() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const states = selectedCountry
        ? Object.keys(data[selectedCountry])
        : [];
        // console.log(Object)
    const cities =
        selectedCountry && selectedState
            ? data[selectedCountry][selectedState]
            : [];
    function handleCountryChange(e) {
        setSelectedCountry(e.target.value);
        setSelectedState("");
        setSelectedCity("");
    }
    function handleStateChange(e) {
        setSelectedState(e.target.value);
        setSelectedCity("");
        //    console.log(states)
    }
    return (
        <div>
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select Country</option>
                {Object.keys(data).map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
            <select value={selectedState} onChange={handleStateChange}>
                <option value="">Select State</option>

                {states.map((state) => (
                    <option key={state} value={state}>
                        {state}
                        
                    </option>
                 
                ))}
            </select>
            <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                <option value="">Select City</option>

                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <h3>Selected Values</h3>
            <p>Country: {selectedCountry}</p>
            <p>State: {selectedState}</p>
            <p>City: {selectedCity}</p>
        </div>
    );
}
export default LocationSelector;