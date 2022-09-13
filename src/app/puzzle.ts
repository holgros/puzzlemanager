import { Piece } from "./piece";

export interface Puzzle {
    _id: string;
    title: string;
    created: Date;
    data: Array<Piece>;
}