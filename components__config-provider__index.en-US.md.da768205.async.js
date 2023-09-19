"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4766],{626132:function(h,o,t){t.r(o);var p=t(502143),v=t(968521),x=t(720719),m=t(521587),l=t(759907),i=t(828089),j=t(825673),g=t(902068),_=t(574399),f=t(863942),b=t(316073),C=t(24628),y=t(719260),w=t(956140),P=t(127179),a=t(905388),S=t(245583),k=t(606965),s=t(268696),B=t(587302),r=t(424128),R=t(249706),D=t(795127),T=t(116846),O=t(720538),I=t(212039),E=t(73024),M=t(553913),d=t(830084),L=t(667294),e=t(785893);function c(){var u=(0,d.eL)(),n=u.texts;return(0,e.jsx)(d.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[0].value}),n[1].value]}),(0,e.jsxs)("h2",{id:"usage",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,e.jsxs)("p",{children:[n[2].value,(0,e.jsx)(r.Z,{href:"https://facebook.github.io/react/docs/context.html",sourceType:"a",children:n[3].value}),n[4].value]}),(0,e.jsx)(l.Z,{lang:"tsx",children:n[5].value}),(0,e.jsxs)("h3",{id:"content-security-policy",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#content-security-policy",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Content Security Policy"]}),(0,e.jsxs)("p",{children:[n[6].value,(0,e.jsx)("code",{children:n[7].value}),n[8].value]}),(0,e.jsx)(l.Z,{lang:"tsx",children:n[9].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(a.Z,{items:[{demo:{id:"config-provider-demo-locale"},previewerProps:{title:"Locale",filename:"components/config-provider/demo/locale.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import {
  Upload,
  Tour,
  Input,
  Form,
  QRCode,
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Space,
  Table,
  theme,
  TimePicker,
  Transfer,
  Image,
  InputNumber,
  Divider,
} from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
dayjs.locale('en');
const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
const Page = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const tourRefs = React.useRef([]);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  };
  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  };
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => tourRefs.current[0],
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => tourRefs.current[1],
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => tourRefs.current[2],
    },
  ];
  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'error',
    },
  ];
  return (
    <Space
      direction="vertical"
      size={[0, 16]}
      style={{
        width: '100%',
        paddingTop: 16,
        borderTop: \`1px solid \${token.colorBorder}\`,
      }}
    >
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <Space wrap>
        <Select
          showSearch
          style={{
            width: 200,
          }}
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker />
      </Space>
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Show Modal
        </Button>
        <Button onClick={info}>Show info</Button>
        <Button onClick={confirm}>Show confirm</Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </Space>
      <Transfer dataSource={[]} showSearch targetKeys={[]} />
      <div
        style={{
          width: 320,
          border: \`1px solid \${token.colorBorder}\`,
          borderRadius: 8,
        }}
      >
        <Calendar fullscreen={false} value={dayjs()} />
      </div>
      <Form
        name="basic"
        autoComplete="off"
        labelCol={{
          sm: {
            span: 4,
          },
        }}
        wrapperCol={{
          span: 6,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input width={200} />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
          initialValue={100}
        >
          <InputNumber width={200} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 2,
            span: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={[]} columns={columns} />
      <Modal title="Locale Modal" open={open} onCancel={hideModal}>
        <p>Locale Modal</p>
      </Modal>
      <Space wrap size={80}>
        <QRCode
          value="https://ant.design/"
          status="expired"
          onRefresh={() => console.log('refresh')}
        />
        <Image
          width={160}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Space>
      <Upload listType="picture-card" fileList={fileList} />
      <Divider orientation="left">Tour</Divider>
      <Button type="primary" onClick={() => setTourOpen(true)}>
        Begin Tour
      </Button>
      <Space>
        <Button ref={(node) => node && tourRefs.current.splice(0, 0, node)}> Upload</Button>
        <Button ref={(node) => node && tourRefs.current.splice(1, 0, node)} type="primary">
          Save
        </Button>
        <Button
          ref={(node) => node && tourRefs.current.splice(2, 0, node)}
          icon={<EllipsisOutlined />}
        />
      </Space>
      <Tour open={tourOpen} steps={steps} onClose={() => setTourOpen(false)} />
    </Space>
  );
};
const App = () => {
  const [locale, setLocal] = useState(enUS);
  const changeLocale = (e) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginRight: 16,
          }}
        >
          Change locale of components:
        </span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            \u4E2D\u6587
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Components which need localization support are listed here, you can toggle the language in the demo.</p>"}},{demo:{id:"config-provider-demo-direction"},previewerProps:{title:"Direction",filename:"components/config-provider/demo/direction.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  DownloadOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined as SearchIcon,
  SmileOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  Divider,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Space,
  Steps,
  Switch,
  Tree,
  TreeSelect,
} from 'antd';
const InputGroup = Input.Group;
const ButtonGroup = Button.Group;
const { Option } = Select;
const { TreeNode } = Tree;
const { Search } = Input;
const cascaderOptions = [
  {
    value: 'tehran',
    label: '\u062A\u0647\u0631\u0627\u0646',
    children: [
      {
        value: 'tehran-c',
        label: '\u062A\u0647\u0631\u0627\u0646',
        children: [
          {
            value: 'saadat-abad',
            label: '\u0633\u0639\u0627\u062F\u062A \u0622\u06CC\u0627\u062F',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
    children: [
      {
        value: 'ardabil-c',
        label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
        children: [
          {
            value: 'primadar',
            label: '\u067E\u06CC\u0631\u0645\u0627\u062F\u0631',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: '\u06AF\u06CC\u0644\u0627\u0646',
    children: [
      {
        value: 'rasht',
        label: '\u0631\u0634\u062A',
        children: [
          {
            value: 'district-3',
            label: '\u0645\u0646\u0637\u0642\u0647 \u06F3',
          },
        ],
      },
    ],
  },
];
const Page = ({ popupPlacement }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(5);
  const [showBadge, setShowBadge] = useState(true);
  const selectBefore = (
    <Select
      defaultValue="Http://"
      style={{
        width: 90,
      }}
    >
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select
      defaultValue=".com"
      style={{
        width: 80,
      }}
    >
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  // ==== Cascader ====
  const cascaderFilter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  const onCascaderChange = (value) => {
    console.log(value);
  };
  // ==== End Cascader ====

  // ==== Modal ====
  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setModalOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setModalOpen(false);
  };

  // ==== End Modal ====
  const onStepsChange = (newCurrentStep) => {
    console.log('onChange:', newCurrentStep);
    setCurrentStep(newCurrentStep);
  };

  // ==== Badge ====
  const increaseBadge = () => {
    setBadgeCount(badgeCount + 1);
  };
  const declineBadge = () => {
    setBadgeCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };
  const onChangeBadge = (checked) => {
    setShowBadge(checked);
  };
  // ==== End Badge ====

  return (
    <div className="direction-components">
      <Row>
        <Col span={24}>
          <Divider orientation="left">Cascader example</Divider>
          <Cascader
            suffixIcon={<SearchIcon />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="\u06CC\u06A9 \u0645\u0648\u0631\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
            popupPlacement={popupPlacement}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;With search:&nbsp;&nbsp;
          <Cascader
            suffixIcon={<SmileOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="Select an item"
            popupPlacement={popupPlacement}
            showSearch={{
              filter: cascaderFilter,
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Switch example</Divider>
          &nbsp;&nbsp;
          <Switch defaultChecked />
          &nbsp;&nbsp;
          <Switch loading defaultChecked />
          &nbsp;&nbsp;
          <Switch size="small" loading />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Radio Group example</Divider>
          <Radio.Group defaultValue="c" buttonStyle="solid">
            <Radio.Button value="a">\u062A\u0647\u0631\u0627\u0646</Radio.Button>
            <Radio.Button value="b" disabled>
              \u0627\u0635\u0641\u0647\u0627\u0646
            </Radio.Button>
            <Radio.Button value="c">\u0641\u0627\u0631\u0633</Radio.Button>
            <Radio.Button value="d">\u062E\u0648\u0632\u0633\u062A\u0627\u0646</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Button example</Divider>
          <div className="button-demo">
            <Button type="primary" icon={<DownloadOutlined />} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
            <br />
            <Button.Group>
              <Button type="primary">
                <LeftOutlined />
                Backward
              </Button>
              <Button type="primary">
                Forward
                <RightOutlined />
              </Button>
            </Button.Group>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Divider orientation="left">Tree example</Divider>
          <Tree
            showLine
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0" disabled>
                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                <TreeNode title="leaf" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode
                  title={
                    <span
                      style={{
                        color: '#1677ff',
                      }}
                    >
                      sss
                    </span>
                  }
                  key="0-0-1-0"
                />
              </TreeNode>
            </TreeNode>
          </Tree>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Input (Input Group) example</Divider>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
          <br />
          <InputGroup compact>
            <Input
              style={{
                width: '20%',
              }}
              defaultValue="0571"
            />
            <Input
              style={{
                width: '30%',
              }}
              defaultValue="26888888"
            />
          </InputGroup>
          <br />
          <InputGroup compact>
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input
              style={{
                width: '50%',
              }}
              defaultValue="input content"
            />
            <InputNumber />
          </InputGroup>
          <br />
          <Search placeholder="input search text" enterButton="Search" size="large" />
          <br />
          <br />
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
          </div>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Select example</Divider>
              <Space wrap>
                <Select
                  mode="multiple"
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                  disabled
                >
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                </Select>
                <Select
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                  loading
                >
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                </Select>
                <Select
                  showSearch
                  style={{
                    width: 200,
                  }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option?.props.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="\u0633\u0639\u06CC\u062F">\u0633\u0639\u06CC\u062F</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Space>
            </Col>
            <Col span={12}>
              <Divider orientation="left">TreeSelect example</Divider>
              <TreeSelect
                showSearch
                style={{
                  width: '100%',
                }}
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: 'auto',
                }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
              >
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="parent 1-0" key="0-1-1">
                    <TreeNode title="my leaf" key="random" />
                    <TreeNode title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="random2">
                    <TreeNode
                      title={
                        <b
                          style={{
                            color: '#08c',
                          }}
                        >
                          sss
                        </b>
                      }
                      key="random3"
                    />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Modal example</Divider>
              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal title="\u067E\u0646\u0686\u0631\u0647 \u0633\u0627\u062F\u0647" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
              </Modal>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Steps example</Divider>
              <Steps
                progressDot
                current={currentStep}
                items={[
                  {
                    title: 'Finished',
                    description: 'This is a description.',
                  },
                  {
                    title: 'In Progress',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Waiting',
                    description: 'This is a description.',
                  },
                ]}
              />
              <br />
              <Steps
                current={currentStep}
                onChange={onStepsChange}
                items={[
                  {
                    title: 'Step 1',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Step 2',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Step 3',
                    description: 'This is a description.',
                  },
                ]}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Rate example</Divider>
              <Rate defaultValue={2.5} />
              <br />
              <strong>* Note:</strong> Half star not implemented in RTL direction, it will be
              supported after <a href="https://github.com/react-component/rate">rc-rate</a>{' '}
              implement rtl support.
            </Col>
            <Col span={12}>
              <Divider orientation="left">Badge example</Divider>
              <Badge count={badgeCount}>
                <a href="#" className="head-example" />
              </Badge>
              <ButtonGroup>
                <Button onClick={declineBadge}>
                  <MinusOutlined />
                </Button>
                <Button onClick={increaseBadge}>
                  <PlusOutlined />
                </Button>
              </ButtonGroup>
              <div
                style={{
                  marginTop: 12,
                }}
              >
                <Badge dot={showBadge}>
                  <a href="#" className="head-example" />
                </Badge>
                <Switch onChange={onChangeBadge} checked={showBadge} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Pagination example</Divider>
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Grid System example</Divider>
          <div className="grid-demo">
            <div className="code-box-demo">
              <p>
                <strong>* Note:</strong> Every calculation in RTL grid system is from right side
                (offset, push, etc.)
              </p>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                  col-8
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  col-12 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={18} push={6}>
                  col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                  col-6 col-pull-18
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const App = () => {
  const [direction, setDirection] = useState('ltr');
  const [popupPlacement, setPopupPlacement] = useState('bottomLeft');
  const changeDirection = (e) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
    if (directionValue === 'rtl') {
      setPopupPlacement('bottomRight');
    } else {
      setPopupPlacement('bottomLeft');
    }
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginRight: 16,
          }}
        >
          Change direction of components:
        </span>
        <Radio.Group defaultValue="ltr" onChange={changeDirection}>
          <Radio.Button key="ltr" value="ltr">
            LTR
          </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider direction={direction}>
        <Page popupPlacement={popupPlacement} />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Components which support rtl direction are listed here, you can toggle the direction in the demo.</p>",style:`.button-demo .ant-btn,
.button-demo .ant-btn-group {
  margin-right: 8px;
  margin-bottom: 12px;
}
.button-demo .ant-btn-group > .ant-btn,
.button-demo .ant-btn-group > span > .ant-btn {
  margin-right: 0;
  margin-left: 0;
}

.head-example {
  display: inline-block;
  width: 42px;
  height: 42px;
  vertical-align: middle;
  background: #eee;
  border-radius: 4px;
}

.ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
.ant-badge-rtl:not(.ant-badge-not-a-wrapper) {
  margin-right: 0;
  margin-left: 20px;
}`}},{demo:{id:"config-provider-demo-size"},previewerProps:{title:"Component size",filename:"components/config-provider/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Space,
  Table,
  Tabs,
} from 'antd';
const { TabPane } = Tabs;
const App = () => {
  const [componentSize, setComponentSize] = useState('small');
  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <Space
          size={[0, 16]}
          style={{
            width: '100%',
          }}
          direction="vertical"
        >
          <Input />
          <Tabs defaultActiveKey="1">
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
          <Input.Search allowClear />
          <Input.TextArea allowClear />
          <Select
            defaultValue="demo"
            options={[
              {
                value: 'demo',
              },
            ]}
          />
          <DatePicker />
          <DatePicker.RangePicker />
          <Button>Button</Button>
          <Card title="Card">
            <Table
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                },
              ]}
              dataSource={[
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                },
              ]}
            />
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Config component default size.</p>"}},{demo:{id:"config-provider-demo-theme"},previewerProps:{title:"Theme",filename:"components/config-provider/demo/theme.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import {
  Button,
  ColorPicker,
  ConfigProvider,
  Divider,
  Form,
  Input,
  InputNumber,
  Space,
  Switch,
} from 'antd';
const defaultData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
  Button: {
    colorPrimary: '#00B96B',
  },
};
export default () => {
  const [form] = Form.useForm();
  const [data, setData] = React.useState(defaultData);
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: data.colorPrimary,
            borderRadius: data.borderRadius,
          },
          components: {
            Button: {
              colorPrimary: data.Button?.colorPrimary,
              algorithm: data.Button?.algorithm,
            },
          },
        }}
      >
        <Space>
          <Input />
          <Button type="primary">Button</Button>
        </Space>
      </ConfigProvider>
      <Divider />
      <Form
        form={form}
        onValuesChange={(_, allValues) => {
          setData({
            ...allValues,
          });
        }}
        name="theme"
        initialValues={defaultData}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
      >
        <Form.Item
          name="colorPrimary"
          label="Primary Color"
          trigger="onChangeComplete"
          getValueFromEvent={(color) => color.toHexString()}
        >
          <ColorPicker />
        </Form.Item>
        <Form.Item name="borderRadius" label="Border Radius">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Button">
          <Form.Item name={['Button', 'algorithm']} valuePropName="checked" label="algorithm">
            <Switch />
          </Form.Item>
          <Form.Item
            name={['Button', 'colorPrimary']}
            label="Primary Color"
            trigger="onChangeComplete"
            getValueFromEvent={(color) => color.toHexString()}
          >
            <ColorPicker />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="submit"
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
`,description:"<p>Modify theme by <code>theme</code> prop.</p>"}},{demo:{id:"config-provider-demo-wave"},previewerProps:{title:"Custom Wave",filename:"components/config-provider/demo/wave.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { HappyProvider } from '@ant-design/happy-work-theme';
import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';
// Prepare effect holder
const createHolder = (node) => {
  const { borderWidth } = getComputedStyle(node);
  const borderWidthNum = parseInt(borderWidth, 10);
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.inset = \`-\${borderWidthNum}px\`;
  div.style.borderRadius = 'inherit';
  div.style.background = 'transparent';
  div.style.zIndex = '999';
  div.style.pointerEvents = 'none';
  div.style.overflow = 'hidden';
  node.appendChild(div);
  return div;
};
const createDot = (holder, color, left, top, size = 0) => {
  const dot = document.createElement('div');
  dot.style.position = 'absolute';
  dot.style.left = \`\${left}px\`;
  dot.style.top = \`\${top}px\`;
  dot.style.width = \`\${size}px\`;
  dot.style.height = \`\${size}px\`;
  dot.style.borderRadius = '50%';
  dot.style.background = color;
  dot.style.transform = 'translate(-50%, -50%)';
  dot.style.transition = \`all 1s ease-out\`;
  holder.appendChild(dot);
  return dot;
};

// Inset Effect
const showInsetEffect = (node, { event, component }) => {
  if (component !== 'Button') {
    return;
  }
  const holder = createHolder(node);
  const rect = holder.getBoundingClientRect();
  const left = event.clientX - rect.left;
  const top = event.clientY - rect.top;
  const dot = createDot(holder, 'rgba(255, 255, 255, 0.65)', left, top);

  // Motion
  requestAnimationFrame(() => {
    dot.ontransitionend = () => {
      holder.remove();
    };
    dot.style.width = '200px';
    dot.style.height = '200px';
    dot.style.opacity = '0';
  });
};

// Shake Effect
const showShakeEffect = (node, { component }) => {
  if (component !== 'Button') {
    return;
  }
  const seq = [0, -15, 15, -5, 5, 0];
  const itv = 10;
  let steps = 0;
  function loop() {
    cancelAnimationFrame(node.effectTimeout);
    node.effectTimeout = requestAnimationFrame(() => {
      const currentStep = Math.floor(steps / itv);
      const current = seq[currentStep];
      const next = seq[currentStep + 1];
      if (!next) {
        node.style.transform = '';
        node.style.transition = '';
        return;
      }

      // Trans from current to next by itv
      const angle = current + ((next - current) / itv) * (steps % itv);
      node.style.transform = \`rotate(\${angle}deg)\`;
      node.style.transition = 'none';
      steps += 1;
      loop();
    });
  }
  loop();
};

// Component
const Wrapper = ({ name, ...wave }) => (
  <ConfigProvider wave={wave}>
    <Button type="primary">{name}</Button>
  </ConfigProvider>
);
const App = () => (
  <Space
    style={{
      padding: 24,
    }}
    size="large"
  >
    <Wrapper name="Disabled" disabled />
    <Wrapper name="Default" />
    <Wrapper name="Inset" showEffect={showInsetEffect} />
    <Wrapper name="Shake" showEffect={showShakeEffect} />
    <HappyProvider>
      <Button type="primary">Happy Work</Button>
    </HappyProvider>
  </Space>
);
export default App;
`,description:'<p>Wave effect brings dynamic. Use <code>component</code> to determine which component use it. You can also use HappyProvider from <a href="https://github.com/ant-design/happy-work-theme"><code>@ant-design/happy-work-theme</code></a> to implement dynamic wave effect.</p>'}},{demo:{id:"config-provider-demo-prefixcls"},previewerProps:{debug:!0,title:"prefixCls",filename:"components/config-provider/demo/prefixCls.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { SmileOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Button, ConfigProvider, Select } from 'antd';

// Ant Design site use \`es\` module for view
// but do not replace related lib \`lib\` with \`es\`
// which do not show correct in site.
// We may need do convert in site also.
const App = () => {
  const [prefixCls, setPrefixCls] = useState('light');
  return (
    <>
      <Button
        style={{
          marginBottom: '12px',
        }}
        type="primary"
        onClick={() => setPrefixCls('dark')}
      >
        toggle prefixCls
      </Button>
      <br />
      <ConfigProvider prefixCls={prefixCls} iconPrefixCls="bamboo">
        <SmileOutlined />
        <Select
          style={{
            width: 120,
          }}
        />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Config component and icon prefixCls.</p>"}},{demo:{id:"config-provider-demo-useconfig"},previewerProps:{debug:!0,title:"useConfig",filename:"components/config-provider/demo/useConfig.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Checkbox, ConfigProvider, Divider, Form, Input, Radio, Space } from 'antd';
const ConfigDisplay = () => {
  const { componentDisabled, componentSize } = ConfigProvider.useConfig();
  return (
    <>
      <Form.Item label="componentSize value">
        <Input value={componentSize} />
      </Form.Item>
      <Form.Item label="componentDisabled value">
        <Input value={String(componentDisabled)} disabled={componentDisabled} />
      </Form.Item>
    </>
  );
};
const App = () => {
  const [componentSize, setComponentSize] = useState('small');
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <Space>
        <Radio.Group
          value={componentSize}
          onChange={(e) => {
            setComponentSize(e.target.value);
          }}
        >
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
        <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
          Form disabled
        </Checkbox>
      </Space>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <div className="example">
          <Form disabled={disabled}>
            <ConfigDisplay />
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};
export default App;
`,description:"<p>Get the value of the parent <code>Provider</code>. Such as <code>DisabledContextProvider</code>, <code>SizeContextProvider</code>.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[10].value}),(0,e.jsx)("th",{children:n[11].value}),(0,e.jsx)("th",{children:n[12].value}),(0,e.jsx)("th",{children:n[13].value}),(0,e.jsx)("th",{children:n[14].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[15].value}),(0,e.jsx)("td",{children:n[16].value}),(0,e.jsx)("td",{children:n[17].value}),(0,e.jsx)("td",{children:n[18].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[19].value}),(0,e.jsxs)("td",{children:[n[20].value,(0,e.jsx)("code",{children:n[21].value})]}),(0,e.jsx)("td",{children:n[22].value}),(0,e.jsx)("td",{children:n[23].value}),(0,e.jsx)("td",{children:n[24].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[27].value}),n[28].value,(0,e.jsx)("code",{children:n[29].value}),n[30].value,(0,e.jsx)("code",{children:n[31].value})]}),(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[33].value}),(0,e.jsxs)("td",{children:[n[34].value,(0,e.jsx)(r.Z,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",sourceType:"a",children:n[35].value}),n[36].value]}),(0,e.jsx)("td",{children:n[37].value}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[39].value}),(0,e.jsxs)("td",{children:[n[40].value,(0,e.jsx)(r.Z,{to:"#components-config-provider-demo-direction",sourceType:"Link",children:n[41].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[42].value}),n[43].value,(0,e.jsx)("code",{children:n[44].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[45].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[46].value}),(0,e.jsxs)("td",{children:[n[47].value,(0,e.jsx)("code",{children:n[48].value}),n[49].value,(0,e.jsx)("code",{children:n[50].value})]}),(0,e.jsx)("td",{children:n[51].value}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[53].value}),(0,e.jsx)("td",{children:n[54].value}),(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{children:n[57].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[58].value}),(0,e.jsx)("td",{children:n[59].value}),(0,e.jsx)("td",{children:n[60].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[61].value})}),(0,e.jsx)("td",{children:n[62].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[63].value}),(0,e.jsxs)("td",{children:[n[64].value,(0,e.jsx)(r.Z,{href:"http://unpkg.com/antd/locale/",sourceType:"a",children:n[65].value})]}),(0,e.jsx)("td",{children:n[66].value}),(0,e.jsx)("td",{children:n[67].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[68].value}),(0,e.jsxs)("td",{children:[n[69].value,(0,e.jsx)("code",{children:n[70].value}),n[71].value,(0,e.jsx)("code",{children:n[72].value}),n[73].value]}),(0,e.jsx)("td",{children:n[74].value}),(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{children:n[76].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[77].value}),(0,e.jsx)("td",{children:n[78].value}),(0,e.jsxs)("td",{children:[n[79].value,(0,e.jsx)(s.Z,{previewURL:"https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png",previewurl:"https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png"})]}),(0,e.jsx)("td",{children:n[80].value}),(0,e.jsx)("td",{children:n[81].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{children:n[83].value}),(0,e.jsx)("td",{children:n[84].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[85].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[86].value}),(0,e.jsxs)("td",{children:[n[87].value,(0,e.jsx)(r.Z,{to:"/components/empty/",sourceType:"Link",children:n[88].value})]}),(0,e.jsx)("td",{children:n[89].value}),(0,e.jsx)("td",{children:n[90].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[91].value}),(0,e.jsxs)("td",{children:[n[92].value,(0,e.jsx)(r.Z,{to:"/docs/react/customize-theme",sourceType:"Link",children:n[93].value})]}),(0,e.jsx)("td",{children:n[94].value}),(0,e.jsx)("td",{children:n[95].value}),(0,e.jsx)("td",{children:n[96].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[97].value}),(0,e.jsxs)("td",{children:[n[98].value,(0,e.jsx)("code",{children:n[99].value})]}),(0,e.jsx)("td",{children:n[100].value}),(0,e.jsx)("td",{children:n[101].value}),(0,e.jsx)("td",{children:n[102].value})]})]})]}),(0,e.jsxs)("h3",{id:"configproviderconfig",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#configproviderconfig",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ConfigProvider.config()"]}),(0,e.jsxs)("p",{children:[n[103].value,(0,e.jsx)("code",{children:n[104].value}),n[105].value,(0,e.jsx)("code",{children:n[106].value}),n[107].value,(0,e.jsx)("code",{children:n[108].value}),n[109].value]}),(0,e.jsx)(l.Z,{lang:"ts",children:n[110].value}),(0,e.jsxs)("h3",{id:"configprovideruseconfig-530",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#configprovideruseconfig-530",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ConfigProvider.useConfig() ",(0,e.jsx)("code",{children:n[111].value})]}),(0,e.jsxs)("p",{children:[n[112].value,(0,e.jsx)("code",{children:n[113].value}),n[114].value,(0,e.jsx)("code",{children:n[115].value}),n[116].value,(0,e.jsx)("code",{children:n[117].value}),n[118].value,(0,e.jsx)("code",{children:n[119].value}),n[120].value]}),(0,e.jsx)(l.Z,{lang:"jsx",children:n[121].value}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[122].value}),(0,e.jsx)("th",{children:n[123].value}),(0,e.jsx)("th",{children:n[124].value}),(0,e.jsx)("th",{children:n[125].value}),(0,e.jsx)("th",{children:n[126].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{children:n[129].value}),(0,e.jsx)("td",{children:n[130].value}),(0,e.jsx)("td",{children:n[131].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[132].value}),(0,e.jsx)("td",{children:n[133].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[134].value}),n[135].value,(0,e.jsx)("code",{children:n[136].value}),n[137].value,(0,e.jsx)("code",{children:n[138].value})]}),(0,e.jsx)("td",{children:n[139].value}),(0,e.jsx)("td",{children:n[140].value})]})]})]}),(0,e.jsxs)("h3",{id:"component-config",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#component-config",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Component Config"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[141].value}),(0,e.jsx)("th",{children:n[142].value}),(0,e.jsx)("th",{children:n[143].value}),(0,e.jsx)("th",{children:n[144].value}),(0,e.jsx)("th",{children:n[145].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[146].value}),(0,e.jsx)("td",{children:n[147].value}),(0,e.jsx)("td",{children:n[148].value}),(0,e.jsx)("td",{children:n[149].value}),(0,e.jsx)("td",{children:n[150].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[151].value}),(0,e.jsx)("td",{children:n[152].value}),(0,e.jsx)("td",{children:n[153].value}),(0,e.jsx)("td",{children:n[154].value}),(0,e.jsx)("td",{children:n[155].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[156].value}),(0,e.jsx)("td",{children:n[157].value}),(0,e.jsx)("td",{children:n[158].value}),(0,e.jsx)("td",{children:n[159].value}),(0,e.jsx)("td",{children:n[160].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{children:n[163].value}),(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{children:n[165].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value}),(0,e.jsx)("td",{children:n[168].value}),(0,e.jsx)("td",{children:n[169].value}),(0,e.jsx)("td",{children:n[170].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[171].value}),(0,e.jsx)("td",{children:n[172].value}),(0,e.jsx)("td",{children:n[173].value}),(0,e.jsx)("td",{children:n[174].value}),(0,e.jsx)("td",{children:n[175].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[176].value}),(0,e.jsx)("td",{children:n[177].value}),(0,e.jsx)("td",{children:n[178].value}),(0,e.jsx)("td",{children:n[179].value}),(0,e.jsx)("td",{children:n[180].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[181].value}),(0,e.jsx)("td",{children:n[182].value}),(0,e.jsx)("td",{children:n[183].value}),(0,e.jsx)("td",{children:n[184].value}),(0,e.jsx)("td",{children:n[185].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[186].value}),(0,e.jsx)("td",{children:n[187].value}),(0,e.jsx)("td",{children:n[188].value}),(0,e.jsx)("td",{children:n[189].value}),(0,e.jsx)("td",{children:n[190].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[191].value}),(0,e.jsx)("td",{children:n[192].value}),(0,e.jsx)("td",{children:n[193].value}),(0,e.jsx)("td",{children:n[194].value}),(0,e.jsx)("td",{children:n[195].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[196].value}),(0,e.jsx)("td",{children:n[197].value}),(0,e.jsx)("td",{children:n[198].value}),(0,e.jsx)("td",{children:n[199].value}),(0,e.jsx)("td",{children:n[200].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[201].value}),(0,e.jsx)("td",{children:n[202].value}),(0,e.jsx)("td",{children:n[203].value}),(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{children:n[205].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[206].value}),(0,e.jsx)("td",{children:n[207].value}),(0,e.jsx)("td",{children:n[208].value}),(0,e.jsx)("td",{children:n[209].value}),(0,e.jsx)("td",{children:n[210].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[211].value}),(0,e.jsx)("td",{children:n[212].value}),(0,e.jsx)("td",{children:n[213].value}),(0,e.jsx)("td",{children:n[214].value}),(0,e.jsx)("td",{children:n[215].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[216].value}),(0,e.jsx)("td",{children:n[217].value}),(0,e.jsx)("td",{children:n[218].value}),(0,e.jsx)("td",{children:n[219].value}),(0,e.jsx)("td",{children:n[220].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[221].value}),(0,e.jsx)("td",{children:n[222].value}),(0,e.jsx)("td",{children:n[223].value}),(0,e.jsx)("td",{children:n[224].value}),(0,e.jsx)("td",{children:n[225].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[226].value}),(0,e.jsx)("td",{children:n[227].value}),(0,e.jsx)("td",{children:n[228].value}),(0,e.jsx)("td",{children:n[229].value}),(0,e.jsx)("td",{children:n[230].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[231].value}),(0,e.jsx)("td",{children:n[232].value}),(0,e.jsx)("td",{children:n[233].value}),(0,e.jsx)("td",{children:n[234].value}),(0,e.jsx)("td",{children:n[235].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[236].value}),(0,e.jsx)("td",{children:n[237].value}),(0,e.jsxs)("td",{children:[n[238].value,(0,e.jsx)(r.Z,{to:"/components/form/#validatemessages",sourceType:"Link",children:n[239].value}),n[240].value,(0,e.jsx)("code",{children:n[241].value}),n[242].value,(0,e.jsx)(r.Z,{href:"https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options",sourceType:"a",children:n[243].value}),n[244].value]}),(0,e.jsx)("td",{children:n[245].value}),(0,e.jsx)("td",{children:n[246].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[247].value}),(0,e.jsx)("td",{children:n[248].value}),(0,e.jsx)("td",{children:n[249].value}),(0,e.jsx)("td",{children:n[250].value}),(0,e.jsx)("td",{children:n[251].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[252].value}),(0,e.jsx)("td",{children:n[253].value}),(0,e.jsx)("td",{children:n[254].value}),(0,e.jsx)("td",{children:n[255].value}),(0,e.jsx)("td",{children:n[256].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[257].value}),(0,e.jsx)("td",{children:n[258].value}),(0,e.jsx)("td",{children:n[259].value}),(0,e.jsx)("td",{children:n[260].value}),(0,e.jsx)("td",{children:n[261].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[262].value}),(0,e.jsx)("td",{children:n[263].value}),(0,e.jsx)("td",{children:n[264].value}),(0,e.jsx)("td",{children:n[265].value}),(0,e.jsx)("td",{children:n[266].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[267].value}),(0,e.jsx)("td",{children:n[268].value}),(0,e.jsx)("td",{children:n[269].value}),(0,e.jsx)("td",{children:n[270].value}),(0,e.jsx)("td",{children:n[271].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[272].value}),(0,e.jsx)("td",{children:n[273].value}),(0,e.jsx)("td",{children:n[274].value}),(0,e.jsx)("td",{children:n[275].value}),(0,e.jsx)("td",{children:n[276].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[277].value}),(0,e.jsx)("td",{children:n[278].value}),(0,e.jsx)("td",{children:n[279].value}),(0,e.jsx)("td",{children:n[280].value}),(0,e.jsx)("td",{children:n[281].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[282].value}),(0,e.jsx)("td",{children:n[283].value}),(0,e.jsx)("td",{children:n[284].value}),(0,e.jsx)("td",{children:n[285].value}),(0,e.jsx)("td",{children:n[286].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[287].value}),(0,e.jsx)("td",{children:n[288].value}),(0,e.jsx)("td",{children:n[289].value}),(0,e.jsx)("td",{children:n[290].value}),(0,e.jsx)("td",{children:n[291].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[292].value}),(0,e.jsx)("td",{children:n[293].value}),(0,e.jsx)("td",{children:n[294].value}),(0,e.jsx)("td",{children:n[295].value}),(0,e.jsx)("td",{children:n[296].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[297].value}),(0,e.jsx)("td",{children:n[298].value}),(0,e.jsx)("td",{children:n[299].value}),(0,e.jsx)("td",{children:n[300].value}),(0,e.jsx)("td",{children:n[301].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[302].value}),(0,e.jsx)("td",{children:n[303].value}),(0,e.jsx)("td",{children:n[304].value}),(0,e.jsx)("td",{children:n[305].value}),(0,e.jsx)("td",{children:n[306].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[307].value}),(0,e.jsx)("td",{children:n[308].value}),(0,e.jsx)("td",{children:n[309].value}),(0,e.jsx)("td",{children:n[310].value}),(0,e.jsx)("td",{children:n[311].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[312].value}),(0,e.jsx)("td",{children:n[313].value}),(0,e.jsx)("td",{children:n[314].value}),(0,e.jsx)("td",{children:n[315].value}),(0,e.jsx)("td",{children:n[316].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[317].value}),(0,e.jsx)("td",{children:n[318].value}),(0,e.jsx)("td",{children:n[319].value}),(0,e.jsx)("td",{children:n[320].value}),(0,e.jsx)("td",{children:n[321].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[322].value}),(0,e.jsx)("td",{children:n[323].value}),(0,e.jsx)("td",{children:n[324].value}),(0,e.jsx)("td",{children:n[325].value}),(0,e.jsx)("td",{children:n[326].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[327].value}),(0,e.jsx)("td",{children:n[328].value}),(0,e.jsx)("td",{children:n[329].value}),(0,e.jsx)("td",{children:n[330].value}),(0,e.jsx)("td",{children:n[331].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[332].value}),(0,e.jsx)("td",{children:n[333].value}),(0,e.jsx)("td",{children:n[334].value}),(0,e.jsx)("td",{children:n[335].value}),(0,e.jsx)("td",{children:n[336].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[337].value}),(0,e.jsx)("td",{children:n[338].value}),(0,e.jsx)("td",{children:n[339].value}),(0,e.jsx)("td",{children:n[340].value}),(0,e.jsx)("td",{children:n[341].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[342].value}),(0,e.jsxs)("td",{children:[n[343].value,(0,e.jsx)(r.Z,{to:"/components/space",sourceType:"Link",children:n[344].value})]}),(0,e.jsxs)("td",{children:[n[345].value,(0,e.jsx)("code",{children:n[346].value}),n[347].value,(0,e.jsx)("code",{children:n[348].value}),n[349].value,(0,e.jsx)("code",{children:n[350].value}),n[351].value,(0,e.jsx)("code",{children:n[352].value}),n[353].value]}),(0,e.jsx)("td",{children:n[354].value}),(0,e.jsx)("td",{children:n[355].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[356].value}),(0,e.jsx)("td",{children:n[357].value}),(0,e.jsx)("td",{children:n[358].value}),(0,e.jsx)("td",{children:n[359].value}),(0,e.jsx)("td",{children:n[360].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[361].value}),(0,e.jsx)("td",{children:n[362].value}),(0,e.jsx)("td",{children:n[363].value}),(0,e.jsx)("td",{children:n[364].value}),(0,e.jsx)("td",{children:n[365].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[366].value}),(0,e.jsx)("td",{children:n[367].value}),(0,e.jsx)("td",{children:n[368].value}),(0,e.jsx)("td",{children:n[369].value}),(0,e.jsx)("td",{children:n[370].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[371].value}),(0,e.jsx)("td",{children:n[372].value}),(0,e.jsx)("td",{children:n[373].value}),(0,e.jsx)("td",{children:n[374].value}),(0,e.jsx)("td",{children:n[375].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[376].value}),(0,e.jsx)("td",{children:n[377].value}),(0,e.jsx)("td",{children:n[378].value}),(0,e.jsx)("td",{children:n[379].value}),(0,e.jsx)("td",{children:n[380].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[381].value}),(0,e.jsx)("td",{children:n[382].value}),(0,e.jsx)("td",{children:n[383].value}),(0,e.jsx)("td",{children:n[384].value}),(0,e.jsx)("td",{children:n[385].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[386].value}),(0,e.jsx)("td",{children:n[387].value}),(0,e.jsx)("td",{children:n[388].value}),(0,e.jsx)("td",{children:n[389].value}),(0,e.jsx)("td",{children:n[390].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[391].value}),(0,e.jsx)("td",{children:n[392].value}),(0,e.jsx)("td",{children:n[393].value}),(0,e.jsx)("td",{children:n[394].value}),(0,e.jsx)("td",{children:n[395].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[396].value}),(0,e.jsx)("td",{children:n[397].value}),(0,e.jsx)("td",{children:n[398].value}),(0,e.jsx)("td",{children:n[399].value}),(0,e.jsx)("td",{children:n[400].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[401].value}),(0,e.jsx)("td",{children:n[402].value}),(0,e.jsx)("td",{children:n[403].value}),(0,e.jsx)("td",{children:n[404].value}),(0,e.jsx)("td",{children:n[405].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[406].value}),(0,e.jsx)("td",{children:n[407].value}),(0,e.jsx)("td",{children:n[408].value}),(0,e.jsx)("td",{children:n[409].value}),(0,e.jsx)("td",{children:n[410].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[411].value}),(0,e.jsx)("td",{children:n[412].value}),(0,e.jsx)("td",{children:n[413].value}),(0,e.jsx)("td",{children:n[414].value}),(0,e.jsx)("td",{children:n[415].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[416].value}),(0,e.jsx)("td",{children:n[417].value}),(0,e.jsx)("td",{children:n[418].value}),(0,e.jsx)("td",{children:n[419].value}),(0,e.jsx)("td",{children:n[420].value})]})]})]}),(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h4",{id:"how-to-contribute-a-new-language",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-contribute-a-new-language",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to contribute a new language?"]}),(0,e.jsxs)("p",{children:[n[421].value,(0,e.jsx)(r.Z,{to:"/docs/react/i18n#adding-newplanguage",sourceType:"Link",children:n[422].value}),n[423].value]}),(0,e.jsxs)("h4",{id:"date-related-components-locale-is-not-working",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#date-related-components-locale-is-not-working",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Date-related components locale is not working?"]}),(0,e.jsxs)("p",{children:[n[424].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#date-related-components-locale-is-not-working",sourceType:"Link",children:n[425].value})]}),(0,e.jsxs)("h4",{id:"modal-throw-error-when-setting-getpopupcontainer",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#modal-throw-error-when-setting-getpopupcontainer",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modal throw error when setting ",(0,e.jsx)("code",{children:n[426].value}),"?"]}),(0,e.jsxs)("p",{children:[n[427].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/19974",sourceType:"a",children:n[428].value})]}),(0,e.jsxs)("p",{children:[n[429].value,(0,e.jsx)("code",{children:n[430].value}),n[431].value,(0,e.jsx)("code",{children:n[432].value}),n[433].value,(0,e.jsx)(r.Z,{href:"https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a",sourceType:"a",children:n[434].value}),n[435].value]}),(0,e.jsx)(l.Z,{lang:"diff",children:n[436].value}),(0,e.jsxs)("h4",{id:"why-cant-configprovider-props-like-prefixcls-and-theme-affect-reactnode-inside-messageinfo-notificationopen-modalconfirm",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-cant-configprovider-props-like-prefixcls-and-theme-affect-reactnode-inside-messageinfo-notificationopen-modalconfirm",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why can't ConfigProvider props (like ",(0,e.jsx)("code",{children:n[437].value})," and ",(0,e.jsx)("code",{children:n[438].value}),") affect ReactNode inside ",(0,e.jsx)("code",{children:n[439].value}),", ",(0,e.jsx)("code",{children:n[440].value}),", ",(0,e.jsx)("code",{children:n[441].value}),"?"]}),(0,e.jsxs)("p",{children:[n[442].value,(0,e.jsx)("code",{children:n[443].value}),n[444].value,(0,e.jsx)("code",{children:n[445].value}),n[446].value,(0,e.jsx)("code",{children:n[447].value}),n[448].value,(0,e.jsx)("code",{children:n[449].value}),n[450].value,(0,e.jsx)("code",{children:n[451].value}),n[452].value]}),(0,e.jsxs)("h4",{id:"locale-is-not-working-with-vite-in-production-mode",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#locale-is-not-working-with-vite-in-production-mode",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Locale is not working with Vite in production mode?"]}),(0,e.jsxs)("p",{children:[n[453].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/39045",sourceType:"a",children:n[454].value})]}),(0,e.jsxs)("p",{children:[n[455].value,(0,e.jsx)("code",{children:n[456].value}),n[457].value,(0,e.jsx)("code",{children:n[458].value}),n[459].value,(0,e.jsx)("code",{children:n[460].value}),n[461].value]})]})]})})}o.default=c}}]);
