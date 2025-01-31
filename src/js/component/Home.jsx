import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ExampleFetchComplex } from "./ExampleFetchComplex";
import { TodoListFetch } from "./TodoListFetch";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* <h1 className="text-center mt-5">ToDo List with Fetch</h1> */}
			{/* <ExampleFetchComplex/> */}
			<TodoListFetch/>
			<Footer/>
		</div>
	);
};

export default Home;
