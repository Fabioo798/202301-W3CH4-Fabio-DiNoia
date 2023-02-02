export type ProtoSerieStructure = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export class Serie implements ProtoSerieStructure {
  watched: boolean;
  score: number;
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public emmies: number
  ) {
    this.watched = false;
    this.score = 0;
  }
}

// id: 1,
//     name: 'The Sopranos',
//     creator: 'David Chase',
//     year: 1999,
//     poster:
//       'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
//     watched: true,
//     score: 5,
//     emmies: 21,
