export class New {
    public title: string;
    public description: string;
    public imagePath: string;
    public date: string;

    constructor(title: string, description: string, imagePath: string, date: string) {
       this.title = title;
       this.description = description;
       this.imagePath = imagePath;
       this.date = date;
    }
}

