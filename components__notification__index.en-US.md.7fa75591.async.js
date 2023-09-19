"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8466],{942181:function(h,c,t){t.r(c);var p=t(502143),x=t(968521),m=t(720719),_=t(521587),r=t(759907),o=t(828089),j=t(825673),v=t(902068),f=t(574399),g=t(863942),b=t(316073),y=t(24628),k=t(719260),B=t(956140),d=t(127179),a=t(905388),E=t(245583),D=t(606965),P=t(268696),O=t(587302),i=t(424128),T=t(249706),w=t(795127),C=t(116846),N=t(720538),R=t(212039),M=t(73024),I=t(553913),s=t(830084),A=t(667294),e=t(785893);function l(){var u=(0,s.eL)(),n=u.texts;return(0,e.jsx)(s.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:n[1].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[2].value}),(0,e.jsx)("li",{children:n[3].value}),(0,e.jsx)("li",{children:n[4].value})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(a.Z,{items:[{demo:{id:"notification-demo-hooks"},previewerProps:{title:"Hooks usage (recommended)",filename:"components/notification/demo/hooks.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import React, { useMemo } from 'react';
import { Button, Divider, Space, notification } from 'antd';
const Context = React.createContext({
  name: 'Default',
});
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: \`Notification \${placement}\`,
      description: <Context.Consumer>{({ name }) => \`Hello, \${name}!\`}</Context.Consumer>,
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  );
};
export default App;
`,description:"<p>Use <code>notification.useNotification</code> to get <code>contextHolder</code> with context accessible issue. Please note that, we recommend to use top level registration instead of <code>notification</code> static method, because static method cannot consume context, and ConfigProvider data will not work.</p>"}},{demo:{id:"notification-demo-duration"},previewerProps:{title:"Duration after which the notification box is closed",filename:"components/notification/demo/duration.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p><code>Duration</code> can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.</p>"}},{demo:{id:"notification-demo-with-icon"},previewerProps:{title:"Notification with icon",filename:"components/notification/demo/with-icon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, notification, Space } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>
    </>
  );
};
export default App;
`,description:"<p>A notification box with a icon at the left side.</p>"}},{demo:{id:"notification-demo-with-btn"},previewerProps:{title:"Custom close button",filename:"components/notification/demo/with-btn.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, notification, Space } from 'antd';
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const key = \`open\${Date.now()}\`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy All
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>To customize the style or font of the close button.</p>"}},{demo:{id:"notification-demo-custom-icon"},previewerProps:{title:"Customized Icon",filename:"components/notification/demo/custom-icon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>The icon can be customized to any react node.</p>"}},{demo:{id:"notification-demo-placement"},previewerProps:{title:"Placement",filename:"components/notification/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: \`Notification \${placement}\`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
          top
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottom')}
          icon={<BorderBottomOutlined />}
        >
          bottom
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </>
  );
};
export default App;
`,description:"<p>A notification box can appear from the <code>topRight</code>, <code>bottomRight</code>, <code>bottomLeft</code> or <code>topLeft</code> of the viewport via <code>placement</code>.</p>"}},{demo:{id:"notification-demo-custom-style"},previewerProps:{title:"Customized style",filename:"components/notification/demo/custom-style.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>The style and className are available to customize Notification.</p>"}},{demo:{id:"notification-demo-update"},previewerProps:{title:"Update Message Content",filename:"components/notification/demo/update.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, notification } from 'antd';
const key = 'updatable';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      key,
      message: 'Notification Title',
      description: 'description.',
    });
    setTimeout(() => {
      api.open({
        key,
        message: 'New Title',
        description: 'New description.',
      });
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>Update content with unique key.</p>"}},{demo:{id:"notification-demo-basic"},previewerProps:{title:"Static Method (deprecated)",filename:"components/notification/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, notification } from 'antd';
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const App = () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
export default App;
`,description:"<p>Static methods cannot consume Context. Please use hooks first.</p>"}},{demo:{id:"notification-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/notification/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, notification } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = notification;
export default () => (
  <InternalPanel
    message="Hello World!"
    description="Hello World?"
    type="success"
    btn={
      <Button type="primary" size="small">
        My Button
      </Button>
    }
  />
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[5].value,(0,e.jsx)(i.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[6].value})]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[7].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[8].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[9].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[10].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[11].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[12].value})})]}),(0,e.jsx)("p",{children:n[13].value}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[14].value}),(0,e.jsx)("th",{children:n[15].value}),(0,e.jsx)("th",{children:n[16].value}),(0,e.jsx)("th",{children:n[17].value}),(0,e.jsx)("th",{children:n[18].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[19].value}),(0,e.jsx)("td",{children:n[20].value}),(0,e.jsx)("td",{children:n[21].value}),(0,e.jsx)("td",{children:n[22].value}),(0,e.jsx)("td",{children:n[23].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:n[28].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[29].value}),(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{children:n[33].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[34].value}),(0,e.jsx)("td",{children:n[35].value}),(0,e.jsx)("td",{children:n[36].value}),(0,e.jsx)("td",{children:n[37].value}),(0,e.jsx)("td",{children:n[38].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[39].value}),(0,e.jsx)("td",{children:n[40].value}),(0,e.jsx)("td",{children:n[41].value}),(0,e.jsx)("td",{children:n[42].value}),(0,e.jsx)("td",{children:n[43].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[44].value}),(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{children:n[47].value}),(0,e.jsx)("td",{children:n[48].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[49].value}),(0,e.jsx)("td",{children:n[50].value}),(0,e.jsx)("td",{children:n[51].value}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{children:n[53].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[54].value}),(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{children:n[57].value}),(0,e.jsx)("td",{children:n[58].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[59].value}),(0,e.jsxs)("td",{children:[n[60].value,(0,e.jsx)("code",{children:n[61].value}),n[62].value,(0,e.jsx)("code",{children:n[63].value}),n[64].value,(0,e.jsx)("code",{children:n[65].value}),n[66].value,(0,e.jsx)("code",{children:n[67].value})]}),(0,e.jsx)("td",{children:n[68].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[69].value})}),(0,e.jsx)("td",{children:n[70].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[71].value}),(0,e.jsx)("td",{children:n[72].value}),(0,e.jsx)("td",{children:(0,e.jsx)(i.Z,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794",sourceType:"a",children:n[73].value})}),(0,e.jsx)("td",{children:n[74].value}),(0,e.jsx)("td",{children:n[75].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[76].value}),(0,e.jsxs)("td",{children:[n[77].value,(0,e.jsx)("code",{children:n[78].value}),n[79].value]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[80].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[81].value})}),(0,e.jsx)("td",{children:n[82].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[83].value}),(0,e.jsx)("td",{children:n[84].value}),(0,e.jsx)("td",{children:n[85].value}),(0,e.jsx)("td",{children:n[86].value}),(0,e.jsx)("td",{children:n[87].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[88].value}),(0,e.jsx)("td",{children:n[89].value}),(0,e.jsx)("td",{children:n[90].value}),(0,e.jsx)("td",{children:n[91].value}),(0,e.jsx)("td",{children:n[92].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[93].value}),(0,e.jsxs)("td",{children:[n[94].value,(0,e.jsx)("code",{children:n[95].value}),n[96].value,(0,e.jsx)("code",{children:n[97].value}),n[98].value,(0,e.jsx)("code",{children:n[99].value}),n[100].value,(0,e.jsx)("code",{children:n[101].value}),n[102].value,(0,e.jsx)("code",{children:n[103].value}),n[104].value,(0,e.jsx)("code",{children:n[105].value}),n[106].value,(0,e.jsx)(i.Z,{href:"https://github.com/microsoft/TypeScript/issues/28960",sourceType:"a",children:n[107].value}),n[108].value]}),(0,e.jsx)("td",{children:n[109].value}),(0,e.jsx)("td",{children:n[110].value}),(0,e.jsx)("td",{children:n[111].value})]})]})]}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[112].value})})}),(0,e.jsx)("p",{children:n[113].value}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[114].value}),(0,e.jsx)("th",{children:n[115].value}),(0,e.jsx)("th",{children:n[116].value}),(0,e.jsx)("th",{children:n[117].value}),(0,e.jsx)("th",{children:n[118].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[119].value}),(0,e.jsxs)("td",{children:[n[120].value,(0,e.jsx)("code",{children:n[121].value}),n[122].value,(0,e.jsx)("code",{children:n[123].value}),n[124].value,(0,e.jsx)("code",{children:n[125].value}),n[126].value]}),(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[129].value}),(0,e.jsx)("td",{children:n[130].value}),(0,e.jsx)("td",{children:n[131].value}),(0,e.jsx)("td",{children:n[132].value}),(0,e.jsx)("td",{children:n[133].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[134].value}),(0,e.jsx)("td",{children:n[135].value}),(0,e.jsx)("td",{children:n[136].value}),(0,e.jsx)("td",{children:n[137].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[138].value}),(0,e.jsxs)("td",{children:[n[139].value,(0,e.jsx)("code",{children:n[140].value}),n[141].value,(0,e.jsx)("code",{children:n[142].value}),n[143].value,(0,e.jsx)("code",{children:n[144].value}),n[145].value,(0,e.jsx)("code",{children:n[146].value})]}),(0,e.jsx)("td",{children:n[147].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[148].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[149].value}),(0,e.jsx)("td",{children:n[150].value}),(0,e.jsx)("td",{children:n[151].value}),(0,e.jsx)("td",{children:n[152].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[153].value}),(0,e.jsxs)("td",{children:[n[154].value,(0,e.jsx)("code",{children:n[155].value}),n[156].value,(0,e.jsx)("code",{children:n[157].value}),n[158].value,(0,e.jsx)("code",{children:n[159].value}),n[160].value]}),(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[163].value}),(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{children:n[165].value}),(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value})]})]})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[168].value}),n[169].value,(0,e.jsx)("code",{children:n[170].value}),n[171].value]}),(0,e.jsxs)("h3",{id:"global-configuration",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#global-configuration",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Global configuration"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n[172].value})}),(0,e.jsxs)("blockquote",{children:[(0,e.jsxs)("p",{children:[n[173].value,(0,e.jsx)("code",{children:n[174].value}),n[175].value]}),(0,e.jsx)("p",{children:n[176].value})]}),(0,e.jsxs)("h4",{id:"notificationconfig",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#notificationconfig",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"notification.config"]}),(0,e.jsx)(r.Z,{lang:"js",children:n[177].value}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[178].value}),(0,e.jsx)("th",{children:n[179].value}),(0,e.jsx)("th",{children:n[180].value}),(0,e.jsx)("th",{children:n[181].value}),(0,e.jsx)("th",{children:n[182].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[183].value}),(0,e.jsxs)("td",{children:[n[184].value,(0,e.jsx)("code",{children:n[185].value}),n[186].value,(0,e.jsx)("code",{children:n[187].value}),n[188].value,(0,e.jsx)("code",{children:n[189].value}),n[190].value]}),(0,e.jsx)("td",{children:n[191].value}),(0,e.jsx)("td",{children:n[192].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[193].value}),(0,e.jsx)("td",{children:n[194].value}),(0,e.jsx)("td",{children:n[195].value}),(0,e.jsx)("td",{children:n[196].value}),(0,e.jsx)("td",{children:n[197].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[198].value}),(0,e.jsx)("td",{children:n[199].value}),(0,e.jsx)("td",{children:n[200].value}),(0,e.jsx)("td",{children:n[201].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[202].value}),(0,e.jsx)("td",{children:n[203].value}),(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{children:n[205].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[206].value}),(0,e.jsxs)("td",{children:[n[207].value,(0,e.jsx)("code",{children:n[208].value}),n[209].value,(0,e.jsx)("code",{children:n[210].value}),n[211].value,(0,e.jsx)("code",{children:n[212].value}),n[213].value,(0,e.jsx)("code",{children:n[214].value})]}),(0,e.jsx)("td",{children:n[215].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[216].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[217].value}),(0,e.jsx)("td",{children:n[218].value}),(0,e.jsx)("td",{children:n[219].value}),(0,e.jsx)("td",{children:n[220].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[221].value}),(0,e.jsxs)("td",{children:[n[222].value,(0,e.jsx)("code",{children:n[223].value}),n[224].value,(0,e.jsx)("code",{children:n[225].value}),n[226].value,(0,e.jsx)("code",{children:n[227].value}),n[228].value]}),(0,e.jsx)("td",{children:n[229].value}),(0,e.jsx)("td",{children:n[230].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[231].value}),(0,e.jsx)("td",{children:n[232].value}),(0,e.jsx)("td",{children:n[233].value}),(0,e.jsx)("td",{children:n[234].value}),(0,e.jsx)("td",{children:n[235].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(d.Z,{component:"Notification"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"why-i-can-not-access-context-redux-configprovider-localeprefixclstheme-in-notification",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-i-can-not-access-context-redux-configprovider-localeprefixclstheme-in-notification",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why I can not access context, redux, ConfigProvider ",(0,e.jsx)("code",{children:n[236].value})," in notification?"]}),(0,e.jsxs)("p",{children:[n[237].value,(0,e.jsx)("code",{children:n[238].value}),n[239].value]}),(0,e.jsxs)("p",{children:[n[240].value,(0,e.jsx)("code",{children:n[241].value}),n[242].value,(0,e.jsx)("code",{children:n[243].value}),n[244].value,(0,e.jsx)("code",{children:n[245].value}),n[246].value]}),(0,e.jsx)(r.Z,{lang:"tsx",children:n[247].value}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:n[248].value}),n[249].value,(0,e.jsx)("code",{children:n[250].value}),n[251].value]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[(0,e.jsx)(i.Z,{to:"/components/app",sourceType:"Link",children:n[252].value}),n[253].value,(0,e.jsx)("code",{children:n[254].value}),n[255].value]})}),(0,e.jsxs)("h3",{id:"how-to-set-static-methods-prefixcls-",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-set-static-methods-prefixcls-",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to set static methods prefixCls \uFF1F"]}),(0,e.jsxs)("p",{children:[n[256].value,(0,e.jsx)(i.Z,{to:"/components/config-provider#configproviderconfig-4130",sourceType:"Link",children:(0,e.jsx)("code",{children:n[257].value})})]})]})]})})}c.default=l}}]);
