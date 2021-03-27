
import { FloorPlanData } from "../../types/FloorPlanData";

export function generateSampleData() {
    const plan: FloorPlanData = {
        rooms: [
            {
                id: 100,
                name: "Room 1",
                walls: [
                    {
                        id: 1001,
                        start: { x: 0, y: 0 },
                        end: { x: 10, y: 0 },
                        thickness: 0.1,
                    },
                    {
                        id: 1002,
                        start: { x: 10, y: 0 },
                        end: { x: 10, y: 10 },
                        thickness: 0.1,
                    },
                    {
                        id: 1003,
                        start: { x: 10, y: 0 },
                        end: { x: 10, y: 10 },
                        thickness: 0.1,
                    },
                    {
                        id: 1004,
                        start: { x: 0, y: 10 },
                        end: { x: 0, y: 0 },
                        thickness: 0.1,
                    },
                ]
            },
            {
                id: 200,
                name: "Room 1",
                walls: [
                    {
                        id: 2001,
                        start: { x: 10, y: 0 },
                        end: { x: 30, y: 0 },
                        thickness: 0.1,
                    },
                    {
                        id: 2002,
                        start: { x: 30, y: 0 },
                        end: { x: 30, y: 5 },
                        thickness: 0.1,
                    },
                    {
                        id: 2003,
                        start: { x: 30, y: 5 },
                        end: { x: 10, y: 5 },
                        thickness: 0.1,
                    },
                    {
                        id: 2004,
                        start: { x: 10, y: 5 },
                        end: { x: 10, y: 0 },
                        thickness: 0.1,
                    },
                ]
            }
        ],
        entryways: null,
    };

    return plan;
}
