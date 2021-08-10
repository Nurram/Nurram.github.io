import React from "react";
import commentService from "../service/comment.service";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.saveComment = this.saveComment.bind(this);
    
        this.formRef = React.createRef();

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
    
      async saveComment() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const date = new Date();
        const dateString = date.toLocaleString("id-ID", options);

        const name = this.state.name;
        const comment = this.state.comment;

        if(name.trim() !== '' && comment.trim() !== '') {
          const data = {
            name: name,
            comment: comment,
            date: dateString,
            millis: Date.now()
          };
          
          await commentService.create(data);
          this.formRef.current.reset();
        }
      }

    render() {
        return(
            <div>
                <h3 className="section-title text-center">Send Wishes</h3>
                <form ref={this.formRef} action="#" method="post">
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