const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// In-memory data store
let items = [];
let currentId = 1;

// Root route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// CRUD Operations

// GET /items - Retrieve all items
app.get("/items", (req, res) => {
  res.json(items);
});

// GET /items/:id - Retrieve a single item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// POST /items - Create a new item
app.post("/items", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }
  const newItem = { id: currentId++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - Update an item by ID
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });

  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE /items/:id - Delete an item by ID
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1)
    return res.status(404).json({ error: "Item not found" });

  items.splice(itemIndex, 1);
  res.status(204).send();
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
