import Dexie, { Table } from "dexie";

export interface Feedback {
  id?: number;
  name: string;
  content: string;
  createdAt: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  feedbacks!: Table<Feedback>;

  constructor() {
    super("feedback");
    this.version(1).stores({
      feedbacks: "++id, name, content, createdAt", // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
