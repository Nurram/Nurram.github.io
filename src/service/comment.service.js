import firebase from "../firebase";

const db = firebase.ref("/comments");

class CommentService {
  getAll() {
    return db.orderByChild("millis");
  }

  create(comment) {
    return db.push(comment);
  }
}

export default new CommentService();