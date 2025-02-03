import React from "react";

import { TodoListFetch } from "./TodoListFetch";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TodoListFetch/>
			<Footer/>
		</div>
	);
};

export default Home;
