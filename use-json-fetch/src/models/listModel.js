import shortid from "shortid";

export default class listModel {
    constructor(name, url) {
        this.name = name;
        this.url = url;
        this.id = shortid.generate();
    }
}