"use client"

import { Suspense } from "react"
import ResetPassword from "./VerifyPasswordReset"

export const dynamic = "force-dynamic"

export default function Page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ResetPassword />
        </Suspense>
    )
}
