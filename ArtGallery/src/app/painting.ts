export class Painting {
    private _id: string;
    private _name: string;
    private _url: string;
    private _description: string;

    constructor(name: string, url: string, description?: string) {
        if (name === null) {
            throw new Error('Name is requaried');
        }
        this._name = name || "";

        if (url === null) {
            throw new Error('URL is requaried');
        }
        this._url = url || "";
        this._id = url || "";

        this._description = description || "";
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get url(): string {
        return this._url;
    }

    public get description(): string {
        return this._description;
    }

    public set description(newDesc: string) {
        this._description = newDesc || "";
    }
}