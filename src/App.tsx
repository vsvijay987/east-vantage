import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
    const [person, setPerson] = useState<any>();
    const newPerson = async (): Promise<any> => {
        const personData = await axios.get("https://randomuser.me/api");
        setPerson(personData.data.results[0]);
        localStorage.setItem(
            "person",
            JSON.stringify(personData.data.results[0])
        );
    };
    useEffect(() => {
        const personLocal = JSON.parse(localStorage.getItem("person")!);
        if (personLocal) {
            setPerson(personLocal);
        } else {
            newPerson();
        }
    }, []);
    return (
        <div className="App">
            {person ? (
                <Card
                    name={person.name}
                    email={person.email}
                    picture={person.picture.large}
                />
            ) : (
                <p>Loading...</p>
            )}
            <div className="flex space-x-2 justify-center">
                <button
                    onClick={() => newPerson()}
                    type="button"
                    className="mt-10 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Get new person
                </button>
            </div>
        </div>
    );
};

export default App;
