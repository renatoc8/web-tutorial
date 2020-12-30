
import { ContactSupportOutlined } from "@material-ui/icons";
import React from "react";
import * as THREE from "three";

interface State {

}

export class Renderer extends React.Component<{}, State> {
    private scene: THREE.Scene = null;
    private camera: THREE.PerspectiveCamera = null;
    private renderer: THREE.WebGLRenderer;
    private geometry: THREE.BoxGeometry;
    private material: THREE.MeshBasicMaterial;
    private cube: THREE.Mesh;

    constructor(props) {
        super(props);

        this.state = { }
    }

    componentDidMount() {
        setTimeout(() => {
            this.scene = new THREE.Scene();

            // Init the Camera object with a POV of 75.
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);

            let renderElement = document.getElementById("renderer");
            renderElement.appendChild(this.renderer.domElement);

            this.createScene();

            // Render the first frame. From here on, renderScene will take care of
            // registering itself as a callback for requestAnimationFrame(), and get called every frame.
            this.renderScene();
        }, 200);
    }

    componentWillUnmount() {

    }

    createScene() {
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.cube);

        this.camera.position.z = 5;
    }

    renderScene = () => {
        // This function gets called every browser frame.
        
        // Register this function to get called again on the browser's next render cycle/frame.
        requestAnimationFrame(this.renderScene);

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        // Tell Three.js to render.
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return (
            <div className="renderer-outer">
                <div id="renderer"></div>
            </div>
        );
    }
}
