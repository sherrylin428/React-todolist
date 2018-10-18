import React from "react"
import { HashRouter,Route } from "react-router-dom"
import { TopBlock } from "../TopBlock"

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <TopBlock />
                </div>
            </HashRouter>
        )
    }
}

export { Main }