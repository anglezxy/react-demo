

import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class CommentItem extends Component{
    static propTypes = {
        comment:PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    handleClick = () => {
       const {comment,deleteComment,index} = this.props
        if (window.confirm(`确认删除${comment.username}？`)) {
            deleteComment(index)
        }
    }
    render() {
        const {comment} = this.props
        return(
            <li className="list-group-item">
                <div className="handle">
                    <button className="btn btn-danger" onClick={this.handleClick}>删除</button>
                </div>
                <p className="user"><span>{comment.username}</span>说：</p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}