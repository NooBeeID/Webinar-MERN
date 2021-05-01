import { Component } from 'react';

class Button extends Component{
  render() {
    return <button className="btn" {...this.props} />
  }
}

export default Button;
