"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8928],{110664:function(p,c,t){t.r(c);var u=t(502143),m=t(968521),b=t(720719),h=t(521587),_=t(759907),i=t(828089),x=t(825673),g=t(902068),v=t(574399),f=t(863942),j=t(316073),y=t(24628),k=t(719260),T=t(956140),a=t(127179),s=t(905388),P=t(245583),w=t(606965),C=t(268696),A=t(587302),r=t(424128),E=t(249706),B=t(795127),D=t(116846),S=t(720538),K=t(212039),R=t(73024),I=t(553913),o=t(830084),O=t(667294),e=t(785893);function d(){var l=(0,o.eL)(),n=l.texts;return(0,e.jsx)(o.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsx)("p",{children:n[1].value}),(0,e.jsx)("p",{children:n[2].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[3].value}),(0,e.jsx)("li",{children:n[4].value}),(0,e.jsxs)("li",{children:[(0,e.jsx)(r.Z,{to:"/components/radio-cn/#components-radio-demo-radiobutton",sourceType:"Link",children:n[5].value}),n[6].value]})]}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(s.Z,{items:[{demo:{id:"tabs-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/tabs/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;
`,description:"<p>\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\u3002</p>"}},{demo:{id:"tabs-demo-disabled"},previewerProps:{title:"\u7981\u7528",filename:"components/tabs/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Tab 1',
        key: '1',
        children: 'Tab 1',
      },
      {
        label: 'Tab 2',
        key: '2',
        children: 'Tab 2',
        disabled: true,
      },
      {
        label: 'Tab 3',
        key: '3',
        children: 'Tab 3',
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7981\u7528\u67D0\u4E00\u9879\u3002</p>"}},{demo:{id:"tabs-demo-centered"},previewerProps:{title:"\u5C45\u4E2D",filename:"components/tabs/demo/centered.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`Tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>\u6807\u7B7E\u5C45\u4E2D\u5C55\u793A\u3002</p>"}},{demo:{id:"tabs-demo-icon"},previewerProps:{title:"\u56FE\u6807",filename:"components/tabs/demo/icon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        label: (
          <span>
            <Icon />
            Tab {id}
          </span>
        ),
        key: id,
        children: \`Tab \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>\u6709\u56FE\u6807\u7684\u6807\u7B7E\u3002</p>"}},{demo:{id:"tabs-demo-custom-indicator"},previewerProps:{title:"\u6307\u793A\u6761",filename:"components/tabs/demo/custom-indicator.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const App = () => (
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    indicatorSize={(origin) => origin - 16}
  />
);
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u6307\u793A\u5668\u5BBD\u5EA6</p>"}},{demo:{id:"tabs-demo-slide"},previewerProps:{title:"\u6ED1\u52A8",filename:"components/tabs/demo/slide.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
const App = () => {
  const [mode, setMode] = useState('top');
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{
          height: 220,
        }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: \`Tab-\${id}\`,
            key: id,
            disabled: i === 28,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u5DE6\u53F3\u3001\u4E0A\u4E0B\u6ED1\u52A8\uFF0C\u5BB9\u7EB3\u66F4\u591A\u6807\u7B7E\u3002</p>"}},{demo:{id:"tabs-demo-extra"},previewerProps:{title:"\u9644\u52A0\u5185\u5BB9",filename:"components/tabs/demo/extra.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Divider, Tabs } from 'antd';
const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};
const options = ['left', 'right'];
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab \${id}\`,
    key: id,
    children: \`Content of tab \${id}\`,
  };
});
const App = () => {
  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction],
      }),
      {},
    );
  }, [position]);
  return (
    <>
      <Tabs tabBarExtraContent={operations} items={items} />
      <br />
      <br />
      <br />
      <div>You can also specify its direction or both side</div>
      <Divider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={(value) => {
          setPosition(value);
        }}
      />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot} items={items} />
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u5728\u9875\u7B7E\u4E24\u8FB9\u6DFB\u52A0\u9644\u52A0\u64CD\u4F5C\u3002</p>",style:`.tabs-extra-demo-button {
  margin-right: 16px;
}

.ant-row-rtl .tabs-extra-demo-button {
  margin-right: 0;
  margin-left: 16px;
}`}},{demo:{id:"tabs-demo-size"},previewerProps:{title:"\u5927\u5C0F",filename:"components/tabs/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
const App = () => {
  const [size, setSize] = useState('small');
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Card Tab \${id}\`,
            key: id,
            children: \`Content of card tab \${id}\`,
          };
        })}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u5927\u53F7\u9875\u7B7E\u7528\u5728\u9875\u5934\u533A\u57DF\uFF0C\u5C0F\u53F7\u7528\u5728\u5F39\u51FA\u6846\u7B49\u8F83\u72ED\u7A84\u7684\u5BB9\u5668\u5185\u3002</p>"}},{demo:{id:"tabs-demo-position"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/tabs/demo/position.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
const App = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab \${id}\`,
          };
        })}
      />
    </>
  );
};
export default App;
`,description:'<p>\u6709\u56DB\u4E2A\u4F4D\u7F6E\uFF0C<code>tabPosition="left|right|top|bottom"</code>\u3002\u5728\u79FB\u52A8\u7AEF\u4E0B\uFF0C<code>left|right</code> \u4F1A\u81EA\u52A8\u5207\u6362\u6210 <code>top</code>\u3002</p>'}},{demo:{id:"tabs-demo-card"},previewerProps:{title:"\u5361\u7247\u5F0F\u9875\u7B7E",filename:"components/tabs/demo/card.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const App = () => (
  <Tabs
    onChange={onChange}
    type="card"
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`Tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>\u53E6\u4E00\u79CD\u6837\u5F0F\u7684\u9875\u7B7E\uFF0C\u4E0D\u63D0\u4F9B\u5BF9\u5E94\u7684\u5782\u76F4\u6837\u5F0F\u3002</p>"}},{demo:{id:"tabs-demo-editable-card"},previewerProps:{title:"\u65B0\u589E\u548C\u5173\u95ED\u9875\u7B7E",filename:"components/tabs/demo/editable-card.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useRef, useState } from 'react';
import { Tabs } from 'antd';
const initialItems = [
  {
    label: 'Tab 1',
    children: 'Content of Tab 1',
    key: '1',
  },
  {
    label: 'Tab 2',
    children: 'Content of Tab 2',
    key: '2',
  },
  {
    label: 'Tab 3',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];
const App = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};
export default App;
`,description:"<p>\u53EA\u6709\u5361\u7247\u6837\u5F0F\u7684\u9875\u7B7E\u652F\u6301\u65B0\u589E\u548C\u5173\u95ED\u9009\u9879\u3002\u4F7F\u7528 <code>closable={false}</code> \u7981\u6B62\u5173\u95ED\u3002</p>"}},{demo:{id:"tabs-demo-card-top"},previewerProps:{compact:!0,background:"grey",debug:!0,title:"\u5361\u7247\u5F0F\u9875\u7B7E\u5BB9\u5668",filename:"components/tabs/demo/card-top.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { createStyles } from 'antd-style';
import { Tabs } from 'antd';
const useStyle = createStyles(({ token, css }) => {
  const antdTabsCls = '.ant-tabs';
  return css\`
    \${antdTabsCls}\${antdTabsCls}-card {
      \${antdTabsCls}-content {
        padding: \${token.padding}px;
        background: \${token.colorBgContainer};
      }

      \${antdTabsCls}-nav {
        margin: 0;

        \${antdTabsCls}-nav-wrap > \${antdTabsCls}-nav-list > \${antdTabsCls}-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            border-color: \${token.colorBorderBg};
            background: \${token.colorBgContainer};
          }
        }

        &::before {
          display: none;
        }
      }
    }
  \`;
});
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab Title \${id}\`,
    key: id,
    children: (
      <>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
      </>
    ),
  };
});
const App = () => {
  const { styles } = useStyle();
  return (
    <div className={styles}>
      <Tabs type="card" items={items} />
    </div>
  );
};
export default App;
`,description:"<p>\u7528\u4E8E\u5BB9\u5668\u9876\u90E8\uFF0C\u9700\u8981\u4E00\u70B9\u989D\u5916\u7684\u6837\u5F0F\u8986\u76D6\u3002</p>"}},{demo:{id:"tabs-demo-custom-add-trigger"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u65B0\u589E\u9875\u7B7E\u89E6\u53D1\u5668",filename:"components/tabs/demo/custom-add-trigger.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useRef, useState } from 'react';
import { Button, Tabs } from 'antd';
const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return {
    label: \`Tab \${id}\`,
    children: \`Content of Tab Pane \${index + 1}\`,
    key: id,
  };
});
const App = () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);
  const onChange = (key) => {
    setActiveKey(key);
  };
  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`;
    setItems([
      ...items,
      {
        label: 'New Tab',
        children: 'New Tab Pane',
        key: newActiveKey,
      },
    ]);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={add}>ADD</Button>
      </div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u9690\u85CF\u9ED8\u8BA4\u7684\u9875\u7B7E\u589E\u52A0\u56FE\u6807\uFF0C\u7ED9\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668\u7ED1\u5B9A\u4E8B\u4EF6\u3002</p>"}},{demo:{id:"tabs-demo-custom-tab-bar"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u9875\u7B7E\u5934",filename:"components/tabs/demo/custom-tab-bar.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tabs, theme } from 'antd';
import StickyBox from 'react-sticky-box';
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab \${id}\`,
    key: id,
    children: \`Content of Tab Pane \${id}\`,
    style:
      i === 0
        ? {
            height: 200,
          }
        : undefined,
  };
});
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
      }}
    >
      <DefaultTabBar
        {...props}
        style={{
          background: colorBgContainer,
        }}
      />
    </StickyBox>
  );
  return <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />;
};
export default App;
`,description:'<p>\u4F7F\u7528 <a href="https://www.npmjs.com/package/react-stickynode">react-sticky-box</a> \u548C <code>renderTabBar</code> \u5B9E\u73B0\u5438\u9876\u6548\u679C\u3002</p>'}},{demo:{id:"tabs-demo-custom-tab-bar-node"},previewerProps:{title:"\u53EF\u62D6\u62FD\u6807\u7B7E",filename:"components/tabs/demo/custom-tab-bar-node.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';
import { Tabs } from 'antd';
const DraggableTabNode = ({ className, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props['data-node-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleX: 1,
      },
    ),
    transition,
    cursor: 'move',
  };
  return React.cloneElement(props.children, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};
const App = () => {
  const [items, setItems] = useState([
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ]);
  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  return (
    <Tabs
      items={items}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
          <SortableContext items={items.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
            <DefaultTabBar {...tabBarProps}>
              {(node) => (
                <DraggableTabNode {...node.props} key={node.key}>
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  );
};
export default App;
`,description:'<p>\u4F7F\u7528 <a href="https://github.com/clauderic/dnd-kit">dnd-kit</a> \u5B9E\u73B0\u6807\u7B7E\u53EF\u62D6\u62FD\u3002</p>',style:`/* set transition to none when type="editable-card" */
.ant-tabs-editable > .ant-tabs-nav .ant-tabs-tab {
  transition: none;
}`}},{demo:{id:"tabs-demo-animated"},previewerProps:{debug:!0,title:"\u52A8\u753B",filename:"components/tabs/demo/animated.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tabs, Switch, Space } from 'antd';
const App = () => {
  const [inkBar, setInkBar] = React.useState(true);
  const [tabPane, setTabPane] = React.useState(true);
  return (
    <>
      <Space>
        <Switch
          checkedChildren="inkBar"
          unCheckedChildren="inkBar"
          checked={inkBar}
          onChange={() => setInkBar(!inkBar)}
        />
        <Switch
          checkedChildren="tabPane"
          unCheckedChildren="tabPane"
          checked={tabPane}
          onChange={() => setTabPane(!tabPane)}
        />
      </Space>

      <Tabs
        animated={{
          inkBar,
          tabPane,
        }}
        items={[
          {
            label: 'Bamboo',
            key: '1',
            children: 'Hello Bamboo!',
            style: {
              height: 200,
              boxShadow: '0 0 3px rgba(255, 0, 0, 0.5)',
            },
          },
          {
            label: 'Little',
            key: '2',
            children: 'Hi Little!',
            style: {
              height: 300,
              boxShadow: '0 0 3px rgba(0, 255, 0, 0.5)',
            },
          },
          {
            label: 'Light',
            key: '3',
            children: 'Welcome Light!',
            style: {
              height: 100,
              boxShadow: '0 0 3px rgba(0, 0, 255, 0.5)',
            },
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u52A8\u753B\u5207\u6362\u3002</p>"}},{demo:{id:"tabs-demo-nest"},previewerProps:{debug:!0,title:"\u5D4C\u5957",filename:"components/tabs/demo/nest.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Select, Tabs } from 'antd';
const { Option } = Select;
const positionList = ['left', 'right', 'top', 'bottom'];
const App = () => {
  const [parentPos, setParentPos] = useState(undefined);
  const [childPos, setChildPos] = useState(undefined);
  const [parentType, setParentType] = useState(undefined);
  const [childType, setChildType] = useState(undefined);
  return (
    <div>
      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setParentPos(val);
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Parent - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setChildPos(val);
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Child - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setParentType(val);
        }}
      >
        <Option value="line">Parent - line</Option>
        <Option value="card">Parent - card</Option>
        <Option value="editable-card">Parent - card edit</Option>
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setChildType(val);
        }}
      >
        <Option value="line">Child - line</Option>
        <Option value="card">Child - card</Option>
        <Option value="editable-card">Parent - card edit</Option>
      </Select>

      <Tabs
        defaultActiveKey="1"
        tabPosition={parentPos}
        type={parentType}
        items={[
          {
            label: 'Tab 1',
            key: '1',
            children: (
              <Tabs
                defaultActiveKey="1"
                tabPosition={childPos}
                type={childType}
                style={{
                  height: 300,
                }}
                items={new Array(20).fill(null).map((_, index) => {
                  const key = String(index);
                  return {
                    label: \`Tab \${key}\`,
                    key,
                    children: \`TTTT \${key}\`,
                  };
                })}
              />
            ),
          },
          {
            label: 'Tab 2',
            key: '2',
            children: 'Content of Tab Pane 2',
          },
        ]}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\u3002</p>"}},{demo:{id:"tabs-demo-component-token"},previewerProps:{debug:!0,title:"\u7EC4\u4EF6 Token",filename:"components/tabs/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, ConfigProvider, Tabs } from 'antd';
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          cardBg: '#f6ffed',
          cardHeight: 60,
          cardPadding: \`20px\`,
          cardPaddingSM: \`20px\`,
          cardPaddingLG: \`20px\`,
          titleFontSize: 20,
          titleFontSizeLG: 20,
          titleFontSizeSM: 20,
          inkBarColor: '#52C41A',
          horizontalMargin: \`0 0 12px 0\`,
          horizontalItemGutter: 12,
          // Fixed Value
          horizontalItemPadding: \`20px\`,
          horizontalItemPaddingSM: \`20px\`,
          horizontalItemPaddingLG: \`20px\`,
          verticalItemPadding: \`8px\`,
          verticalItemMargin: \`4px 0 0 0\`,
          itemColor: 'rgba(0,0,0,0.85)',
          itemSelectedColor: '#389e0d',
          itemHoverColor: '#d9f7be',
          itemActiveColor: '#b7eb8f',
          cardGutter: 12,
        },
      },
    }}
  >
    <div>
      <Tabs
        defaultActiveKey="1"
        tabBarExtraContent={<Button>Extra Action</Button>}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        tabBarExtraContent={<Button>Extra Action</Button>}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        size="small"
        defaultActiveKey="1"
        tabBarExtraContent={<Button>Extra Action</Button>}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        size="large"
        defaultActiveKey="1"
        tabBarExtraContent={<Button>Extra Action</Button>}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        centered
        type="card"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            disabled: i === 2,
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab Pane \${id}\`,
          };
        })}
      />
      <Tabs
        size="small"
        defaultActiveKey="1"
        centered
        type="card"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            disabled: i === 2,
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab Pane \${id}\`,
          };
        })}
      />
      <Tabs
        size="large"
        defaultActiveKey="1"
        centered
        type="card"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            disabled: i === 2,
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab Pane \${id}\`,
          };
        })}
      />
    </div>
  </ConfigProvider>
);
export default App;
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[7].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[8].value})]}),(0,e.jsxs)("h3",{id:"tabs",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tabs",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Tabs"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[9].value}),(0,e.jsx)("th",{children:n[10].value}),(0,e.jsx)("th",{children:n[11].value}),(0,e.jsx)("th",{children:n[12].value}),(0,e.jsx)("th",{children:n[13].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[14].value}),(0,e.jsx)("td",{children:n[15].value}),(0,e.jsx)("td",{children:n[16].value}),(0,e.jsx)("td",{children:n[17].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[18].value}),(0,e.jsx)("td",{children:n[19].value}),(0,e.jsx)("td",{children:n[20].value}),(0,e.jsx)("td",{children:n[21].value}),(0,e.jsx)("td",{children:n[22].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[23].value}),(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:n[28].value}),(0,e.jsx)("td",{children:n[29].value}),(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{children:n[33].value}),(0,e.jsx)("td",{children:n[34].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[35].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[36].value}),(0,e.jsxs)("td",{children:[n[37].value,(0,e.jsx)("code",{children:n[38].value}),n[39].value]}),(0,e.jsx)("td",{children:n[40].value}),(0,e.jsx)("td",{children:n[41].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[42].value}),(0,e.jsx)("td",{children:n[43].value}),(0,e.jsx)("td",{children:n[44].value}),(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{children:n[46].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[47].value}),(0,e.jsx)("td",{children:n[48].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#tabitemtype",sourceType:"Link",children:n[49].value})}),(0,e.jsx)("td",{children:n[50].value}),(0,e.jsx)("td",{children:n[51].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{children:n[53].value}),(0,e.jsx)("td",{children:n[54].value}),(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[57].value}),(0,e.jsxs)("td",{children:[n[58].value,(0,e.jsx)("code",{children:n[59].value})]}),(0,e.jsx)("td",{children:n[60].value}),(0,e.jsx)("td",{children:n[61].value}),(0,e.jsx)("td",{children:n[62].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[63].value}),(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{children:n[65].value}),(0,e.jsx)("td",{children:n[66].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[67].value}),(0,e.jsxs)("td",{children:[n[68].value,(0,e.jsx)("code",{children:n[69].value}),n[70].value,(0,e.jsx)("code",{children:n[71].value}),n[72].value,(0,e.jsx)("code",{children:n[73].value}),n[74].value]}),(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[76].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[77].value}),(0,e.jsx)("td",{children:n[78].value}),(0,e.jsx)("td",{children:n[79].value}),(0,e.jsx)("td",{children:n[80].value}),(0,e.jsx)("td",{children:n[81].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{children:n[83].value}),(0,e.jsx)("td",{children:n[84].value}),(0,e.jsx)("td",{children:n[85].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[86].value}),(0,e.jsx)("td",{children:n[87].value}),(0,e.jsx)("td",{children:n[88].value}),(0,e.jsx)("td",{children:n[89].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[90].value}),(0,e.jsxs)("td",{children:[n[91].value,(0,e.jsx)("code",{children:n[92].value}),n[93].value,(0,e.jsx)("code",{children:n[94].value}),n[95].value,(0,e.jsx)("code",{children:n[96].value}),n[97].value,(0,e.jsx)("code",{children:n[98].value})]}),(0,e.jsx)("td",{children:n[99].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[100].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[101].value}),(0,e.jsx)("td",{children:n[102].value}),(0,e.jsx)("td",{children:n[103].value}),(0,e.jsx)("td",{children:n[104].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[105].value}),(0,e.jsxs)("td",{children:[n[106].value,(0,e.jsx)("code",{children:n[107].value}),n[108].value,(0,e.jsx)("code",{children:n[109].value}),n[110].value,(0,e.jsx)("code",{children:n[111].value}),n[112].value]}),(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[114].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[115].value}),(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[119].value}),(0,e.jsxs)("td",{children:[n[120].value,(0,e.jsx)("code",{children:n[121].value}),n[122].value]}),(0,e.jsx)("td",{children:n[123].value}),(0,e.jsx)("td",{children:n[124].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[125].value}),(0,e.jsx)("td",{children:n[126].value}),(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[129].value}),(0,e.jsx)("td",{children:n[130].value}),(0,e.jsxs)("td",{children:[n[131].value,(0,e.jsx)("code",{children:n[132].value}),n[133].value,(0,e.jsx)("code",{children:n[134].value}),n[135].value,(0,e.jsx)("code",{children:n[136].value}),n[137].value,(0,e.jsx)("code",{children:n[138].value}),n[139].value]}),(0,e.jsx)("td",{children:n[140].value}),(0,e.jsx)("td",{children:n[141].value})]})]})]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[142].value,(0,e.jsx)(r.Z,{href:"https://github.com/react-component/tabs#tabs",sourceType:"a",children:n[143].value})]})}),(0,e.jsxs)("h3",{id:"tabitemtype",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tabitemtype",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"TabItemType"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[144].value}),(0,e.jsx)("th",{children:n[145].value}),(0,e.jsx)("th",{children:n[146].value}),(0,e.jsx)("th",{children:n[147].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[148].value}),(0,e.jsxs)("td",{children:[n[149].value,(0,e.jsx)("code",{children:n[150].value}),n[151].value,(0,e.jsx)("code",{children:n[152].value}),n[153].value,(0,e.jsx)("code",{children:n[154].value}),n[155].value]}),(0,e.jsx)("td",{children:n[156].value}),(0,e.jsx)("td",{children:n[157].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[158].value}),(0,e.jsx)("td",{children:n[159].value}),(0,e.jsx)("td",{children:n[160].value}),(0,e.jsx)("td",{children:n[161].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{children:n[163].value}),(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{children:n[165].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value}),(0,e.jsx)("td",{children:n[168].value}),(0,e.jsx)("td",{children:n[169].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[170].value}),(0,e.jsx)("td",{children:n[171].value}),(0,e.jsx)("td",{children:n[172].value}),(0,e.jsx)("td",{children:n[173].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[174].value}),(0,e.jsx)("td",{children:n[175].value}),(0,e.jsx)("td",{children:n[176].value}),(0,e.jsx)("td",{children:n[177].value})]})]})]}),(0,e.jsxs)("h2",{id:"\u4E3B\u9898\u53D8\u91CFdesign-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898\u53D8\u91CFdesign-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898\u53D8\u91CF\uFF08Design Token\uFF09"]})]}),(0,e.jsx)(a.Z,{component:"Tabs"})]})})}c.default=d}}]);
