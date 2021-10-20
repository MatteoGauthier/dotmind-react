import React from "react"
import clsx from "../helpers/clsx"
import { LayoutProps } from "../types"

function Layout({ children, centered }: LayoutProps) {
	return <div className={clsx("wrapper", centered && "wrapper-center")}>{children}</div>
}

export default Layout
