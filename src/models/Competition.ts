export class Competition {
    id!: number;
    name!: string;
    ownerId!: number;
    participants!: number[];
    dateTo!: Date;
    prize!: {
        currency: string
        value: number
    }
}