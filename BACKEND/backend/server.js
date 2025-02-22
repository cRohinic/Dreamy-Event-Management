import app from "./app.js";  // Add the .js extension
const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});


