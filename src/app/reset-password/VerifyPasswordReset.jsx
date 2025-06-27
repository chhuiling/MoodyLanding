"use client"

import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendPasswordReset, sendVerifyToken } from "./functions";

export default function ResetPassword() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [tokenChecked, setTokenChecked] = useState(false);
    const [message, setMessage] = useState("Verifying user, please wait.");

    const formik = useFormik({
        initialValues: { newPassword: "", repeatPassword: "" },
        validationSchema: Yup.object({
            newPassword: Yup.string()
                .required("Password is required")
                .min(6, "Password has be between 6-20 long.")
                .max(20, "Password has be between 6-20 long."),
            repeatPassword: Yup.string()
                .required("Please confirm your password")
                .oneOf([Yup.ref("newPassword")], "Passwords must match"),
        }),
        onSubmit: async (values) => {
            const body = { token, newPassword: values.newPassword };
            const response = await sendPasswordReset(body)
            setTokenChecked(false)
            setMessage(response.msg)
        }
    });

    useEffect(() => {
        if (!token) {
            setMessage("No token provided in the URL.");
            return;
        }
        const verifyToken = async () => {
            const response = await sendVerifyToken(token)
            setTokenChecked(response.status)
            setMessage(response.msg)
        }
        verifyToken();
    }, [token]);

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
            <Image src={'/images/logo.png'} alt="logo" width={150} height={150} />
            <p className="font-bold text-[var(--outer_space)] text-center">{message}</p>

            {tokenChecked ? (
                <form onSubmit={formik.handleSubmit} className="w-1/2 flex flex-col justify-center">
                    <div className="text-left mb-6">
                        <label htmlFor="newPassword" className="text-xs block mb-1">NEW PASSWORD</label>
                        <input id="newPassword" name="newPassword" type="password"
                            className="font-sans w-full px-4 py-1 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-400"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.newPassword} />
                        {formik.touched.newPassword && formik.errors.newPassword && (
                            <p className="text-red-500 text-xs mt-1">{formik.errors.newPassword}</p>
                        )}
                    </div>

                    <div className="text-left mb-6">
                        <label htmlFor="repeatPassword" className="text-xs block mb-1">REPEAT PASSWORD</label>
                        <input id="repeatPassword" name="repeatPassword" type="password"
                            className="font-sans w-full px-4 py-1 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-400"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.repeatPassword} />
                        {formik.touched.repeatPassword && formik.errors.repeatPassword && (
                            <p className="text-red-500 text-xs mt-1">{formik.errors.repeatPassword}</p>
                        )}
                    </div>

                    <button type="submit" className="bg-[var(--red)] rounded-3xl py-1 px-4 hover:cursor">
                        CHANGE PASSWORD
                    </button>
                </form>
            ) : null}
        </section>
    )
}
