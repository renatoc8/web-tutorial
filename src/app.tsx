
import React from "react";

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
        return <p>Balls 2</p>
    }
}
