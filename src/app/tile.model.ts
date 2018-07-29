export class Tile {
  constructor (
    public tCol: number,
    public tRow: number,
    public status: string,
    public bombScore: number,
    public bomb: boolean
  ) {}
}
