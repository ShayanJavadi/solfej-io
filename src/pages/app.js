import React from "react"
import loadable from "@loadable/component"

const AppShell = loadable(() => import("@solfej-app/AppShell"))

const AppPage = () => <AppShell />

export default AppPage
