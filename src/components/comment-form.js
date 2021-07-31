import { Component } from "react";
import commentService from "../service/comment.service";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.saveComment = this.saveComment.bind(this);
    
        this.state = {
          name: "",
          comment: "",
        };
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value,
        });
      }
    
      onChangeComment(e) {
        this.setState({
          comment: e.target.value,
        });
      }
    
      saveComment() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const date = new Date();
        const dateString = date.toLocaleString("id-ID", options);

        const data = {
          name: this.state.name,
          comment: this.state.comment,
          date: dateString,
          millis: Date.now()
        };
        
        commentService.create(data)
          .then(() => {
            console.log("Created new item successfully!");
          })
          .catch((e) => {
            console.log(e);
          });
      }

    render() {
        return(
            <div>
                <h3 className="section-title text-center">Comment</h3>
                <form action="#" method="post">
                    <input id="name" className="input" type="text" name="name" placeholder="Your name" onChange={this.onChangeName} required></input>
                    <textarea id="comment" className="input" name="commentVal" rows="5"
                        placeholder="Pray for us please" onChange={this.onChangeComment} required></textarea>
                    <input id="submitBtn" className="input" type="button" value="Submit" onClick={this.saveComment}></input>
                </form>
            </div>
        );
    }
}

export default CommentForm;