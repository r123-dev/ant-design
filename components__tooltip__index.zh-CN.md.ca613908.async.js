"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3451],{663729:function(p,o,n){n.r(o);var u=n(502143),m=n(968521),_=n(720719),h=n(521587),x=n(759907),i=n(828089),v=n(825673),g=n(902068),j=n(574399),f=n(863942),T=n(316073),b=n(24628),B=n(719260),E=n(956140),l=n(127179),s=n(905388),w=n(245583),P=n(606965),y=n(268696),A=n(587302),r=n(424128),D=n(249706),k=n(795127),C=n(116846),R=n(720538),L=n(212039),O=n(73024),M=n(553913),c=n(830084),W=n(667294),e=n(785893);function d(){var a=(0,c.eL)(),t=a.texts;return(0,e.jsx)(c.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:t[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsx)("p",{children:t[1].value}),(0,e.jsxs)("p",{children:[t[2].value,(0,e.jsx)("code",{children:t[3].value}),t[4].value,(0,e.jsx)("code",{children:t[5].value}),t[6].value]}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(s.Z,{items:[{demo:{id:"tooltip-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/tooltip/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tooltip } from 'antd';
const App = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"tooltip-demo-placement"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/tooltip/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Tooltip } from 'antd';
const text = <span>prompt text</span>;
const buttonWidth = 70;
const App = () => (
  <div>
    <div
      style={{
        marginLeft: buttonWidth,
        whiteSpace: 'nowrap',
      }}
    >
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        float: 'left',
      }}
    >
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        marginLeft: buttonWidth * 4 + 24,
      }}
    >
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        marginLeft: buttonWidth,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
);
export default App;
`,description:"<p>\u4F4D\u7F6E\u6709 12 \u4E2A\u65B9\u5411\u3002</p>",style:`#components-tooltip-demo-placement .ant-btn {
  margin-left: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
#components-tooltip-demo-placement .ant-btn {
  margin-left: 8px;
  margin-right: 0;
}`}},{demo:{id:"tooltip-demo-arrow"},previewerProps:{title:"\u7BAD\u5934\u5C55\u793A",filename:"components/tooltip/demo/arrow.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useMemo, useState } from 'react';
import { Button, Divider, Segmented, Tooltip } from 'antd';
const text = <span>prompt text</span>;
const buttonWidth = 70;
const gap = 8;
const btnProps = {
  style: {
    width: buttonWidth,
  },
};
const App = () => {
  const options = ['Show', 'Hide', 'Center'];
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <div className="demo">
      <Segmented
        value={arrow}
        options={options}
        onChange={(val) => {
          setArrow(val);
        }}
      />
      <Divider orientation="center">Content</Divider>
      <div
        style={{
          marginLeft: buttonWidth,
          display: 'flex',
          flexWrap: 'nowrap',
          columnGap: gap,
        }}
      >
        <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>TR</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          float: 'left',
          display: 'flex',
          flexDirection: 'column',
          rowGap: gap,
        }}
      >
        <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text} arrow={mergedArrow}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          marginLeft: buttonWidth * 4 + 24,
          display: 'flex',
          flexDirection: 'column',
          rowGap: gap,
        }}
      >
        <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text} arrow={mergedArrow}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          display: 'flex',
          flexWrap: 'nowrap',
          columnGap: gap,
        }}
      >
        <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u652F\u6301\u663E\u793A\u3001\u9690\u85CF\u4EE5\u53CA\u5C06\u7BAD\u5934\u4FDD\u6301\u5C45\u4E2D\u5B9A\u4F4D\u3002</p>"}},{demo:{id:"tooltip-demo-shift"},previewerProps:{iframe:"200",title:"\u8D34\u8FB9\u504F\u79FB",filename:"components/tooltip/demo/shift.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Tooltip } from 'antd';
const App = () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);
  return (
    <div>
      <div
        style={{
          width: '300vw',
          height: '300vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tooltip title="Thanks for using antd. Have a nice day!" trigger="click" defaultOpen>
          <Button>Scroll The Window</Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u5F53 Tooltip \u8D34\u8FB9\u65F6\uFF0C\u81EA\u52A8\u504F\u79FB\u5E76\u4E14\u8C03\u6574\u7BAD\u5934\u4F4D\u7F6E\u3002\u5F53\u8D85\u51FA\u8FC7\u591A\u65F6\uFF0C\u5219\u4E00\u540C\u6EDA\u51FA\u5C4F\u5E55\u3002</p>"}},{demo:{id:"tooltip-demo-auto-adjust-overflow"},previewerProps:{debug:!0,title:"\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E",filename:"components/tooltip/demo/auto-adjust-overflow.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Tooltip, Typography } from 'antd';
const Block = React.forwardRef((props, ref) => (
  <div
    style={{
      overflow: 'auto',
      position: 'relative',
      padding: '24px',
      border: '1px solid #e9e9e9',
    }}
    ref={ref}
  >
    <div
      style={{
        width: '200%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 16,
      }}
    >
      <Tooltip {...props} placement="left" title="Prompt Text">
        <Button>Adjust automatically / \u81EA\u52A8\u8C03\u6574</Button>
      </Tooltip>
      <Tooltip {...props} placement="left" title="Prompt Text" autoAdjustOverflow={false}>
        <Button>Ignore / \u4E0D\u5904\u7406</Button>
      </Tooltip>
    </div>
  </div>
));
const App = () => {
  const containerRef1 = React.useRef(null);
  const containerRef2 = React.useRef(null);
  React.useEffect(() => {
    containerRef1.current.scrollLeft = containerRef1.current.clientWidth * 0.5;
    containerRef2.current.scrollLeft = containerRef2.current.clientWidth * 0.5;
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 16,
      }}
    >
      <Typography.Title level={5}>With \`getPopupContainer\`</Typography.Title>
      <Block ref={containerRef1} getPopupContainer={(trigger) => trigger.parentElement} />

      <Typography.Title level={5}>Without \`getPopupContainer\`</Typography.Title>
      <Block ref={containerRef2} />
    </div>
  );
};
export default App;
`,description:"<p>\u6C14\u6CE1\u6846\u4E0D\u53EF\u89C1\u65F6\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"tooltip-demo-destroy-tooltip-on-hide"},previewerProps:{debug:!0,title:"\u9690\u85CF\u540E\u9500\u6BC1",filename:"components/tooltip/demo/destroy-tooltip-on-hide.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tooltip } from 'antd';
const App = () => (
  <Tooltip destroyTooltipOnHide title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>destroyTooltipOnHide</code> \u63A7\u5236\u63D0\u793A\u5173\u95ED\u65F6\u662F\u5426\u9500\u6BC1 dom \u8282\u70B9\u3002</p>"}},{demo:{id:"tooltip-demo-colorful"},previewerProps:{title:"\u591A\u5F69\u6587\u5B57\u63D0\u793A",filename:"components/tooltip/demo/colorful.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Divider, Space, Tooltip } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
const App = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space wrap>
      {colors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
    <Divider orientation="left">Custom</Divider>
    <Space wrap>
      {customColors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
  </>
);
export default App;
`,description:"<p>\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6587\u5B57\u63D0\u793A\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002</p>"}},{demo:{id:"tooltip-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tooltip/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tooltip } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTooltip } = Tooltip;
const App = () => (
  <>
    <InternalTooltip title="Hello, Pink Pure Panel!" color="pink" />
    <InternalTooltip title="Hello, Customize Color Pure Panel!" color="#f50" />
    <InternalTooltip
      title="Hello, Pure Panel!"
      placement="bottomLeft"
      style={{
        width: 200,
      }}
    />
  </>
);
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}},{demo:{id:"tooltip-demo-debug"},previewerProps:{debug:!0,title:"Debug",filename:"components/tooltip/demo/debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Tooltip } from 'antd';
const App = () => (
  <Tooltip
    open
    title="Thanks for using antd. Have a nice day!"
    arrow={{
      pointAtCenter: true,
    }}
    placement="topLeft"
  >
    <Button>Point at center</Button>
  </Tooltip>
);
export default App;
`,description:"<p>Debug \u7528\u4F8B\u3002</p>"}},{demo:{id:"tooltip-demo-disabled"},previewerProps:{debug:!0,title:"\u7981\u7528",filename:"components/tooltip/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Checkbox, Input, Select, Space, Tooltip, InputNumber } from 'antd';
const WrapperTooltip = (props) => (
  <Tooltip title="Thanks for using antd. Have a nice day!" {...props} />
);
const App = () => (
  <Space>
    <WrapperTooltip>
      <Button disabled>Disabled</Button>
    </WrapperTooltip>
    <WrapperTooltip>
      <Input disabled placeholder="disabled" />
    </WrapperTooltip>
    <WrapperTooltip>
      <InputNumber disabled />
    </WrapperTooltip>
    <WrapperTooltip>
      <Checkbox disabled />
    </WrapperTooltip>
    <WrapperTooltip>
      <Select disabled />
    </WrapperTooltip>
  </Space>
);
export default App;
`,description:"<p>Disabled \u5B50\u5143\u7D20\u3002</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[t[7].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:t[8].value})]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[9].value}),(0,e.jsx)("th",{children:t[10].value}),(0,e.jsx)("th",{children:t[11].value}),(0,e.jsx)("th",{children:t[12].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[13].value}),(0,e.jsx)("td",{children:t[14].value}),(0,e.jsx)("td",{children:t[15].value}),(0,e.jsx)("td",{children:t[16].value})]})})]}),(0,e.jsxs)("h3",{id:"\u5171\u540C\u7684-api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u540C\u7684-api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5171\u540C\u7684 API"]}),(0,e.jsx)("p",{children:t[17].value}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[18].value}),(0,e.jsx)("th",{children:t[19].value}),(0,e.jsx)("th",{children:t[20].value}),(0,e.jsx)("th",{children:t[21].value}),(0,e.jsx)("th",{children:t[22].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[23].value}),(0,e.jsxs)("td",{children:[t[24].value,(0,e.jsx)(r.Z,{href:"https://github.com/react-component/tooltip",sourceType:"a",children:t[25].value})]}),(0,e.jsx)("td",{children:t[26].value}),(0,e.jsx)("td",{children:t[27].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[28].value}),(0,e.jsx)("td",{children:t[29].value}),(0,e.jsx)("td",{children:t[30].value}),(0,e.jsx)("td",{children:t[31].value}),(0,e.jsx)("td",{children:t[32].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[33].value}),(0,e.jsx)("td",{children:t[34].value}),(0,e.jsx)("td",{children:t[35].value}),(0,e.jsx)("td",{children:t[36].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[37].value}),(0,e.jsx)("td",{children:t[38].value}),(0,e.jsx)("td",{children:t[39].value}),(0,e.jsx)("td",{children:t[40].value}),(0,e.jsx)("td",{children:t[41].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[42].value}),(0,e.jsx)("td",{children:t[43].value}),(0,e.jsx)("td",{children:t[44].value}),(0,e.jsx)("td",{children:t[45].value}),(0,e.jsx)("td",{children:t[46].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[47].value}),(0,e.jsx)("td",{children:t[48].value}),(0,e.jsx)("td",{children:t[49].value}),(0,e.jsx)("td",{children:t[50].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[51].value}),(0,e.jsx)("td",{children:t[52].value}),(0,e.jsx)("td",{children:t[53].value}),(0,e.jsx)("td",{children:t[54].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[55].value}),(0,e.jsx)("td",{children:t[56].value}),(0,e.jsx)("td",{children:t[57].value}),(0,e.jsx)("td",{children:t[58].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[59].value}),(0,e.jsx)("td",{children:t[60].value}),(0,e.jsx)("td",{children:t[61].value}),(0,e.jsx)("td",{children:t[62].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[63].value}),(0,e.jsx)("td",{children:t[64].value}),(0,e.jsx)("td",{children:t[65].value}),(0,e.jsx)("td",{children:t[66].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[67].value}),(0,e.jsx)("td",{children:t[68].value}),(0,e.jsx)("td",{children:t[69].value}),(0,e.jsx)("td",{children:t[70].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[71].value}),(0,e.jsx)("td",{children:t[72].value}),(0,e.jsx)("td",{children:t[73].value}),(0,e.jsx)("td",{children:t[74].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[75].value}),(0,e.jsxs)("td",{children:[t[76].value,(0,e.jsx)("code",{children:t[77].value}),t[78].value,(0,e.jsx)("code",{children:t[79].value}),t[80].value,(0,e.jsx)("code",{children:t[81].value}),t[82].value,(0,e.jsx)("code",{children:t[83].value}),t[84].value,(0,e.jsx)("code",{children:t[85].value}),t[86].value,(0,e.jsx)("code",{children:t[87].value}),t[88].value,(0,e.jsx)("code",{children:t[89].value}),t[90].value,(0,e.jsx)("code",{children:t[91].value}),t[92].value,(0,e.jsx)("code",{children:t[93].value}),t[94].value,(0,e.jsx)("code",{children:t[95].value}),t[96].value,(0,e.jsx)("code",{children:t[97].value}),t[98].value,(0,e.jsx)("code",{children:t[99].value})]}),(0,e.jsx)("td",{children:t[100].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[101].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[102].value}),(0,e.jsxs)("td",{children:[t[103].value,(0,e.jsx)("code",{children:t[104].value}),t[105].value,(0,e.jsx)("code",{children:t[106].value}),t[107].value,(0,e.jsx)("code",{children:t[108].value}),t[109].value,(0,e.jsx)("code",{children:t[110].value}),t[111].value]}),(0,e.jsx)("td",{children:t[112].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[113].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[114].value}),(0,e.jsxs)("td",{children:[t[115].value,(0,e.jsx)("code",{children:t[116].value}),t[117].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#%E5%BC%B9%E5%B1%82%E7%B1%BB%E7%BB%84%E4%BB%B6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%9F%E4%B8%80%E8%87%B3-open-%E5%B1%9E%E6%80%A7",sourceType:"Link",children:t[118].value}),t[119].value]}),(0,e.jsx)("td",{children:t[120].value}),(0,e.jsx)("td",{children:t[121].value}),(0,e.jsx)("td",{children:t[122].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[123].value}),(0,e.jsxs)("td",{children:[t[124].value,(0,e.jsx)("code",{children:t[125].value})]}),(0,e.jsx)("td",{children:t[126].value}),(0,e.jsx)("td",{children:t[127].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[128].value}),(0,e.jsx)("td",{children:t[129].value}),(0,e.jsx)("td",{children:t[130].value}),(0,e.jsx)("td",{children:t[131].value}),(0,e.jsx)("td",{children:t[132].value})]})]})]}),(0,e.jsxs)("h2",{id:"\u4E3B\u9898\u53D8\u91CFdesign-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898\u53D8\u91CFdesign-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898\u53D8\u91CF\uFF08Design Token\uFF09"]})]}),(0,e.jsx)(l.Z,{component:"Tooltip"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"\u4E3A\u4F55\u6709\u65F6\u5019-hoc-\u7EC4\u4EF6\u65E0\u6CD5\u751F\u6548",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u6709\u65F6\u5019-hoc-\u7EC4\u4EF6\u65E0\u6CD5\u751F\u6548",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4F55\u6709\u65F6\u5019 HOC \u7EC4\u4EF6\u65E0\u6CD5\u751F\u6548\uFF1F"]}),(0,e.jsxs)("p",{children:[t[133].value,(0,e.jsx)("code",{children:t[134].value}),t[135].value,(0,e.jsx)("code",{children:t[136].value}),t[137].value,(0,e.jsx)("code",{children:t[138].value}),t[139].value,(0,e.jsx)("code",{children:t[140].value}),t[141].value,(0,e.jsx)("code",{children:t[142].value}),t[143].value,(0,e.jsx)("code",{children:t[144].value}),t[145].value,(0,e.jsx)("code",{children:t[146].value}),t[147].value]}),(0,e.jsxs)("h3",{id:"placement-\u7684\u884C\u4E3A\u903B\u8F91\u662F\u4EC0\u4E48",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#placement-\u7684\u884C\u4E3A\u903B\u8F91\u662F\u4EC0\u4E48",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"placement \u7684\u884C\u4E3A\u903B\u8F91\u662F\u4EC0\u4E48\uFF1F"]}),(0,e.jsxs)("p",{children:[t[148].value,(0,e.jsx)("code",{children:t[149].value}),t[150].value,(0,e.jsx)("code",{children:t[151].value}),t[152].value,(0,e.jsx)("code",{children:t[153].value}),t[154].value,(0,e.jsx)("code",{children:t[155].value}),t[156].value,(0,e.jsx)("code",{children:t[157].value}),t[158].value,(0,e.jsx)("code",{children:t[159].value}),t[160].value,(0,e.jsx)("code",{children:t[161].value}),t[162].value,(0,e.jsx)("code",{children:t[163].value}),t[164].value,(0,e.jsx)("code",{children:t[165].value}),t[166].value]}),(0,e.jsx)("img",{alt:"shift",height:"200",src:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sxaTTJjLtIMAAAAAAAAAAAAADrJ8AQ/original"}),(0,e.jsxs)("p",{children:[t[167].value,(0,e.jsx)("code",{children:t[168].value}),t[169].value,(0,e.jsx)("code",{children:t[170].value}),t[171].value]})]})]})})}o.default=d}}]);
