"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8288],{413111:function(l,t,i){i.r(t);var m=i(502143),h=i(968521),x=i(720719),p=i(521587),_=i(759907),r=i(828089),g=i(825673),E=i(902068),j=i(574399),v=i(863942),D=i(316073),P=i(24628),M=i(719260),f=i(956140),a=i(127179),d=i(905388),C=i(245583),O=i(606965),A=i(268696),T=i(587302),s=i(424128),I=i(249706),B=i(795127),k=i(116846),L=i(720538),b=i(212039),y=i(73024),F=i(553913),o=i(830084),R=i(667294),n=i(785893);function c(){var u=(0,o.eL)(),e=u.texts;return(0,n.jsx)(o.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsx)("p",{children:e[0].value}),(0,n.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[e[1].value,(0,n.jsx)("code",{children:e[2].value}),e[3].value,(0,n.jsx)("code",{children:e[4].value}),e[5].value,(0,n.jsx)("code",{children:e[6].value}),e[7].value,(0,n.jsx)("code",{children:e[8].value}),e[9].value]}),(0,n.jsxs)("li",{children:[e[10].value,(0,n.jsx)("code",{children:e[11].value}),e[12].value]})]}),(0,n.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,n.jsx)(d.Z,{items:[{demo:{id:"app-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/app/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u83B7\u53D6 <code>message</code>\u3001<code>notification</code>\u3001<code>modal</code> \u5B9E\u4F8B\u3002</p>"}},{demo:{id:"app-demo-config"},previewerProps:{title:"Hooks \u914D\u7F6E",filename:"components/app/demo/config.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u5BF9 <code>message</code>\u3001<code>notification</code> \u8FDB\u884C\u914D\u7F6E\u3002</p>"}}]}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u5982\u4F55\u4F7F\u7528",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u4F7F\u7528"]}),(0,n.jsxs)("h3",{id:"\u57FA\u7840\u7528\u6CD5",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u7528\u6CD5"]}),(0,n.jsxs)("p",{children:[e[13].value,(0,n.jsx)("code",{children:e[14].value}),e[15].value]}),(0,n.jsx)(_.Z,{lang:"tsx",children:e[16].value}),(0,n.jsx)("p",{children:e[17].value}),(0,n.jsxs)("h3",{id:"\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4E0E ConfigProvider \u5148\u540E\u987A\u5E8F"]}),(0,n.jsxs)("p",{children:[e[18].value,(0,n.jsx)("code",{children:e[19].value}),e[20].value]}),(0,n.jsx)(_.Z,{lang:"tsx",children:e[21].value}),(0,n.jsxs)("h3",{id:"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\uFF08\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957\uFF09"]}),(0,n.jsx)(_.Z,{lang:"tsx",children:e[22].value}),(0,n.jsxs)("h3",{id:"\u5168\u5C40\u573A\u666Fredux-\u573A\u666F",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u573A\u666Fredux-\u573A\u666F",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5168\u5C40\u573A\u666F\uFF08redux \u573A\u666F\uFF09"]}),(0,n.jsx)(_.Z,{lang:"tsx",children:e[23].value}),(0,n.jsx)(_.Z,{lang:"tsx",children:e[24].value}),(0,n.jsxs)("h2",{id:"api",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsxs)("p",{children:[e[25].value,(0,n.jsx)(s.Z,{to:"/docs/react/common-props",sourceType:"Link",children:e[26].value})]}),(0,n.jsxs)("h3",{id:"app",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"App"]}),(0,n.jsxs)(r.Z,{className:"component-api-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:e[27].value}),(0,n.jsx)("th",{children:e[28].value}),(0,n.jsx)("th",{children:e[29].value}),(0,n.jsx)("th",{children:e[30].value}),(0,n.jsx)("th",{children:e[31].value})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[32].value}),(0,n.jsx)("td",{children:e[33].value}),(0,n.jsx)("td",{children:(0,n.jsx)(s.Z,{to:"/components/message-cn/#messageconfig",sourceType:"Link",children:e[34].value})}),(0,n.jsx)("td",{children:e[35].value}),(0,n.jsx)("td",{children:e[36].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[37].value}),(0,n.jsx)("td",{children:e[38].value}),(0,n.jsx)("td",{children:(0,n.jsx)(s.Z,{to:"/components/notification-cn/#notificationconfig",sourceType:"Link",children:e[39].value})}),(0,n.jsx)("td",{children:e[40].value}),(0,n.jsx)("td",{children:e[41].value})]})]})]}),(0,n.jsxs)("h2",{id:"\u4E3B\u9898\u53D8\u91CFdesign-token",children:[(0,n.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898\u53D8\u91CFdesign-token",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898\u53D8\u91CF\uFF08Design Token\uFF09"]})]}),(0,n.jsx)(a.Z,{component:"App"})]})})}t.default=c}}]);
