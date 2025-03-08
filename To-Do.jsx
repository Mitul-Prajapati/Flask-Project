import React, { useState } from "react";

const ToDoPage = () => {
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("To-Do Item Submitted:", { itemName, itemDescription });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Item Name:
                <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </label>
            <br />
            <label>
                Item Description:
                <input type="text" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ToDoPage;