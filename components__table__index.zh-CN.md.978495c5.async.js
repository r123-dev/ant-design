"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2639],{560696:function(m,c,r){r.r(c);var p=r(502143),h=r(968521),x=r(720719),g=r(521587),o=r(759907),a=r(828089),b=r(825673),v=r(902068),j=r(574399),k=r(863942),y=r(316073),f=r(24628),w=r(719260),S=r(956140),s=r(127179),l=r(905388),_=r(245583),C=r(606965),L=r(268696),I=r(587302),t=r(424128),T=r(249706),R=r(795127),N=r(116846),B=r(720538),P=r(212039),A=r(73024),D=r(553913),d=r(830084),E=r(667294),e=r(785893);function i(){var u=(0,d.eL)(),n=u.texts;return(0,e.jsx)(d.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[1].value}),(0,e.jsx)("li",{children:n[2].value})]}),(0,e.jsxs)("h2",{id:"\u5982\u4F55\u4F7F\u7528",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u4F7F\u7528"]}),(0,e.jsxs)("p",{children:[n[3].value,(0,e.jsx)("code",{children:n[4].value}),n[5].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[6].value}),(0,e.jsxs)("h2",{id:"\u76F8\u5173\u63A8\u8350",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u76F8\u5173\u63A8\u8350",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u76F8\u5173\u63A8\u8350"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)(t.Z,{href:"https://kitchen.alipay.com/",sourceType:"a",children:n[7].value}),n[8].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)(t.Z,{href:"https://procomponents.ant.design/components/table-cn",sourceType:"a",children:n[9].value}),n[10].value,(0,e.jsx)("code",{children:n[11].value}),n[12].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)(t.Z,{href:"https://s2.antv.vision/zh",sourceType:"a",children:n[13].value}),n[14].value,(0,e.jsx)(t.Z,{href:"https://zhuanlan.zhihu.com/p/494995642",sourceType:"a",children:n[15].value})]})]}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(l.Z,{items:[{demo:{id:"components-table-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/table/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
`,description:"<p>\u7B80\u5355\u7684\u8868\u683C\uFF0C\u6700\u540E\u4E00\u5217\u662F\u5404\u79CD\u64CD\u4F5C\u3002</p>"}},{demo:{id:"components-table-demo-jsx"},previewerProps:{title:"JSX \u98CE\u683C\u7684 API",filename:"components/table/demo/jsx.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const App = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
export default App;
`,description:`<p>\u4F7F\u7528 JSX \u98CE\u683C\u7684 API\uFF082.5.0 \u4EE5\u540E\u5F15\u5165\uFF09</p>
<blockquote>
<p>\u8FD9\u4E2A\u53EA\u662F\u4E00\u4E2A\u63CF\u8FF0 <code>columns</code> \u7684\u8BED\u6CD5\u7CD6\uFF0C\u6240\u4EE5\u4F60\u4E0D\u80FD\u7528\u5176\u4ED6\u7EC4\u4EF6\u53BB\u5305\u88F9 <code>Column</code> \u548C <code>ColumnGroup</code>\u3002</p>
</blockquote>`}},{demo:{id:"components-table-demo-row-selection"},previewerProps:{title:"\u53EF\u9009\u62E9",filename:"components/table/demo/row-selection.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
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
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
const App = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default App;
`,description:`<p>\u7B2C\u4E00\u5217\u662F\u8054\u52A8\u7684\u9009\u62E9\u6846\u3002\u53EF\u4EE5\u901A\u8FC7 <code>rowSelection.type</code> \u5C5E\u6027\u6307\u5B9A\u9009\u62E9\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code>checkbox</code>\u3002</p>
<blockquote>
<p>\u9ED8\u8BA4\u70B9\u51FB checkbox \u89E6\u53D1\u9009\u62E9\u884C\u4E3A\uFF0C\u9700\u8981\u70B9\u51FB\u884C\u89E6\u53D1\u53EF\u4EE5\u53C2\u8003\u4F8B\u5B50\uFF1A<a href="https://codesandbox.io/s/000vqw38rl">https://codesandbox.io/s/000vqw38rl</a></p>
</blockquote>`}},{demo:{id:"components-table-demo-row-selection-and-operation"},previewerProps:{title:"\u9009\u62E9\u548C\u64CD\u4F5C",filename:"components/table/demo/row-selection-and-operation.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}
const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? \`Selected \${selectedRowKeys.length} items\` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
export default App;
`,description:"<p>\u9009\u62E9\u540E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5B8C\u6210\u540E\u6E05\u7A7A\u9009\u62E9\uFF0C\u901A\u8FC7 <code>rowSelection.selectedRowKeys</code> \u6765\u63A7\u5236\u9009\u4E2D\u9879\u3002</p>"}},{demo:{id:"components-table-demo-row-selection-custom"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u9009\u62E9\u9879",filename:"components/table/demo/row-selection-custom.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}
const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};
export default App;
`,description:"<p>\u901A\u8FC7 <code>rowSelection.selections</code> \u81EA\u5B9A\u4E49\u9009\u62E9\u9879\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793A\u4E0B\u62C9\u9009\u9879\uFF0C\u8BBE\u4E3A <code>true</code> \u65F6\u663E\u793A\u9ED8\u8BA4\u9009\u62E9\u9879\u3002</p>"}},{demo:{id:"components-table-demo-row-selection-debug"},previewerProps:{debug:!0,title:"\u9009\u62E9\u6027\u80FD",filename:"components/table/demo/row-selection-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Table, InputNumber } from 'antd';
const RenderTimes = () => {
  const timesRef = React.useRef(0);
  timesRef.current += 1;
  return <span>{timesRef.current}</span>;
};
const shouldCellUpdate = (record, prevRecord) => record !== prevRecord;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    shouldCellUpdate,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    shouldCellUpdate,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    shouldCellUpdate,
    render: (addr) => (
      <>
        {addr}
        <RenderTimes />
      </>
    ),
  },
];
function genData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      key: i,
      name: \`Edward King \${i}\`,
      age: 32,
      address: \`London, Park Lane no. \${i}\`,
    });
  }
  return data;
}
const App = () => {
  const [data, setData] = useState(genData(50));
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <>
      <InputNumber
        value={data.length}
        onChange={(cnt) => {
          setData(genData(cnt || 0));
        }}
      />
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
    </>
  );
};
export default App;
`,description:"<p>\u9AD8\u635F\u8017 <code>render</code> \u6027\u80FD\u8C03\u8BD5\u3002</p>"}},{demo:{id:"components-table-demo-head"},previewerProps:{title:"\u7B5B\u9009\u548C\u6392\u5E8F",filename:"components/table/demo/head.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with \`value\`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
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
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];
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
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default App;
`,description:`<p>\u5BF9\u67D0\u4E00\u5217\u6570\u636E\u8FDB\u884C\u7B5B\u9009\uFF0C\u4F7F\u7528\u5217\u7684 <code>filters</code> \u5C5E\u6027\u6765\u6307\u5B9A\u9700\u8981\u7B5B\u9009\u83DC\u5355\u7684\u5217\uFF0C<code>onFilter</code> \u7528\u4E8E\u7B5B\u9009\u5F53\u524D\u6570\u636E\uFF0C<code>filterMultiple</code> \u7528\u4E8E\u6307\u5B9A\u591A\u9009\u548C\u5355\u9009\u3002</p>
<p>\u5BF9\u67D0\u4E00\u5217\u6570\u636E\u8FDB\u884C\u6392\u5E8F\uFF0C\u901A\u8FC7\u6307\u5B9A\u5217\u7684 <code>sorter</code> \u51FD\u6570\u5373\u53EF\u542F\u52A8\u6392\u5E8F\u6309\u94AE\u3002<code>sorter: function(rowA, rowB) { ... }</code>\uFF0C rowA\u3001rowB \u4E3A\u6BD4\u8F83\u7684\u4E24\u4E2A\u884C\u6570\u636E\u3002</p>
<p><code>sortDirections: ['ascend' | 'descend']</code>\u6539\u53D8\u6BCF\u5217\u53EF\u7528\u7684\u6392\u5E8F\u65B9\u5F0F\uFF0C\u5207\u6362\u6392\u5E8F\u65F6\u6309\u6570\u7EC4\u5185\u5BB9\u4F9D\u6B21\u5207\u6362\uFF0C\u8BBE\u7F6E\u5728 table props \u4E0A\u65F6\u5BF9\u6240\u6709\u5217\u751F\u6548\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>['ascend', 'descend', 'ascend']</code> \u7981\u6B62\u6392\u5E8F\u6062\u590D\u5230\u9ED8\u8BA4\u72B6\u6001\u3002</p>
<p>\u4F7F\u7528 <code>defaultSortOrder</code> \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u5217\u7684\u9ED8\u8BA4\u6392\u5E8F\u987A\u5E8F\u3002</p>`}},{demo:{id:"components-table-demo-filter-in-tree"},previewerProps:{title:"\u6811\u578B\u7B5B\u9009\u83DC\u5355",filename:"components/table/demo/filter-in-tree.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
        children: [
          {
            text: 'Yellow',
            value: 'Yellow',
          },
          {
            text: 'Pink',
            value: 'Pink',
          },
        ],
      },
      {
        text: 'Category 2',
        value: 'Category 2',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
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
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
];
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
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default App;
`,description:"<p>\u53EF\u4EE5\u4F7F\u7528 <code>filterMode</code> \u6765\u4FEE\u6539\u7B5B\u9009\u83DC\u5355\u7684 UI\uFF0C\u53EF\u9009\u503C\u6709 <code>menu</code>\uFF08\u9ED8\u8BA4\uFF09\u548C <code>tree</code>\u3002</p>"}},{demo:{id:"components-table-demo-filter-search"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u7B5B\u9009\u7684\u641C\u7D22",filename:"components/table/demo/filter-search.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
      },
      {
        text: 'Category 2',
        value: 'Category 2',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
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
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
];
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
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default App;
`,description:"<p><code>filterSearch</code> \u7528\u4E8E\u5F00\u542F\u7B5B\u9009\u9879\u7684\u641C\u7D22\uFF0C\u901A\u8FC7 <code>filterSearch:(input, record) => boolean</code> \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7B5B\u9009\u65B9\u6CD5</p>"}},{demo:{id:"components-table-demo-multiple-sorter"},previewerProps:{title:"\u591A\u5217\u6392\u5E8F",filename:"components/table/demo/multiple-sorter.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default App;
`,description:"<p><code>column.sorter</code> \u652F\u6301 <code>multiple</code> \u5B57\u6BB5\u4EE5\u914D\u7F6E\u591A\u5217\u6392\u5E8F\u4F18\u5148\u7EA7\u3002\u901A\u8FC7 <code>sorter.compare</code> \u914D\u7F6E\u6392\u5E8F\u903B\u8F91\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0D\u8BBE\u7F6E\u8BE5\u51FD\u6570\u53EA\u542F\u52A8\u591A\u5217\u6392\u5E8F\u7684\u4EA4\u4E92\u5F62\u5F0F\u3002</p>"}},{demo:{id:"components-table-demo-reset-filter"},previewerProps:{title:"\u53EF\u63A7\u7684\u7B5B\u9009\u548C\u6392\u5E8F",filename:"components/table/demo/reset-filter.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Space, Table } from 'antd';
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
const App = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
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
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
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
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
  );
};
export default App;
`,description:`<p>\u4F7F\u7528\u53D7\u63A7\u5C5E\u6027\u5BF9\u7B5B\u9009\u548C\u6392\u5E8F\u72B6\u6001\u8FDB\u884C\u63A7\u5236\u3002</p>
<blockquote>
<ol>
<li>columns \u4E2D\u5B9A\u4E49\u4E86 filteredValue \u548C sortOrder \u5C5E\u6027\u5373\u89C6\u4E3A\u53D7\u63A7\u6A21\u5F0F\u3002</li>
<li>\u53EA\u652F\u6301\u540C\u65F6\u5BF9\u4E00\u5217\u8FDB\u884C\u6392\u5E8F\uFF0C\u8BF7\u4FDD\u8BC1\u53EA\u6709\u4E00\u5217\u7684 sortOrder \u5C5E\u6027\u662F\u751F\u6548\u7684\u3002</li>
<li>\u52A1\u5FC5\u6307\u5B9A <code>column.key</code>\u3002</li>
</ol>
</blockquote>`}},{demo:{id:"components-table-demo-custom-filter-panel"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355",filename:"components/table/demo/custom-filter-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
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
const App = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={\`Search \${dataIndex}\`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};
export default App;
`,description:`<p>\u901A\u8FC7 <code>filterDropdown</code> \u81EA\u5B9A\u4E49\u7684\u5217\u7B5B\u9009\u529F\u80FD\uFF0C\u5E76\u5B9E\u73B0\u4E00\u4E2A\u641C\u7D22\u5217\u7684\u793A\u4F8B\u3002</p>
<p>\u7ED9\u51FD\u6570 <code>clearFilters</code> \u6DFB\u52A0 <code>boolean</code> \u7C7B\u578B\u53C2\u6570 <code>closeDropdown</code>\uFF0C\u662F\u5426\u5173\u95ED\u7B5B\u9009\u83DC\u5355\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code>\u3002\u6DFB\u52A0 <code>boolean</code> \u7C7B\u578B\u53C2\u6570 <code>confirm</code>\uFF0C\u6E05\u9664\u7B5B\u9009\u65F6\u662F\u5426\u63D0\u4EA4\u5DF2\u9009\u9879\uFF0C\u9ED8\u8BA4 <code>true</code>\u3002</p>`}},{demo:{id:"components-table-demo-ajax"},previewerProps:{title:"\u8FDC\u7A0B\u52A0\u8F7D\u6570\u636E",filename:"components/table/demo/ajax.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => \`\${name.first} \${name.last}\`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      {
        text: 'Male',
        value: 'male',
      },
      {
        text: 'Female',
        value: 'female',
      },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(\`https://randomuser.me/api?\${qs.stringify(getRandomuserParams(tableParams))}\`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // \`dataSource\` is useless since \`pageSize\` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
export default App;
`,description:`<p>\u8FD9\u4E2A\u4F8B\u5B50\u901A\u8FC7\u7B80\u5355\u7684 ajax \u8BFB\u53D6\u65B9\u5F0F\uFF0C\u6F14\u793A\u4E86\u5982\u4F55\u4ECE\u670D\u52A1\u7AEF\u8BFB\u53D6\u5E76\u5C55\u73B0\u6570\u636E\uFF0C\u5177\u6709\u7B5B\u9009\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u4EE5\u53CA\u9875\u9762 loading \u6548\u679C\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u884C\u63A5\u5165\u5176\u4ED6\u6570\u636E\u5904\u7406\u65B9\u5F0F\u3002</p>
<p>\u53E6\u5916\uFF0C\u672C\u4F8B\u4E5F\u5C55\u793A\u4E86\u7B5B\u9009\u6392\u5E8F\u529F\u80FD\u5982\u4F55\u4EA4\u7ED9\u670D\u52A1\u7AEF\u5B9E\u73B0\uFF0C\u5217\u4E0D\u9700\u8981\u6307\u5B9A\u5177\u4F53\u7684 <code>onFilter</code> \u548C <code>sorter</code> \u51FD\u6570\uFF0C\u800C\u662F\u5728\u628A\u7B5B\u9009\u548C\u6392\u5E8F\u7684\u53C2\u6570\u53D1\u5230\u670D\u52A1\u7AEF\u6765\u5904\u7406\u3002</p>
<p>\u5F53\u4F7F\u7528 <code>rowSelection</code> \u65F6\uFF0C\u8BF7\u8BBE\u7F6E <code>rowSelection.preserveSelectedRowKeys</code> \u5C5E\u6027\u4EE5\u4FDD\u7559 <code>key</code>\u3002</p>
<p><strong>\u6CE8\u610F\uFF0C\u6B64\u793A\u4F8B\u4F7F\u7528 <a href="https://randomuser.me">\u6A21\u62DF\u63A5\u53E3</a>\uFF0C\u5C55\u793A\u6570\u636E\u53EF\u80FD\u4E0D\u51C6\u786E\uFF0C\u8BF7\u6253\u5F00\u7F51\u7EDC\u9762\u677F\u67E5\u770B\u8BF7\u6C42\u3002</strong></p>
<blockquote>
<p>\u{1F6CE}\uFE0F \u60F3\u8981 3 \u5206\u949F\u5B9E\u73B0\uFF1F\u8BD5\u8BD5 <a href="https://procomponents.ant.design/components/table">ProTable</a>\uFF01</p>
</blockquote>`}},{demo:{id:"components-table-demo-size"},previewerProps:{title:"\u7D27\u51D1\u578B",filename:"components/table/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table, Divider } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
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
];
const App = () => (
  <>
    <Divider>Middle size table</Divider>
    <Table columns={columns} dataSource={data} size="middle" />
    <Divider>Small size table</Divider>
    <Table columns={columns} dataSource={data} size="small" />
  </>
);
export default App;
`,description:"<p>\u4E24\u79CD\u7D27\u51D1\u578B\u7684\u5217\u8868\uFF0C\u5C0F\u578B\u5217\u8868\u53EA\u7528\u4E8E\u5BF9\u8BDD\u6846\u5185\u3002</p>"}},{demo:{id:"components-table-demo-narrow"},previewerProps:{debug:!0,title:"\u7D27\u51D1\u578B",filename:"components/table/demo/narrow.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 200; i += 1) {
  data.push({
    key: i,
    name: 'Sample Name',
    age: 30 + (i % 5),
    address: \`Sample Address \${i}\`,
  });
}
const App = () => (
  <div
    style={{
      width: 300,
    }}
  >
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      pagination={{
        defaultCurrent: 13,
      }}
    />
  </div>
);
export default App;
`,description:"<p>\u4E24\u79CD\u7D27\u51D1\u578B\u7684\u5217\u8868\uFF0C\u5C0F\u578B\u5217\u8868\u53EA\u7528\u4E8E\u5BF9\u8BDD\u6846\u5185\u3002</p>"}},{demo:{id:"components-table-demo-bordered"},previewerProps:{title:"\u5E26\u8FB9\u6846",filename:"components/table/demo/bordered.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '\uFFE5300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '\uFFE51,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '\uFFE5120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
];
const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Header'}
    footer={() => 'Footer'}
  />
);
export default App;
`,description:"<p>\u6DFB\u52A0\u8868\u683C\u8FB9\u6846\u7EBF\uFF0C\u9875\u5934\u548C\u9875\u811A\u3002</p>"}},{demo:{id:"components-table-demo-expand"},previewerProps:{title:"\u53EF\u5C55\u5F00",filename:"components/table/demo/expand.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];
const App = () => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
);
export default App;
`,description:"<p>\u5F53\u8868\u683C\u5185\u5BB9\u8F83\u591A\u4E0D\u80FD\u4E00\u6B21\u6027\u5B8C\u5168\u5C55\u793A\u65F6\u3002</p>"}},{demo:{id:"components-table-demo-order-column"},previewerProps:{title:"\u7279\u6B8A\u5217\u6392\u5E8F",filename:"components/table/demo/order-column.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  Table.EXPAND_COLUMN,
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  Table.SELECTION_COLUMN,
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];
const App = () => (
  <Table
    columns={columns}
    rowSelection={{}}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
    }}
    dataSource={data}
  />
);
export default App;
`,description:"<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>Table.EXPAND_COLUMN</code> \u548C <code>Table.SELECT_COLUMN</code> \u6765\u63A7\u5236\u9009\u62E9\u548C\u5C55\u5F00\u5217\u7684\u987A\u5E8F\u3002</p>"}},{demo:{id:"components-table-demo-colspan-rowspan"},previewerProps:{title:"\u8868\u683C\u884C/\u5217\u5408\u5E76",filename:"components/table/demo/colspan-rowspan.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_, index) => {
  if (index === 1) {
    return {
      colSpan: 0,
    };
  }
  return {};
};
const columns = [
  {
    title: 'RowHead',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 5 : 1,
    }),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    onCell: sharedOnCell,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    onCell: (_, index) => {
      if (index === 3) {
        return {
          rowSpan: 2,
        };
      }
      // These two are merged into above cell
      if (index === 4) {
        return {
          rowSpan: 0,
        };
      }
      if (index === 1) {
        return {
          colSpan: 0,
        };
      }
      return {};
    },
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    onCell: sharedOnCell,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    onCell: sharedOnCell,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];
const App = () => <Table columns={columns} dataSource={data} bordered />;
export default App;
`,description:`<p>\u8868\u5934\u53EA\u652F\u6301\u5217\u5408\u5E76\uFF0C\u4F7F\u7528 column \u91CC\u7684 colSpan \u8FDB\u884C\u8BBE\u7F6E\u3002</p>
<p>\u8868\u683C\u652F\u6301\u884C/\u5217\u5408\u5E76\uFF0C\u4F7F\u7528 render \u91CC\u7684\u5355\u5143\u683C\u5C5E\u6027 colSpan \u6216\u8005 rowSpan \u8BBE\u503C\u4E3A 0 \u65F6\uFF0C\u8BBE\u7F6E\u7684\u8868\u683C\u4E0D\u4F1A\u6E32\u67D3\u3002</p>`}},{demo:{id:"components-table-demo-tree-data"},previewerProps:{title:"\u6811\u5F62\u6570\u636E\u5C55\u793A",filename:"components/table/demo/tree-data.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Space, Switch, Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
const App = () => {
  const [checkStrictly, setCheckStrictly] = useState(false);
  return (
    <>
      <Space
        align="center"
        style={{
          marginBottom: 16,
        }}
      >
        CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
      </Space>
      <Table
        columns={columns}
        rowSelection={{
          ...rowSelection,
          checkStrictly,
        }}
        dataSource={data}
      />
    </>
  );
};
export default App;
`,description:`<p>\u8868\u683C\u652F\u6301\u6811\u5F62\u6570\u636E\u7684\u5C55\u793A\uFF0C\u5F53\u6570\u636E\u4E2D\u6709 <code>children</code> \u5B57\u6BB5\u65F6\u4F1A\u81EA\u52A8\u5C55\u793A\u4E3A\u6811\u5F62\u8868\u683C\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u6216\u914D\u7F6E\u4E3A\u5176\u4ED6\u5B57\u6BB5\u53EF\u4EE5\u7528 <code>childrenColumnName</code> \u8FDB\u884C\u914D\u7F6E\u3002</p>
<p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>indentSize</code> \u4EE5\u63A7\u5236\u6BCF\u4E00\u5C42\u7684\u7F29\u8FDB\u5BBD\u5EA6\u3002</p>`}},{demo:{id:"components-table-demo-tree-table-ellipsis"},previewerProps:{debug:!0,title:"\u6811\u5F62\u6570\u636E\u7701\u7565\u60C5\u51B5\u6D4B\u8BD5",filename:"components/table/demo/tree-table-ellipsis.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Space, Switch, Table } from 'antd';
const data = [
  {
    key: 1,
    name: 'John Brown sr. John Brown sr. John Brown sr. John Brown sr. John Brown sr. John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown sr. John Brown sr. John Brown sr. John Brown sr. John Brown sr. John Brown sr.',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown sr. John Brown sr. John Brown sr. John Brown sr. John Brown sr. John Brown sr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'John Brown sr. John Brown sr. John Brown sr. John Brown sr. John Brown sr. John Brown sr.',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr. Jim Green sr. Jim Green sr. Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green. Jim Green. Jim Green. Jim Green. Jim Green. Jim Green.',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr. Jim Green jr. Jim Green jr. Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr. Jimmy Green sr. Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];
const App = () => {
  const [fixed, setFixed] = useState(true);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ellipsis: true,
      fixed,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <>
      <Space
        align="center"
        style={{
          marginBottom: 16,
        }}
      >
        Fixed first column: <Switch checked={fixed} onChange={setFixed} />
      </Space>
      <Table
        columns={columns}
        rowSelection={{
          columnWidth: 100,
        }}
        expandable={{
          defaultExpandAllRows: true,
        }}
        dataSource={data}
      />
    </>
  );
};
export default App;
`,description:'<p><a href="https://github.com/ant-design/ant-design/issues/36583">https://github.com/ant-design/ant-design/issues/36583</a></p>'}},{demo:{id:"components-table-demo-fixed-header"},previewerProps:{title:"\u56FA\u5B9A\u8868\u5934",filename:"components/table/demo/fixed-header.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}
const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 240,
    }}
  />
);
export default App;
`,description:`<p>\u65B9\u4FBF\u4E00\u9875\u5185\u5C55\u793A\u5927\u91CF\u6570\u636E\u3002</p>
<p>\u9700\u8981\u6307\u5B9A column \u7684 <code>width</code> \u5C5E\u6027\uFF0C\u5426\u5219\u5217\u5934\u548C\u5185\u5BB9\u53EF\u80FD\u4E0D\u5BF9\u9F50\u3002\u5982\u679C\u6307\u5B9A <code>width</code> \u4E0D\u751F\u6548\u6216\u51FA\u73B0\u767D\u8272\u5782\u76F4\u7A7A\u9699\uFF0C\u8BF7\u5C1D\u8BD5\u5EFA\u8BAE\u7559\u4E00\u5217\u4E0D\u8BBE\u5BBD\u5EA6\u4EE5\u9002\u5E94\u5F39\u6027\u5E03\u5C40\uFF0C\u6216\u8005\u68C0\u67E5\u662F\u5426\u6709<a href="https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241">\u8D85\u957F\u8FDE\u7EED\u5B57\u6BB5\u7834\u574F\u5E03\u5C40</a>\u3002</p>`}},{demo:{id:"components-table-demo-fixed-columns"},previewerProps:{title:"\u56FA\u5B9A\u5217",filename:"components/table/demo/fixed-columns.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
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
    sorter: true,
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
const data = [
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
const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1300,
    }}
  />
);
export default App;
`,description:`<p>\u5BF9\u4E8E\u5217\u6570\u5F88\u591A\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u56FA\u5B9A\u524D\u540E\u7684\u5217\uFF0C\u6A2A\u5411\u6EDA\u52A8\u67E5\u770B\u5176\u5B83\u6570\u636E\uFF0C\u9700\u8981\u548C <code>scroll.x</code> \u914D\u5408\u4F7F\u7528\u3002</p>
<blockquote>
<p>\u82E5\u5217\u5934\u4E0E\u5185\u5BB9\u4E0D\u5BF9\u9F50\u6216\u51FA\u73B0\u5217\u91CD\u590D\uFF0C\u8BF7\u6307\u5B9A<strong>\u56FA\u5B9A\u5217</strong>\u7684\u5BBD\u5EA6 <code>width</code>\u3002\u5982\u679C\u6307\u5B9A <code>width</code> \u4E0D\u751F\u6548\u6216\u51FA\u73B0\u767D\u8272\u5782\u76F4\u7A7A\u9699\uFF0C\u8BF7\u5C1D\u8BD5\u5EFA\u8BAE\u7559\u4E00\u5217\u4E0D\u8BBE\u5BBD\u5EA6\u4EE5\u9002\u5E94\u5F39\u6027\u5E03\u5C40\uFF0C\u6216\u8005\u68C0\u67E5\u662F\u5426\u6709<a href="https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241">\u8D85\u957F\u8FDE\u7EED\u5B57\u6BB5\u7834\u574F\u5E03\u5C40</a>\u3002</p>
<p>\u5EFA\u8BAE\u6307\u5B9A <code>scroll.x</code> \u4E3A\u5927\u4E8E\u8868\u683C\u5BBD\u5EA6\u7684\u56FA\u5B9A\u503C\u6216\u767E\u5206\u6BD4\u3002\u6CE8\u610F\uFF0C\u4E14\u975E\u56FA\u5B9A\u5217\u5BBD\u5EA6\u4E4B\u548C\u4E0D\u8981\u8D85\u8FC7 <code>scroll.x</code>\u3002</p>
</blockquote>
<p><strong>\u6CE8\u610F\uFF1Av4 \u7248\u672C\u56FA\u5B9A\u5217\u901A\u8FC7 sticky \u5B9E\u73B0\uFF0CIE 11 \u4F1A\u964D\u7EA7\u6210\u6A2A\u5411\u6EDA\u52A8\u3002</strong></p>`}},{demo:{id:"components-table-demo-fixed-columns-header"},previewerProps:{title:"\u56FA\u5B9A\u5934\u548C\u5217",filename:"components/table/demo/fixed-columns-header.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
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
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
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
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}
const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
);
export default App;
`,description:`<p>\u9002\u5408\u540C\u65F6\u5C55\u793A\u6709\u5927\u91CF\u6570\u636E\u548C\u6570\u636E\u5217\u3002</p>
<blockquote>
<p>\u82E5\u5217\u5934\u4E0E\u5185\u5BB9\u4E0D\u5BF9\u9F50\u6216\u51FA\u73B0\u5217\u91CD\u590D\uFF0C\u8BF7\u6307\u5B9A<strong>\u56FA\u5B9A\u5217</strong>\u7684\u5BBD\u5EA6 <code>width</code>\u3002\u5982\u679C\u6307\u5B9A <code>width</code> \u4E0D\u751F\u6548\u6216\u51FA\u73B0\u767D\u8272\u5782\u76F4\u7A7A\u9699\uFF0C\u8BF7\u5C1D\u8BD5\u5EFA\u8BAE\u7559\u4E00\u5217\u4E0D\u8BBE\u5BBD\u5EA6\u4EE5\u9002\u5E94\u5F39\u6027\u5E03\u5C40\uFF0C\u6216\u8005\u68C0\u67E5\u662F\u5426\u6709<a href="https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241">\u8D85\u957F\u8FDE\u7EED\u5B57\u6BB5\u7834\u574F\u5E03\u5C40</a>\u3002</p>
<p>\u5EFA\u8BAE\u6307\u5B9A <code>scroll.x</code> \u4E3A\u5927\u4E8E\u8868\u683C\u5BBD\u5EA6\u7684\u56FA\u5B9A\u503C\u6216\u767E\u5206\u6BD4\u3002\u6CE8\u610F\uFF0C\u4E14\u975E\u56FA\u5B9A\u5217\u5BBD\u5EA6\u4E4B\u548C\u4E0D\u8981\u8D85\u8FC7 <code>scroll.x</code>\u3002</p>
</blockquote>`}},{demo:{id:"components-table-demo-grouping-columns"},previewerProps:{title:"\u8868\u5934\u5206\u7EC4",filename:"components/table/demo/grouping-columns.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}
const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
    scroll={{
      x: 'calc(700px + 50%)',
      y: 240,
    }}
  />
);
export default App;
`,description:"<p><code>columns[n]</code> \u53EF\u4EE5\u5185\u5D4C <code>children</code>\uFF0C\u4EE5\u6E32\u67D3\u5206\u7EC4\u8868\u5934\u3002</p>"}},{demo:{id:"components-table-demo-edit-cell"},previewerProps:{title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C",filename:"components/table/demo/edit-cell.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: \`\${title} is required.\`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
const App = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      name: \`Edward King \${count}\`,
      age: '32',
      address: \`London, Park Lane no. \${count}\`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};
export default App;
`,description:'<p>\u5E26\u5355\u5143\u683C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\u3002\u5F53\u914D\u5408 <code>shouldCellUpdate</code> \u4F7F\u7528\u65F6\u8BF7\u6CE8\u610F<a href="https://github.com/ant-design/ant-design/issues/29243">\u95ED\u5305\u95EE\u9898</a>\u3002</p>',style:`.editable-cell {
  position: relative;
}

.editable-cell-value-wrap {
  padding: 5px 12px;
  cursor: pointer;
}

.editable-row:hover .editable-cell-value-wrap {
  padding: 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}`}},{demo:{id:"components-table-demo-edit-row"},previewerProps:{title:"\u53EF\u7F16\u8F91\u884C",filename:"components/table/demo/edit-row.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: \`Edward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: \`Please Input \${title}!\`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default App;
`,description:`<p>\u5E26\u884C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\u3002</p>
<blockquote>
<p>\u{1F6CE}\uFE0F \u60F3\u8981 3 \u5206\u949F\u5B9E\u73B0\uFF1F\u8BD5\u8BD5 <a href="https://procomponents.ant.design/components/editable-table">ProTable \u7684\u53EF\u7F16\u8F91\u8868\u683C</a>\uFF01</p>
</blockquote>`,style:`.editable-row .ant-form-item-explain {
  position: absolute;
  top: 100%;
  font-size: 12px;
}`}},{demo:{id:"components-table-demo-nested-table"},previewerProps:{title:"\u5D4C\u5957\u5B50\u8868\u683C",filename:"components/table/demo/nested-table.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';
const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];
const App = () => {
  const expandedRowRender = () => {
    const columns = [
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
        render: () => <Badge status="success" text="Finished" />,
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
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
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
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screen',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
        size="middle"
      />
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
        size="small"
      />
    </>
  );
};
export default App;
`,description:"<p>\u5C55\u793A\u6BCF\u884C\u6570\u636E\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002</p>"}},{demo:{id:"components-table-demo-drag-sorting"},previewerProps:{title:"\u62D6\u62FD\u6392\u5E8F",filename:"components/table/demo/drag-sorting.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const Row = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props['data-row-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      },
    ),
    transition,
    cursor: 'move',
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
        }
      : {}),
  };
  return <tr {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};
const App = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address:
        'Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text',
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
      address: 'Sidney No. 1 Lake Park',
    },
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // https://docs.dndkit.com/api-documentation/sensors/pointer#activation-constraints
        distance: 1,
      },
    }),
  );
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  return (
    <DndContext sensors={sensors} modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="key"
          columns={columns}
          dataSource={dataSource}
        />
      </SortableContext>
    </DndContext>
  );
};
export default App;
`,description:'<p>\u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u6211\u4EEC\u53EF\u4EE5\u96C6\u6210 <a href="https://github.com/clauderic/dnd-kit">dnd-kit</a> \u6765\u5B9E\u73B0\u62D6\u62FD\u6392\u5E8F\u3002</p>'}},{demo:{id:"components-table-demo-drag-sorting-handler"},previewerProps:{title:"\u62D6\u62FD\u624B\u67C4\u5217",filename:"components/table/demo/drag-sorting-handler.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { MenuOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';
import { Table } from 'antd';
const columns = [
  {
    key: 'sort',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const Row = ({ children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      },
    ),
    transition,
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
        }
      : {}),
  };
  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if (child.key === 'sort') {
          return React.cloneElement(child, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{
                  touchAction: 'none',
                  cursor: 'move',
                }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};
const App = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address:
        'Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text',
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
      address: 'Sidney No. 1 Lake Park',
    },
  ]);
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };
  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="key"
          columns={columns}
          dataSource={dataSource}
        />
      </SortableContext>
    </DndContext>
  );
};
export default App;
`,description:'<p>\u4F7F\u7528 <a href="https://github.com/clauderic/dnd-kit">dnd-kit</a> \u6765\u5B9E\u73B0\u4E00\u4E2A\u62D6\u62FD\u64CD\u4F5C\u5217\u3002</p>'}},{demo:{id:"components-table-demo-resizable-column"},previewerProps:{debug:!0,title:"\u53EF\u4F38\u7F29\u5217",filename:"components/table/demo/resizable-column.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import { Table } from 'antd';
const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;
  if (!width) {
    return <th {...restProps} />;
  }
  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{
        enableUserSelectHack: false,
      }}
    >
      <th {...restProps} />
    </Resizable>
  );
};
const App = () => {
  const [columns, setColumns] = useState([
    {
      title: 'Date',
      dataIndex: 'date',
      width: 200,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: 100,
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      width: 100,
    },
    {
      title: 'Note',
      dataIndex: 'note',
      width: 100,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <a>Delete</a>,
    },
  ]);
  const data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    },
  ];
  const handleResize =
    (index) =>
    (_, { size }) => {
      const newColumns = [...columns];
      newColumns[index] = {
        ...newColumns[index],
        width: size.width,
      };
      setColumns(newColumns);
    };
  const mergeColumns = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));
  return (
    <Table
      bordered
      components={{
        header: {
          cell: ResizableTitle,
        },
      }}
      columns={mergeColumns}
      dataSource={data}
    />
  );
};
export default App;
`,description:'<p>\u96C6\u6210 <a href="https://github.com/STRML/react-resizable">react-resizable</a> \u6765\u5B9E\u73B0\u53EF\u4F38\u7F29\u5217\u3002\u5982\u679C\u6709\u6392\u5E8F\u9700\u8981\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="https://codesandbox.io/s/zrj8xvyzxx">\u989D\u5916\u6807\u8BB0</a>\u963B\u6B62\u89E6\u53D1\u6392\u5E8F\u3002</p>',style:`#components-table-demo-resizable-column .react-resizable {
  position: relative;
  background-clip: padding-box;
}

#components-table-demo-resizable-column .react-resizable-handle {
  position: absolute;
  right: -5px;
  bottom: 0;
  z-index: 1;
  width: 10px;
  height: 100%;
  cursor: col-resize;
}`}},{demo:{id:"components-table-demo-ellipsis"},previewerProps:{title:"\u5355\u5143\u683C\u81EA\u52A8\u7701\u7565",filename:"components/table/demo/ellipsis.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park, Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
`,description:`<p>\u8BBE\u7F6E <code>column.ellipsis</code> \u53EF\u4EE5\u8BA9\u5355\u5143\u683C\u5185\u5BB9\u6839\u636E\u5BBD\u5EA6\u81EA\u52A8\u7701\u7565\u3002</p>
<blockquote>
<p>\u5217\u5934\u7F29\u7565\u6682\u4E0D\u652F\u6301\u548C\u6392\u5E8F\u7B5B\u9009\u4E00\u8D77\u4F7F\u7528\u3002</p>
</blockquote>`}},{demo:{id:"components-table-demo-ellipsis-custom-tooltip"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7701\u7565\u63D0\u793A",filename:"components/table/demo/ellipsis-custom-tooltip.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table, Tooltip } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park, Sydney No. 1 Lake Park',
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
`,description:"<p>\u8BBE\u7F6E <code>column.ellipsis.showTitle</code> \u5173\u95ED\u5355\u5143\u683C\u5185\u5BB9\u81EA\u52A8\u7701\u7565\u540E\u9ED8\u8BA4\u7684 <code>title</code> \u63D0\u793A, \u4F7F\u7528 <code>Tooltip</code> \u66FF\u4EE3\u3002</p>"}},{demo:{id:"components-table-demo-summary"},previewerProps:{title:"\u603B\u7ED3\u680F",filename:"components/table/demo/summary.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;
const columns = [
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
const data = [
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
const fixedColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: true,
    width: 100,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];
const fixedData = [];
for (let i = 0; i < 20; i += 1) {
  fixedData.push({
    key: i,
    name: ['Light', 'Bamboo', 'Little'][i % 3],
    description: 'Everything that has a beginning, has an end.',
  });
}
const App = () => (
  <>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
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
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                <Text type="danger">{totalBorrow}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                <Text>{totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Balance</Table.Summary.Cell>
              <Table.Summary.Cell index={1} colSpan={2}>
                <Text type="danger">{totalBorrow - totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />

    <br />

    <Table
      columns={fixedColumns}
      dataSource={fixedData}
      pagination={false}
      scroll={{
        x: 2000,
        y: 500,
      }}
      bordered
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
            <Table.Summary.Cell index={1}>This is a summary content</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  </>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>summary</code> \u8BBE\u7F6E\u603B\u7ED3\u680F\u3002\u4F7F\u7528 <code>Table.Summary.Cell</code> \u540C\u6B65 Column \u7684\u56FA\u5B9A\u72B6\u6001\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <code>Table.Summary</code> \u7684 <code>fixed</code> \u5C5E\u6027\u4F7F\u5176\u56FA\u5B9A(<code>4.16.0</code> \u652F\u6301)\u3002</p>"}},{demo:{id:"components-table-demo-virtual-list"},previewerProps:{version:">= 5.9.0",title:"\u865A\u62DF\u5217\u8868",filename:"components/table/demo/virtual-list.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Segmented, Space, Switch, Table, Typography } from 'antd';
const fixedColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'Group',
    width: 120,
    render: (_, record) => \`Group \${Math.floor(record.id / 4)}\`,
    onCell: (record) => ({
      rowSpan: record.id % 4 === 0 ? 4 : 0,
    }),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 100,
    onCell: (record) => ({
      colSpan: record.id % 4 === 0 ? 2 : 1,
    }),
  },
  {
    title: 'Address 1',
    dataIndex: 'address1',
    onCell: (record) => ({
      colSpan: record.id % 4 === 0 ? 0 : 1,
    }),
  },
  {
    title: 'Address 2',
    dataIndex: 'address2',
  },
  {
    title: 'Address 3',
    dataIndex: 'address3',
  },
  {
    title: 'Action',
    width: 150,
    fixed: 'right',
    render: () => (
      <Space>
        <Typography.Link>Action1</Typography.Link>
        <Typography.Link>Action2</Typography.Link>
      </Space>
    ),
  },
];
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120,
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    width: 120,
  },
];
const getData = (count) => {
  const data = new Array(count).fill(null).map((_, index) => ({
    id: index,
    firstName: \`First_\${index.toString(16)}\`,
    lastName: \`Last_\${index.toString(16)}\`,
    age: 25 + (index % 10),
    address1: \`New York No. \${index} Lake Park\`,
    address2: \`London No. \${index} Lake Park\`,
    address3: \`Sydney No. \${index} Lake Park\`,
  }));
  return data;
};
const App = () => {
  const [fixed, setFixed] = React.useState(true);
  const [bordered, setBordered] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [count, setCount] = React.useState(10000);
  const data = React.useMemo(() => getData(count), [count]);
  const mergedColumns = React.useMemo(() => {
    if (!fixed) {
      return columns;
    }
    if (!expanded) {
      return fixedColumns;
    }
    return fixedColumns.map((col) => ({
      ...col,
      onCell: undefined,
    }));
  }, [expanded, fixed]);
  const expandableProps = React.useMemo(() => {
    if (!expanded) {
      return undefined;
    }
    return {
      columnWidth: 48,
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          \u{1F389} Expanded {record.address1}
        </p>
      ),
      rowExpandable: (record) => record.id % 2 === 0,
    };
  }, [expanded]);
  return (
    <div
      style={{
        padding: 64,
      }}
    >
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Space>
          <Switch
            checked={bordered}
            onChange={() => setBordered(!bordered)}
            checkedChildren="Bordered"
            unCheckedChildren="Bordered"
          />
          <Switch
            checked={fixed}
            onChange={() => setFixed(!fixed)}
            checkedChildren="Fixed"
            unCheckedChildren="Fixed"
          />
          <Switch
            checked={expanded}
            onChange={() => setExpanded(!expanded)}
            checkedChildren="Expandable"
            unCheckedChildren="Expandable"
          />
          <Switch
            checked={empty}
            onChange={() => setEmpty(!empty)}
            checkedChildren="Empty"
            unCheckedChildren="Empty"
          />
          <Segmented
            value={count}
            onChange={(value) => setCount(value)}
            options={[
              {
                label: 'None',
                value: 0,
              },
              {
                label: 'Less',
                value: 4,
              },
              {
                label: 'Lot',
                value: 10000,
              },
            ]}
          />
        </Space>

        <Table
          bordered={bordered}
          virtual
          columns={mergedColumns}
          scroll={{
            x: 2000,
            y: 400,
          }}
          rowKey="id"
          dataSource={empty ? [] : data}
          pagination={false}
          rowSelection={
            expanded
              ? undefined
              : {
                  type: 'radio',
                  columnWidth: 48,
                }
          }
          expandable={expandableProps}
        />
      </Space>
    </div>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7 <code>virtual</code> \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\uFF0C\u6B64\u65F6 <code>scroll.x</code> \u4E0E <code>scroll.y</code> \u5FC5\u987B\u8BBE\u7F6E\u4E14\u4E3A <code>number</code> \u7C7B\u578B\u3002</p>"}},{demo:{id:"components-table-demo-responsive"},previewerProps:{title:"\u54CD\u5E94\u5F0F",filename:"components/table/demo/responsive.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
`,description:"<p>\u54CD\u5E94\u5F0F\u914D\u7F6E\u5217\u7684\u5C55\u793A\u3002</p>"}},{demo:{id:"components-table-demo-nest-table-border-debug"},previewerProps:{debug:!0,title:"\u5D4C\u5957\u5E26\u8FB9\u6846\u7684\u8868\u683C Debug",filename:"components/table/demo/nest-table-border-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Form, Space, Switch, Table } from 'antd';
const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];
const App = () => {
  const createExpandedRowRender = (bordered) => () => {
    const columns = [
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
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} bordered={bordered} />;
  };
  const columns = [
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
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }
  const [rootTableBordered, setRootTableBordered] = useState(true);
  const [childTableBordered, setChildTableBordered] = useState(true);
  return (
    <>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{
          marginBottom: 16,
        }}
      >
        <Form.Item label="Root Table Bordered">
          <Switch checked={rootTableBordered} onChange={(v) => setRootTableBordered(v)} />
        </Form.Item>
        <Form.Item label="Child Table Bordered">
          <Switch checked={childTableBordered} onChange={(v) => setChildTableBordered(v)} />
        </Form.Item>
      </Form>
      <Table
        title={() => 'cool'}
        footer={() => 'cool'}
        columns={columns}
        expandable={{
          expandedRowRender: createExpandedRowRender(childTableBordered),
        }}
        dataSource={data}
        bordered={rootTableBordered}
      />
    </>
  );
};
export default App;
`,description:"<p>\u770B\u770B\u8FB9\u6846\u7684\u6837\u5F0F\u662F\u4E0D\u662F\u5F71\u54CD\u5230\u522B\u7684\u8868\u683C\u3002</p>"}},{demo:{id:"components-table-demo-pagination"},previewerProps:{title:"\u5206\u9875\u8BBE\u7F6E",filename:"components/table/demo/pagination.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Radio, Space, Table, Tag } from 'antd';
const topOptions = [
  {
    label: 'topLeft',
    value: 'topLeft',
  },
  {
    label: 'topCenter',
    value: 'topCenter',
  },
  {
    label: 'topRight',
    value: 'topRight',
  },
  {
    label: 'none',
    value: 'none',
  },
];
const bottomOptions = [
  {
    label: 'bottomLeft',
    value: 'bottomLeft',
  },
  {
    label: 'bottomCenter',
    value: 'bottomCenter',
  },
  {
    label: 'bottomRight',
    value: 'bottomRight',
  },
  {
    label: 'none',
    value: 'none',
  },
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const App = () => {
  const [top, setTop] = useState('topLeft');
  const [bottom, setBottom] = useState('bottomRight');
  return (
    <div>
      <div>
        <Radio.Group
          style={{
            marginBottom: 10,
          }}
          options={topOptions}
          value={top}
          onChange={(e) => {
            setTop(e.target.value);
          }}
        />
      </div>
      <Radio.Group
        style={{
          marginBottom: 10,
        }}
        options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      />
      <Table
        columns={columns}
        pagination={{
          position: [top, bottom],
        }}
        dataSource={data}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u8868\u683C\u7684\u5206\u9875\u8BBE\u7F6E\u3002</p>"}},{demo:{id:"components-table-demo-row-selection-custom-debug"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u9009\u62E9\u9879\u7EC4",filename:"components/table/demo/row-selection-custom-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: i % 2 === 0 ? \`Edward King \${i}\` : 'Another Row',
  });
}
const App = () => {
  const rowSelection = {
    renderCell: (checked, _record, index, node) => ({
      props: {
        rowSpan: index % 2 === 0 ? 2 : 0,
      },
      children: (
        <>
          {String(checked)}: {node}
        </>
      ),
    }),
  };
  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u9009\u9879\u5206\u7EC4\u3002</p>"}},{demo:{id:"components-table-demo-sticky"},previewerProps:{title:"\u968F\u9875\u9762\u6EDA\u52A8\u7684\u56FA\u5B9A\u8868\u5934\u548C\u6EDA\u52A8\u6761",filename:"components/table/demo/sticky.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Switch, Table } from 'antd';
const columns = [
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
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
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
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}
const App = () => {
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
      }}
      summary={() => (
        <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} colSpan={8}>
              Scroll Context
            </Table.Summary.Cell>
            <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      // antd site header height
      sticky={{
        offsetHeader: 64,
      }}
    />
  );
};
export default App;
`,description:"<p>\u5BF9\u4E8E\u957F\u8868\u683C\uFF0C\u9700\u8981\u6EDA\u52A8\u624D\u80FD\u67E5\u770B\u8868\u5934\u548C\u6EDA\u52A8\u6761\uFF0C\u90A3\u4E48\u73B0\u5728\u53EF\u4EE5\u8BBE\u7F6E\u8DDF\u968F\u9875\u9762\u56FA\u5B9A\u8868\u5934\u548C\u6EDA\u52A8\u6761\u3002</p>"}},{demo:{id:"components-table-demo-dynamic-settings"},previewerProps:{title:"\u52A8\u6001\u63A7\u5236\u8868\u683C\u5C5E\u6027",filename:"components/table/demo/dynamic-settings.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Form, Radio, Space, Switch, Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
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
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];
const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(\`\${i}2\`),
    address: \`New York No. \${i} Lake Park\`,
    description: \`My name is John Brown, I am \${i}2 years old, living in New York No. \${i} Lake Park.\`,
  });
}
const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';
const App = () => {
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();
  const handleBorderChange = (enable) => {
    setBordered(enable);
  };
  const handleLoadingChange = (enable) => {
    setLoading(enable);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleTableLayoutChange = (e) => {
    setTableLayout(e.target.value);
  };
  const handleExpandChange = (enable) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };
  const handleEllipsisChange = (enable) => {
    setEllipsis(enable);
  };
  const handleTitleChange = (enable) => {
    setShowTitle(enable);
  };
  const handleHeaderChange = (enable) => {
    setShowHeader(enable);
  };
  const handleFooterChange = (enable) => {
    setShowFooter(enable);
  };
  const handleRowSelectionChange = (enable) => {
    setRowSelection(enable ? {} : undefined);
  };
  const handleYScrollChange = (enable) => {
    setYScroll(enable);
  };
  const handleXScrollChange = (e) => {
    setXScroll(e.target.value);
  };
  const handleDataChange = (newHasData) => {
    setHasData(newHasData);
  };
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };
  return (
    <>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{
          marginBottom: 16,
        }}
      >
        <Form.Item label="Bordered">
          <Switch checked={bordered} onChange={handleBorderChange} />
        </Form.Item>
        <Form.Item label="loading">
          <Switch checked={loading} onChange={handleLoadingChange} />
        </Form.Item>
        <Form.Item label="Title">
          <Switch checked={showTitle} onChange={handleTitleChange} />
        </Form.Item>
        <Form.Item label="Column Header">
          <Switch checked={showHeader} onChange={handleHeaderChange} />
        </Form.Item>
        <Form.Item label="Footer">
          <Switch checked={showfooter} onChange={handleFooterChange} />
        </Form.Item>
        <Form.Item label="Expandable">
          <Switch checked={!!expandable} onChange={handleExpandChange} />
        </Form.Item>
        <Form.Item label="Checkbox">
          <Switch checked={!!rowSelection} onChange={handleRowSelectionChange} />
        </Form.Item>
        <Form.Item label="Fixed Header">
          <Switch checked={!!yScroll} onChange={handleYScrollChange} />
        </Form.Item>
        <Form.Item label="Has Data">
          <Switch checked={!!hasData} onChange={handleDataChange} />
        </Form.Item>
        <Form.Item label="Ellipsis">
          <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
        </Form.Item>
        <Form.Item label="Size">
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Scroll">
          <Radio.Group value={xScroll} onChange={handleXScrollChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Layout">
          <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="fixed">Fixed</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Top">
          <Radio.Group
            value={top}
            onChange={(e) => {
              setTop(e.target.value);
            }}
          >
            <Radio.Button value="topLeft">TopLeft</Radio.Button>
            <Radio.Button value="topCenter">TopCenter</Radio.Button>
            <Radio.Button value="topRight">TopRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Bottom">
          <Radio.Group
            value={bottom}
            onChange={(e) => {
              setBottom(e.target.value);
            }}
          >
            <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
            <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
            <Radio.Button value="bottomRight">BottomRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  );
};
export default App;
`,description:"<p>\u9009\u62E9\u4E0D\u540C\u914D\u7F6E\u7EC4\u5408\u67E5\u770B\u6548\u679C\u3002</p>",style:`.components-table-demo-control-bar .ant-form-item {
  margin-right: 16px !important;
  margin-bottom: 8px !important;
}`}},{demo:{id:"components-table-demo-selections-debug"},previewerProps:{debug:!0,title:"\u5E26\u4E0B\u62C9\u7BAD\u5934\u7684\u8868\u5934",filename:"components/table/demo/selections-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
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
];
const App = () => (
  <Table
    bordered
    rowSelection={{
      type: 'checkbox',
      selections: true,
    }}
    columns={columns}
    dataSource={data}
  />
);
export default App;
`,description:"<p>\u8C03\u8BD5\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-table-demo-component-token"},previewerProps:{debug:!0,title:"\u7EC4\u4EF6 Token",filename:"components/table/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Form, Radio, Space, Switch, Table, ConfigProvider } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
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
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];
const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(\`\${i}2\`),
    address: \`New York No. \${i} Lake Park\`,
    description: \`My name is John Brown, I am \${i}2 years old, living in New York No. \${i} Lake Park.\`,
  });
}
const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';
const App = () => {
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();
  const handleBorderChange = (enable) => {
    setBordered(enable);
  };
  const handleLoadingChange = (enable) => {
    setLoading(enable);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleTableLayoutChange = (e) => {
    setTableLayout(e.target.value);
  };
  const handleExpandChange = (enable) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };
  const handleEllipsisChange = (enable) => {
    setEllipsis(enable);
  };
  const handleTitleChange = (enable) => {
    setShowTitle(enable);
  };
  const handleHeaderChange = (enable) => {
    setShowHeader(enable);
  };
  const handleFooterChange = (enable) => {
    setShowFooter(enable);
  };
  const handleRowSelectionChange = (enable) => {
    setRowSelection(enable ? {} : undefined);
  };
  const handleYScrollChange = (enable) => {
    setYScroll(enable);
  };
  const handleXScrollChange = (e) => {
    setXScroll(e.target.value);
  };
  const handleDataChange = (newHasData) => {
    setHasData(newHasData);
  };
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };
  return (
    <>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{
          marginBottom: 16,
        }}
      >
        <Form.Item label="Bordered">
          <Switch checked={bordered} onChange={handleBorderChange} />
        </Form.Item>
        <Form.Item label="loading">
          <Switch checked={loading} onChange={handleLoadingChange} />
        </Form.Item>
        <Form.Item label="Title">
          <Switch checked={showTitle} onChange={handleTitleChange} />
        </Form.Item>
        <Form.Item label="Column Header">
          <Switch checked={showHeader} onChange={handleHeaderChange} />
        </Form.Item>
        <Form.Item label="Footer">
          <Switch checked={showfooter} onChange={handleFooterChange} />
        </Form.Item>
        <Form.Item label="Expandable">
          <Switch checked={!!expandable} onChange={handleExpandChange} />
        </Form.Item>
        <Form.Item label="Checkbox">
          <Switch checked={!!rowSelection} onChange={handleRowSelectionChange} />
        </Form.Item>
        <Form.Item label="Fixed Header">
          <Switch checked={!!yScroll} onChange={handleYScrollChange} />
        </Form.Item>
        <Form.Item label="Has Data">
          <Switch checked={!!hasData} onChange={handleDataChange} />
        </Form.Item>
        <Form.Item label="Ellipsis">
          <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
        </Form.Item>
        <Form.Item label="Size">
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Scroll">
          <Radio.Group value={xScroll} onChange={handleXScrollChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Layout">
          <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="fixed">Fixed</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Top">
          <Radio.Group
            value={top}
            onChange={(e) => {
              setTop(e.target.value);
            }}
          >
            <Radio.Button value="topLeft">TopLeft</Radio.Button>
            <Radio.Button value="topCenter">TopCenter</Radio.Button>
            <Radio.Button value="topRight">TopRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Bottom">
          <Radio.Group
            value={bottom}
            onChange={(e) => {
              setBottom(e.target.value);
            }}
          >
            <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
            <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
            <Radio.Button value="bottomRight">BottomRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              colorBgContainer: '#e6f4ff',
              headerBg: '#1677ff',
              headerColor: '#fff',
              headerSortActiveBg: '#0958d9',
              headerSortHoverBg: '#69b1ff',
              bodySortBg: '#1677ff10',
              rowHoverBg: '#1677ff10',
              rowSelectedBg: '#bae0ff',
              rowSelectedHoverBg: '#91caff',
              rowExpandedBg: '#1677ff10',
              cellPaddingBlock: 20,
              cellPaddingInline: 20,
              cellPaddingBlockMD: 16,
              cellPaddingInlineMD: 16,
              cellPaddingBlockSM: 12,
              cellPaddingInlineSM: 12,
              borderColor: '#e6f4ff',
              headerBorderRadius: 0,
              footerBg: '#1677ff',
              footerColor: '#fff',
              cellFontSize: 16,
              cellFontSizeMD: 16,
              cellFontSizeSM: 14,
              headerSplitColor: '#fff',
              headerFilterHoverBg: 'rgba(0, 0, 0, 0.12)',
              filterDropdownMenuBg: '#fff',
              filterDropdownBg: '#fff',
              expandIconBg: '#e6f4ff',
            },
          },
        }}
      >
        <Table
          {...tableProps}
          pagination={{
            position: [top, bottom],
          }}
          columns={tableColumns}
          dataSource={hasData ? data : []}
          scroll={scroll}
        />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>\u7EC4\u4EF6 Token</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[16].value,(0,e.jsx)(t.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[17].value})]}),(0,e.jsxs)("h3",{id:"table",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#table",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Table"]}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[18].value}),(0,e.jsx)("th",{children:n[19].value}),(0,e.jsx)("th",{children:n[20].value}),(0,e.jsx)("th",{children:n[21].value}),(0,e.jsx)("th",{children:n[22].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[23].value}),(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:n[28].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)(t.Z,{to:"#column",sourceType:"Link",children:n[29].value}),n[30].value]}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{children:n[33].value}),(0,e.jsx)("td",{children:(0,e.jsx)(t.Z,{href:"https://github.com/react-component/table/blob/75ee0064e54a4b3215694505870c9d6c817e9e4a/src/interface.ts#L129",sourceType:"a",children:n[34].value})}),(0,e.jsx)("td",{children:n[35].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[36].value}),(0,e.jsx)("td",{children:n[37].value}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{children:n[39].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[40].value}),(0,e.jsx)("td",{children:n[41].value}),(0,e.jsx)("td",{children:(0,e.jsx)(t.Z,{to:"#expandable",sourceType:"Link",children:n[42].value})}),(0,e.jsx)("td",{children:n[43].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[44].value}),(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{children:n[47].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[48].value}),(0,e.jsx)("td",{children:n[49].value}),(0,e.jsx)("td",{children:n[50].value}),(0,e.jsx)("td",{children:n[51].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{children:n[53].value}),(0,e.jsxs)("td",{children:[n[54].value,(0,e.jsx)(t.Z,{to:"/components/spin-cn#api",sourceType:"Link",children:n[55].value})]}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[57].value}),(0,e.jsx)("td",{children:n[58].value}),(0,e.jsx)("td",{children:n[59].value}),(0,e.jsx)("td",{children:(0,e.jsx)(t.Z,{href:"https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4/components/locale/zh_CN.tsx#L20-L37",sourceType:"a",children:n[60].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[61].value}),(0,e.jsxs)("td",{children:[n[62].value,(0,e.jsx)(t.Z,{to:"#pagination",sourceType:"Link",children:n[63].value}),n[64].value,(0,e.jsx)(t.Z,{to:"/components/pagination-cn",sourceType:"Link",children:n[65].value}),n[66].value]}),(0,e.jsxs)("td",{children:[n[67].value,(0,e.jsx)("code",{children:n[68].value})]}),(0,e.jsx)("td",{children:n[69].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[70].value}),(0,e.jsx)("td",{children:n[71].value}),(0,e.jsx)("td",{children:n[72].value}),(0,e.jsx)("td",{children:n[73].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[74].value}),(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{children:n[76].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[77].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[78].value}),(0,e.jsxs)("td",{children:[n[79].value,(0,e.jsx)(t.Z,{to:"#rowselection",sourceType:"Link",children:n[80].value})]}),(0,e.jsx)("td",{children:n[81].value}),(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[83].value}),(0,e.jsxs)("td",{children:[n[84].value,(0,e.jsx)(t.Z,{to:"#scroll",sourceType:"Link",children:n[85].value})]}),(0,e.jsx)("td",{children:n[86].value}),(0,e.jsx)("td",{children:n[87].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[88].value}),(0,e.jsx)("td",{children:n[89].value}),(0,e.jsx)("td",{children:n[90].value}),(0,e.jsx)("td",{children:n[91].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[92].value}),(0,e.jsx)("td",{children:n[93].value}),(0,e.jsxs)("td",{children:[n[94].value,(0,e.jsx)(t.Z,{to:"/components/tooltip-cn",sourceType:"Link",children:n[95].value})]}),(0,e.jsx)("td",{children:n[96].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[97].value}),(0,e.jsx)("td",{children:n[98].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[99].value}),n[100].value,(0,e.jsx)("code",{children:n[101].value}),n[102].value,(0,e.jsx)("code",{children:n[103].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[104].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[105].value}),(0,e.jsxs)("td",{children:[n[106].value,(0,e.jsx)("code",{children:n[107].value}),n[108].value,(0,e.jsx)("code",{children:n[109].value})]}),(0,e.jsx)("td",{children:n[110].value}),(0,e.jsxs)("td",{children:[n[111].value,(0,e.jsx)("code",{children:n[112].value}),n[113].value,(0,e.jsx)("code",{children:n[114].value}),n[115].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{children:n[117].value}),(0,e.jsxs)("td",{children:[n[118].value,(0,e.jsx)("code",{children:n[119].value})]}),(0,e.jsx)("td",{children:n[120].value}),(0,e.jsx)("td",{children:n[121].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[122].value}),(0,e.jsx)("td",{children:n[123].value}),(0,e.jsx)("td",{children:n[124].value}),(0,e.jsx)("td",{children:n[125].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[126].value}),(0,e.jsxs)("td",{children:[n[127].value,(0,e.jsx)(t.Z,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout",sourceType:"a",children:n[128].value}),n[129].value,(0,e.jsx)("code",{children:n[130].value}),n[131].value]}),(0,e.jsxs)("td",{children:[n[132].value,(0,e.jsx)("code",{children:n[133].value}),n[134].value,(0,e.jsx)("code",{children:n[135].value})]}),(0,e.jsxs)("td",{children:[n[136].value,(0,e.jsx)("hr",{}),n[137].value,(0,e.jsx)("code",{children:n[138].value}),n[139].value,(0,e.jsx)("code",{children:n[140].value})]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[141].value}),(0,e.jsx)("td",{children:n[142].value}),(0,e.jsx)("td",{children:n[143].value}),(0,e.jsx)("td",{children:n[144].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[145].value}),(0,e.jsx)("td",{children:n[146].value}),(0,e.jsxs)("td",{children:[n[147].value,(0,e.jsx)("code",{children:n[148].value}),n[149].value,(0,e.jsx)("code",{children:n[150].value}),n[151].value,(0,e.jsx)("code",{children:n[152].value}),n[153].value]}),(0,e.jsx)("td",{children:n[154].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[155].value}),(0,e.jsx)("td",{children:n[156].value}),(0,e.jsx)("td",{children:n[157].value}),(0,e.jsx)("td",{children:n[158].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[159].value}),(0,e.jsx)("td",{children:n[160].value}),(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[163].value}),(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{children:n[165].value}),(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value})]})]})]}),(0,e.jsxs)("h4",{id:"onrow-\u7528\u6CD5",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#onrow-\u7528\u6CD5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"onRow \u7528\u6CD5"]}),(0,e.jsxs)("p",{children:[n[168].value,(0,e.jsx)("code",{children:n[169].value}),n[170].value,(0,e.jsx)("code",{children:n[171].value}),n[172].value,(0,e.jsx)("code",{children:n[173].value}),n[174].value,(0,e.jsx)("code",{children:n[175].value}),n[176].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[177].value}),(0,e.jsxs)("h3",{id:"column",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#column",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Column"]}),(0,e.jsx)("p",{children:n[178].value}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[179].value}),(0,e.jsx)("th",{children:n[180].value}),(0,e.jsx)("th",{children:n[181].value}),(0,e.jsx)("th",{children:n[182].value}),(0,e.jsx)("th",{children:n[183].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[184].value}),(0,e.jsx)("td",{children:n[185].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[186].value}),n[187].value,(0,e.jsx)("code",{children:n[188].value}),n[189].value,(0,e.jsx)("code",{children:n[190].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[191].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[192].value}),(0,e.jsx)("td",{children:n[193].value}),(0,e.jsx)("td",{children:n[194].value}),(0,e.jsx)("td",{children:n[195].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[196].value}),(0,e.jsx)("td",{children:n[197].value}),(0,e.jsx)("td",{children:n[198].value}),(0,e.jsx)("td",{children:n[199].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[200].value}),(0,e.jsx)("td",{children:n[201].value}),(0,e.jsx)("td",{children:n[202].value}),(0,e.jsx)("td",{children:n[203].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{children:n[205].value}),(0,e.jsx)("td",{children:n[206].value}),(0,e.jsx)("td",{children:n[207].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[208].value}),(0,e.jsx)("td",{children:n[209].value}),(0,e.jsx)("td",{children:n[210].value}),(0,e.jsx)("td",{children:n[211].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[212].value}),(0,e.jsx)("td",{children:n[213].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[214].value}),n[215].value,(0,e.jsx)("code",{children:n[216].value})]}),(0,e.jsx)("td",{children:n[217].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[218].value}),(0,e.jsxs)("td",{children:[n[219].value,(0,e.jsx)("br",{}),n[220].value,(0,e.jsx)("code",{children:n[221].value}),n[222].value,(0,e.jsx)("code",{children:n[223].value}),n[224].value,(0,e.jsx)("code",{children:n[225].value}),n[226].value]}),(0,e.jsx)("td",{children:n[227].value}),(0,e.jsx)("td",{children:n[228].value}),(0,e.jsx)("td",{children:n[229].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[230].value}),(0,e.jsx)("td",{children:n[231].value}),(0,e.jsxs)("td",{children:[n[232].value,(0,e.jsx)(t.Z,{href:"https://github.com/ant-design/ant-design/blob/ecc54dda839619e921c0ace530408871f0281c2a/components/table/interface.tsx#L79",sourceType:"a",children:n[233].value}),n[234].value]}),(0,e.jsx)("td",{children:n[235].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[236].value}),(0,e.jsx)("td",{children:n[237].value}),(0,e.jsx)("td",{children:n[238].value}),(0,e.jsx)("td",{children:n[239].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[240].value}),(0,e.jsx)("td",{children:n[241].value}),(0,e.jsx)("td",{children:n[242].value}),(0,e.jsx)("td",{children:n[243].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[244].value}),(0,e.jsx)("td",{children:n[245].value}),(0,e.jsx)("td",{children:n[246].value}),(0,e.jsx)("td",{children:n[247].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[248].value}),(0,e.jsx)("td",{children:n[249].value}),(0,e.jsx)("td",{children:n[250].value}),(0,e.jsx)("td",{children:n[251].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[252].value}),(0,e.jsx)("td",{children:n[253].value}),(0,e.jsx)("td",{children:n[254].value}),(0,e.jsx)("td",{children:n[255].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[256].value}),(0,e.jsx)("td",{children:n[257].value}),(0,e.jsx)("td",{children:n[258].value}),(0,e.jsx)("td",{children:n[259].value}),(0,e.jsx)("td",{children:n[260].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[261].value}),(0,e.jsx)("td",{children:n[262].value}),(0,e.jsx)("td",{children:n[263].value}),(0,e.jsx)("td",{children:n[264].value}),(0,e.jsx)("td",{children:n[265].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[266].value}),(0,e.jsx)("td",{children:n[267].value}),(0,e.jsx)("td",{children:n[268].value}),(0,e.jsx)("td",{children:n[269].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[270].value}),(0,e.jsxs)("td",{children:[n[271].value,(0,e.jsx)("code",{children:n[272].value}),n[273].value,(0,e.jsx)("code",{children:n[274].value})]}),(0,e.jsx)("td",{children:n[275].value}),(0,e.jsx)("td",{children:n[276].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[277].value}),(0,e.jsxs)("td",{children:[n[278].value,(0,e.jsx)("code",{children:n[279].value}),n[280].value]}),(0,e.jsx)("td",{children:n[281].value}),(0,e.jsx)("td",{children:n[282].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[283].value}),(0,e.jsx)("td",{children:n[284].value}),(0,e.jsx)("td",{children:n[285].value}),(0,e.jsx)("td",{children:n[286].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[287].value}),(0,e.jsx)("td",{children:n[288].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)(t.Z,{href:"https://github.com/ant-design/ant-design/blob/015109b42b85c63146371b4e32b883cf97b088e8/components/_util/responsiveObserve.ts#L1",sourceType:"a",children:n[289].value}),n[290].value]}),(0,e.jsx)("td",{children:n[291].value}),(0,e.jsx)("td",{children:n[292].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[293].value}),(0,e.jsx)("td",{children:n[294].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[295].value}),n[296].value,(0,e.jsx)("code",{children:n[297].value})]}),(0,e.jsx)("td",{children:n[298].value}),(0,e.jsx)("td",{children:n[299].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[300].value}),(0,e.jsx)("td",{children:n[301].value}),(0,e.jsx)("td",{children:n[302].value}),(0,e.jsx)("td",{children:n[303].value}),(0,e.jsx)("td",{children:n[304].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[305].value}),(0,e.jsxs)("td",{children:[n[306].value,(0,e.jsx)("code",{children:n[307].value})]}),(0,e.jsxs)("td",{children:[n[308].value,(0,e.jsx)(t.Z,{to:"/components/tooltip-cn/#api",sourceType:"Link",children:n[309].value})]}),(0,e.jsx)("td",{children:n[310].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[311].value}),(0,e.jsxs)("td",{children:[n[312].value,(0,e.jsx)("code",{children:n[313].value}),n[314].value,(0,e.jsx)("code",{children:n[315].value}),n[316].value,(0,e.jsx)("code",{children:n[317].value}),n[318].value,(0,e.jsx)("code",{children:n[319].value})]}),(0,e.jsx)("td",{children:n[320].value}),(0,e.jsxs)("td",{children:[n[321].value,(0,e.jsx)("code",{children:n[322].value}),n[323].value,(0,e.jsx)("code",{children:n[324].value}),n[325].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[326].value}),(0,e.jsxs)("td",{children:[n[327].value,(0,e.jsx)(t.Z,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",sourceType:"a",children:n[328].value}),n[329].value]}),(0,e.jsx)("td",{children:n[330].value}),(0,e.jsx)("td",{children:n[331].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[332].value}),(0,e.jsxs)("td",{children:[n[333].value,(0,e.jsx)("code",{children:n[334].value}),n[335].value,(0,e.jsx)("code",{children:n[336].value}),n[337].value,(0,e.jsx)("code",{children:n[338].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[339].value}),n[340].value,(0,e.jsx)("code",{children:n[341].value}),n[342].value]}),(0,e.jsx)("td",{children:n[343].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[344].value}),(0,e.jsx)("td",{children:n[345].value}),(0,e.jsx)("td",{children:n[346].value}),(0,e.jsx)("td",{children:n[347].value}),(0,e.jsx)("td",{children:n[348].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[349].value}),(0,e.jsxs)("td",{children:[n[350].value,(0,e.jsx)("code",{children:n[351].value}),n[352].value]}),(0,e.jsx)("td",{children:n[353].value}),(0,e.jsx)("td",{children:n[354].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[355].value}),(0,e.jsxs)("td",{children:[n[356].value,(0,e.jsx)(t.Z,{href:"https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241",sourceType:"a",children:n[357].value}),n[358].value]}),(0,e.jsx)("td",{children:n[359].value}),(0,e.jsx)("td",{children:n[360].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[361].value}),(0,e.jsx)("td",{children:n[362].value}),(0,e.jsx)("td",{children:n[363].value}),(0,e.jsx)("td",{children:n[364].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[365].value}),(0,e.jsx)("td",{children:n[366].value}),(0,e.jsx)("td",{children:n[367].value}),(0,e.jsx)("td",{children:n[368].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[369].value}),(0,e.jsx)("td",{children:n[370].value}),(0,e.jsx)("td",{children:n[371].value}),(0,e.jsx)("td",{children:n[372].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[373].value}),(0,e.jsx)("td",{children:n[374].value}),(0,e.jsx)("td",{children:n[375].value}),(0,e.jsx)("td",{children:n[376].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"columngroup",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#columngroup",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ColumnGroup"]}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[377].value}),(0,e.jsx)("th",{children:n[378].value}),(0,e.jsx)("th",{children:n[379].value}),(0,e.jsx)("th",{children:n[380].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[381].value}),(0,e.jsx)("td",{children:n[382].value}),(0,e.jsx)("td",{children:n[383].value}),(0,e.jsx)("td",{children:n[384].value})]})})]}),(0,e.jsxs)("h3",{id:"pagination",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#pagination",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"pagination"]}),(0,e.jsx)("p",{children:n[385].value}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[386].value}),(0,e.jsx)("th",{children:n[387].value}),(0,e.jsx)("th",{children:n[388].value}),(0,e.jsx)("th",{children:n[389].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[390].value}),(0,e.jsxs)("td",{children:[n[391].value,(0,e.jsx)("code",{children:n[392].value}),n[393].value,(0,e.jsx)("code",{children:n[394].value}),n[395].value,(0,e.jsx)("code",{children:n[396].value}),n[397].value,(0,e.jsx)("code",{children:n[398].value}),n[399].value,(0,e.jsx)("code",{children:n[400].value}),n[401].value,(0,e.jsx)("code",{children:n[402].value})]}),(0,e.jsx)("td",{children:n[403].value}),(0,e.jsxs)("td",{children:[n[404].value,(0,e.jsx)("code",{children:n[405].value}),n[406].value]})]})})]}),(0,e.jsxs)("p",{children:[n[407].value,(0,e.jsx)(t.Z,{to:"/components/pagination-cn",sourceType:"Link",children:(0,e.jsx)("code",{children:n[408].value})}),n[409].value]}),(0,e.jsxs)("h3",{id:"expandable",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#expandable",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"expandable"]}),(0,e.jsx)("p",{children:n[410].value}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[411].value}),(0,e.jsx)("th",{children:n[412].value}),(0,e.jsx)("th",{children:n[413].value}),(0,e.jsx)("th",{children:n[414].value}),(0,e.jsx)("th",{children:n[415].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[416].value}),(0,e.jsx)("td",{children:n[417].value}),(0,e.jsx)("td",{children:n[418].value}),(0,e.jsx)("td",{children:n[419].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[420].value}),(0,e.jsx)("td",{children:n[421].value}),(0,e.jsx)("td",{children:n[422].value}),(0,e.jsx)("td",{children:n[423].value}),(0,e.jsx)("td",{children:n[424].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[425].value}),(0,e.jsx)("td",{children:n[426].value}),(0,e.jsx)("td",{children:n[427].value}),(0,e.jsx)("td",{children:n[428].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[429].value}),(0,e.jsx)("td",{children:n[430].value}),(0,e.jsx)("td",{children:n[431].value}),(0,e.jsx)("td",{children:n[432].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[433].value}),(0,e.jsx)("td",{children:n[434].value}),(0,e.jsx)("td",{children:n[435].value}),(0,e.jsx)("td",{children:n[436].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[437].value}),(0,e.jsx)("td",{children:n[438].value}),(0,e.jsx)("td",{children:n[439].value}),(0,e.jsx)("td",{children:n[440].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[441].value}),(0,e.jsx)("td",{children:n[442].value}),(0,e.jsx)("td",{children:n[443].value}),(0,e.jsx)("td",{children:n[444].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[445].value}),(0,e.jsx)("td",{children:n[446].value}),(0,e.jsx)("td",{children:n[447].value}),(0,e.jsx)("td",{children:n[448].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[449].value}),(0,e.jsxs)("td",{children:[n[450].value,(0,e.jsx)(t.Z,{href:"https://codesandbox.io/s/fervent-bird-nuzpr",sourceType:"a",children:n[451].value})]}),(0,e.jsx)("td",{children:n[452].value}),(0,e.jsx)("td",{children:n[453].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[454].value}),(0,e.jsx)("td",{children:n[455].value}),(0,e.jsx)("td",{children:n[456].value}),(0,e.jsx)("td",{children:n[457].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[458].value}),(0,e.jsxs)("td",{children:[n[459].value,(0,e.jsx)("code",{children:n[460].value}),n[461].value,(0,e.jsx)("code",{children:n[462].value})]}),(0,e.jsx)("td",{children:n[463].value}),(0,e.jsx)("td",{children:n[464].value}),(0,e.jsx)("td",{children:n[465].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[466].value}),(0,e.jsx)("td",{children:n[467].value}),(0,e.jsx)("td",{children:n[468].value}),(0,e.jsx)("td",{children:n[469].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[470].value}),(0,e.jsx)("td",{children:n[471].value}),(0,e.jsx)("td",{children:n[472].value}),(0,e.jsx)("td",{children:n[473].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[474].value}),(0,e.jsx)("td",{children:n[475].value}),(0,e.jsx)("td",{children:n[476].value}),(0,e.jsx)("td",{children:n[477].value}),(0,e.jsx)("td",{children:n[478].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[479].value}),(0,e.jsx)("td",{children:n[480].value}),(0,e.jsx)("td",{children:n[481].value}),(0,e.jsx)("td",{children:n[482].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[483].value}),(0,e.jsx)("td",{children:n[484].value}),(0,e.jsx)("td",{children:n[485].value}),(0,e.jsx)("td",{children:n[486].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"rowselection",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rowselection",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"rowSelection"]}),(0,e.jsx)("p",{children:n[487].value}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[488].value}),(0,e.jsx)("th",{children:n[489].value}),(0,e.jsx)("th",{children:n[490].value}),(0,e.jsx)("th",{children:n[491].value}),(0,e.jsx)("th",{children:n[492].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[493].value}),(0,e.jsx)("td",{children:n[494].value}),(0,e.jsx)("td",{children:n[495].value}),(0,e.jsx)("td",{children:n[496].value}),(0,e.jsx)("td",{children:n[497].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[498].value}),(0,e.jsx)("td",{children:n[499].value}),(0,e.jsx)("td",{children:n[500].value}),(0,e.jsx)("td",{children:n[501].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[502].value}),(0,e.jsx)("td",{children:n[503].value}),(0,e.jsx)("td",{children:n[504].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[505].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[506].value}),(0,e.jsx)("td",{children:n[507].value}),(0,e.jsx)("td",{children:n[508].value}),(0,e.jsx)("td",{children:n[509].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[510].value}),(0,e.jsx)("td",{children:n[511].value}),(0,e.jsx)("td",{children:n[512].value}),(0,e.jsx)("td",{children:n[513].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[514].value}),(0,e.jsx)("td",{children:n[515].value}),(0,e.jsx)("td",{children:n[516].value}),(0,e.jsx)("td",{children:n[517].value}),(0,e.jsx)("td",{children:n[518].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[519].value}),(0,e.jsxs)("td",{children:[n[520].value,(0,e.jsx)("code",{children:n[521].value})]}),(0,e.jsx)("td",{children:n[522].value}),(0,e.jsx)("td",{children:n[523].value}),(0,e.jsx)("td",{children:n[524].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[525].value}),(0,e.jsxs)("td",{children:[n[526].value,(0,e.jsx)("code",{children:n[527].value}),n[528].value]}),(0,e.jsx)("td",{children:n[529].value}),(0,e.jsx)("td",{children:n[530].value}),(0,e.jsx)("td",{children:n[531].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[532].value}),(0,e.jsx)("td",{children:n[533].value}),(0,e.jsx)("td",{children:n[534].value}),(0,e.jsx)("td",{children:n[535].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[536].value}),(0,e.jsx)("td",{children:n[537].value}),(0,e.jsx)("td",{children:n[538].value}),(0,e.jsx)("td",{children:n[539].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[540].value}),(0,e.jsxs)("td",{children:[n[541].value,(0,e.jsx)(t.Z,{to:"#selection",sourceType:"Link",children:n[542].value}),n[543].value,(0,e.jsx)("code",{children:n[544].value}),n[545].value]}),(0,e.jsx)("td",{children:n[546].value}),(0,e.jsx)("td",{children:n[547].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[548].value}),(0,e.jsx)("td",{children:n[549].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[550].value}),n[551].value,(0,e.jsx)("code",{children:n[552].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[553].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[554].value}),(0,e.jsxs)("td",{children:[n[555].value,(0,e.jsx)("code",{children:n[556].value}),n[557].value]}),(0,e.jsx)("td",{children:n[558].value}),(0,e.jsx)("td",{children:n[559].value}),(0,e.jsx)("td",{children:n[560].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[561].value}),(0,e.jsx)("td",{children:n[562].value}),(0,e.jsx)("td",{children:n[563].value}),(0,e.jsx)("td",{children:n[564].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[565].value}),n[566].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[567].value}),(0,e.jsx)("td",{children:n[568].value}),(0,e.jsx)("td",{children:n[569].value}),(0,e.jsx)("td",{children:n[570].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[571].value}),(0,e.jsx)("td",{children:n[572].value}),(0,e.jsx)("td",{children:n[573].value}),(0,e.jsx)("td",{children:n[574].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[575].value}),(0,e.jsx)("td",{children:n[576].value}),(0,e.jsx)("td",{children:n[577].value}),(0,e.jsx)("td",{children:n[578].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[579].value}),(0,e.jsx)("td",{children:n[580].value}),(0,e.jsx)("td",{children:n[581].value}),(0,e.jsx)("td",{children:n[582].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[583].value}),(0,e.jsx)("td",{children:n[584].value}),(0,e.jsx)("td",{children:n[585].value}),(0,e.jsx)("td",{children:n[586].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"scroll",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#scroll",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"scroll"]}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[587].value}),(0,e.jsx)("th",{children:n[588].value}),(0,e.jsx)("th",{children:n[589].value}),(0,e.jsx)("th",{children:n[590].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[591].value}),(0,e.jsx)("td",{children:n[592].value}),(0,e.jsx)("td",{children:n[593].value}),(0,e.jsx)("td",{children:n[594].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[595].value}),(0,e.jsxs)("td",{children:[n[596].value,(0,e.jsx)(t.Z,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content",sourceType:"a",children:n[597].value})]}),(0,e.jsx)("td",{children:n[598].value}),(0,e.jsx)("td",{children:n[599].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[600].value}),(0,e.jsx)("td",{children:n[601].value}),(0,e.jsx)("td",{children:n[602].value}),(0,e.jsx)("td",{children:n[603].value})]})]})]}),(0,e.jsxs)("h3",{id:"selection",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#selection",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"selection"]}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[604].value}),(0,e.jsx)("th",{children:n[605].value}),(0,e.jsx)("th",{children:n[606].value}),(0,e.jsx)("th",{children:n[607].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[608].value}),(0,e.jsx)("td",{children:n[609].value}),(0,e.jsx)("td",{children:n[610].value}),(0,e.jsx)("td",{children:n[611].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[612].value}),(0,e.jsx)("td",{children:n[613].value}),(0,e.jsx)("td",{children:n[614].value}),(0,e.jsx)("td",{children:n[615].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[616].value}),(0,e.jsx)("td",{children:n[617].value}),(0,e.jsx)("td",{children:n[618].value}),(0,e.jsx)("td",{children:n[619].value})]})]})]}),(0,e.jsxs)("h2",{id:"\u5728-typescript-\u4E2D\u4F7F\u7528",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5728-typescript-\u4E2D\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5728 TypeScript \u4E2D\u4F7F\u7528"]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[620].value}),(0,e.jsxs)("p",{children:[n[621].value,(0,e.jsx)(t.Z,{href:"https://codesandbox.io/s/serene-platform-0jo5t",sourceType:"a",children:n[622].value}),n[623].value]}),(0,e.jsxs)("h2",{id:"\u4E3B\u9898\u53D8\u91CFdesign-token",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898\u53D8\u91CFdesign-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898\u53D8\u91CF\uFF08Design Token\uFF09"]})]}),(0,e.jsx)(s.Z,{component:"Table"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u6CE8\u610F",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u6CE8\u610F",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6CE8\u610F"]}),(0,e.jsxs)("p",{children:[n[624].value,(0,e.jsx)(t.Z,{href:"https://zh-hans.reactjs.org/docs/lists-and-keys.html#keys",sourceType:"a",children:n[625].value}),n[626].value,(0,e.jsx)("code",{children:n[627].value}),n[628].value,(0,e.jsx)("code",{children:n[629].value}),n[630].value,(0,e.jsx)("code",{children:n[631].value}),n[632].value,(0,e.jsx)("code",{children:n[633].value}),n[634].value,(0,e.jsx)("code",{children:n[635].value}),n[636].value,(0,e.jsx)("code",{children:n[637].value}),n[638].value]}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png",alt:"\u63A7\u5236\u53F0\u8B66\u544A"})}),(0,e.jsxs)("p",{children:[n[639].value,(0,e.jsx)("code",{children:n[640].value}),n[641].value,(0,e.jsx)("code",{children:n[642].value}),n[643].value,(0,e.jsx)("code",{children:n[644].value}),n[645].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[646].value}),(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"\u5982\u4F55\u5728\u6CA1\u6709\u6570\u636E\u6216\u53EA\u6709\u4E00\u9875\u6570\u636E\u65F6\u9690\u85CF\u5206\u9875\u680F",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u5728\u6CA1\u6709\u6570\u636E\u6216\u53EA\u6709\u4E00\u9875\u6570\u636E\u65F6\u9690\u85CF\u5206\u9875\u680F",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u5728\u6CA1\u6709\u6570\u636E\u6216\u53EA\u6709\u4E00\u9875\u6570\u636E\u65F6\u9690\u85CF\u5206\u9875\u680F"]}),(0,e.jsxs)("p",{children:[n[647].value,(0,e.jsx)("code",{children:n[648].value}),n[649].value,(0,e.jsx)("code",{children:n[650].value}),n[651].value,(0,e.jsx)("code",{children:n[652].value}),n[653].value]}),(0,e.jsxs)("h3",{id:"\u8868\u683C\u8FC7\u6EE4\u65F6\u4F1A\u56DE\u5230\u7B2C\u4E00\u9875",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8868\u683C\u8FC7\u6EE4\u65F6\u4F1A\u56DE\u5230\u7B2C\u4E00\u9875",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8868\u683C\u8FC7\u6EE4\u65F6\u4F1A\u56DE\u5230\u7B2C\u4E00\u9875\uFF1F"]}),(0,e.jsx)("p",{children:n[654].value}),(0,e.jsxs)("p",{children:[n[655].value,(0,e.jsx)(t.Z,{href:"https://codesandbox.io/s/yuanchengjiazaishuju-ant-design-demo-7y2uf",sourceType:"a",children:n[656].value}),n[657].value]}),(0,e.jsxs)("h3",{id:"\u8868\u683C\u5206\u9875\u4E3A\u4F55\u4F1A\u51FA\u73B0-size-\u5207\u6362\u5668",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8868\u683C\u5206\u9875\u4E3A\u4F55\u4F1A\u51FA\u73B0-size-\u5207\u6362\u5668",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8868\u683C\u5206\u9875\u4E3A\u4F55\u4F1A\u51FA\u73B0 size \u5207\u6362\u5668\uFF1F"]}),(0,e.jsxs)("p",{children:[n[658].value,(0,e.jsx)("code",{children:n[659].value}),n[660].value,(0,e.jsx)("code",{children:n[661].value}),n[662].value,(0,e.jsx)("code",{children:n[663].value}),n[664].value,(0,e.jsx)("code",{children:n[665].value}),n[666].value]}),(0,e.jsxs)("h3",{id:"\u4E3A\u4EC0\u4E48-\u66F4\u65B0-state-\u4F1A\u5BFC\u81F4\u5168\u8868\u6E32\u67D3",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48-\u66F4\u65B0-state-\u4F1A\u5BFC\u81F4\u5168\u8868\u6E32\u67D3",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4EC0\u4E48 \u66F4\u65B0 state \u4F1A\u5BFC\u81F4\u5168\u8868\u6E32\u67D3\uFF1F"]}),(0,e.jsxs)("p",{children:[n[667].value,(0,e.jsx)("code",{children:n[668].value}),n[669].value,(0,e.jsx)("code",{children:n[670].value}),n[671].value,(0,e.jsx)("code",{children:n[672].value}),n[673].value]}),(0,e.jsxs)("h3",{id:"\u56FA\u5B9A\u5217\u7A7F\u900F\u5230\u6700\u4E0A\u5C42\u8BE5\u600E\u4E48\u529E",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u56FA\u5B9A\u5217\u7A7F\u900F\u5230\u6700\u4E0A\u5C42\u8BE5\u600E\u4E48\u529E",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u56FA\u5B9A\u5217\u7A7F\u900F\u5230\u6700\u4E0A\u5C42\u8BE5\u600E\u4E48\u529E\uFF1F"]}),(0,e.jsxs)("p",{children:[n[674].value,(0,e.jsx)("code",{children:n[675].value}),n[676].value,(0,e.jsx)("code",{children:n[677].value}),n[678].value]}),(0,e.jsxs)("h3",{id:"\u5982\u4F55\u81EA\u5B9A\u4E49\u6E32\u67D3\u53EF\u9009\u5217\u7684\u52FE\u9009\u6846\u6BD4\u5982\u589E\u52A0-tooltip",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u81EA\u5B9A\u4E49\u6E32\u67D3\u53EF\u9009\u5217\u7684\u52FE\u9009\u6846\u6BD4\u5982\u589E\u52A0-tooltip",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u81EA\u5B9A\u4E49\u6E32\u67D3\u53EF\u9009\u5217\u7684\u52FE\u9009\u6846\uFF08\u6BD4\u5982\u589E\u52A0 Tooltip\uFF09\uFF1F"]}),(0,e.jsxs)("p",{children:[n[679].value,(0,e.jsx)("code",{children:n[680].value}),n[681].value,(0,e.jsx)(t.Z,{href:"https://ant.design/components/table-cn/#rowselection",sourceType:"a",children:n[682].value}),n[683].value,(0,e.jsx)("code",{children:n[684].value}),n[685].value,(0,e.jsx)(t.Z,{href:"https://codesandbox.io/s/table-row-tooltip-v79j2v",sourceType:"a",children:n[686].value}),n[687].value]})]})]})})}c.default=i}}]);
