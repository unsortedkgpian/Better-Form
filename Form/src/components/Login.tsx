import { useFormik, FormikHelpers } from "formik";
import { LoginSchema } from "../schema";
import { useState } from "react";

// interface Values {
// 	email?: string;
// 	password?: string;

// }

// interface Errors {

// 	email?: string;
// 	password?: string;

// }

interface FormValues {
	email: string;
	password: string;
}
// const onSubmit = async (
// 	values: FormValues,
// 	actions: FormikHelpers<FormValues>
// ): Promise<void> => {
// 	console.log(values);
// 	console.log(actions);
// 	await new Promise((resolve) => setTimeout(resolve, 1000));
// 	actions.resetForm();
// };

// const validate = (values: Values) => {
// 	const errors: Errors = {};
// 	if (!values.name) {
// 		errors.name = "Required";
// 	} else if (values.name.length > 15) {
// 		errors.name = "Must be 15 characters or less";
// 	}

// 	if (!values.email) {
// 		errors.email = "Required";
// 	} else if (
// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
// 	) {
// 		errors.email = "Invalid email address";
// 	}

// 	return errors;
// };

const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginSchema,
		onSubmit: async (
			values: FormValues,
			actions: FormikHelpers<FormValues>
		): Promise<void> => {
			console.log(values);
			console.log(actions);
			await new Promise((resolve) => setTimeout(resolve, 1000));
			actions.resetForm();
			setIsSuccess(true);
		},
	});
	const [isSuccess, setIsSuccess] = useState(false);

	return (
		<>
			<form autoComplete="off" onSubmit={formik.handleSubmit}>
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
					placeholder="Enter you email"
					className={
						formik.errors.email && formik.touched.email
							? "input-error"
							: ""
					}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="error-message text-left">
						{formik.errors.email}
					</div>
				) : null}

				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
					placeholder="Enter you password"
					className={
						formik.errors.password && formik.touched.password
							? "input-error"
							: ""
					}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="error-message">
						{formik.errors.password}
					</div>
				) : null}

				<button type="submit">Submit</button>
			</form>
			{isSuccess && (
				<div
					className="success-overlay"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
						fontSize: "1.2rem",
						zIndex: 9999, // Ensures the message is on top of everything
					}}
				>
					<div
						style={{
							backgroundColor: "#121212",
							padding: "20px",
							borderRadius: "10px",
							textAlign: "center",
							maxWidth: "100px",
							width: "40%",
						}}
					>
						<p>Registration Successful!</p>
					</div>
				</div>
			)}
		</>
	);
};

export default SignUp;
