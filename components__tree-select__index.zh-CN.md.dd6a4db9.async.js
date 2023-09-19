"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1009],{483890:function(h,c,t){t.r(c);var x=t(502143),j=t(968521),p=t(720719),v=t(521587),s=t(759907),l=t(828089),_=t(825673),m=t(902068),g=t(574399),f=t(863942),b=t(316073),D=t(24628),w=t(719260),E=t(956140),a=t(127179),i=t(905388),C=t(245583),y=t(606965),k=t(268696),T=t(587302),r=t(424128),P=t(249706),A=t(795127),S=t(116846),O=t(720538),L=t(212039),I=t(73024),M=t(553913),d=t(830084),R=t(667294),e=t(785893);function o(){var u=(0,d.eL)(),n=u.texts;return(0,e.jsx)(d.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsx)("p",{children:n[1].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(i.Z,{items:[{demo:{id:"tree-select-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/tree-select/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"tree-select-demo-multiple"},previewerProps:{title:"\u591A\u9009",filename:"components/tree-select/demo/multiple.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>\u591A\u9009\u7684\u6811\u9009\u62E9\u3002</p>"}},{demo:{id:"tree-select-demo-treedata"},previewerProps:{title:"\u4ECE\u6570\u636E\u76F4\u63A5\u751F\u6210",filename:"components/tree-select/demo/treeData.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 <code>treeData</code> \u628A JSON \u6570\u636E\u76F4\u63A5\u751F\u6210\u6811\u7ED3\u6784\u3002</p>"}},{demo:{id:"tree-select-demo-checkable"},previewerProps:{title:"\u53EF\u52FE\u9009",filename:"components/tree-select/demo/checkable.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue) => {
    console.log('onChange ', value);
    setValue(newValue);
  };
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };
  return <TreeSelect {...tProps} />;
};
export default App;
`,description:"<p>\u4F7F\u7528\u52FE\u9009\u6846\u5B9E\u73B0\u591A\u9009\u529F\u80FD\u3002</p>"}},{demo:{id:"tree-select-demo-async"},previewerProps:{title:"\u5F02\u6B65\u52A0\u8F7D",filename:"components/tree-select/demo/async.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const App = () => {
  const [value, setValue] = useState();
  const [treeData, setTreeData] = useState([
    {
      id: 1,
      pId: 0,
      value: '1',
      title: 'Expand to load',
    },
    {
      id: 2,
      pId: 0,
      value: '2',
      title: 'Expand to load',
    },
    {
      id: 3,
      pId: 0,
      value: '3',
      title: 'Tree Node',
      isLeaf: true,
    },
  ]);
  const genTreeNode = (parentId, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };
  const onLoadData = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
        );
        resolve(undefined);
      }, 300);
    });
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      treeDataSimpleMode
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>\u5F02\u6B65\u52A0\u8F7D\u6811\u8282\u70B9\u3002</p>"}},{demo:{id:"tree-select-demo-treeline"},previewerProps:{title:"\u7EBF\u6027\u6837\u5F0F",filename:"components/tree-select/demo/treeLine.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { CarryOutOutlined } from '@ant-design/icons';
import { Space, Switch, TreeSelect } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    icon: <CarryOutOutlined />,
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
            icon: <CarryOutOutlined />,
          },
          {
            value: 'leaf2',
            title: 'leaf2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            value: 'sss',
            title: 'sss',
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="showIcon"
        unCheckedChildren="showIcon"
        checked={showIcon}
        onChange={() => setShowIcon(!showIcon)}
      />
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={
          treeLine && {
            showLeafIcon,
          }
        }
        style={{
          width: 300,
        }}
        treeData={treeData}
        treeIcon={showIcon}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7 <code>treeLine</code> \u914D\u7F6E\u7EBF\u6027\u6837\u5F0F\u3002</p>"}},{demo:{id:"tree-select-demo-placement"},previewerProps:{title:"\u5F39\u51FA\u4F4D\u7F6E",filename:"components/tree-select/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Radio, TreeSelect } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
          minWidth: 300,
        }}
        placeholder="Please select"
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeData={treeData}
      />
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>placement</code> \u624B\u52A8\u6307\u5B9A\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"tree-select-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/tree-select/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, TreeSelect } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <TreeSelect
      status="error"
      style={{
        width: '100%',
      }}
      placeholder="Error"
    />
    <TreeSelect
      status="warning"
      style={{
        width: '100%',
      }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A TreeSelect \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"tree-select-demo-suffix"},previewerProps:{debug:!0,title:"\u540E\u7F00\u56FE\u6807",filename:"components/tree-select/demo/suffix.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
const icon = <SmileOutlined />;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      suffixIcon={icon}
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"tree-select-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tree-select/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TreeSelect } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTreeSelect } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => (
  <InternalTreeSelect
    defaultValue="lucy"
    style={{
      width: '100%',
    }}
    treeData={treeData}
  />
);
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}},{demo:{id:"tree-select-demo-component-token"},previewerProps:{debug:!0,title:"\u7EC4\u4EF6 Token",filename:"components/tree-select/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { ConfigProvider, TreeSelect } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          TreeSelect: {
            nodeHoverBg: '#fff2f0',
            nodeSelectedBg: '#ffa39e',
          },
        },
      }}
    >
      <TreeSelect
        showSearch
        style={{
          width: '100%',
        }}
        value={value}
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
        }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
    </ConfigProvider>
  );
};
export default App;
`,description:"<p>\u7EC4\u4EF6 Token</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[2].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[3].value})]}),(0,e.jsxs)("h3",{id:"tree-props",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tree-props",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Tree props"]}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[4].value}),(0,e.jsx)("th",{children:n[5].value}),(0,e.jsx)("th",{children:n[6].value}),(0,e.jsx)("th",{children:n[7].value}),(0,e.jsx)("th",{children:n[8].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[9].value}),(0,e.jsx)("td",{children:n[10].value}),(0,e.jsx)("td",{children:n[11].value}),(0,e.jsx)("td",{children:n[12].value}),(0,e.jsx)("td",{children:n[13].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[14].value}),(0,e.jsx)("td",{children:n[15].value}),(0,e.jsx)("td",{children:n[16].value}),(0,e.jsx)("td",{children:n[17].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[18].value}),(0,e.jsx)("td",{children:n[19].value}),(0,e.jsx)("td",{children:n[20].value}),(0,e.jsx)("td",{children:n[21].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[22].value}),(0,e.jsx)("td",{children:n[23].value}),(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:n[28].value}),(0,e.jsx)("td",{children:n[29].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{children:n[33].value}),(0,e.jsx)("td",{children:n[34].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[35].value}),(0,e.jsxs)("td",{children:[n[36].value,(0,e.jsx)("code",{children:n[37].value}),n[38].value]}),(0,e.jsx)("td",{children:n[39].value}),(0,e.jsx)("td",{children:n[40].value}),(0,e.jsx)("td",{children:n[41].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[42].value}),(0,e.jsx)("td",{children:n[43].value}),(0,e.jsx)("td",{children:n[44].value}),(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{children:n[47].value}),(0,e.jsx)("td",{children:n[48].value}),(0,e.jsx)("td",{children:n[49].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[50].value}),(0,e.jsx)("td",{children:n[51].value}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsxs)("td",{children:[n[53].value,(0,e.jsx)("code",{children:n[54].value}),n[55].value,(0,e.jsx)("code",{children:n[56].value}),n[57].value,(0,e.jsx)("code",{children:n[58].value}),n[59].value]}),(0,e.jsx)("td",{children:n[60].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[61].value}),(0,e.jsx)("td",{children:n[62].value}),(0,e.jsx)("td",{children:n[63].value}),(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[65].value}),(0,e.jsxs)("td",{children:[n[66].value,(0,e.jsx)(r.Z,{href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010",sourceType:"a",children:n[67].value})]}),(0,e.jsx)("td",{children:n[68].value}),(0,e.jsx)("td",{children:n[69].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[70].value}),(0,e.jsxs)("td",{children:[n[71].value,(0,e.jsx)("code",{children:n[72].value}),n[73].value]}),(0,e.jsx)("td",{children:n[74].value}),(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[76].value}),(0,e.jsx)("td",{children:n[77].value}),(0,e.jsx)("td",{children:n[78].value}),(0,e.jsx)("td",{children:n[79].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[80].value}),(0,e.jsx)("td",{children:n[81].value}),(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{children:n[83].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[84].value}),(0,e.jsx)("td",{children:n[85].value}),(0,e.jsxs)("td",{children:[n[86].value,(0,e.jsx)("code",{children:n[87].value})]}),(0,e.jsx)("td",{children:n[88].value}),(0,e.jsx)("td",{children:n[89].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[90].value}),(0,e.jsx)("td",{children:n[91].value}),(0,e.jsx)("td",{children:n[92].value}),(0,e.jsx)("td",{children:n[93].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[94].value}),(0,e.jsx)("td",{children:n[95].value}),(0,e.jsx)("td",{children:n[96].value}),(0,e.jsx)("td",{children:n[97].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[98].value}),(0,e.jsx)("td",{children:n[99].value}),(0,e.jsx)("td",{children:n[100].value}),(0,e.jsx)("td",{children:n[101].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[102].value}),(0,e.jsx)("td",{children:n[103].value}),(0,e.jsx)("td",{children:n[104].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[105].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[106].value}),(0,e.jsx)("td",{children:n[107].value}),(0,e.jsx)("td",{children:n[108].value}),(0,e.jsx)("td",{children:n[109].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[110].value}),(0,e.jsx)("td",{children:n[111].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[112].value}),n[113].value,(0,e.jsx)("code",{children:n[114].value}),n[115].value,(0,e.jsx)("code",{children:n[116].value}),n[117].value,(0,e.jsx)("code",{children:n[118].value})]}),(0,e.jsx)("td",{children:n[119].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[120].value}),(0,e.jsxs)("td",{children:[n[121].value,(0,e.jsx)("code",{children:n[122].value}),n[123].value]}),(0,e.jsx)("td",{children:n[124].value}),(0,e.jsx)("td",{children:n[125].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[126].value}),(0,e.jsxs)("td",{children:[n[127].value,(0,e.jsx)("code",{children:n[128].value}),n[129].value,(0,e.jsx)("code",{children:n[130].value}),n[131].value,(0,e.jsx)("code",{children:n[132].value}),n[133].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[134].value}),n[135].value,(0,e.jsx)("code",{children:n[136].value}),n[137].value,(0,e.jsx)("code",{children:n[138].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[139].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[140].value}),(0,e.jsx)("td",{children:n[141].value}),(0,e.jsx)("td",{children:n[142].value}),(0,e.jsx)("td",{children:n[143].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[144].value}),(0,e.jsx)("td",{children:n[145].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[146].value}),n[147].value,(0,e.jsx)("code",{children:n[148].value}),n[149].value,(0,e.jsx)("code",{children:n[150].value})]}),(0,e.jsx)("td",{children:n[151].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[152].value}),(0,e.jsx)("td",{children:n[153].value}),(0,e.jsx)("td",{children:n[154].value}),(0,e.jsx)("td",{children:n[155].value}),(0,e.jsx)("td",{children:n[156].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[157].value}),(0,e.jsx)("td",{children:n[158].value}),(0,e.jsx)("td",{children:n[159].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[160].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{children:n[163].value}),(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{children:n[165].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value}),(0,e.jsx)("td",{children:n[168].value}),(0,e.jsx)("td",{children:n[169].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[170].value}),(0,e.jsx)("td",{children:n[171].value}),(0,e.jsx)("td",{children:n[172].value}),(0,e.jsx)("td",{children:n[173].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[174].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[175].value}),n[176].value,(0,e.jsx)("code",{children:n[177].value}),n[178].value]}),(0,e.jsx)("td",{children:n[179].value}),(0,e.jsx)("td",{children:n[180].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[181].value}),(0,e.jsx)("td",{children:n[182].value}),(0,e.jsx)("td",{children:n[183].value}),(0,e.jsx)("td",{children:n[184].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[185].value}),(0,e.jsxs)("td",{children:[n[186].value,(0,e.jsx)("code",{children:n[187].value}),n[188].value]}),(0,e.jsx)("td",{children:n[189].value}),(0,e.jsx)("td",{children:n[190].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[191].value}),(0,e.jsx)("td",{children:n[192].value}),(0,e.jsx)("td",{children:n[193].value}),(0,e.jsx)("td",{children:n[194].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[195].value}),(0,e.jsx)("td",{children:n[196].value}),(0,e.jsx)("td",{children:n[197].value}),(0,e.jsx)("td",{children:n[198].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[199].value}),(0,e.jsxs)("td",{children:[n[200].value,(0,e.jsx)("code",{children:n[201].value}),n[202].value,(0,e.jsx)("code",{children:n[203].value})]}),(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{children:n[205].value}),(0,e.jsx)("td",{children:n[206].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[207].value}),(0,e.jsx)("td",{children:n[208].value}),(0,e.jsx)("td",{children:n[209].value}),(0,e.jsx)("td",{children:n[210].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[211].value}),(0,e.jsx)("td",{children:n[212].value}),(0,e.jsx)("td",{children:n[213].value}),(0,e.jsx)("td",{children:n[214].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[215].value}),(0,e.jsxs)("td",{children:[n[216].value,(0,e.jsx)(r.Z,{to:"/components/tree-cn#components-tree-demo-line",sourceType:"Link",children:n[217].value})]}),(0,e.jsx)("td",{children:n[218].value}),(0,e.jsx)("td",{children:n[219].value}),(0,e.jsx)("td",{children:n[220].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[221].value}),(0,e.jsxs)("td",{children:[n[222].value,(0,e.jsx)("code",{children:n[223].value}),n[224].value]}),(0,e.jsx)("td",{children:n[225].value}),(0,e.jsx)("td",{children:n[226].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[227].value}),(0,e.jsx)("td",{children:n[228].value}),(0,e.jsx)("td",{children:n[229].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[230].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[231].value}),(0,e.jsx)("td",{children:n[232].value}),(0,e.jsx)("td",{children:n[233].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[234].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[235].value}),(0,e.jsx)("td",{children:n[236].value}),(0,e.jsx)("td",{children:n[237].value}),(0,e.jsx)("td",{children:n[238].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[239].value}),(0,e.jsx)("td",{children:n[240].value}),(0,e.jsx)("td",{children:n[241].value}),(0,e.jsx)("td",{children:n[242].value}),(0,e.jsx)("td",{children:n[243].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[244].value}),(0,e.jsx)("td",{children:n[245].value}),(0,e.jsx)("td",{children:n[246].value}),(0,e.jsx)("td",{children:n[247].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[248].value}),(0,e.jsx)("td",{children:n[249].value}),(0,e.jsx)("td",{children:n[250].value}),(0,e.jsx)("td",{children:n[251].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[252].value}),(0,e.jsx)("td",{children:n[253].value}),(0,e.jsx)("td",{children:n[254].value}),(0,e.jsx)("td",{children:n[255].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[256].value}),(0,e.jsx)("td",{children:n[257].value}),(0,e.jsx)("td",{children:n[258].value}),(0,e.jsx)("td",{children:n[259].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[260].value}),(0,e.jsx)("td",{children:n[261].value}),(0,e.jsx)("td",{children:n[262].value}),(0,e.jsx)("td",{children:n[263].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"tree-\u65B9\u6CD5",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tree-\u65B9\u6CD5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Tree \u65B9\u6CD5"]}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[264].value}),(0,e.jsx)("th",{children:n[265].value}),(0,e.jsx)("th",{children:n[266].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[267].value}),(0,e.jsx)("td",{children:n[268].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[269].value}),(0,e.jsx)("td",{children:n[270].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"treenode-props",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#treenode-props",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"TreeNode props"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[271].value})}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[272].value}),(0,e.jsx)("th",{children:n[273].value}),(0,e.jsx)("th",{children:n[274].value}),(0,e.jsx)("th",{children:n[275].value}),(0,e.jsx)("th",{children:n[276].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[277].value}),(0,e.jsx)("td",{children:n[278].value}),(0,e.jsx)("td",{children:n[279].value}),(0,e.jsx)("td",{children:n[280].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[281].value}),(0,e.jsx)("td",{children:n[282].value}),(0,e.jsx)("td",{children:n[283].value}),(0,e.jsx)("td",{children:n[284].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[285].value}),(0,e.jsx)("td",{children:n[286].value}),(0,e.jsx)("td",{children:n[287].value}),(0,e.jsx)("td",{children:n[288].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[289].value}),(0,e.jsx)("td",{children:n[290].value}),(0,e.jsx)("td",{children:n[291].value}),(0,e.jsx)("td",{children:n[292].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[293].value}),(0,e.jsx)("td",{children:n[294].value}),(0,e.jsx)("td",{children:n[295].value}),(0,e.jsx)("td",{children:n[296].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[297].value}),(0,e.jsx)("td",{children:n[298].value}),(0,e.jsx)("td",{children:n[299].value}),(0,e.jsx)("td",{children:n[300].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[301].value}),(0,e.jsx)("td",{children:n[302].value}),(0,e.jsx)("td",{children:n[303].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[304].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[305].value}),(0,e.jsx)("td",{children:n[306].value}),(0,e.jsx)("td",{children:n[307].value}),(0,e.jsx)("td",{children:n[308].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h2",{id:"\u4E3B\u9898\u53D8\u91CFdesign-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898\u53D8\u91CFdesign-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898\u53D8\u91CF\uFF08Design Token\uFF09"]})]}),(0,e.jsx)(a.Z,{component:"TreeSelect"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"onchange-\u65F6\u5982\u4F55\u83B7\u5F97\u7236\u8282\u70B9\u4FE1\u606F",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#onchange-\u65F6\u5982\u4F55\u83B7\u5F97\u7236\u8282\u70B9\u4FE1\u606F",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"onChange \u65F6\u5982\u4F55\u83B7\u5F97\u7236\u8282\u70B9\u4FE1\u606F\uFF1F"]}),(0,e.jsxs)("p",{children:[n[309].value,(0,e.jsx)(r.Z,{href:"https://codesandbox.io/s/get-parent-node-in-onchange-eb1608",sourceType:"a",children:n[310].value})]}),(0,e.jsxs)("h3",{id:"\u81EA\u5B9A\u4E49-option-\u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u81EA\u5B9A\u4E49-option-\u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u81EA\u5B9A\u4E49 Option \u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E\uFF1F"]}),(0,e.jsxs)("p",{children:[n[311].value,(0,e.jsx)(r.Z,{to:"/components/select-cn",sourceType:"Link",children:n[312].value}),n[313].value]}),(0,e.jsxs)("h3",{id:"\u4E3A\u4F55\u5728\u641C\u7D22\u65F6-loaddata-\u4E0D\u4F1A\u89E6\u53D1\u5C55\u5F00",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u5728\u641C\u7D22\u65F6-loaddata-\u4E0D\u4F1A\u89E6\u53D1\u5C55\u5F00",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4F55\u5728\u641C\u7D22\u65F6 ",(0,e.jsx)("code",{children:n[314].value})," \u4E0D\u4F1A\u89E6\u53D1\u5C55\u5F00\uFF1F"]}),(0,e.jsxs)("p",{children:[n[315].value,(0,e.jsx)("code",{children:n[316].value}),n[317].value,(0,e.jsx)("code",{children:n[318].value}),n[319].value]}),(0,e.jsx)(s.Z,{lang:"tsx",children:n[320].value}),(0,e.jsxs)("h3",{id:"\u4E3A\u4F55\u5F39\u51FA\u6846\u4E0D\u80FD\u6A2A\u5411\u6EDA\u52A8",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u5F39\u51FA\u6846\u4E0D\u80FD\u6A2A\u5411\u6EDA\u52A8",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4F55\u5F39\u51FA\u6846\u4E0D\u80FD\u6A2A\u5411\u6EDA\u52A8\uFF1F"]}),(0,e.jsxs)("p",{children:[n[321].value,(0,e.jsx)("code",{children:n[322].value}),n[323].value]})]})]})})}c.default=o}}]);
