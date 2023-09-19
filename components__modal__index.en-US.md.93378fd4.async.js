"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8808],{70206:function(m,s,t){t.r(s);var p=t(502143),h=t(968521),x=t(720719),j=t(521587),o=t(759907),c=t(828089),g=t(825673),v=t(902068),f=t(574399),_=t(863942),b=t(316073),y=t(24628),k=t(719260),C=t(956140),a=t(127179),d=t(905388),w=t(245583),T=t(606965),M=t(268696),O=t(587302),r=t(424128),P=t(249706),B=t(795127),D=t(116846),S=t(720538),I=t(212039),E=t(73024),A=t(553913),l=t(830084),L=t(667294),e=t(785893);function i(){var u=(0,l.eL)(),n=u.texts;return(0,e.jsx)(l.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("p",{children:[n[1].value,(0,e.jsx)("code",{children:n[2].value}),n[3].value]}),(0,e.jsxs)("p",{children:[n[4].value,(0,e.jsx)(r.Z,{to:"/components/app/",sourceType:"Link",children:(0,e.jsx)("code",{children:n[5].value})}),n[6].value]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(d.Z,{items:[{demo:{id:"modal-demo-basic"},previewerProps:{title:"Basic",filename:"components/modal/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>Basic modal.</p>"}},{demo:{id:"modal-demo-async"},previewerProps:{title:"Asynchronously close",filename:"components/modal/demo/async.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
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
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>Asynchronously close a modal dialog when the OK button is pressed. For example, you can use this pattern when you submit a form.</p>"}},{demo:{id:"modal-demo-footer"},previewerProps:{title:"Customized Footer",filename:"components/modal/demo/footer.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default App;
`,description:`<p>A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed.</p>
<p>You could set <code>footer</code> to <code>null</code> if you don't need default footer buttons.</p>`}},{demo:{id:"modal-demo-footer-render"},previewerProps:{title:"Customized Footer render function",filename:"components/modal/demo/footer-render.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Modal.confirm({
              title: 'Confirm',
              content: 'Bla bla ...',
              footer: (_, { OkBtn, CancelBtn }) => (
                <>
                  <Button>Custom Button</Button>
                  <CancelBtn />
                  <OkBtn />
                </>
              ),
            });
          }}
        >
          Open Modal Confirm
        </Button>
      </Space>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button>Custom Button</Button>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>Customize the footer rendering function to support extensions on top of the original.</p>"}},{demo:{id:"modal-demo-hooks"},previewerProps:{title:"Use hooks to get context",filename:"components/modal/demo/hooks.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { createContext } from 'react';
import { Button, Modal, Space } from 'antd';
const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);
const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => \`Reachable: \${name}!\`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => \`Unreachable: \${name}!\`}</UnreachableContext.Consumer>
    </>
  ),
};
const App = () => {
  const [modal, contextHolder] = Modal.useModal();
  return (
    <ReachableContext.Provider value="Light">
      <Space>
        <Button
          onClick={async () => {
            const confirmed = await modal.confirm(config);
            console.log('Confirmed: ', confirmed);
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </Button>
        <Button
          onClick={async () => {
            modal.info(config);
          }}
        >
          Info
        </Button>
        <Button
          onClick={async () => {
            modal.error(config);
          }}
        >
          Error
        </Button>
      </Space>
      {/* \`contextHolder\` should always be placed under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since \`contextHolder\` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};
export default App;
`,description:"<p>Use <code>Modal.useModal</code> to get <code>contextHolder</code> with context accessible issue. Only hooks method support Promise <code>await</code> operation.</p>"}},{demo:{id:"modal-demo-locale"},previewerProps:{title:"Internationalization",filename:"components/modal/demo/locale.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
const LocalizedModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="\u786E\u8BA4"
        cancelText="\u53D6\u6D88"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  );
};
const App = () => {
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: '\u786E\u8BA4',
      cancelText: '\u53D6\u6D88',
    });
  };
  return (
    <>
      <Space>
        <LocalizedModal />
        <Button onClick={confirm}>Confirm</Button>
      </Space>
      {contextHolder}
    </>
  );
};
export default App;
`,description:"<p>To customize the text of the buttons, you need to set <code>okText</code> and <code>cancelText</code> props.</p>"}},{demo:{id:"modal-demo-manual"},previewerProps:{title:"Manual to update destroy",filename:"components/modal/demo/manual.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 5;
    const instance = modal.success({
      title: 'This is a notification message',
      content: \`This modal will be destroyed after \${secondsToGo} second.\`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: \`This modal will be destroyed after \${secondsToGo} second.\`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  return (
    <>
      <Button onClick={countDown}>Open modal to close in 5s</Button>
      {contextHolder}
    </>
  );
};
export default App;
`,description:"<p>Manually updating and destroying a modal through instance.</p>"}},{demo:{id:"modal-demo-position"},previewerProps:{title:"To customize the position of modal",filename:"components/modal/demo/position.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal1Open(true)}>
        Display a modal dialog at 20px to Top
      </Button>
      <Modal
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <br />
      <br />
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>You can use <code>centered</code>,<code>style.top</code> or other styles to set position of modal dialog.</p>"}},{demo:{id:"modal-demo-dark"},previewerProps:{debug:!0,title:"Dark Bg",filename:"components/modal/demo/dark.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`// @ts-nocheck
import React, { useState } from 'react';
import difference from 'lodash/difference';
import { DownOutlined, ClockCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {
  Modal,
  DatePicker,
  Slider,
  Tree,
  Badge,
  Collapse,
  Timeline,
  Tabs,
  Anchor,
  Table,
  Card,
  Button,
  Calendar,
  Transfer,
  Switch,
  Typography,
  Dropdown,
} from 'antd';
dayjs.extend(customParseFormat);
const { Panel } = Collapse;
const { TreeNode } = Tree;
const { TabPane } = Tabs;
const { Meta } = Card;
const { Link } = Anchor;
const { Text } = Typography;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: \`content\${i + 1}\`,
    description: \`description of content\${i + 1}\`,
    disabled: i % 3 < 1,
  });
}
const oriTargetKeys = mockData.filter((item) => +item.key % 3 > 1).map((item) => item.key);
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
const columnsTable = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Borrow',
    dataIndex: 'borrow',
  },
  {
    title: 'Repayment',
    dataIndex: 'repayment',
  },
];
const dataTable = [
  {
    key: '1',
    name: 'John Brown',
    borrow: 10,
    repayment: 33,
  },
  {
    key: '2',
    name: 'Jim Green',
    borrow: 100,
    repayment: 0,
  },
  {
    key: '3',
    name: 'Joe Black',
    borrow: 10,
    repayment: 10,
  },
  {
    key: '4',
    name: 'Jim Red',
    borrow: 75,
    repayment: 45,
  },
];
const expandedRowRender = () => {
  const columnsExpand = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      key: 'state',
      render: () => (
        <span>
          <Badge status="success" />
          Finished
        </span>
      ),
    },
    {
      title: 'Upgrade Status',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum',
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <span className="table-operation">
          <a>Pause</a>
          <a>Stop</a>
          <Dropdown>
            <a>
              More <DownOutlined />
            </a>
          </Dropdown>
        </span>
      ),
    },
  ];
  const dataExpand = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return <Table columns={columnsExpand} dataSource={dataExpand} pagination={false} />;
};
const columnsNest = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform',
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
  },
  {
    title: 'Upgraded',
    dataIndex: 'upgradeNum',
    key: 'upgradeNum',
  },
  {
    title: 'Creator',
    dataIndex: 'creator',
    key: 'creator',
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Action',
    key: 'operation',
    render: () => <a>Publish</a>,
  },
];
const dataNest = [];
for (let i = 0; i < 3; ++i) {
  dataNest.push({
    key: i,
    name: 'Screem',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  });
}
const columnsFixed = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const dataFixed = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
  <Transfer {...restProps} showSelectAll={false}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;
      const rowSelection = {
        getCheckboxProps: (item) => ({
          disabled: listDisabled || item.disabled,
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter((item) => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: listSelectedKeys,
      };
      return (
        <Table
          id="components-transfer-table"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{
            pointerEvents: listDisabled ? 'none' : null,
          }}
          onRow={({ key, disabled: itemDisabled }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled) return;
              onItemSelect(key, !listSelectedKeys.includes(key));
            },
          })}
        />
      );
    }}
  </Transfer>
);
export default () => {
  const [open, setOpen] = useState(false);
  const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleDisable = (isDisabled) => {
    setDisabled(isDisabled);
  };
  const handleTableTransferChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const triggerDisable = (isDisabled) => {
    setDisabled(isDisabled);
  };
  const triggerShowSearch = (isShowSearch) => {
    setShowSearch(isShowSearch);
  };
  const handleTransferChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const handleTransferSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
      ],
      filteredValue: null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: true,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: false,
      sortOrder: true,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filteredValue: null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: false,
      sortOrder: true,
      ellipsis: true,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={handleDisable}
          style={{
            marginBottom: 16,
          }}
        />
        <Card title="Card Title">
          <Card.Grid>Content</Card.Grid>
          <Card.Grid hoverable={false}>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
        </Card>
        <Collapse>
          <Panel header="This is panel header 1" key="1">
            <Collapse defaultActiveKey="1">
              <Panel header="This is panel nest panel" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={handleTransferChange}
          onSelectChange={handleTransferSelectChange}
          render={(item) => item.title}
          disabled={disabled}
        />
        <TableTransfer
          dataSource={mockData}
          targetKeys={targetKeys}
          disabled={disabled}
          showSearch={showSearch}
          onChange={handleTableTransferChange}
          filterOption={(inputValue, item) =>
            item.title.indexOf(inputValue) !== -1 || item.tag?.indexOf(inputValue) !== -1
          }
          leftColumns={[
            {
              dataIndex: 'title',
              title: 'Name',
            },
            {
              dataIndex: 'description',
              title: 'Description',
            },
          ]}
          rightColumns={[
            {
              dataIndex: 'title',
              title: 'Name',
            },
          ]}
        />
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={triggerDisable}
          style={{
            marginTop: 16,
          }}
        />
        <Switch
          unCheckedChildren="showSearch"
          checkedChildren="showSearch"
          checked={showSearch}
          onChange={triggerShowSearch}
          style={{
            marginTop: 16,
          }}
        />
        <Anchor>
          <Link href="#components-anchor-demo-basic" title="Basic demo" />
          <Link href="#components-anchor-demo-static" title="Static demo" />
          <Link
            href="#components-anchor-demo-basic"
            title="Basic demo with Target"
            target="_blank"
          />
          <Link href="#API" title="API">
            <Link href="#Anchor-Props" title="Anchor Props" />
            <Link href="#Link-Props" title="Link Props" />
          </Link>
        </Anchor>
        <Tabs type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item
            dot={
              <ClockCircleOutlined
                style={{
                  fontSize: '16px',
                }}
              />
            }
            color="red"
          >
            Technical testing 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
        <Calendar />
        <Tree showLine switcherIcon={<DownOutlined />} defaultExpandedKeys={['0-0-0']}>
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0">
              <TreeNode title="leaf" key="0-0-0-0" />
              <TreeNode title="leaf" key="0-0-0-1" />
              <TreeNode title="leaf" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="leaf" key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="parent 1-2" key="0-0-2">
              <TreeNode title="leaf" key="0-0-2-0" />
              <TreeNode title="leaf" key="0-0-2-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
        <Table columns={columns} dataSource={data} footer={() => 'Footer'} />
        <Table
          columns={columnsTable}
          dataSource={dataTable}
          pagination={false}
          id="table-demo-summary"
          bordered
          summary={(pageData) => {
            let totalBorrow = 0;
            let totalRepayment = 0;
            pageData.forEach(({ borrow, repayment }) => {
              totalBorrow += borrow;
              totalRepayment += repayment;
            });
            return (
              <>
                <tr>
                  <th>Total</th>
                  <td>
                    <Text type="danger">{totalBorrow}</Text>
                  </td>
                  <td>
                    <Text>{totalRepayment}</Text>
                  </td>
                </tr>
                <tr>
                  <th>Balance</th>
                  <td colSpan={2}>
                    <Text type="danger">{totalBorrow - totalRepayment}</Text>
                  </td>
                </tr>
              </>
            );
          }}
        />
        <br />
        <Table
          columns={columnsNest}
          expandable={{
            expandedRowRender,
          }}
          dataSource={dataNest}
        />
        <Table
          columns={columnsFixed}
          dataSource={dataFixed}
          scroll={{
            x: 1300,
            y: 100,
          }}
        />
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Slider defaultValue={30} />
        <DatePicker defaultValue={dayjs('2015/01/01', 'YYYY/MM/DD')} format="YYYY/MM/DD" />
        <Badge count={5}>
          <a href="#" className="head-example" />
        </Badge>
      </Modal>
    </>
  );
};
`,description:"<p>Basic modal.</p>"}},{demo:{id:"modal-demo-button-props"},previewerProps:{title:"Customize footer buttons props",filename:"components/modal/demo/button-props.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized button props
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>Passing <code>okButtonProps</code> and <code>cancelButtonProps</code> will customize the OK button and cancel button props.</p>"}},{demo:{id:"modal-demo-modal-render"},previewerProps:{title:"Custom modal content render",filename:"components/modal/demo/modal-render.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Button, Modal } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  return (
    <>
      <Button onClick={showModal}>Open Draggable Modal</Button>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            Draggable Modal
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <p>
          Just don&apos;t learn physics at school and your life will be full of magic and miracles.
        </p>
        <br />
        <p>Day before yesterday I saw a rabbit, and yesterday a deer, and today, you.</p>
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>Custom modal content render. use <code>react-draggable</code> implements draggable.</p>"}},{demo:{id:"modal-demo-width"},previewerProps:{title:"To customize the width of modal",filename:"components/modal/demo/width.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>Use <code>width</code> to set the width of the modal dialog.</p>"}},{demo:{id:"modal-demo-static-info"},previewerProps:{title:"Static Method",filename:"components/modal/demo/static-info.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Modal, Space } from 'antd';
const info = () => {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};
const success = () => {
  Modal.success({
    content: 'some messages...some messages...',
  });
};
const error = () => {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};
const warning = () => {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};
const App = () => (
  <Space wrap>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>
);
export default App;
`,description:"<p>In most case, you do not need static method. It can not consume context like dynamic theme. Please use hooks version or <code>App</code> provided instance first.</p>"}},{demo:{id:"modal-demo-confirm"},previewerProps:{title:"Static confirmation",filename:"components/modal/demo/confirm.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
const { confirm } = Modal;
const showConfirm = () => {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const showPromiseConfirm = () => {
  confirm({
    title: 'Do you want to delete these items?',
    icon: <ExclamationCircleFilled />,
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
};
const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const showPropsConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const App = () => (
  <Space wrap>
    <Button onClick={showConfirm}>Confirm</Button>
    <Button onClick={showPromiseConfirm}>With promise</Button>
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
    <Button onClick={showPropsConfirm} type="dashed">
      With extra props
    </Button>
  </Space>
);
export default App;
`,description:"<p>Use <code>confirm()</code> to show a confirmation modal dialog. Let onCancel/onOk function return a promise object to delay closing the dialog.</p>"}},{demo:{id:"modal-demo-confirm-router"},previewerProps:{title:"destroy confirmation modal dialog",filename:"components/modal/demo/confirm-router.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
const { confirm } = Modal;
const destroyAll = () => {
  Modal.destroyAll();
};
const showConfirm = () => {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
};
const App = () => <Button onClick={showConfirm}>Confirm</Button>;
export default App;
`,description:"<p><code>Modal.destroyAll()</code> will destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically.</p>"}},{demo:{id:"modal-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/modal/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Modal } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Modal;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
    }}
  >
    <InternalPanel
      title="Hello World!"
      style={{
        width: '100%',
        height: 200,
      }}
    >
      Hello World?!
    </InternalPanel>
    <InternalPanel
      type="success"
      style={{
        width: 200,
        height: 150,
      }}
    >
      A good news!
    </InternalPanel>
    <InternalPanel
      title="Confirm This?"
      type="confirm"
      style={{
        width: 300,
        height: 200,
      }}
    >
      Some descriptions.
    </InternalPanel>
  </div>
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}},{demo:{id:"modal-demo-custom-mouse-position"},previewerProps:{debug:!0,title:"Control modal's animation origin position",filename:"components/modal/demo/custom-mouse-position.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        mousePosition={{
          x: 300,
          y: 300,
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>pass <code>mousePosition</code> to control modal's animation origin position</p>"}},{demo:{id:"modal-demo-wireframe"},previewerProps:{debug:!0,title:"Wireframe",filename:"components/modal/demo/wireframe.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ConfigProvider, Modal } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Modal;
export default () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 16,
      }}
    >
      <InternalPanel
        title="Hello World!"
        style={{
          width: '100%',
          height: 200,
        }}
      >
        Hello World?!
      </InternalPanel>
      <InternalPanel
        type="success"
        style={{
          width: 200,
          height: 150,
        }}
      >
        A good news!
      </InternalPanel>
      <InternalPanel
        title="Confirm This?"
        type="confirm"
        style={{
          width: 300,
          height: 200,
        }}
      >
        Some descriptions.
      </InternalPanel>
    </div>
  </ConfigProvider>
);
`,description:"<p>Wireframe.</p>"}},{demo:{id:"modal-demo-component-token"},previewerProps:{debug:!0,title:"Component Token",filename:"components/modal/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ConfigProvider, Modal } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Modal;
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Modal: {
          footerBg: '#f6ffed',
          contentBg: '#e6fffb',
          headerBg: '#f9f0ff',
          titleLineHeight: 3,
          titleFontSize: 12,
          titleColor: '#1d39c4',
        },
      },
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 16,
      }}
    >
      <InternalPanel
        title="Hello World!"
        style={{
          width: '100%',
          height: 200,
        }}
      >
        Hello World?!
      </InternalPanel>
      <ConfigProvider
        theme={{
          token: {
            wireframe: true,
          },
        }}
      >
        <InternalPanel
          title="Hello World!"
          style={{
            width: '100%',
            height: 200,
          }}
        >
          Hello World?!
        </InternalPanel>
      </ConfigProvider>
      <InternalPanel
        type="success"
        style={{
          width: 200,
          height: 150,
        }}
      >
        A good news!
      </InternalPanel>
      <InternalPanel
        title="Confirm This?"
        type="confirm"
        style={{
          width: 300,
          height: 200,
        }}
      >
        Some descriptions.
      </InternalPanel>
    </div>
  </ConfigProvider>
);
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[7].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[8].value})]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[9].value}),(0,e.jsx)("th",{children:n[10].value}),(0,e.jsx)("th",{children:n[11].value}),(0,e.jsx)("th",{children:n[12].value}),(0,e.jsx)("th",{children:n[13].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[14].value}),(0,e.jsx)("td",{children:n[15].value}),(0,e.jsx)("td",{children:n[16].value}),(0,e.jsx)("td",{children:n[17].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[18].value}),(0,e.jsx)("td",{children:n[19].value}),(0,e.jsx)("td",{children:n[20].value}),(0,e.jsx)("td",{}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[21].value}),(0,e.jsx)("td",{children:n[22].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/button/#api",sourceType:"Link",children:n[23].value})}),(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[28].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[29].value}),(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[33].value}),(0,e.jsxs)("td",{children:[n[34].value,(0,e.jsx)("code",{children:n[35].value}),n[36].value,(0,e.jsx)("code",{children:n[37].value})]}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{children:n[39].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[40].value}),(0,e.jsx)("td",{children:n[41].value}),(0,e.jsx)("td",{children:n[42].value}),(0,e.jsx)("td",{children:n[43].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[44].value}),(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{children:n[47].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[48].value}),(0,e.jsx)("td",{children:n[49].value}),(0,e.jsx)("td",{children:n[50].value}),(0,e.jsx)("td",{children:n[51].value}),(0,e.jsx)("td",{children:n[52].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[53].value}),(0,e.jsxs)("td",{children:[n[54].value,(0,e.jsx)("code",{children:n[55].value}),n[56].value]}),(0,e.jsxs)("td",{children:[n[57].value,(0,e.jsx)(r.Z,{to:"/components/modal-cn#footerrenderparams",sourceType:"Link",children:n[58].value}),n[59].value]}),(0,e.jsx)("td",{children:n[60].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[61].value}),(0,e.jsx)("td",{children:n[62].value}),(0,e.jsx)("td",{children:n[63].value}),(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[65].value}),(0,e.jsx)("td",{children:n[66].value}),(0,e.jsx)("td",{children:n[67].value}),(0,e.jsx)("td",{children:n[68].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[69].value}),(0,e.jsx)("td",{children:n[70].value}),(0,e.jsx)("td",{children:n[71].value}),(0,e.jsx)("td",{children:n[72].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[73].value}),(0,e.jsx)("td",{children:n[74].value}),(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{children:n[76].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[77].value}),(0,e.jsx)("td",{children:n[78].value}),(0,e.jsx)("td",{children:n[79].value}),(0,e.jsx)("td",{children:n[80].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[81].value}),(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{children:n[83].value}),(0,e.jsx)("td",{}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[84].value}),(0,e.jsx)("td",{children:n[85].value}),(0,e.jsx)("td",{children:n[86].value}),(0,e.jsx)("td",{children:n[87].value}),(0,e.jsx)("td",{children:n[88].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[89].value}),(0,e.jsx)("td",{children:n[90].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/button/#api",sourceType:"Link",children:n[91].value})}),(0,e.jsx)("td",{children:n[92].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[93].value}),(0,e.jsx)("td",{children:n[94].value}),(0,e.jsx)("td",{children:n[95].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[96].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[97].value}),(0,e.jsxs)("td",{children:[n[98].value,(0,e.jsx)("code",{children:n[99].value}),n[100].value]}),(0,e.jsx)("td",{children:n[101].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[102].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[103].value}),(0,e.jsx)("td",{children:n[104].value}),(0,e.jsx)("td",{children:n[105].value}),(0,e.jsx)("td",{children:n[106].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[107].value}),(0,e.jsx)("td",{children:n[108].value}),(0,e.jsx)("td",{children:n[109].value}),(0,e.jsx)("td",{children:n[110].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[111].value}),(0,e.jsx)("td",{children:n[112].value}),(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:n[114].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[115].value}),(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[119].value}),(0,e.jsx)("td",{children:n[120].value}),(0,e.jsx)("td",{children:n[121].value}),(0,e.jsx)("td",{children:n[122].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[123].value}),(0,e.jsxs)("td",{children:[n[124].value,(0,e.jsx)("code",{children:n[125].value}),n[126].value]}),(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[129].value}),(0,e.jsx)("td",{children:n[130].value}),(0,e.jsx)("td",{children:n[131].value}),(0,e.jsx)("td",{children:n[132].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[133].value}),(0,e.jsx)("td",{children:n[134].value}),(0,e.jsx)("td",{children:n[135].value}),(0,e.jsx)("td",{children:n[136].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[137].value}),(0,e.jsx)("td",{children:n[138].value}),(0,e.jsx)("td",{children:n[139].value}),(0,e.jsx)("td",{children:n[140].value}),(0,e.jsx)("td",{children:n[141].value})]})]})]}),(0,e.jsxs)("h4",{id:"note",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#note",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Note"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[142].value,(0,e.jsx)("code",{children:n[143].value}),n[144].value]}),(0,e.jsxs)("li",{children:[n[145].value,(0,e.jsx)("code",{children:n[146].value}),n[147].value,(0,e.jsx)("code",{children:n[148].value}),n[149].value,(0,e.jsx)("code",{children:n[150].value}),n[151].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n[152].value}),n[153].value]})]}),(0,e.jsxs)("h3",{id:"modalmethod",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#modalmethod",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modal.method()"]}),(0,e.jsx)("p",{children:n[154].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[155].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[156].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[157].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[158].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[159].value})})]}),(0,e.jsx)("p",{children:n[160].value}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[161].value}),(0,e.jsx)("th",{children:n[162].value}),(0,e.jsx)("th",{children:n[163].value}),(0,e.jsx)("th",{children:n[164].value}),(0,e.jsx)("th",{children:n[165].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value}),(0,e.jsx)("td",{children:n[168].value}),(0,e.jsx)("td",{children:n[169].value}),(0,e.jsx)("td",{children:n[170].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[171].value}),(0,e.jsx)("td",{children:n[172].value}),(0,e.jsxs)("td",{children:[n[173].value,(0,e.jsx)("code",{children:n[174].value}),n[175].value,(0,e.jsx)("code",{children:n[176].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[177].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[178].value}),(0,e.jsx)("td",{children:n[179].value}),(0,e.jsx)("td",{children:n[180].value}),(0,e.jsx)("td",{}),(0,e.jsx)("td",{children:n[181].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[182].value}),(0,e.jsx)("td",{children:n[183].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/button/#api",sourceType:"Link",children:n[184].value})}),(0,e.jsx)("td",{children:n[185].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[186].value}),(0,e.jsx)("td",{children:n[187].value}),(0,e.jsx)("td",{children:n[188].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[189].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[190].value}),(0,e.jsx)("td",{children:n[191].value}),(0,e.jsx)("td",{children:n[192].value}),(0,e.jsx)("td",{children:n[193].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[194].value}),(0,e.jsx)("td",{children:n[195].value}),(0,e.jsx)("td",{children:n[196].value}),(0,e.jsx)("td",{children:n[197].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[198].value}),(0,e.jsxs)("td",{children:[n[199].value,(0,e.jsx)("code",{children:n[200].value}),n[201].value,(0,e.jsx)("code",{children:n[202].value})]}),(0,e.jsx)("td",{children:n[203].value}),(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[205].value}),(0,e.jsx)("td",{children:n[206].value}),(0,e.jsx)("td",{children:n[207].value}),(0,e.jsx)("td",{children:n[208].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[209].value}),(0,e.jsxs)("td",{children:[n[210].value,(0,e.jsx)("code",{children:n[211].value}),n[212].value]}),(0,e.jsxs)("td",{children:[n[213].value,(0,e.jsx)(r.Z,{to:"/components/modal-cn#footerrenderparams",sourceType:"Link",children:n[214].value}),n[215].value]}),(0,e.jsx)("td",{children:n[216].value}),(0,e.jsx)("td",{children:n[217].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[218].value}),(0,e.jsx)("td",{children:n[219].value}),(0,e.jsx)("td",{children:n[220].value}),(0,e.jsx)("td",{children:n[221].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[222].value}),(0,e.jsx)("td",{children:n[223].value}),(0,e.jsx)("td",{children:n[224].value}),(0,e.jsx)("td",{children:n[225].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[226].value}),(0,e.jsx)("td",{children:n[227].value}),(0,e.jsx)("td",{children:n[228].value}),(0,e.jsx)("td",{children:n[229].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[230].value}),(0,e.jsx)("td",{children:n[231].value}),(0,e.jsx)("td",{children:n[232].value}),(0,e.jsx)("td",{children:n[233].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[234].value}),(0,e.jsx)("td",{children:n[235].value}),(0,e.jsx)("td",{children:n[236].value}),(0,e.jsx)("td",{children:n[237].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[238].value}),(0,e.jsx)("td",{children:n[239].value}),(0,e.jsx)("td",{children:n[240].value}),(0,e.jsx)("td",{children:n[241].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[242].value}),(0,e.jsx)("td",{children:n[243].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/button/#api",sourceType:"Link",children:n[244].value})}),(0,e.jsx)("td",{children:n[245].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[246].value}),(0,e.jsx)("td",{children:n[247].value}),(0,e.jsx)("td",{children:n[248].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[249].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[250].value}),(0,e.jsxs)("td",{children:[n[251].value,(0,e.jsx)("code",{children:n[252].value}),n[253].value]}),(0,e.jsx)("td",{children:n[254].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[255].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[256].value}),(0,e.jsx)("td",{children:n[257].value}),(0,e.jsx)("td",{children:n[258].value}),(0,e.jsx)("td",{children:n[259].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[260].value}),(0,e.jsx)("td",{children:n[261].value}),(0,e.jsx)("td",{children:n[262].value}),(0,e.jsx)("td",{children:n[263].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[264].value}),(0,e.jsx)("td",{children:n[265].value}),(0,e.jsx)("td",{children:n[266].value}),(0,e.jsx)("td",{children:n[267].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[268].value}),(0,e.jsx)("td",{children:n[269].value}),(0,e.jsx)("td",{children:n[270].value}),(0,e.jsx)("td",{children:n[271].value}),(0,e.jsx)("td",{children:n[272].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[273].value}),(0,e.jsxs)("td",{children:[n[274].value,(0,e.jsx)("code",{children:n[275].value}),n[276].value]}),(0,e.jsx)("td",{children:n[277].value}),(0,e.jsx)("td",{children:n[278].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[279].value}),(0,e.jsxs)("td",{children:[n[280].value,(0,e.jsx)("code",{children:n[281].value}),n[282].value,(0,e.jsx)("code",{children:n[283].value}),n[284].value,(0,e.jsx)("code",{children:n[285].value}),n[286].value]}),(0,e.jsx)("td",{children:n[287].value}),(0,e.jsx)("td",{children:n[288].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[289].value}),(0,e.jsxs)("td",{children:[n[290].value,(0,e.jsx)("code",{children:n[291].value}),n[292].value,(0,e.jsx)("code",{children:n[293].value}),n[294].value,(0,e.jsx)("code",{children:n[295].value}),n[296].value]}),(0,e.jsx)("td",{children:n[297].value}),(0,e.jsx)("td",{children:n[298].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("p",{children:[n[299].value,(0,e.jsx)("code",{children:n[300].value}),n[301].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[302].value}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)("code",{children:n[303].value})})}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[304].value}),n[305].value,(0,e.jsx)("code",{children:n[306].value}),n[307].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[308].value}),(0,e.jsxs)("h3",{id:"modalusemodal",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#modalusemodal",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modal.useModal()"]}),(0,e.jsxs)("p",{children:[n[309].value,(0,e.jsx)("code",{children:n[310].value}),n[311].value,(0,e.jsx)("code",{children:n[312].value}),n[313].value,(0,e.jsx)("code",{children:n[314].value}),n[315].value,(0,e.jsx)("code",{children:n[316].value}),n[317].value,(0,e.jsx)("code",{children:n[318].value}),n[319].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[320].value}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[321].value}),n[322].value]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n[323].value}),n[324].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n[325].value}),n[326].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n[327].value}),n[328].value,(0,e.jsx)("code",{children:n[329].value}),n[330].value]})]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[331].value}),(0,e.jsxs)("h2",{id:"footerrenderparams",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#footerrenderparams",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"footerRenderParams"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[332].value}),(0,e.jsx)("th",{children:n[333].value}),(0,e.jsx)("th",{children:n[334].value}),(0,e.jsx)("th",{children:n[335].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[336].value}),(0,e.jsx)("td",{children:n[337].value}),(0,e.jsx)("td",{children:n[338].value}),(0,e.jsx)("td",{children:n[339].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[340].value}),(0,e.jsx)("td",{children:n[341].value}),(0,e.jsx)("td",{children:n[342].value}),(0,e.jsx)("td",{children:n[343].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(a.Z,{component:"Modal"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"why-content-not-update-when-modal-closed",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-content-not-update-when-modal-closed",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why content not update when Modal closed?"]}),(0,e.jsxs)("p",{children:[n[344].value,(0,e.jsx)("code",{children:n[345].value}),n[346].value,(0,e.jsx)("code",{children:n[347].value}),n[348].value]}),(0,e.jsxs)("h3",{id:"why-i-can-not-access-context-redux-configprovider-localeprefixcls-in-modalxxx",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-i-can-not-access-context-redux-configprovider-localeprefixcls-in-modalxxx",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why I can not access context, redux, ConfigProvider ",(0,e.jsx)("code",{children:n[349].value})," in Modal.xxx?"]}),(0,e.jsxs)("p",{children:[n[350].value,(0,e.jsx)("code",{children:n[351].value}),n[352].value]}),(0,e.jsxs)("p",{children:[n[353].value,(0,e.jsx)("code",{children:n[354].value}),n[355].value,(0,e.jsx)("code",{children:n[356].value}),n[357].value,(0,e.jsx)("code",{children:n[358].value}),n[359].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[360].value}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:n[361].value}),n[362].value,(0,e.jsx)("code",{children:n[363].value}),n[364].value]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[(0,e.jsx)(r.Z,{to:"/components/app",sourceType:"Link",children:n[365].value}),n[366].value,(0,e.jsx)("code",{children:n[367].value}),n[368].value]})}),(0,e.jsxs)("h3",{id:"how-to-set-static-methods-prefixcls-",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-set-static-methods-prefixcls-",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to set static methods prefixCls \uFF1F"]}),(0,e.jsxs)("p",{children:[n[369].value,(0,e.jsx)(r.Z,{to:"/components/config-provider#configproviderconfig-4130",sourceType:"Link",children:(0,e.jsx)("code",{children:n[370].value})})]})]})]})})}s.default=i}}]);
