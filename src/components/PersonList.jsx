import React from "react";
import { DetailsButton } from "./DetailsButton";
import { useState } from "react";

export default function PersonList(props) {
    const [sort, setSort] = useState(false);

    return (
        <div>
            <button
                className="btn btn-danger my-3"
                onClick={() => {
                    setSort(!sort);
                    props.onButtonClick()
                }}
            >
                Sort people by name
            </button>
            <table className="table my-2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Information</th>
                    </tr>
                </thead>
                <tbody>
                    {sort
                        ? props.myPeople
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((person) => (
                                <tr>
                                    <td key={person.personId}>{person.name}</td>
                                    <td>
                                        <DetailsButton
                                            myperson={person}
                                            onButtonClick={props.onButtonClick}
                                        />
                                    </td>
                                </tr>
                            ))
                        : props.myPeople.map((person) => (
                            <tr>
                                <td key={person.personId}>{person.name}</td>
                                <td>
                                    <DetailsButton
                                        myperson={person}
                                        onButtonClick={props.onButtonClick}
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}