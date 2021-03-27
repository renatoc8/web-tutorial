
export enum EntrywayType {
    None = 0,

    /**
     * Specifies that the door is left handed.
     * Door handedness is determined by what edge of the door contains
     * the handle from the perspective of someone standing directly in
     * front of the door, such that the door would open away from them.
     */
    DoorLeftHanded = 1,

    /**
     * Specifies that the door is right handed.
     * Door handedness is determined by what edge of the door contains
     * the handle from the perspective of someone standing directly in
     * front of the door, such that the door would open away from them.
     */
    DoorRightHanded = 2,

    FrenchDoor = 3,

    BiFoldLeft = 4,

    BiFoldRight = 5,

    BiFoldFrench = 6,

    SlidingLeft = 7,

    SlidingRight = 8,

    SlidingFrench = 9,

    Garage = 10,
}
