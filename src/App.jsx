import { format } from "./../node_modules/date-fns";
import "./App.css";

function App() {
	return (
		<div className="text-center font-bold text-6xl text-white bg-lime-700 m-60 p-8 outline-8 border-yellow-500 rounded-2xl">
			<p>{format(new Date(), "HH:mm:ss | MMMM dd, yyyy")}</p>
		</div>
	);
}

export default App;
