const express 		= 	require('express');
const cors 			= 	require('cors');
const connectDB 	= 	require('./config/db')
const Student 		= 	require('./models/Student')

const app 			= 	express();

require("dotenv").config({path:"./config/.env"})

// MIDDLEWARES
app.use(express.json())
app.use(cors())

// CONNECT DATABASE
connectDB();

// API ROUTES
app.get('/',async(req,res)=>{
	try {

		const students = await Student.find();

		res.status(200).json({
			students
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			err
		})
	}
})

app.get('/:id',async(req,res)=>{
	try {

		const student = await Student.findById(req.params.id);

		res.status(200).json({
			status:"success",
			student
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			err
		})
	}
})

app.post('/',async(req,res)=>{
	try {
		const student = await Student.create(req.body)

		res.status(201).json({
            status: 'success',
            data: {
                data: student,
            },
        });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
})

// Listening to the server on PORT 5000
const PORT=process.env.PORT ;

app.listen(PORT,()=>{
	console.log(`Server started at PORT ${PORT}`);
})