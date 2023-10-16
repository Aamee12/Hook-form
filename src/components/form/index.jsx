import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "tailwindcss/tailwind.css";

const SimpleForm = () => {
    const { control, handleSubmit, formState, reset } = useForm();
    const { errors } = formState;

    const [submittedData, setSubmittedData] = useState(null);

    const onSubmit = (data) => {
        setSubmittedData(data);
        reset();
    };

    return (
        <div className="max-w-md mx-auto p-4 w-1/3 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4 text-blue-600">React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                        First Name
                    </label>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        rules={{ required: "First Name is required" }}
                        render={({ field }) => (
                            <input
                                {...field}
                                className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.firstName ? 'border-red-500' : ''
                                    }`}
                            />
                        )}
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                        Last Name
                    </label>
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Last Name is required" }}
                        render={({ field }) => (
                            <input
                                {...field}
                                className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.lastName ? 'border-red-500' : ''
                                    }`}
                            />
                        )}
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Email is required" }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="email"
                                className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.email ? 'border-red-500' : ''
                                    }`}
                            />
                        )}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                        Phone Number
                    </label>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Phone Number is required" }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="tel"
                                className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.phone ? 'border-red-500' : ''
                                    }`}
                            />
                        )}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover.bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                    Submit
                </button>
            </form>
            <div className="">
                {submittedData && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Submitted Data:</h2>
                        <p className="text-gray-700">First Name: {submittedData.firstName}</p>
                        <p className="text-gray-700">Last Name: {submittedData.lastName}</p>
                        <p className="text-gray-700">Email: {submittedData.email}</p>
                        <p className="text-gray-700">Phone Number: {submittedData.phone}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimpleForm;
