"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{266047:function(u,_,s){s.r(_);var m=s(502143),h=s(968521),x=s(720719),p=s(521587),t=s(759907),r=s(828089),g=s(825673),E=s(902068),j=s(574399),v=s(863942),P=s(316073),f=s(24628),M=s(719260),D=s(956140),a=s(127179),d=s(905388),O=s(245583),T=s(606965),C=s(268696),A=s(587302),i=s(424128),b=s(249706),I=s(795127),y=s(116846),B=s(720538),k=s(212039),L=s(73024),R=s(553913),o=s(830084),w=s(667294),e=s(785893);function c(){var l=(0,o.eL)(),n=l.texts;return(0,e.jsx)(o.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[1].value,(0,e.jsx)("code",{children:n[2].value}),n[3].value]}),(0,e.jsxs)("li",{children:[n[4].value,(0,e.jsx)("code",{children:n[5].value}),n[6].value,(0,e.jsx)("code",{children:n[7].value}),n[8].value,(0,e.jsx)("code",{children:n[9].value}),n[10].value]})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(d.Z,{items:[{demo:{id:"app-demo-basic"},previewerProps:{title:"Basic",filename:"components/app/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>Get instance for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}},{demo:{id:"app-demo-config"},previewerProps:{title:"Hooks config",filename:"components/app/demo/config.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification\`,
      description: 'Hello, Ant Design!!',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Message for only one
      </Button>
      <Button type="primary" onClick={showNotification}>
        Notification for bottomLeft
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App
    message={{
      maxCount: 1,
    }}
    notification={{
      placement: 'bottomLeft',
    }}
  >
    <MyPage />
  </App>
);
`,description:"<p>Config for <code>message</code>, <code>notification</code>.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"how-to-use",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to use"]}),(0,e.jsxs)("h3",{id:"basic-usage",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Basic usage"]}),(0,e.jsxs)("p",{children:[n[11].value,(0,e.jsx)("code",{children:n[12].value}),n[13].value]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n[14].value}),(0,e.jsx)("p",{children:n[15].value}),(0,e.jsxs)("h3",{id:"sequence-with-configprovider",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Sequence with ConfigProvider"]}),(0,e.jsxs)("p",{children:[n[16].value,(0,e.jsx)("code",{children:n[17].value}),n[18].value]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n[19].value}),(0,e.jsxs)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Embedded usage scenarios (if not necessary, try not to do nesting)"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n[20].value}),(0,e.jsxs)("h3",{id:"global-scene-redux-scene",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Global scene (redux scene)"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n[21].value}),(0,e.jsx)(t.Z,{lang:"tsx",children:n[22].value}),(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[23].value,(0,e.jsx)(i.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[24].value})]}),(0,e.jsxs)("h3",{id:"app",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"App"]}),(0,e.jsxs)(r.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[25].value}),(0,e.jsx)("th",{children:n[26].value}),(0,e.jsx)("th",{children:n[27].value}),(0,e.jsx)("th",{children:n[28].value}),(0,e.jsx)("th",{children:n[29].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{children:(0,e.jsx)(i.Z,{to:"/components/message/#messageconfig",sourceType:"Link",children:n[32].value})}),(0,e.jsx)("td",{children:n[33].value}),(0,e.jsx)("td",{children:n[34].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[35].value}),(0,e.jsx)("td",{children:n[36].value}),(0,e.jsx)("td",{children:(0,e.jsx)(i.Z,{to:"/components/notification/#notificationconfig",sourceType:"Link",children:n[37].value})}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{children:n[39].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(a.Z,{component:"App"})]})})}_.default=c}}]);
