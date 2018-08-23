import React from 'react'
import Prism from 'prismjs';

class CodeToggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showCode: false };
    this.toggleCode = this.toggleCode.bind(this);
  }

   toggleCode() {
    this.setState(prevState => ({
      showCode: !prevState.showCode
    }));
  }

  componentDidMount() {
    var script = document.createElement('script');
    script.src = "/prism.js";
    document.getElementsByTagName('head')[0].appendChild(script);

    Prism.highlightAll();
  }

  render() {

    return (
      <div>
        <div onClick={this.toggleCode} className={this.state.showCode ? 'code-toggle is-open' : 'code-toggle'}><i className="icon--code"></i></div>
        <pre className={this.state.showCode ? 'language-html show' : 'language-html'}>
          <code className="language-html">{this.props.children}</code>
        </pre>
      </div>
    )
  }
}
export default CodeToggle;
