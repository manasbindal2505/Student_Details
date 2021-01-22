import React,{useState} from 'react';
import Popup from './Popup';


const Students = ({result}) => {

	const [details, setDetails] = useState({
		name:'',
		age:'',
		roll:'',
		dob:'',
		class:''
	});

	const popHandler= () =>{
		setDetails({name:''});
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Roll Number</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{result.map(student =>(
						<tr key={student._id}  >
							<td onClick={()=>setDetails(student)}>{student.roll}</td>
							<td onClick={()=>setDetails(student)}>{student.name}</td>

						</tr>
					))}

				</tbody>
			</table>
			<div className='note'><b>Note: </b>Click on Roll Number or Name to know more about the student.</div>

			{details.name ?
				<Popup
					text={details}
					closePopup={popHandler}
				/>
				: null
			}
		</div>
	)
}

export default Students;