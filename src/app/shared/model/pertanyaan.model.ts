export class Pertanyaan {
    id!: number;
    pertanyaan!: string;
    repeatable!: boolean;
    end!: boolean;

    constructor(
        id: number,
        pertanyaan: string,
        repeatable: boolean,
        end: boolean
    ) {
        this.id = id;
        this.pertanyaan = pertanyaan;
        this.repeatable = repeatable;
        this.end = end;
    }
}