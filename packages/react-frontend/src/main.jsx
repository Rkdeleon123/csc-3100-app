import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./main.css";


//small change


const container = document.getElementById("root");

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render:
root.render(<MyApp />);
