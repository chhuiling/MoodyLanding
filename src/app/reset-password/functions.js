"use server"

const path = process.env.NEXT_PUBLIC_API_PATH

export async function sendPasswordReset ( values ) {
    try {
        const response = await fetch(`${path}/users/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            const res = await response.json()
            return response.status === 200 ? {status: true, msg: res.message} : {status: false, msg: res.message}
        }
        return {status: false, msg: "An error has ocurred."}
    } catch (error) {
        return {status: false, msg: "An error has ocurred."}
    }
}

export async function sendVerifyToken ( token ) {
    try {
        const response = await fetch(`${path}/users/validate-password-reset-token?token=${token}`, {
            method: "GET"
        });

        if (response.ok) {
            const data = await response.json();
            return { status: true, msg: data.message };

            } else {
                const result = await response.json().catch(() => null);
                const errorMsg = result?.message || "Password reset token failed, please try again.";

            return {status: false, msg: errorMsg}
        }
        
    } catch (error) {
        console.log(error)
        return {status: false, msg: "An error has ocurred."}
    }
}