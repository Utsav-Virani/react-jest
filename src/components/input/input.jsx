import React from "react";

export default function Input() {
    return (
        <>
            <label htmlFor="name">Enter Name:-</label>
            <input
                type="text"
                name="name"
                id="name"
                className="input-name-style"
                value=""
                data-testid="input"
            />
        </>
    );
}
