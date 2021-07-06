export class Chat {
    id!: number;
    from!: 'receiver' | 'sender';
    message!: string;
    
    constructor(
        id: number,
        from: 'receiver' | 'sender',
        message: string 
    ) {
        this.id = id;
        this.from = from;
        this.message = message;
    }
}
  