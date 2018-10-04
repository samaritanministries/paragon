import React from 'react'

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
    var Prism = window.Prism;
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
