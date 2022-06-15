import { Piece } from "./piece";

export interface Puzzle {
    id: string;
    title: string;
    created: Date;
    data: Array<Piece>;
}