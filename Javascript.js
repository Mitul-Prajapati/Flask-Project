const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const ToDoSchema = new mongoose.Schema({
    itemName: String,
    itemDescription: String,
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

app.post("/submittodoitem", async (req, res) => {
    const { itemName, itemDescription } = req.body;

    try {
        const newToDo = new ToDo({ itemName, itemDescription });
        await newToDo.save();
        res.status(200).send("To-Do Item Saved Successfully");
    } catch (error) {
        res.status(500).send("Error Saving To-Do Item");
    }
});

const PORT = 3000;
mongoose
    .connect("mongodb://localhost:27017/todolist", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err));