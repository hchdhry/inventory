const db = require("./db"); // Import the database connection
const Item = require("./itemModel"); // Import the Item model you defined

const sampleItems = [
  {
    name: "Item 1",
    description: "Description for Item 1",
    category: "Category A",
    price: 10,
    stock: 100,
    URL: "https://example.com/item1",
  },
  {
    name: "Item 2",
    description: "Description for Item 2",
    category: "Category B",
    price: 20,
    stock: 50,
    URL: "https://example.com/item2",
  },
  
];

async function populateDatabase() {
  try {
    
    await Item.deleteMany({});
    
    
    await Item.insertMany(sampleItems);
    
    console.log("Database populated successfully");
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
   
    db.close();
  }
}


populateDatabase();
