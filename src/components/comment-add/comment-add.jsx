import React, {Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component{
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }
    state = {
        username: '',
        content: ''
    }
    handleNameChange = (event) => {
        // console.log(event)
        const username = event.target.value
        this.setState({username})
    }
    handleContentChange = (event) => {
        const content = event.target.value
        this.setState({content})
    }
    handleSubmit = (e) => {
        // 收集数据，并封装成comment对象
        const comment = this.state
        // 更新状态
        this.props.addComment(comment)
        this.setState({
            username: '',
            content: ''
        })
        e.preventDefault()
    }
    render() {
        const {username,content} = this.state
        return(
            <div className="col-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" name="username"
                               value={username} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" name="content"
                                  value={content} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-primary pull-right" onClick={this.handleSubmit}>提&nbsp;&nbsp;交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}