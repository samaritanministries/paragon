import React from 'react'
import Prism from 'prismjs'
import 'prismjs/plugins/custom-class/prism-custom-class.min.js'

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

  render() {
    Prism.highlightAll();
    Prism.plugins.customClass.map({ tag: 'exampletag', });

    return (
      <div className={this.state.showCode ? 'group-open' : ''}>
        <div onClick={this.toggleCode} className={this.state.showCode ? 'code-toggle is-open' : 'code-toggle'}><i className="icon--code"></i></div>
        <pre className={this.state.showCode ? 'language-html show' : 'language-html'}>
          <code className={this.state.showCode ? 'language-html show' : 'language-html'}>{this.props.children}</code>
        </pre>
      </div>
    )
  }
}
export default CodeToggle;
