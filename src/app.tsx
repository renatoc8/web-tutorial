
import React from "react";
import { Renderer } from "./components/Renderer";

interface State {
    name: string;
}

export default class App extends React.Component<{}, State> {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        }
    }

    render() {
        return (
            <div className="app-outer">
                <Renderer />
            </div>
        );
    }
}
