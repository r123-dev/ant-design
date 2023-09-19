"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6438],{846858:function(_,c,r){r.r(c);var p=r(502143),m=r(968521),g=r(720719),h=r(521587),x=r(759907),i=r(828089),v=r(825673),s=r(902068),j=r(574399),f=r(863942),E=r(316073),b=r(24628),C=r(719260),D=r(956140),d=r(127179),l=r(905388),P=r(245583),k=r(606965),R=r(268696),w=r(587302),t=r(424128),M=r(249706),y=r(795127),A=r(116846),O=r(720538),B=r(212039),T=r(73024),L=r(553913),o=r(830084),I=r(667294),e=r(785893);function a(){var u=(0,o.eL)(),n=u.texts;return(0,e.jsx)(o.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("p",{children:[n[0].value,(0,e.jsx)("code",{children:n[1].value}),n[2].value]})}),(0,e.jsx)(s.Z,{message:"\u82E5\u4E8C\u7EF4\u7801\u65E0\u6CD5\u626B\u7801\u8BC6\u522B\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u94FE\u63A5\u5730\u5740\u8FC7\u957F\u5BFC\u81F4\u50CF\u7D20\u8FC7\u4E8E\u5BC6\u96C6\uFF0C\u53EF\u4EE5\u901A\u8FC7 size \u914D\u7F6E\u4E8C\u7EF4\u7801\u66F4\u5927\uFF0C\u6216\u8005\u901A\u8FC7\u77ED\u94FE\u63A5\u670D\u52A1\u7B49\u65B9\u5F0F\u5C06\u94FE\u63A5\u53D8\u77ED\u3002"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsx)("p",{children:n[3].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(l.Z,{items:[{demo:{id:"qr-code-demo-base"},previewerProps:{title:"\u57FA\u672C\u4F7F\u7528",filename:"components/qr-code/demo/base.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Input, QRCode, Space } from 'antd';
const App = () => {
  const [text, setText] = React.useState('https://ant.design/');
  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u57FA\u672C\u7528\u6CD5\u3002</p>"}},{demo:{id:"qr-code-demo-icon"},previewerProps:{title:"\u5E26 Icon \u7684\u4F8B\u5B50",filename:"components/qr-code/demo/icon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { QRCode } from 'antd';
const App = () => (
  <QRCode
    errorLevel="H"
    value="https://ant.design/"
    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
);
export default App;
`,description:"<p>\u5E26 Icon \u7684\u4E8C\u7EF4\u7801\u3002</p>"}},{demo:{id:"qr-code-demo-status"},previewerProps:{title:"\u4E0D\u540C\u7684\u72B6\u6001",filename:"components/qr-code/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { QRCode, Space } from 'antd';
const App = () => (
  <Space wrap>
    <QRCode value="https://ant.design/" status="loading" />
    <QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log('refresh')} />
  </Space>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>status</code> \u7684\u503C\u63A7\u5236\u4E8C\u7EF4\u7801\u7684\u72B6\u6001\u3002</p>"}},{demo:{id:"qr-code-demo-type"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u7C7B\u578B",filename:"components/qr-code/demo/type.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { QRCode, Space } from 'antd';
const App = () => (
  <Space>
    <QRCode type="canvas" value="https://ant.design/" />
    <QRCode type="svg" value="https://ant.design/" />
  </Space>
);
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>type</code> \u81EA\u5B9A\u4E49\u6E32\u67D3\u7ED3\u679C\uFF0C\u63D0\u4F9B <code>canvas</code> \u548C <code>svg</code> \u4E24\u4E2A\u9009\u9879\u3002</p>"}},{demo:{id:"qr-code-demo-customsize"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u5C3A\u5BF8",filename:"components/qr-code/demo/customSize.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { QRCode, Button } from 'antd';
const App = () => {
  const [size, setSize] = useState(160);
  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize > 300) {
        return 300;
      }
      return newSize;
    });
  };
  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize < 48) {
        return 48;
      }
      return newSize;
    });
  };
  return (
    <>
      <Button.Group
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
          Smaller
        </Button>
        <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
          Larger
        </Button>
      </Button.Group>
      <QRCode
        errorLevel="H"
        size={size}
        iconSize={size / 4}
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
    </>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</p>"}},{demo:{id:"qr-code-demo-customcolor"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u989C\u8272",filename:"components/qr-code/demo/customColor.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { QRCode, Space, theme } from 'antd';
const { useToken } = theme;
const App = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode value="https://ant.design/" color={token.colorSuccessText} />
      <QRCode
        value="https://ant.design/"
        color={token.colorInfoText}
        bgColor={token.colorBgLayout}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>color</code> \u81EA\u5B9A\u4E49\u4E8C\u7EF4\u7801\u989C\u8272\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>bgColor</code> \u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\u3002</p>"}},{demo:{id:"qr-code-demo-download"},previewerProps:{title:"\u4E0B\u8F7D\u4E8C\u7EF4\u7801",filename:"components/qr-code/demo/download.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, QRCode } from 'antd';
const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
const App = () => (
  <div id="myqrcode">
    <QRCode
      value="https://ant.design/"
      bgColor="#fff"
      style={{
        marginBottom: 16,
      }}
    />
    <Button type="primary" onClick={downloadQRCode}>
      Download
    </Button>
  </div>
);
export default App;
`,description:"<p>\u4E0B\u8F7D\u4E8C\u7EF4\u7801\u7684\u7B80\u5355\u5B9E\u73B0\u3002</p>"}},{demo:{id:"qr-code-demo-errorlevel"},previewerProps:{title:"\u7EA0\u9519\u6BD4\u4F8B",filename:"components/qr-code/demo/errorlevel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Segmented, QRCode } from 'antd';
const App = () => {
  const [level, setLevel] = useState('L');
  return (
    <>
      <QRCode
        style={{
          marginBottom: 16,
        }}
        errorLevel={level}
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
    </>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E errorLevel \u8C03\u6574\u4E0D\u540C\u7684\u5BB9\u9519\u7B49\u7EA7\u3002</p>"}},{demo:{id:"qr-code-demo-popover"},previewerProps:{title:"\u9AD8\u7EA7\u7528\u6CD5",filename:"components/qr-code/demo/Popover.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { QRCode, Popover } from 'antd';
const src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const App = () => (
  <Popover
    overlayInnerStyle={{
      padding: 0,
    }}
    content={<QRCode value={src} bordered={false} />}
  >
    <img width={100} height={100} src={src} alt="icon" />
  </Popover>
);
export default App;
`,description:"<p>\u5E26\u6C14\u6CE1\u5361\u7247\u7684\u4F8B\u5B50\u3002</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[4].value,(0,e.jsx)(t.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[5].value})]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[6].value,(0,e.jsx)("code",{children:n[7].value}),n[8].value]})}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{align:"left",children:n[9].value}),(0,e.jsx)("th",{align:"left",children:n[10].value}),(0,e.jsx)("th",{align:"left",children:n[11].value}),(0,e.jsx)("th",{align:"left",children:n[12].value}),(0,e.jsx)("th",{align:"left",children:n[13].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[14].value}),(0,e.jsx)("td",{align:"left",children:n[15].value}),(0,e.jsx)("td",{align:"left",children:n[16].value}),(0,e.jsx)("td",{align:"left",children:n[17].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[18].value}),(0,e.jsx)("td",{align:"left",children:n[19].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[20].value})}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[21].value})}),(0,e.jsx)("td",{align:"left",children:n[22].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[23].value}),(0,e.jsx)("td",{align:"left",children:n[24].value}),(0,e.jsx)("td",{align:"left",children:n[25].value}),(0,e.jsx)("td",{align:"left",children:n[26].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[27].value}),(0,e.jsx)("td",{align:"left",children:n[28].value}),(0,e.jsx)("td",{align:"left",children:n[29].value}),(0,e.jsx)("td",{align:"left",children:n[30].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[31].value}),(0,e.jsx)("td",{align:"left",children:n[32].value}),(0,e.jsx)("td",{align:"left",children:n[33].value}),(0,e.jsx)("td",{align:"left",children:n[34].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[35].value}),(0,e.jsx)("td",{align:"left",children:n[36].value}),(0,e.jsx)("td",{align:"left",children:n[37].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[38].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[39].value}),(0,e.jsx)("td",{align:"left",children:n[40].value}),(0,e.jsx)("td",{align:"left",children:n[41].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[42].value})}),(0,e.jsx)("td",{align:"left",children:n[43].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[44].value}),(0,e.jsx)("td",{align:"left",children:n[45].value}),(0,e.jsx)("td",{align:"left",children:n[46].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[47].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[48].value}),(0,e.jsx)("td",{align:"left",children:n[49].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[50].value})}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[51].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[52].value}),(0,e.jsx)("td",{align:"left",children:n[53].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[54].value})}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[55].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[56].value}),(0,e.jsx)("td",{align:"left",children:n[57].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[58].value})}),(0,e.jsx)("td",{align:"left",children:n[59].value}),(0,e.jsx)("td",{align:"left"})]})]})]}),(0,e.jsxs)("h2",{id:"\u4E3B\u9898\u53D8\u91CFdesign-token",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898\u53D8\u91CFdesign-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898\u53D8\u91CF\uFF08Design Token\uFF09"]})]}),(0,e.jsx)(d.Z,{component:"QRCode"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7"]}),(0,e.jsx)("p",{children:n[60].value}),(0,e.jsxs)("p",{children:[n[61].value,(0,e.jsx)("code",{children:n[62].value}),n[63].value,(0,e.jsx)("code",{children:n[64].value}),n[65].value,(0,e.jsx)("code",{children:n[66].value}),n[67].value,(0,e.jsx)("code",{children:n[68].value}),n[69].value,(0,e.jsx)("code",{children:n[70].value}),n[71].value,(0,e.jsx)("code",{children:n[72].value}),n[73].value,(0,e.jsx)("code",{children:n[74].value}),n[75].value,(0,e.jsx)("code",{children:n[76].value}),n[77].value]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[78].value,(0,e.jsx)(t.Z,{href:"https://www.qrcode.com/zh/about/error_correction.html",sourceType:"a",children:n[79].value})]})})]})]})})}c.default=a}}]);
