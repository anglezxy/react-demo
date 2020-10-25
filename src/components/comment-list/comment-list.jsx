import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from "../comment-item/comment-item";
import './comment-list.css'

export default class CommentList extends Component{
    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }
    render() {
        console.log(this.props,'aaaaa')
        const { comments,deleteComment } = this.props
        const display = comments.length === 0?'block':"none"
        return(
            <div className="col-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index) =><CommentItem comment={comment} deleteComment={deleteComment} key={index} index={index}/>)
                    }
                </ul>
            </div>
        )
    }
}