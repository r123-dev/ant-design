"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7738],{388495:function(p,o,n){n.r(o);var u=n(502143),m=n(968521),_=n(720719),h=n(521587),x=n(759907),i=n(828089),v=n(825673),g=n(902068),j=n(574399),f=n(863942),T=n(316073),b=n(24628),w=n(719260),B=n(956140),l=n(127179),s=n(905388),y=n(245583),P=n(606965),E=n(268696),D=n(587302),r=n(424128),A=n(249706),k=n(795127),R=n(116846),L=n(720538),W=n(212039),O=n(73024),M=n(553913),c=n(830084),C=n(667294),e=n(785893);function d(){var a=(0,c.eL)(),t=a.texts;return(0,e.jsx)(c.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:t[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:t[1].value}),(0,e.jsxs)("li",{children:[t[2].value,(0,e.jsx)("code",{children:t[3].value}),t[4].value,(0,e.jsx)("code",{children:t[5].value}),t[6].value]})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(s.Z,{items:[{demo:{id:"tooltip-demo-basic"},previewerProps:{title:"Basic",filename:"components/tooltip/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tooltip } from 'antd';
const App = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);
export default App;
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"tooltip-demo-placement"},previewerProps:{title:"Placement",filename:"components/tooltip/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>There are 12 placement options available.</p>",style:`#components-tooltip-demo-placement .ant-btn {
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
}`}},{demo:{id:"tooltip-demo-arrow"},previewerProps:{title:"Arrow",filename:"components/tooltip/demo/arrow.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useMemo, useState } from 'react';
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
`,description:"<p>Support show, hide or keep arrow in the center.</p>"}},{demo:{id:"tooltip-demo-shift"},previewerProps:{iframe:"200",title:"Auto Shift",filename:"components/tooltip/demo/shift.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>Auto adjust Popup and arrow position when Tooltip is close to the edge of the screen. Will be out of screen when exceed limitation.</p>"}},{demo:{id:"tooltip-demo-auto-adjust-overflow"},previewerProps:{debug:!0,title:"Adjust placement automatically",filename:"components/tooltip/demo/auto-adjust-overflow.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>Adjust placement automatically when tooltip is invisible.</p>"}},{demo:{id:"tooltip-demo-destroy-tooltip-on-hide"},previewerProps:{debug:!0,title:"Destroy tooltip when hidden",filename:"components/tooltip/demo/destroy-tooltip-on-hide.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tooltip } from 'antd';
const App = () => (
  <Tooltip destroyTooltipOnHide title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
);
export default App;
`,description:"<p>Setting <code>destroyTooltipOnHide</code> to control whether destroy dom node of tooltip when hidden.</p>"}},{demo:{id:"tooltip-demo-colorful"},previewerProps:{title:"Colorful Tooltip",filename:"components/tooltip/demo/colorful.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>We preset a series of colorful Tooltip styles for use in different situations.</p>"}},{demo:{id:"tooltip-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tooltip/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>Debug usage. Do not use in your production.</p>"}},{demo:{id:"tooltip-demo-debug"},previewerProps:{debug:!0,title:"Debug",filename:"components/tooltip/demo/debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>Debug use.</p>"}},{demo:{id:"tooltip-demo-disabled"},previewerProps:{debug:!0,title:"Disabled",filename:"components/tooltip/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>Disabled wrapper.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[t[7].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:t[8].value})]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[9].value}),(0,e.jsx)("th",{children:t[10].value}),(0,e.jsx)("th",{children:t[11].value}),(0,e.jsx)("th",{children:t[12].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[13].value}),(0,e.jsx)("td",{children:t[14].value}),(0,e.jsx)("td",{children:t[15].value}),(0,e.jsx)("td",{children:t[16].value})]})})]}),(0,e.jsxs)("h3",{id:"common-api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#common-api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Common API"]}),(0,e.jsx)("p",{children:t[17].value}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[18].value}),(0,e.jsx)("th",{children:t[19].value}),(0,e.jsx)("th",{children:t[20].value}),(0,e.jsx)("th",{children:t[21].value}),(0,e.jsx)("th",{children:t[22].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[23].value}),(0,e.jsxs)("td",{children:[t[24].value,(0,e.jsx)(r.Z,{href:"https://github.com/react-component/tooltip",sourceType:"a",children:t[25].value})]}),(0,e.jsx)("td",{children:t[26].value}),(0,e.jsx)("td",{children:t[27].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[28].value}),(0,e.jsx)("td",{children:t[29].value}),(0,e.jsx)("td",{children:t[30].value}),(0,e.jsx)("td",{children:t[31].value}),(0,e.jsx)("td",{children:t[32].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[33].value}),(0,e.jsx)("td",{children:t[34].value}),(0,e.jsx)("td",{children:t[35].value}),(0,e.jsx)("td",{children:t[36].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[37].value}),(0,e.jsx)("td",{children:t[38].value}),(0,e.jsx)("td",{children:t[39].value}),(0,e.jsx)("td",{children:t[40].value}),(0,e.jsx)("td",{children:t[41].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[42].value}),(0,e.jsx)("td",{children:t[43].value}),(0,e.jsx)("td",{children:t[44].value}),(0,e.jsx)("td",{children:t[45].value}),(0,e.jsx)("td",{children:t[46].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[47].value}),(0,e.jsx)("td",{children:t[48].value}),(0,e.jsx)("td",{children:t[49].value}),(0,e.jsx)("td",{children:t[50].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[51].value}),(0,e.jsxs)("td",{children:[t[52].value,(0,e.jsx)("code",{children:t[53].value}),t[54].value,(0,e.jsx)("code",{children:t[55].value})]}),(0,e.jsx)("td",{children:t[56].value}),(0,e.jsx)("td",{children:t[57].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[58].value}),(0,e.jsx)("td",{children:t[59].value}),(0,e.jsx)("td",{children:t[60].value}),(0,e.jsx)("td",{children:t[61].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[62].value}),(0,e.jsx)("td",{children:t[63].value}),(0,e.jsx)("td",{children:t[64].value}),(0,e.jsx)("td",{children:t[65].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[66].value}),(0,e.jsx)("td",{children:t[67].value}),(0,e.jsx)("td",{children:t[68].value}),(0,e.jsx)("td",{children:t[69].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[70].value}),(0,e.jsx)("td",{children:t[71].value}),(0,e.jsx)("td",{children:t[72].value}),(0,e.jsx)("td",{children:t[73].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[74].value}),(0,e.jsx)("td",{children:t[75].value}),(0,e.jsx)("td",{children:t[76].value}),(0,e.jsx)("td",{children:t[77].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[78].value}),(0,e.jsxs)("td",{children:[t[79].value,(0,e.jsx)("code",{children:t[80].value}),t[81].value,(0,e.jsx)("code",{children:t[82].value}),t[83].value,(0,e.jsx)("code",{children:t[84].value}),t[85].value,(0,e.jsx)("code",{children:t[86].value}),t[87].value,(0,e.jsx)("code",{children:t[88].value}),t[89].value,(0,e.jsx)("code",{children:t[90].value}),t[91].value,(0,e.jsx)("code",{children:t[92].value}),t[93].value,(0,e.jsx)("code",{children:t[94].value}),t[95].value,(0,e.jsx)("code",{children:t[96].value}),t[97].value,(0,e.jsx)("code",{children:t[98].value}),t[99].value,(0,e.jsx)("code",{children:t[100].value}),t[101].value,(0,e.jsx)("code",{children:t[102].value})]}),(0,e.jsx)("td",{children:t[103].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[104].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[105].value}),(0,e.jsx)("td",{children:t[106].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[107].value}),t[108].value,(0,e.jsx)("code",{children:t[109].value}),t[110].value,(0,e.jsx)("code",{children:t[111].value}),t[112].value,(0,e.jsx)("code",{children:t[113].value}),t[114].value]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[115].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[116].value}),(0,e.jsxs)("td",{children:[t[117].value,(0,e.jsx)("code",{children:t[118].value}),t[119].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#why-open",sourceType:"Link",children:t[120].value}),t[121].value]}),(0,e.jsx)("td",{children:t[122].value}),(0,e.jsx)("td",{children:t[123].value}),(0,e.jsx)("td",{children:t[124].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[125].value}),(0,e.jsxs)("td",{children:[t[126].value,(0,e.jsx)("code",{children:t[127].value}),t[128].value]}),(0,e.jsx)("td",{children:t[129].value}),(0,e.jsx)("td",{children:t[130].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[131].value}),(0,e.jsx)("td",{children:t[132].value}),(0,e.jsx)("td",{children:t[133].value}),(0,e.jsx)("td",{children:t[134].value}),(0,e.jsx)("td",{children:t[135].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(l.Z,{component:"Tooltip"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"why-sometime-not-work-on-hoc",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-sometime-not-work-on-hoc",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why sometime not work on HOC?"]}),(0,e.jsxs)("p",{children:[t[136].value,(0,e.jsx)("code",{children:t[137].value}),t[138].value,(0,e.jsx)("code",{children:t[139].value}),t[140].value,(0,e.jsx)("code",{children:t[141].value}),t[142].value,(0,e.jsx)("code",{children:t[143].value}),t[144].value,(0,e.jsx)("code",{children:t[145].value}),t[146].value,(0,e.jsx)("code",{children:t[147].value}),t[148].value,(0,e.jsx)("code",{children:t[149].value}),t[150].value]}),(0,e.jsxs)("h3",{id:"whats-the-placement-logic",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#whats-the-placement-logic",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"What's the placement logic?"]}),(0,e.jsxs)("p",{children:[t[151].value,(0,e.jsx)("code",{children:t[152].value}),t[153].value,(0,e.jsx)("code",{children:t[154].value}),t[155].value,(0,e.jsx)("code",{children:t[156].value}),t[157].value,(0,e.jsx)("code",{children:t[158].value}),t[159].value,(0,e.jsx)("code",{children:t[160].value}),t[161].value,(0,e.jsx)("code",{children:t[162].value}),t[163].value,(0,e.jsx)("code",{children:t[164].value}),t[165].value,(0,e.jsx)("code",{children:t[166].value}),t[167].value,(0,e.jsx)("code",{children:t[168].value}),t[169].value]}),(0,e.jsx)("img",{alt:"shift",height:"200",src:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sxaTTJjLtIMAAAAAAAAAAAAADrJ8AQ/original"}),(0,e.jsxs)("p",{children:[t[170].value,(0,e.jsx)("code",{children:t[171].value}),t[172].value,(0,e.jsx)("code",{children:t[173].value}),t[174].value,(0,e.jsx)("code",{children:t[175].value}),t[176].value]})]})]})})}o.default=d}}]);
