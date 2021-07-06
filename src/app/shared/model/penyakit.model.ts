import { Gejala } from './gejala.model';

export class Penyakit {
    id!: number;
    name!: string;
    gejalas!: number[]

    constructor(
        id: number,
        name: string,
        gejalas: number[]
    ) {
        this.id = id;
        this.name = name;
        this.gejalas = gejalas;
    }
}