import { Piece } from "./piece";

export interface Puzzle {
    _id: string;
    title: string;
    creator: string;
    created: Date;
    data: Array<Piece>;
}