"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1198],{760119:function(p,o,t){t.r(o);var m=t(502143),_=t(968521),u=t(720719),h=t(521587),x=t(759907),i=t(828089),f=t(825673),g=t(902068),v=t(574399),j=t(863942),P=t(316073),b=t(24628),k=t(719260),E=t(956140),s=t(127179),d=t(905388),O=t(245583),C=t(606965),T=t(268696),D=t(587302),r=t(424128),B=t(249706),w=t(795127),y=t(116846),A=t(720538),M=t(212039),L=t(73024),I=t(553913),c=t(830084),R=t(667294),n=t(785893);function l(){var a=(0,c.eL)(),e=a.texts;return(0,n.jsx)(c.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsx)("p",{children:e[0].value}),(0,n.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,n.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,n.jsx)("p",{children:e[1].value}),(0,n.jsxs)("p",{children:[e[2].value,(0,n.jsx)("code",{children:e[3].value}),e[4].value]}),(0,n.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,n.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,n.jsx)(d.Z,{items:[{demo:{id:"popconfirm-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/popconfirm/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, message, Popconfirm } from 'antd';
const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);
export default App;
`,description:`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u652F\u6301\u786E\u8BA4\u6807\u9898\u548C\u63CF\u8FF0\u3002</p>
<blockquote>
<p><code>description</code> \u5728 <code>5.1.0</code> \u7248\u672C\u4E2D\u652F\u6301\u3002</p>
</blockquote>`}},{demo:{id:"popconfirm-demo-locale"},previewerProps:{title:"\u56FD\u9645\u5316",filename:"components/popconfirm/demo/locale.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Popconfirm } from 'antd';
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>okText</code> \u548C <code>cancelText</code> \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u3002</p>"}},{demo:{id:"popconfirm-demo-placement"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/popconfirm/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, message, Popconfirm } from 'antd';
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const confirm = () => {
  message.info('Clicked on Yes.');
};
const App = () => (
  <>
    <div
      style={{
        marginLeft: 70,
        whiteSpace: 'nowrap',
      }}
    >
      <Popconfirm
        placement="topLeft"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="top"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm
        placement="topRight"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        width: 70,
        float: 'left',
      }}
    >
      <Popconfirm
        placement="leftTop"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm
        placement="left"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm
        placement="leftBottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        width: 70,
        marginLeft: 304,
      }}
    >
      <Popconfirm
        placement="rightTop"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm
        placement="right"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm
        placement="rightBottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        marginLeft: 70,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Popconfirm
        placement="bottomLeft"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomRight"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BR</Button>
      </Popconfirm>
    </div>
  </>
);
export default App;
`,description:"<p>\u4F4D\u7F6E\u6709\u5341\u4E8C\u4E2A\u65B9\u5411\u3002\u5982\u9700\u7BAD\u5934\u6307\u5411\u76EE\u6807\u5143\u7D20\u4E2D\u5FC3\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>arrow: { pointAtCenter: true }</code>\u3002</p>",style:`#components-popconfirm-demo-placement .ant-btn {
  margin-left: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
#components-popconfirm-demo-placement .ant-btn-rtl {
  margin-left: 8px;
  margin-right: 0;
}`}},{demo:{id:"popconfirm-demo-dynamic-trigger"},previewerProps:{title:"\u6761\u4EF6\u89E6\u53D1",filename:"components/popconfirm/demo/dynamic-trigger.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, message, Popconfirm, Switch } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);
  const changeCondition = (checked) => {
    setCondition(checked);
  };
  const confirm = () => {
    setOpen(false);
    message.success('Next step.');
  };
  const cancel = () => {
    setOpen(false);
    message.error('Click on cancel.');
  };
  const handleOpenChange = (newOpen) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };
  return (
    <div>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        open={open}
        onOpenChange={handleOpenChange}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete a task</Button>
      </Popconfirm>
      <br />
      <br />
      Whether directly execute\uFF1A
      <Switch defaultChecked onChange={changeCondition} />
    </div>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u5224\u65AD\u662F\u5426\u9700\u8981\u5F39\u51FA\u3002</p>"}},{demo:{id:"popconfirm-demo-icon"},previewerProps:{title:"\u81EA\u5B9A\u4E49 Icon \u56FE\u6807",filename:"components/popconfirm/demo/icon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Popconfirm } from 'antd';
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    icon={
      <QuestionCircleOutlined
        style={{
          color: 'red',
        }}
      />
    }
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u63D0\u793A <code>icon</code>\u3002</p>"}},{demo:{id:"popconfirm-demo-async"},previewerProps:{title:"\u5F02\u6B65\u5173\u95ED",filename:"components/popconfirm/demo/async.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Popconfirm } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with async logic"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{
        loading: confirmLoading,
      }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </Button>
    </Popconfirm>
  );
};
export default App;
`,description:"<p>\u70B9\u51FB\u786E\u5B9A\u540E\u5F02\u6B65\u5173\u95ED\u6C14\u6CE1\u786E\u8BA4\u6846\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\u3002</p>"}},{demo:{id:"popconfirm-demo-promise"},previewerProps:{title:"\u57FA\u4E8E Promise \u7684\u5F02\u6B65\u5173\u95ED",filename:"components/popconfirm/demo/promise.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Popconfirm } from 'antd';
const App = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });
  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with Promise"
      onConfirm={confirm}
      onOpenChange={() => console.log('open change')}
    >
      <Button type="primary">Open Popconfirm with Promise</Button>
    </Popconfirm>
  );
};
export default App;
`,description:"<p>\u70B9\u51FB\u786E\u5B9A\u540E\u5F02\u6B65\u5173\u95ED Popconfirm\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\u3002</p>"}},{demo:{id:"popconfirm-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/popconfirm/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Popconfirm } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const App = () => (
  <>
    <InternalPopconfirm title="Are you OK?" description="Does this look good?" />
    <InternalPopconfirm
      title="Are you OK?"
      description="Does this look good?"
      placement="bottomRight"
      style={{
        width: 250,
      }}
    />
    <InternalPopconfirm icon={null} title="Are you OK?" />
    <InternalPopconfirm icon={null} title="Are you OK?" description="Does this look good?" />
  </>
);
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}},{demo:{id:"popconfirm-demo-wireframe"},previewerProps:{debug:!0,title:"\u7EBF\u6846\u98CE\u683C",filename:"components/popconfirm/demo/wireframe.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ConfigProvider, Popconfirm } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <InternalPopconfirm title="Are you OK?" />
    <InternalPopconfirm
      title="Are you OK?"
      placement="bottomRight"
      style={{
        width: 250,
      }}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>\u7EBF\u6846\u98CE\u683C\u3002</p>"}}]}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"api",children:[(0,n.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsxs)("p",{children:[e[5].value,(0,n.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:e[6].value})]}),(0,n.jsxs)(i.Z,{className:"component-api-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:e[7].value}),(0,n.jsx)("th",{children:e[8].value}),(0,n.jsx)("th",{children:e[9].value}),(0,n.jsx)("th",{children:e[10].value}),(0,n.jsx)("th",{children:e[11].value})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[12].value}),(0,n.jsx)("td",{children:e[13].value}),(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{to:"/components/button-cn#api",sourceType:"Link",children:e[14].value})}),(0,n.jsx)("td",{children:e[15].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[16].value}),(0,n.jsx)("td",{children:e[17].value}),(0,n.jsx)("td",{children:e[18].value}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e[19].value})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[20].value}),(0,n.jsx)("td",{children:e[21].value}),(0,n.jsx)("td",{children:e[22].value}),(0,n.jsx)("td",{children:e[23].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[24].value}),(0,n.jsx)("td",{children:e[25].value}),(0,n.jsx)("td",{children:e[26].value}),(0,n.jsx)("td",{children:e[27].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[28].value}),(0,n.jsx)("td",{children:e[29].value}),(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{to:"/components/button-cn#api",sourceType:"Link",children:e[30].value})}),(0,n.jsx)("td",{children:e[31].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[32].value}),(0,n.jsx)("td",{children:e[33].value}),(0,n.jsx)("td",{children:e[34].value}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e[35].value})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[36].value}),(0,n.jsx)("td",{children:e[37].value}),(0,n.jsx)("td",{children:e[38].value}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e[39].value})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[40].value}),(0,n.jsx)("td",{children:e[41].value}),(0,n.jsx)("td",{children:e[42].value}),(0,n.jsx)("td",{children:e[43].value}),(0,n.jsx)("td",{children:e[44].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[45].value}),(0,n.jsx)("td",{children:e[46].value}),(0,n.jsx)("td",{children:e[47].value}),(0,n.jsx)("td",{children:e[48].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[49].value}),(0,n.jsx)("td",{children:e[50].value}),(0,n.jsx)("td",{children:e[51].value}),(0,n.jsx)("td",{children:e[52].value}),(0,n.jsx)("td",{children:e[53].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[54].value}),(0,n.jsx)("td",{children:e[55].value}),(0,n.jsx)("td",{children:e[56].value}),(0,n.jsx)("td",{children:e[57].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[58].value}),(0,n.jsx)("td",{children:e[59].value}),(0,n.jsx)("td",{children:e[60].value}),(0,n.jsx)("td",{children:e[61].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[62].value}),(0,n.jsx)("td",{children:e[63].value}),(0,n.jsx)("td",{children:e[64].value}),(0,n.jsx)("td",{children:e[65].value}),(0,n.jsx)("td",{children:e[66].value})]})]})]}),(0,n.jsxs)("p",{children:[e[67].value,(0,n.jsx)(r.Z,{to:"/components/tooltip-cn/#api",sourceType:"Link",children:e[68].value}),e[69].value]}),(0,n.jsxs)("h2",{id:"\u4E3B\u9898\u53D8\u91CFdesign-token",children:[(0,n.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898\u53D8\u91CFdesign-token",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898\u53D8\u91CF\uFF08Design Token\uFF09"]})]}),(0,n.jsx)(s.Z,{component:"Popconfirm"}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u6CE8\u610F",children:[(0,n.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u6CE8\u610F",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6CE8\u610F"]}),(0,n.jsxs)("p",{children:[e[70].value,(0,n.jsx)("code",{children:e[71].value}),e[72].value,(0,n.jsx)("code",{children:e[73].value}),e[74].value,(0,n.jsx)("code",{children:e[75].value}),e[76].value,(0,n.jsx)("code",{children:e[77].value}),e[78].value,(0,n.jsx)("code",{children:e[79].value}),e[80].value]})]})]})})}o.default=l}}]);
