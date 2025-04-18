export class NoteModel {
    public _id!: string; // generated by mongoDB
    public category!: string;
    public title!: string;
    public context!: string;
    public pin!: boolean;
    public createdAt!: Date; // generated by mongoDB
    public updatedAt!: Date; // generated by mongoDB
    public color?: string;
    constructor(model?: any) {
        Object.assign(this, model);
    }
}  