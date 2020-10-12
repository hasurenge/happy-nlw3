import React from "react";

interface LocationProps {
    state: string;
    city: string;
}

export default (props: LocationProps): JSX.Element => {
    return (
        <div>
            <strong>{props.state}</strong>
            <span>{props.city}</span>
        </div>
    );
};
