
import { ContactSupportOutlined } from "@material-ui/icons";
import React from "react";
import * as THREE from "three";
import * as FloorPlanData from "../../types/FloorPlanData";
import { generateSampleData } from "./SampleFloorPlan";

interface State {

}

export class Renderer extends React.Component<{}, State> {
    private scene: THREE.Scene = null;
    private camera: THREE.OrthographicCamera = null;
    private renderer: THREE.WebGLRenderer;
    private geometry: THREE.BoxGeometry;
    private material: THREE.MeshBasicMaterial;
    private isMouseDown: boolean;
    private lastMousePos: FloorPlanData.Point;

    constructor(props) {
        super(props);

        this.state = { }

        this.isMouseDown = false;
    }

    componentDidMount() {
        setTimeout(() => {
            this.scene = new THREE.Scene();

            // Init the Camera object with a POV of 75.
            this.camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 0.1, 1000);
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);

            this.camera.updateProjectionMatrix();

            let renderElement = document.getElementById("renderer");
            renderElement.appendChild(this.renderer.domElement);

            this.createScene();

            // Render the first frame. From here on, renderScene will take care of
            // registering itself as a callback for requestAnimationFrame(), and get called every frame.
            this.renderScene();
        }, 200);

        document.addEventListener("wheel", this.onZoom);
        document.addEventListener("mousedown", this.onMouseDown);
        document.addEventListener("mouseup", this.onMouseUp);
        document.addEventListener("mousemove", this.onMouseMove);
    }

    componentWillUnmount() {
        document.removeEventListener("wheel", this.onZoom);
        document.removeEventListener("mousedown", this.onMouseDown);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.onMouseMove);
    }

    onZoom = (e) => {
        const delta = e.deltaY * -0.02;

        let newZoom = this.camera.zoom + delta;

        if (newZoom <= 1)
            newZoom = 1;
        else if (newZoom >= 200.0)
            newZoom = 200.0;

        this.camera.zoom = newZoom;
        this.camera.updateProjectionMatrix();
    }

    onMouseDown = (e) => {
        e.preventDefault();

        this.lastMousePos = { x: e.clientX, y: e.clientY };
        this.isMouseDown = true;
    }

    onMouseUp = (e) => {
        e.preventDefault();

        this.isMouseDown = false;
    }

    onMouseMove = (e) => {
        e.preventDefault();
        
        if (!this.isMouseDown)
            return;

        const delta = {
            x: e.clientX - this.lastMousePos.x,
            y: e.clientY - this.lastMousePos.y,
        };

        const multiplier = (1 / this.camera.zoom);

        this.camera.position.x += delta.x * -multiplier;
        this.camera.position.y += -delta.y * -multiplier;

        this.lastMousePos = { x: e.clientX, y: e.clientY };
    }

    createScene() {
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        this.camera.position.z = 5;

        const data = generateSampleData();

        if (data == null)
            return;

        for (let i = 0; i < data.rooms.length; ++i) {
            const room = data.rooms[i];

            const material = new THREE.LineBasicMaterial({ color: 0xffffff });
            const points = [];

            for (let o = 0; o < room.walls.length; ++o) {
                const wall = room.walls[o];
                points.push(new THREE.Vector3(wall.start.x, wall.start.y, 0));
                points.push(new THREE.Vector3(wall.end.x, wall.end.y, 0));
            }

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, material);
            this.scene.add(line);
        }
    }

    renderScene = () => {
        // This function gets called every browser frame.
        
        // Register this function to get called again on the browser's next render cycle/frame.
        requestAnimationFrame(this.renderScene);

        // Tell Three.js to render.
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return (
            <div className="renderer-outer">
                <div id="renderer" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}></div>
            </div>
        );
    }
}
