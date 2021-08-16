import AbstractPolygon from "./abstractPolygon";

export default class UpwardTrapezoid extends AbstractPolygon {
    getPath(): Array<number> {
        return [
            this.x, this.y + this.height,
            this.x + this.width, this.y + this.height,
            this.x + this.width - this.height, this.y,
            this.x + this.height, this.y,
        ];
    }
}
