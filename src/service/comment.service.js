import firebase from "../firebase";

const db = firebase.ref("/comments");

class CommentService {
  getAll() {
    return db.orderByChild("millis");
  }

  async create(comment) {
    return await db.push(comment);
  }
}

export default new CommentService();