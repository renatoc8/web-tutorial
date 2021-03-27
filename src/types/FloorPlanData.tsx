import { EntrywayType } from "./EntrywayType";

export interface FloorPlanData {
    rooms: RoomElement[];
    entryways: Entryway[];
}

export interface BaseElement {
    id: number;
}

export interface Point {
    x: number;
    y: number;
}

export interface RoomElement extends BaseElement {
    name: string;
    walls: WallElement[];
}

/**
 * Represents an entryway, or connection between two rooms.
 * If isDoor is true, a door will exist, and open towards destination room.
 */
export interface Entryway extends BaseElement {
    /**
     * Element ID corresponding to the source room.
     */
    sourceId: number;

    /**
     * Element ID corresponding to the destination room.
     */
    destinationId: number;

    entrywayType: EntrywayType;
}

export interface WallElement extends BaseElement {
    start: Point;
    end: Point;
    windows?: Window[];

    /**
     * Thickness of wall represented in feet.
     */
    thickness: number;

    /**
     * Height of wall represented in feet.
     */
    height?: number;
}

export interface WindowElement extends BaseElement {
    start: Point;
    end: Point;
}
