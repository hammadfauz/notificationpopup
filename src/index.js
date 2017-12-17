import React from 'react';

class Notification extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      visible : false
    }
    this.disappear = this.disappear.bind(this);
  }
  componentWillUpdate (nextProps) {
    const self = this;
    if (this.props.content !== nextProps.content
      && nextProps.content != false) {
      this.state.visible = true;
      this.setState(this.state,function () {
        setTimeout(self.disappear,self.props.timeout || 5000);
      });
      return true;
    }else{
      return false;
    }
  }
  disappear () {
    this.setState({visible : false});
  }
  render () {
    let styles = {
      main : {
        backgroundColor : '#4ea2fb',
        color : '#ffffff',
        fontSize : '15px',
        textAlign : 'center',
        padding : this.state.visible?'13px':'0px',
        boxShadow : '0px 6px 18px 0px rgba(0,0,0,0.27)',
        maxHeight : this.state.visible?
          '1000px':'0px',
        opacity : this.state.visible?'1':'0',
        transition : 'all 300ms cubic-bezier(0.47, -0.13, 0, 2.46)',
        position : 'fixed',
        top : this.props.position.top || null,
        left : this.props.position.left || null,
        right : this.props.position.right || null,
        bottom : this.props.position.bottom || null,
        overflow : 'hidden',
        zIndex : '1'
      }
    };
    return (<div style={styles.main}>{this.props.content}</div>);
  }
};

module.exports = Notification;
