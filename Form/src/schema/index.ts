import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const SignupSchema: yup.ObjectSchema<{
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}> = yup.object().shape({
	name: yup
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters")
		.required("Name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Required"),
	password: yup
		.string()
		.min(5)
		.matches(passwordRules, {
			message: "Please create a stronger password",
		})
		.required("Required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords must match")
		.required("Required"),
});

export const LoginSchema: yup.ObjectSchema<{
	email: string;
	password: string;
}> = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Required"),
	password: yup.string().min(5).required("Required"),
});
