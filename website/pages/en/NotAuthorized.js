
const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const siteConfig = require(process.cwd() + "/siteConfig.js");
const translate = require("../../server/translate.js").translate;

class NotAuthorized extends React.Component {
    render() {
      return (
        <div className="pageContainer">
          <Container className="mainContainer documentContainer postContainer">
            <h1>Unauthorized Access</h1>
            
          </Container>
          <Container className="mainContainer">
            <h4> Access Not Granted! </h4>
            <img height="20%" width="20%" src={`${siteConfig.baseUrl}img/Access-Denied.png`} alt="301 Error"/>
            <p> This is because of you are not enrolled for this workshop or workshop period is not started!..</p>
            <p> For any query contact me here <a href="https://m.me/iamdipakparmar" target="_blank"> Dipak Parmar</a></p>
          </Container>
          <br/>
        </div>
      );
    }
  }
  

NotAuthorized.defaultProps = {
  language: "en"
};

module.exports = NotAuthorized;