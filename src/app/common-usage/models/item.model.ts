export class ItemList {
  constructor(
    public id: number,
    public content: string,
    public status: boolean
  ) {}
}

export class ItemCreate {
  constructor(
    public content: string,
  ) {}
}
