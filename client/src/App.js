import React,{ Fragment ,useState} from "react";
import axios from 'axios';
import './App.css';
import Students from './Components/Students'



const  App = () => {

	const [result,setResult] = useState(null);


	const getStudents = async() =>{
		const res = await axios.get("http://localhost:5000/");
		setResult(res.data.students)
	}
	return (
		<Fragment>
			<button className='btn' onClick={getStudents}> Get Student Details</button>
			{result && <Students result={result}/>}
		</Fragment>
	);
}

export default App;
