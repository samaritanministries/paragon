import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-scss.min.js'

class CodeToggleSCSS extends React.Component {

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
    Prism = window.Prism;
    Prism.highlightAll();
  }

  render() {

    return (
      <pre className="language-scss">
        <code className="language-scss">{this.props.children}</code>
      </pre>
    )
  }
}
export default CodeToggleSCSS;
