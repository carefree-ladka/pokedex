import React, { Suspense } from "react"
import Loader from "./Loader"

export default function SuspenseLayout({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>
}
