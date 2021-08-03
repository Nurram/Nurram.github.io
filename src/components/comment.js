import { Component } from "react";
import commentService from "../service/comment.service";
import CommentForm from './comment-form';

class Commment extends Component {
    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
    
        this.state = {
          comments: [],
        };
      }
    
      componentDidMount() {
        commentService.getAll().on("value", this.onDataChange);
      }
    
      componentWillUnmount() {
        commentService.getAll().off("value", this.onDataChange);
      }

      onDataChange(items) {
        const comments = [];
    
        items.forEach((item) => {
          const data = item.val();
          comments.push({
            name: data.name,
            comment: data.comment,
            date: data.date,
          });
        });
    
        this.setState({
          comments: comments,
        });
      }
      
    render() {
        const { comments } = this.state;
        return(
            <section className="comment overlay-dark"
              style={{backgroundImage: "url('./res/comment.jpeg')"}}>

                <div id="comment-content" className="comment-content">
                    <CommentForm/>
                    <div id="comment-list">
                    {
                        comments && comments.reverse().map((data, index) => (
                           <div key={index}>
                               <h4>{data.name}</h4>
                               <p style={{marginBottom: '4px'}}>{data.comment}</p>
                               <p>{data.date}</p>
                               <hr></hr>
                           </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        );
    }
}

export default Commment;