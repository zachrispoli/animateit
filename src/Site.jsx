import React,{ Component} from 'react';

import './_site.scss';

export default class Site extends Component {

  constructor(props) {
    super(props);
    this.state = {topic1animation:"",topic2animation:"",topic3animation:""};
  }

  render() {
    return (
      <div className="site-container">
        <canvas width="5000" height="5000" className="site-ellipsis" ref={(ellipsis) => this.ellipsis = ellipsis}></canvas>
        <div className="site-main-wrapper">
          <div className="site-main-left">
            <img className="site-logo" src="/resources/logo.png" alt="ANIMATE IT"></img>
            <div className="site-title">Create GIFs and video animations easily on your own!</div>
            <div className="site-subtitle">Online tool to create high-quality animations for free, entirely in the browser.</div>
            <div className="site-topics-container">
              <div className={"site-topic " + this.state.topic1animation}>• Easy-to-use &amp; intuitive</div>
              <div className={"site-topic " + this.state.topic2animation}>• Securely save your work in progress</div>
              <div className={"site-topic " + this.state.topic3animation}>• Free &amp; Open-Source</div>
            </div>
            <div className="site-check-it-out">
              <div className="site-button" onClick={() => {window.location = "/editor"}}>
                CHECK IT OUT
                <img src="/resources/arrow-left.svg" alt="CHECK IT OUT" />
              </div>
            </div>
          </div>
          <div className="site-main-right">
            <img src="/resources/animation.png" alt="ANIMATE IT" />
          </div>
        </div>
        <div className="site-footer">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AnimateIt_">
            <div className="site-footer-twitter">
              <img src="/resources/twitter.svg" alt="Follow on Twitter" />
            </div>
          </a>
          <div className="site-footer-text">Animate it •  2019</div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.hidePreloader();
    this.drawEllipse();
  }
  
  hidePreloader = () => {
    let preloader = window.document.getElementById('preloader');
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        this.setState({topic1animation: "site-topic1-animation",topic2animation: "site-topic2-animation",topic3animation: "site-topic3-animation"});
      }, 500);
    }, 2000);
  }

  drawEllipse() {
    var h = 12 * window.screen.height * window.devicePixelRatio;
    var w = 8 * window.screen.width * window.devicePixelRatio;
    var x = -1 * w * 0.71;
    var y = -1 * h * 0.569; 

    const ctx = this.ellipsis.getContext("2d");
    var kappa = .5522848,
        ox = (w / 2) * kappa, // control point offset horizontal
        oy = (h / 2) * kappa, // control point offset vertical
        xe = x + w,           // x-end
        ye = y + h,           // y-end
        xm = x + w / 2,       // x-middle
        ym = y + h / 2;       // y-middle

    ctx.beginPath();
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    ctx.closePath();
    ctx.fillStyle = '#f3f3f3';
    ctx.fill();
  }
}
