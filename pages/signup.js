import React, { useState, useEffect } from 'react';
import Select from 'react-select';
function SignUpPage() {
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ rePassword, setRePassword ] = useState('');
	const [ education, setEducation ] = useState('');
	const [ age, setAge ] = useState('');

	const onNameChangeHandler = (event) => {
		setUsername(event.target.value);
	};
	const onEducationHandler = (e) => {
		console.log(e);
	};
	const onAgeHandler = (e) => {
		console.log(e);
	};
	const ageOptions = [
		{ value: '15-20', label: '15 to 20 years' },
		{ value: '20-25', label: '20 t0 25 years' },
		{ value: '25-30', label: '25 to 30 years' },
		{ value: '30 above', label: 'More than 30 years' }
	];
	const eduOptions = [
		{ value: 'matric/olevel', label: 'Matric / Olevel' },
		{ value: 'fsc/alevel', label: 'Fsc / Alevel' },
		{ value: 'bachelor', label: 'Bachelor' },
		{ value: 'masters', label: 'Masters' },
		{ value: 'diploma', label: 'Diploma' },
		{ value: 'other', label: 'Other' }
	];
	return (
		<div className="signUpFlex">
			<div className="mainWrap">
				<div className="formSignUp">
					<h1>Signup</h1>
					<div className="fieldWrap">
						<input
							className="inp"
							onChange={(e) => onNameChangeHandler(e)}
							placeholder="Enter Username"
							type="text"
							value={username}
							autocomplete="off"
						/>
						<input
							className="inp"
							type="email"
							onChange={(e) => onNameChangeHandler(e)}
							placeholder="Enter Email"
							value={email}
							autocomplete="off"
							autoFocus="off"
						/>
					</div>
					<div className="fieldWrap">
						<input
							className="inp"
							onChange={(e) => onNameChangeHandler(e)}
							placeholder="Enter Password"
							type="password"
							value={password}
							autocomplete="off"
							autoFocus="off"
						/>
						<input
							className="inp"
							type="password"
							onChange={(e) => onNameChangeHandler(e)}
							placeholder="Re-enter Password"
							value={rePassword}
							autocomplete="off"
							autoFocus="off"
						/>
					</div>
					<div className="fieldWrap">
						<Select
							className="eduDrop"
							options={eduOptions}
							onChange={onEducationHandler}
							placeholder="Select Education"
						/>
						<Select
							className="ageDrop"
							options={ageOptions}
							onChange={onAgeHandler}
							placeholder="Select Age"
						/>
					</div>
					<div className="btn-wrap">
						<button className="btn-signUp">Signup</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUpPage;
