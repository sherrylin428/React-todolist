import React from "react"

class List extends React.Component {
    constructor(props) {
        super(props)
        this.changeState = this.changeState.bind(this)

        this.state = this.props.listData

    }
    changeState(type) {
        switch (type) {
            case "complete": {
                this.setState({ complete: window.event.target.checked })
                break;
            }
            case "important": {
                if (this.state.important == '')
                    this.setState({ important: 'Y' })
                else
                    this.setState({ important: '' })
                break;
            }
        }
    }


    render() {
        return (
            <div class="listBlock">
                <div class={' list ' + (this.state.important == 'Y' ? ' important ' : '')} >

                    <input type="checkbox" class="taskChk"
                        checked={this.state.complete}
                        onChange={this.changeState} />

                    <input type="text"
                        class={' taskTitle ' +
                            (this.state.complete ? ' complete ' : '') +
                            (this.state.important ? ' important ' : '')}
                        value={this.state.name} />

                    <i class={this.state.important == 'Y' ?
                        ' fas fa-star fa-lg iconImportant icon' : ' far fa-star fa-lg icon'}
                        onClick={this.changeState}></i>

                    <i class="fas fa-pen fa-lg icon"></i>
                    <div class="listIcon">
                        {this.state.date != '' ?
                            <i class="far fa-calendar-alt icon"></i> : ''}
                        {this.state.date != '' ?
                            ` ${this.state.date.substring(5).replace('-', '/')} ` : ''}

                        {this.state.file != '' ?
                            <i class="fas fa-file icon"></i> : ''}

                        {this.state.commit != '' ?
                            <i class="far fa-comment-dots icon"></i> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export { List }