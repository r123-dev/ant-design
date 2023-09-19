"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6252],{868466:function(u,a,t){t.r(a);var p=t(502143),h=t(968521),x=t(720719),v=t(521587),o=t(759907),l=t(828089),j=t(825673),g=t(902068),f=t(574399),b=t(863942),F=t(316073),y=t(24628),I=t(719260),k=t(956140),s=t(127179),i=t(905388),w=t(245583),_=t(606965),C=t(268696),T=t(587302),r=t(424128),S=t(249706),P=t(795127),B=t(116846),R=t(720538),L=t(212039),O=t(73024),D=t(553913),c=t(830084),N=t(667294),e=t(785893);function d(){var m=(0,c.eL)(),n=m.texts;return(0,e.jsx)(c.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When to use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[1].value}),(0,e.jsx)("li",{children:n[2].value})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(i.Z,{items:[{demo:{id:"components-form-demo-basic"},previewerProps:{title:"Basic Usage",filename:"components/form/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>Basic Form data control. Includes layout, initial values, validation and submit.</p>"}},{demo:{id:"components-form-demo-control-hooks"},previewerProps:{title:"Form methods",filename:"components/form/demo/control-hooks.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        break;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        break;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:`<p>Call form method with <code>Form.useForm</code>.</p>
<blockquote>
<p>Note that <code>useForm</code> is a <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a> that only works in functional component.</p>
</blockquote>`,style:`#components-form-demo-control-hooks .ant-btn {
  margin-right: 8px;
}`}},{demo:{id:"components-form-demo-control-ref"},previewerProps:{title:"Form methods (Class component)",filename:"components/form/demo/control-ref.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const App = () => {
  const formRef = React.useRef(null);
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        formRef.current?.setFieldsValue({
          note: 'Hi, man!',
        });
        break;
      case 'female':
        formRef.current?.setFieldsValue({
          note: 'Hi, lady!',
        });
        break;
      case 'other':
        formRef.current?.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
        break;
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  const onFill = () => {
    formRef.current?.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  return (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>We recommend use <code>Form.useForm</code> to create data control. If you are using class component, you can get it by <code>ref</code>.</p>",style:`#components-form-demo-control-ref .ant-btn {
  margin-right: 8px;
}`}},{demo:{id:"components-form-demo-layout"},previewerProps:{title:"Form Layout",filename:"components/form/demo/layout.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
const App = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
      <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>There are three layout for form: <code>horizontal</code>, <code>vertical</code>, <code>inline</code>.</p>"}},{demo:{id:"components-form-demo-disabled"},previewerProps:{title:"Form disabled",filename:"components/form/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
`,description:"<p>Set component disabled, only works for antd components.</p>"}},{demo:{id:"components-form-demo-required-mark"},previewerProps:{title:"Required style",filename:"components/form/demo/required-mark.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Tag } from 'antd';
const customizeRequiredMark = (label, { required }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);
const App = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
    >
      <Form.Item label="Required Mark" name="requiredMarkValue">
        <Radio.Group>
          <Radio.Button value>Default</Radio.Button>
          <Radio.Button value="optional">Optional</Radio.Button>
          <Radio.Button value={false}>Hidden</Radio.Button>
          <Radio.Button value="customize">Customize</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Field B"
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Switch required or optional style with <code>requiredMark</code>.</p>"}},{demo:{id:"components-form-demo-size"},previewerProps:{title:"Form size",filename:"components/form/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
const App = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Set component size, only works for antd components.</p>"}},{demo:{id:"components-form-demo-layout-can-wrap"},previewerProps:{title:"label can wrap",filename:"components/form/demo/layout-can-wrap.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Form, Input } from 'antd';
const App = () => (
  <Form
    name="wrap"
    labelCol={{
      flex: '110px',
    }}
    labelAlign="left"
    labelWrap
    wrapperCol={{
      flex: 1,
    }}
    colon={false}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Normal label"
      name="username"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="A super long label text"
      name="password"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>Turn on <code>labelWrap</code> to wrap label if text is long.</p>"}},{demo:{id:"components-form-demo-warning-only"},previewerProps:{title:"No block rule",filename:"components/form/demo/warning-only.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Form, Input, message, Space } from 'antd';
const App = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="url"
        label="URL"
        rules={[
          {
            required: true,
          },
          {
            type: 'url',
            warningOnly: true,
          },
          {
            type: 'string',
            min: 6,
          },
        ]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p><code>rule</code> with <code>warningOnly</code> will not block form submit.</p>"}},{demo:{id:"components-form-demo-usewatch"},previewerProps:{title:"Watch Hooks",filename:"components/form/demo/useWatch.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Form, Input, InputNumber, Typography } from 'antd';
const Demo = () => {
  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);
  return (
    <>
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Name (Watch to trigger rerender)">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age (Not Watch)">
          <InputNumber />
        </Form.Item>
      </Form>

      <Typography>
        <pre>Name Value: {nameValue}</pre>
      </Typography>
    </>
  );
};
export default Demo;
`,description:'<p><code>useWatch</code> helps watch the field change and only re-render for the value change. <a href="#formusewatch">API Ref</a>.</p>'}},{demo:{id:"components-form-demo-validate-trigger"},previewerProps:{title:"Validate Trigger",filename:"components/form/demo/validate-trigger.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Alert, Form, Input } from 'antd';
const App = () => (
  <Form
    name="trigger"
    style={{
      maxWidth: 600,
    }}
    layout="vertical"
    autoComplete="off"
  >
    <Alert message="Use 'max' rule, continue type chars to see it" />

    <Form.Item
      hasFeedback
      label="Field A"
      name="field_a"
      validateTrigger="onBlur"
      rules={[
        {
          max: 3,
        },
      ]}
    >
      <Input placeholder="Validate required onBlur" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateDebounce={1000}
      rules={[
        {
          max: 3,
        },
      ]}
    >
      <Input placeholder="Validate required debounce after 1s" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field C"
      name="field_c"
      validateFirst
      rules={[
        {
          max: 6,
        },
        {
          max: 3,
          message: 'Continue input to exceed 6 chars',
        },
      ]}
    >
      <Input placeholder="Validate one by one" />
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>For the async validation scenario, too frequent verification will cause backend pressure. You can change the verification timing through <code>validateTrigger</code>, or change the verification frequency through <code>validateDebounce</code>, or set the verification short circuit through <code>validateFirst</code>.</p>"}},{demo:{id:"components-form-demo-validate-only"},previewerProps:{title:"Validate Only",filename:"components/form/demo/validate-only.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Form, Input, Space } from 'antd';
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};
const App = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Dynamic adjust submit button's <code>disabled</code> status by <code>validateOnly</code> of <code>validateFields</code>.</p>"}},{demo:{id:"components-form-demo-form-item-path"},previewerProps:{title:"Path Prefix",filename:"components/form/demo/form-item-path.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Form, Input, Button } from 'antd';
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const App = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="firstName" label="First Name">
            <Input />
          </MyFormItem>
          <MyFormItem name="lastName" label="Last Name">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <MyFormItem name="age" label="Age">
          <Input />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
export default App;
`,description:"<p>In some scenarios, you may want to set a prefix for some fields consistently. You can achieve this effect with HOC.</p>"}},{demo:{id:"components-form-demo-dynamic-form-item"},previewerProps:{title:"Dynamic Form Item",filename:"components/form/demo/dynamic-form-item.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};
const App = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  return (
    <Form
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('At least 2 passengers'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Passengers' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="passenger name"
                    style={{
                      width: '60%',
                    }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: '60%',
                }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
              <Button
                type="dashed"
                onClick={() => {
                  add('The head item', 0);
                }}
                style={{
                  width: '60%',
                  marginTop: '20px',
                }}
                icon={<PlusOutlined />}
              >
                Add field at head
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Add or remove form items dynamically. <code>add</code> function support config initial value.</p>",style:`.dynamic-delete-button {
  position: relative;
  top: 4px;
  margin: 0 8px;
  color: #999;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}`}},{demo:{id:"components-form-demo-dynamic-form-items"},previewerProps:{title:"Dynamic Form nest Items",filename:"components/form/demo/dynamic-form-items.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const onFinish = (values) => {
  console.log('Received values of form:', values);
};
const App = () => (
  <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    autoComplete="off"
  >
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'first']}
                rules={[
                  {
                    required: true,
                    message: 'Missing first name',
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'last']}
                rules={[
                  {
                    required: true,
                    message: 'Missing last name',
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>Nest dynamic field need extends <code>field</code>. Pass <code>field.name</code> to nest item.</p>"}},{demo:{id:"components-form-demo-dynamic-form-items-no-style"},previewerProps:{debug:!0,title:"Dynamic Form nest pure Items",filename:"components/form/demo/dynamic-form-items-no-style.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const onFinish = (values) => {
  console.log('Received values of form:', values);
};
const App = () => (
  <Form
    name="dynamic_form_no_style"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    autoComplete="off"
  >
    <Form.Item label="Users">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space
                key={field.key}
                style={{
                  marginBottom: 16,
                }}
              >
                <Form.Item
                  noStyle
                  name={[field.name, 'lastName']}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  noStyle
                  name={[field.name, 'firstName']}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <MinusCircleOutlined
                  onClick={() => {
                    remove(field.name);
                  }}
                />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>Nest with <code>noStyle</code> field dynamic form.</p>"}},{demo:{id:"components-form-demo-dynamic-form-items-complex"},previewerProps:{title:"Complex Dynamic Form Item",filename:"components/form/demo/dynamic-form-items-complex.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
const App = () => {
  const [form] = Form.useForm();
  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      form={form}
      name="dynamic_form_complex"
      style={{
        maxWidth: 600,
      }}
      autoComplete="off"
      initialValues={{
        items: [{}],
      }}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div
            style={{
              display: 'flex',
              rowGap: 16,
              flexDirection: 'column',
            }}
          >
            {fields.map((field) => (
              <Card
                size="small"
                title={\`Item \${field.name + 1}\`}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Form.Item label="Name" name={[field.name, 'name']}>
                  <Input />
                </Form.Item>

                {/* Nest Form.List */}
                <Form.Item label="List">
                  <Form.List name={[field.name, 'list']}>
                    {(subFields, subOpt) => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          rowGap: 16,
                        }}
                      >
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item noStyle name={[subField.name, 'first']}>
                              <Input placeholder="first" />
                            </Form.Item>
                            <Form.Item noStyle name={[subField.name, 'second']}>
                              <Input placeholder="second" />
                            </Form.Item>
                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button type="dashed" onClick={() => subOpt.add()} block>
                          + Add Sub Item
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}

            <Button type="dashed" onClick={() => add()} block>
              + Add Item
            </Button>
          </div>
        )}
      </Form.List>

      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Multiple Form.List nested usage scenarios.</p>"}},{demo:{id:"components-form-demo-nest-messages"},previewerProps:{title:"Nest",filename:"components/form/demo/nest-messages.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '\${label} is required!',
  types: {
    email: '\${label} is not a valid email!',
    number: '\${label} is not a valid number!',
  },
  number: {
    range: '\${label} must be between \${min} and \${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const App = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
`,description:'<p><code>name</code> prop support nest data structure. Customize validate message template with <code>validateMessages</code> or <code>message</code>. Ref <a href="https://github.com/react-component/field-form/blob/master/src/utils/messages.ts">here</a> about message template.</p>'}},{demo:{id:"components-form-demo-complex-form-control"},previewerProps:{title:"complex form control",filename:"components/form/demo/complex-form-control.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
const { Option } = Select;
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
const App = () => (
  <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item label="Username">
      <Space>
        <Form.Item
          name="username"
          noStyle
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input
            style={{
              width: 160,
            }}
            placeholder="Please input"
          />
        </Form.Item>
        <Tooltip title="Useful information">
          <Typography.Link href="#API">Need Help?</Typography.Link>
        </Tooltip>
      </Space>
    </Form.Item>
    <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
        >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Street is required',
            },
          ]}
        >
          <Input
            style={{
              width: '50%',
            }}
            placeholder="Input street"
          />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item
      label="BirthDate"
      style={{
        marginBottom: 0,
      }}
    >
      <Form.Item
        name="year"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
        }}
      >
        <Input placeholder="Input birth year" />
      </Form.Item>
      <Form.Item
        name="month"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          margin: '0 8px',
        }}
      >
        <Input placeholder="Input birth month" />
      </Form.Item>
    </Form.Item>
    <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
`,description:'<p>This demo shows how to use <code>Form.Item</code> with multiple controls. <code>&#x3C;Form.Item name="field" /></code> will only bind the control(Input/Select) which is the only children of it. Imagine this case: you added some text description after the Input, then you have to wrap the Input by an extra <code>&#x3C;Form.Item name="field"></code>. <code>style</code> property of <code>Form.Item</code> could be useful to modify the nested form item layout, or use <code>&#x3C;Form.Item noStyle /></code> to turn it into a pure form-binded component(like <code>getFieldDecorator</code> in 3.x).</p>'}},{demo:{id:"components-form-demo-customized-form-controls"},previewerProps:{title:"Customized Form Controls",filename:"components/form/demo/customized-form-controls.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState('rmb');
  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue,
    });
  };
  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || '0', 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('number' in value)) {
      setNumber(newNumber);
    }
    triggerChange({
      number: newNumber,
    });
  };
  const onCurrencyChange = (newCurrency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({
      currency: newCurrency,
    });
  };
  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100,
        }}
      />
      <Select
        value={value.currency || currency}
        style={{
          width: 80,
          margin: '0 8px',
        }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  );
};
const App = () => {
  const onFinish = (values) => {
    console.log('Received values from form: ', values);
  };
  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };
  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            validator: checkPrice,
          },
        ]}
      >
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:`<p>Customized or third-party form controls can be used in Form, too. Controls must follow these conventions:</p>
<blockquote>
<ul>
<li>It has a controlled property <code>value</code> or other name which is equal to the value of <a href="https://ant.design/components/form/#formitem"><code>valuePropName</code></a>.</li>
<li>It has event <code>onChange</code> or an event which name is equal to the value of <a href="https://ant.design/components/form/#formitem"><code>trigger</code></a>.</li>
</ul>
</blockquote>`}},{demo:{id:"components-form-demo-global-state"},previewerProps:{title:"Store Form Data into Upper Component",filename:"components/form/demo/global-state.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Form, Input, Typography } from 'antd';
const { Paragraph } = Typography;
const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[
        {
          required: true,
          message: 'Username is required!',
        },
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
);
const App = () => {
  const [fields, setFields] = useState([
    {
      name: ['username'],
      value: 'Ant Design',
    },
  ]);
  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
      <Paragraph
        style={{
          maxWidth: 440,
          marginTop: 24,
        }}
      >
        <pre
          style={{
            border: 'none',
          }}
        >
          {JSON.stringify(fields, null, 2)}
        </pre>
      </Paragraph>
    </>
  );
};
export default App;
`,description:`<p>We can store form data into upper component or <a href="https://github.com/reactjs/redux">Redux</a> or <a href="https://github.com/dvajs/dva">dva</a> by using <code>onFieldsChange</code> and <code>fields</code>, see more at this <a href="https://rc-field-form.react-component.now.sh/?selectedKind=rc-field-form&#x26;selectedStory=StateForm-redux&#x26;full=0&#x26;addons=1&#x26;stories=1&#x26;panelRight=0&#x26;addonPanel=storybook%2Factions%2Factions-panel">rc-field-form demo</a>.</p>
<p><strong>Note:</strong> Save Form data globally <a href="https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978">is not a good practice</a>. You should avoid this if not necessary.</p>`}},{demo:{id:"components-form-demo-form-context"},previewerProps:{title:"Control between forms",filename:"components/form/demo/form-context.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useRef, useState } from 'react';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, InputNumber, Modal, Space, Typography } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }) => {
  const prevOpenRef = useRef();
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;
  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};
const ModalForm = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    open,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal title="Basic Drawer" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="name"
          label="User Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="User Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const App = () => {
  const [open, setOpen] = useState(false);
  const showUserModal = () => {
    setOpen(true);
  };
  const hideUserModal = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue('users') || [];
          basicForm.setFieldsValue({
            users: [...users, values],
          });
          setOpen(false);
        }
      }}
    >
      <Form
        {...layout}
        name="basicForm"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="group"
          label="Group Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Create a hidden field to make Form instance record this */}
        <Form.Item name="users" hidden />

        <Form.Item
          label="User List"
          shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
        >
          {({ getFieldValue }) => {
            const users = getFieldValue('users') || [];
            return users.length ? (
              <ul>
                {users.map((user) => (
                  <li key={user.name} className="user">
                    <Space>
                      <Avatar icon={<UserOutlined />} />
                      {\`\${user.name} - \${user.age}\`}
                    </Space>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text className="ant-form-text" type="secondary">
                ( <SmileOutlined /> No user yet. )
              </Typography.Text>
            );
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button
            htmlType="button"
            style={{
              margin: '0 8px',
            }}
            onClick={showUserModal}
          >
            Add User
          </Button>
        </Form.Item>
      </Form>

      <ModalForm open={open} onCancel={hideUserModal} />
    </Form.Provider>
  );
};
export default App;
`,description:'<p>Use <code>Form.Provider</code> to process data between forms. In this case, submit button is in the Modal which is out of Form. You can use <code>form.submit</code> to submit form. Besides, we recommend native <code>&#x3C;Button htmlType="submit" /></code> to submit a form.</p>'}},{demo:{id:"components-form-demo-inline-login"},previewerProps:{title:"Inline Login Form",filename:"components/form/demo/inline-login.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const App = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Inline login form is often used in navigation bar.</p>"}},{demo:{id:"components-form-demo-normal-login"},previewerProps:{title:"Login Form",filename:"components/form/demo/normal-login.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const App = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Normal login form which can contain more elements.</p>",style:`#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .ant-col-rtl .login-form-forgot {
  float: left;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}`}},{demo:{id:"components-form-demo-register"},previewerProps:{title:"Registration",filename:"components/form/demo/register.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">\xA5</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => \`\${value}\${domain}\`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="donation"
        label="Donation"
        rules={[
          {
            required: true,
            message: 'Please input donation amount!',
          },
        ]}
      >
        <InputNumber
          addonAfter={suffixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: 'Please input website!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[
          {
            required: true,
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Fill in this form to create a new account for you.</p>"}},{demo:{id:"components-form-demo-advanced-search"},previewerProps:{title:"Advanced search",filename:"components/form/demo/advanced-search.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, theme } from 'antd';
const { Option } = Select;
const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          {i % 3 !== 1 ? (
            <Form.Item
              name={\`field-\${i}\`}
              label={\`Field \${i}\`}
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          ) : (
            <Form.Item
              name={\`field-\${i}\`}
              label={\`Field \${i}\`}
              rules={[
                {
                  required: true,
                  message: 'Select something!',
                },
              ]}
              initialValue="1"
            >
              <Select>
                <Option value="1">
                  longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                </Option>
                <Option value="2">222</Option>
              </Select>
            </Form.Item>
          )}
        </Col>,
      );
    }
    return children;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
      <Row gutter={24}>{getFields()}</Row>
      <div
        style={{
          textAlign: 'right',
        }}
      >
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> Collapse
          </a>
        </Space>
      </div>
    </Form>
  );
};
const App = () => {
  const { token } = theme.useToken();
  const listStyle = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  return (
    <>
      <AdvancedSearchForm />
      <div style={listStyle}>Search Result List</div>
    </>
  );
};
export default App;
`,description:`<p>Three columns layout is often used for advanced searching of data table.</p>
<p>Because the width of label is not fixed, you may need to adjust it by customizing its style.</p>`}},{demo:{id:"components-form-demo-form-in-modal"},previewerProps:{title:"Form in Modal to Create",filename:"components/form/demo/form-in-modal.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};
const App = () => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        New Collection
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default App;
`,description:"<p>When user visit a page with a list of items, and want to create a new item. The page can popup a form in Modal, then let user fill in the form to create an item.</p>",style:`.collection-create-form_last-form-item {
  margin-bottom: 0;
}`}},{demo:{id:"components-form-demo-time-related-controls"},previewerProps:{title:"Time-related Controls",filename:"components/form/demo/time-related-controls.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, DatePicker, Form, TimePicker } from 'antd';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const onFinish = (fieldsValue) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue['range-picker'];
  const rangeTimeValue = fieldsValue['range-time-picker'];
  const values = {
    ...fieldsValue,
    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
    'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
    'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    'range-time-picker': [
      rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
      rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
    ],
    'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
  };
  console.log('Received values of form: ', values);
};
const App = () => (
  <Form
    name="time_related_controls"
    {...formItemLayout}
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item name="date-picker" label="DatePicker" {...config}>
      <DatePicker />
    </Form.Item>
    <Form.Item name="date-time-picker" label="DatePicker[showTime]" {...config}>
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    <Form.Item name="month-picker" label="MonthPicker" {...config}>
      <DatePicker picker="month" />
    </Form.Item>
    <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
      <RangePicker />
    </Form.Item>
    <Form.Item name="range-time-picker" label="RangePicker[showTime]" {...rangeConfig}>
      <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    <Form.Item name="time-picker" label="TimePicker" {...config}>
      <TimePicker />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>The <code>value</code> of time-related components is a <code>dayjs</code> object, which we need to pre-process it before we submit to server.</p>"}},{demo:{id:"components-form-demo-without-form-create"},previewerProps:{title:"Handle Form Data Manually",filename:"components/form/demo/without-form-create.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Form, InputNumber } from 'antd';
const validatePrimeNumber = (number) => {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  };
};
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};
const tips =
  'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
const App = () => {
  const [number, setNumber] = useState({
    value: 11,
  });
  const onNumberChange = (value) => {
    setNumber({
      ...validatePrimeNumber(value),
      value,
    });
  };
  return (
    <Form
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        {...formItemLayout}
        label="Prime between 8 & 12"
        validateStatus={number.validateStatus}
        help={number.errorMsg || tips}
      >
        <InputNumber min={8} max={12} value={number.value} onChange={onNumberChange} />
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p><code>Form</code> will collect and validate form data automatically. But if you don't need this feature or the default behavior cannot satisfy your business, you can handle form data manually.</p>"}},{demo:{id:"components-form-demo-validate-static"},previewerProps:{title:"Customized Validation",filename:"components/form/demo/validate-static.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import {
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TimePicker,
  TreeSelect,
} from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const App = () => (
  <Form
    {...formItemLayout}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </Form.Item>

    <Form.Item label="Warning" validateStatus="warning">
      <Input placeholder="Warning" id="warning" prefix={<SmileOutlined />} />
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input placeholder="I'm the content is being validated" id="validating" />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input placeholder="I'm the content" id="success" />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input placeholder="Warning" id="warning2" />
    </Form.Item>

    <Form.Item
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error2" />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <DatePicker
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <TimePicker
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item label="Error" hasFeedback validateStatus="error">
      <DatePicker.RangePicker
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Select placeholder="I'm Select" allowClear>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="error"
      help="Something breaks the rule."
    >
      <Cascader
        placeholder="I'm Cascader"
        options={[
          {
            value: 'xx',
            label: 'xx',
          },
        ]}
        allowClear
      />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning" help="Need to be checked">
      <TreeSelect
        placeholder="I'm TreeSelect"
        treeData={[
          {
            value: 'xx',
            label: 'xx',
          },
        ]}
        allowClear
      />
    </Form.Item>

    <Form.Item
      label="inline"
      style={{
        marginBottom: 0,
      }}
    >
      <Form.Item
        validateStatus="error"
        help="Please select right date"
        style={{
          display: 'inline-block',
          width: 'calc(50% - 12px)',
        }}
      >
        <DatePicker />
      </Form.Item>
      <span
        style={{
          display: 'inline-block',
          width: '24px',
          lineHeight: '32px',
          textAlign: 'center',
        }}
      >
        -
      </span>
      <Form.Item
        style={{
          display: 'inline-block',
          width: 'calc(50% - 12px)',
        }}
      >
        <DatePicker />
      </Form.Item>
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <InputNumber
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input allowClear placeholder="with allowClear" />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input.Password placeholder="with input password" />
    </Form.Item>

    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Input.Password allowClear placeholder="with input password and allowClear" />
    </Form.Item>

    <Form.Item label="Fail" validateStatus="error" hasFeedback>
      <Mentions />
    </Form.Item>

    <Form.Item label="Fail" validateStatus="error" hasFeedback help="Should have something">
      <Input.TextArea allowClear showCount />
    </Form.Item>
  </Form>
);
export default App;
`,description:`<p>We provide properties like <code>validateStatus</code> <code>help</code> <code>hasFeedback</code> to customize your own validate status and message, without using Form.</p>
<ol>
<li><code>validateStatus</code>: validate status of form components which could be 'success', 'warning', 'error', 'validating'.</li>
<li><code>hasFeedback</code>: display feed icon of input control</li>
<li><code>help</code>: display validate message.</li>
</ol>`}},{demo:{id:"components-form-demo-dynamic-rule"},previewerProps:{title:"Dynamic Rules",filename:"components/form/demo/dynamic-rule.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};
const App = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick, form]);
  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  return (
    <Form
      form={form}
      name="dynamic_rule"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        {...formItemLayout}
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="nickname"
        label="Nickname"
        rules={[
          {
            required: checkNick,
            message: 'Please input your nickname',
          },
        ]}
      >
        <Input placeholder="Please input your nickname" />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Checkbox checked={checkNick} onChange={onCheckboxChange}>
          Nickname is required
        </Checkbox>
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onCheck}>
          Check
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Perform different check rules according to different situations.</p>"}},{demo:{id:"components-form-demo-dependencies"},previewerProps:{title:"Dependencies",filename:"components/form/demo/dependencies.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Alert, Form, Input, Typography } from 'antd';
const App = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="dependencies"
      autoComplete="off"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
    >
      <Alert message=" Try modify \`Password2\` and then modify \`Password\`" type="info" showIcon />

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Field */}
      <Form.Item
        label="Confirm Password"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      {/* Render Props */}
      <Form.Item noStyle dependencies={['password2']}>
        {() => (
          <Typography>
            <p>
              Only Update when <code>password2</code> updated:
            </p>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Form.Item can set the associated field through the <code>dependencies</code> property. When the value of the associated field changes, the validation and update will be triggered.</p>"}},{demo:{id:"components-form-demo-validate-other"},previewerProps:{title:"Other Form Controls",filename:"components/form/demo/validate-other.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import React from 'react';
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
} from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
const App = () => (
  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}
    initialValues={{
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
      'color-picker': null,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item label="Plain Text">
      <span className="ant-form-text">China</span>
    </Form.Item>
    <Form.Item
      name="select"
      label="Select"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please select your country!',
        },
      ]}
    >
      <Select placeholder="Please select a country">
        <Option value="china">China</Option>
        <Option value="usa">U.S.A</Option>
      </Select>
    </Form.Item>

    <Form.Item
      name="select-multiple"
      label="Select[multiple]"
      rules={[
        {
          required: true,
          message: 'Please select your favourite colors!',
          type: 'array',
        },
      ]}
    >
      <Select mode="multiple" placeholder="Please select favourite colors">
        <Option value="red">Red</Option>
        <Option value="green">Green</Option>
        <Option value="blue">Blue</Option>
      </Select>
    </Form.Item>

    <Form.Item label="InputNumber">
      <Form.Item name="input-number" noStyle>
        <InputNumber min={1} max={10} />
      </Form.Item>
      <span
        className="ant-form-text"
        style={{
          marginLeft: 8,
        }}
      >
        machines
      </span>
    </Form.Item>

    <Form.Item name="switch" label="Switch" valuePropName="checked">
      <Switch />
    </Form.Item>

    <Form.Item name="slider" label="Slider">
      <Slider
        marks={{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }}
      />
    </Form.Item>

    <Form.Item name="radio-group" label="Radio.Group">
      <Radio.Group>
        <Radio value="a">item 1</Radio>
        <Radio value="b">item 2</Radio>
        <Radio value="c">item 3</Radio>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="radio-button"
      label="Radio.Button"
      rules={[
        {
          required: true,
          message: 'Please pick an item!',
        },
      ]}
    >
      <Radio.Group>
        <Radio.Button value="a">item 1</Radio.Button>
        <Radio.Button value="b">item 2</Radio.Button>
        <Radio.Button value="c">item 3</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item name="checkbox-group" label="Checkbox.Group">
      <Checkbox.Group>
        <Row>
          <Col span={8}>
            <Checkbox
              value="A"
              style={{
                lineHeight: '32px',
              }}
            >
              A
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="B"
              style={{
                lineHeight: '32px',
              }}
              disabled
            >
              B
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="C"
              style={{
                lineHeight: '32px',
              }}
            >
              C
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="D"
              style={{
                lineHeight: '32px',
              }}
            >
              D
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="E"
              style={{
                lineHeight: '32px',
              }}
            >
              E
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="F"
              style={{
                lineHeight: '32px',
              }}
            >
              F
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Form.Item>

    <Form.Item name="rate" label="Rate">
      <Rate />
    </Form.Item>

    <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      extra="longgggggggggggggggggggggggggggggggggg"
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>
    <Form.Item label="Dragger">
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="color-picker"
      label="ColorPicker"
      rules={[
        {
          required: true,
          message: 'color is required!',
        },
      ]}
    >
      <ColorPicker />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>Demonstration of validation configuration for form controls which are not shown in the demos above.</p>"}},{demo:{id:"components-form-demo-disabled-input-debug"},previewerProps:{debug:!0,title:"Disabled Input Debug",filename:"components/form/demo/disabled-input-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Form, Input } from 'antd';
const App = () => (
  <Form
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item label="Normal0">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail0" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled0" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled value="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal1">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail1" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled1" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled value="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal2">
      <Input placeholder="unavailable choice" addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail2" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled2" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal3">
      <Input placeholder="unavailable choice" prefix="\u4EBA\u6C11\u5E01" value="50" />
    </Form.Item>
    <Form.Item label="Fail3" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" prefix="\u4EBA\u6C11\u5E01" value="50" />
    </Form.Item>
    <Form.Item label="FailDisabled3" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled prefix="\u4EBA\u6C11\u5E01" value="50" />
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>Test disabled Input with validate state.</p>"}},{demo:{id:"components-form-demo-label-debug"},previewerProps:{debug:!0,title:"label ellipsis",filename:"components/form/demo/label-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Form, Input, Typography } from 'antd';
const App = () => (
  <Form
    name="label-ellipsis"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label={
        <Typography.Text ellipsis>
          longtextlongtextlongtextlongtextlongtextlongtextlongtext
        </Typography.Text>
      }
      name="username"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={
        <Typography.Text ellipsis>
          longtext longtext longtext longtext longtext longtext longtext
        </Typography.Text>
      }
      name="password"
    >
      <Input.Password />
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>Use <code>&#x3C;Typography.Text ellipsis></code> in label should show <code>...</code>.</p>"}},{demo:{id:"components-form-demo-col-24-debug"},previewerProps:{debug:!0,title:"Test col 24 usage",filename:"components/form/demo/col-24-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Select, Form, Input, Divider } from 'antd';
const sharedItem = (
  <Form.Item
    label={<a href="https://github.com/ant-design/ant-design/issues/36459">#36459</a>}
    initialValue={['bamboo']}
    name="select"
    style={{
      boxShadow: '0 0 3px red',
    }}
  >
    <Select
      style={{
        width: '70%',
      }}
      mode="multiple"
      options={[
        {
          label: 'Bamboo',
          value: 'bamboo',
        },
        {
          label: 'Little',
          value: 'little',
        },
        {
          label: 'Light',
          value: 'light',
        },
      ]}
    />
  </Form.Item>
);
const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {sharedItem}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form
        name="responsive"
        labelCol={{
          sm: 24,
          xl: 24,
        }}
        wrapperCol={{
          sm: 24,
          xl: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Divider />

      <Form layout="vertical">
        {sharedItem}

        <Form.Item
          label="col12"
          name="col12"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 12,
          }}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};
export default App;
`,description:'<p>See issue <a href="https://github.com/ant-design/ant-design/issues/32980">#32980</a>.</p>'}},{demo:{id:"components-form-demo-ref-item"},previewerProps:{debug:!0,title:"Ref item",filename:"components/form/demo/ref-item.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Form, Input } from 'antd';
const App = () => {
  const [form] = Form.useForm();
  const ref = React.useRef(null);
  return (
    <Form
      form={form}
      initialValues={{
        list: ['light'],
      }}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item name="test" label="test">
        <Input ref={ref} />
      </Form.Item>

      <Form.List name="list">
        {(fields) =>
          fields.map((field) => (
            <Form.Item {...field} key={field.key}>
              <Input ref={ref} />
            </Form.Item>
          ))
        }
      </Form.List>

      <Button
        htmlType="button"
        onClick={() => {
          form.getFieldInstance('test').focus();
        }}
      >
        Focus Form.Item
      </Button>
      <Button
        onClick={() => {
          form.getFieldInstance(['list', 0]).focus();
        }}
      >
        Focus Form.List
      </Button>
    </Form>
  );
};
export default App;
`,description:"<p>Use <code>ref</code> first!</p>"}},{demo:{id:"components-form-demo-custom-feedback-icons"},previewerProps:{debug:!0,title:"Custom feedback icons",filename:"components/form/demo/custom-feedback-icons.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { uniqueId } from 'lodash';
import { createStyles, css } from 'antd-style';
import { AlertFilled, CloseSquareFilled } from '@ant-design/icons';
import { Button, Form, Input, Tooltip } from 'antd';
const useStyle = createStyles(() => ({
  'custom-feedback-icons': css\`
    .ant-form-item-feedback-icon {
      pointer-events: all;
    }
  \`,
}));
const App = () => {
  const [form] = Form.useForm();
  const { styles } = useStyle();
  return (
    <Form
      name="custom-feedback-icons"
      form={form}
      style={{
        maxWidth: 600,
      }}
      feedbackIcons={({ errors }) => ({
        error: (
          <Tooltip
            key="tooltipKey"
            title={errors?.map((error) => (
              <div key={uniqueId()}>{error}</div>
            ))}
            color="red"
          >
            <CloseSquareFilled />
          </Tooltip>
        ),
      })}
    >
      <Form.Item
        name="custom-feedback-test-item"
        label="Test"
        className={styles['custom-feedback-icons']}
        rules={[
          {
            required: true,
            type: 'email',
          },
          {
            min: 10,
          },
        ]}
        help=""
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="custom-feedback-test-item2"
        label="Test"
        className={styles['custom-feedback-icons']}
        rules={[
          {
            required: true,
            type: 'email',
          },
          {
            min: 10,
          },
        ]}
        help=""
        hasFeedback={{
          icons: ({ errors }) => ({
            error: (
              <Tooltip
                key="tooltipKey"
                title={errors?.map((error) => (
                  <div key={uniqueId()}>{error}</div>
                ))}
                color="pink"
              >
                <AlertFilled />
              </Tooltip>
            ),
            success: false,
          }),
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Custom feedback icons can be passed by <code>hasFeedback={{ icons: ... }}</code> or <code>&#x3C;Form feedbackIcons={icons}></code> (<code>Form.Item</code> must has <code>hasFeedback</code> attribute).</p>"}},{demo:{id:"components-form-demo-component-token"},previewerProps:{debug:!0,title:"Component Token",filename:"components/form/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ConfigProvider, Form, Input } from 'antd';
import React from 'react';
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Form: {
          labelRequiredMarkColor: 'pink',
          labelColor: 'green',
          labelFontSize: 16,
          labelHeight: 34,
          labelColonMarginInlineStart: 4,
          labelColonMarginInlineEnd: 12,
          itemMarginBottom: 18,
        },
      },
    }}
  >
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  </ConfigProvider>
);
export default App;
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[3].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[4].value})]}),(0,e.jsxs)("h3",{id:"form",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#form",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form"]}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[5].value}),(0,e.jsx)("th",{children:n[6].value}),(0,e.jsx)("th",{children:n[7].value}),(0,e.jsx)("th",{children:n[8].value}),(0,e.jsx)("th",{children:n[9].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[10].value}),(0,e.jsxs)("td",{children:[n[11].value,(0,e.jsx)("code",{children:n[12].value}),n[13].value]}),(0,e.jsx)("td",{children:n[14].value}),(0,e.jsx)("td",{children:n[15].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[16].value}),(0,e.jsx)("td",{children:n[17].value}),(0,e.jsx)("td",{children:n[18].value}),(0,e.jsx)("td",{children:n[19].value}),(0,e.jsx)("td",{children:n[20].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[21].value}),(0,e.jsxs)("td",{children:[n[22].value,(0,e.jsx)("code",{children:n[23].value})]}),(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[26].value}),(0,e.jsxs)("td",{children:[n[27].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-global-state",sourceType:"Link",children:n[28].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{to:"#fielddata",sourceType:"Link",children:n[29].value}),n[30].value]}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[32].value}),(0,e.jsxs)("td",{children:[n[33].value,(0,e.jsx)("code",{children:n[34].value}),n[35].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#forminstance",sourceType:"Link",children:n[36].value})}),(0,e.jsx)("td",{children:n[37].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[38].value}),(0,e.jsxs)("td",{children:[n[39].value,(0,e.jsx)("code",{children:n[40].value}),n[41].value,(0,e.jsx)("code",{children:n[42].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#feedbackicons",sourceType:"Link",children:n[43].value})}),(0,e.jsx)("td",{children:n[44].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{children:n[47].value}),(0,e.jsx)("td",{children:n[48].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[49].value}),(0,e.jsx)("td",{children:n[50].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[51].value}),n[52].value,(0,e.jsx)("code",{children:n[53].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[54].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{children:n[57].value}),(0,e.jsx)("td",{children:n[58].value}),(0,e.jsx)("td",{children:n[59].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[60].value}),(0,e.jsxs)("td",{children:[n[61].value,(0,e.jsx)("code",{children:n[62].value}),n[63].value,(0,e.jsx)("code",{children:n[64].value}),n[65].value,(0,e.jsx)("code",{children:n[66].value}),n[67].value,(0,e.jsx)("code",{children:n[68].value}),n[69].value,(0,e.jsx)("code",{children:n[70].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/grid/#col",sourceType:"Link",children:n[71].value})}),(0,e.jsx)("td",{children:n[72].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[73].value}),(0,e.jsx)("td",{children:n[74].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[75].value}),n[76].value,(0,e.jsx)("code",{children:n[77].value}),n[78].value,(0,e.jsx)("code",{children:n[79].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[80].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[81].value}),(0,e.jsxs)("td",{children:[n[82].value,(0,e.jsx)("code",{children:n[83].value})]}),(0,e.jsx)("td",{children:n[84].value}),(0,e.jsx)("td",{children:n[85].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[86].value}),(0,e.jsx)("td",{children:n[87].value}),(0,e.jsx)("td",{children:n[88].value}),(0,e.jsx)("td",{children:n[89].value}),(0,e.jsx)("td",{children:n[90].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[91].value}),(0,e.jsx)("td",{children:n[92].value}),(0,e.jsxs)("td",{children:[n[93].value,(0,e.jsx)("code",{children:n[94].value}),n[95].value]}),(0,e.jsx)("td",{children:n[96].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[97].value}),n[98].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[99].value}),(0,e.jsx)("td",{children:n[100].value}),(0,e.jsxs)("td",{children:[n[101].value,(0,e.jsx)(r.Z,{href:"https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options",sourceType:"a",children:n[102].value})]}),(0,e.jsx)("td",{children:n[103].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[104].value}),(0,e.jsx)("td",{children:n[105].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[106].value}),n[107].value,(0,e.jsx)("code",{children:n[108].value}),n[109].value,(0,e.jsx)("code",{children:n[110].value})]}),(0,e.jsx)("td",{children:n[111].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[112].value}),(0,e.jsxs)("td",{children:[n[113].value,(0,e.jsx)(r.Z,{to:"#validatemessages",sourceType:"Link",children:n[114].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/blob/6234509d18bac1ac60fbb3f92a5b2c6a6361295a/components/locale/en_US.ts#L88-L134",sourceType:"a",children:n[115].value})}),(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{children:n[119].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[120].value})}),(0,e.jsx)("td",{children:n[121].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[122].value}),(0,e.jsxs)("td",{children:[n[123].value,(0,e.jsx)("code",{children:n[124].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/grid/#col",sourceType:"Link",children:n[125].value})}),(0,e.jsx)("td",{children:n[126].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{children:n[129].value}),(0,e.jsx)("td",{children:n[130].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[131].value}),(0,e.jsx)("td",{children:n[132].value}),(0,e.jsx)("td",{children:n[133].value}),(0,e.jsx)("td",{children:n[134].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[135].value}),(0,e.jsx)("td",{children:n[136].value}),(0,e.jsx)("td",{children:n[137].value}),(0,e.jsx)("td",{children:n[138].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[139].value}),(0,e.jsx)("td",{children:n[140].value}),(0,e.jsx)("td",{children:n[141].value}),(0,e.jsx)("td",{children:n[142].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"validatemessages",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#validatemessages",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"validateMessages"]}),(0,e.jsxs)("p",{children:[n[143].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/blob/6234509d18bac1ac60fbb3f92a5b2c6a6361295a/components/locale/en_US.ts#L88-L134",sourceType:"a",children:n[144].value}),n[145].value,(0,e.jsx)("code",{children:n[146].value}),n[147].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[148].value}),(0,e.jsxs)("p",{children:[n[149].value,(0,e.jsx)(r.Z,{to:"/components/config-provider/",sourceType:"Link",children:n[150].value}),n[151].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[152].value}),(0,e.jsxs)("h2",{id:"formitem",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formitem",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form.Item"]}),(0,e.jsx)("p",{children:n[153].value}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[154].value}),(0,e.jsx)("th",{children:n[155].value}),(0,e.jsx)("th",{children:n[156].value}),(0,e.jsx)("th",{children:n[157].value}),(0,e.jsx)("th",{children:n[158].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[159].value}),(0,e.jsxs)("td",{children:[n[160].value,(0,e.jsx)("code",{children:n[161].value}),n[162].value,(0,e.jsx)("code",{children:n[163].value}),n[164].value]}),(0,e.jsx)("td",{children:n[165].value}),(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[167].value}),(0,e.jsxs)("td",{children:[n[168].value,(0,e.jsx)(r.Z,{to:"#dependencies",sourceType:"Link",children:n[169].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[170].value}),n[171].value]}),(0,e.jsx)("td",{children:n[172].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[173].value}),(0,e.jsx)("td",{children:n[174].value}),(0,e.jsx)("td",{children:n[175].value}),(0,e.jsx)("td",{children:n[176].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[177].value}),(0,e.jsx)("td",{children:n[178].value}),(0,e.jsx)("td",{children:n[179].value}),(0,e.jsx)("td",{children:n[180].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[181].value}),(0,e.jsx)("td",{children:n[182].value}),(0,e.jsx)("td",{children:n[183].value}),(0,e.jsx)("td",{children:n[184].value}),(0,e.jsx)("td",{children:n[185].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[186].value}),(0,e.jsxs)("td",{children:[n[187].value,(0,e.jsx)("code",{children:n[188].value}),n[189].value,(0,e.jsx)("code",{children:n[190].value}),n[191].value]}),(0,e.jsxs)("td",{children:[n[192].value,(0,e.jsx)(r.Z,{to:"#feedbackicons",sourceType:"Link",children:n[193].value}),n[194].value]}),(0,e.jsx)("td",{children:n[195].value}),(0,e.jsx)("td",{children:n[196].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[197].value}),(0,e.jsx)("td",{children:n[198].value}),(0,e.jsx)("td",{children:n[199].value}),(0,e.jsx)("td",{children:n[200].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[201].value}),(0,e.jsx)("td",{children:n[202].value}),(0,e.jsx)("td",{children:n[203].value}),(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{children:n[205].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[206].value}),(0,e.jsxs)("td",{children:[n[207].value,(0,e.jsx)("code",{children:n[208].value})]}),(0,e.jsx)("td",{children:n[209].value}),(0,e.jsx)("td",{children:n[210].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[211].value}),(0,e.jsxs)("td",{children:[n[212].value,(0,e.jsx)("code",{children:n[213].value}),n[214].value]}),(0,e.jsx)("td",{children:n[215].value}),(0,e.jsx)("td",{children:n[216].value}),(0,e.jsx)("td",{children:n[217].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[218].value}),(0,e.jsx)("td",{children:n[219].value}),(0,e.jsx)("td",{children:n[220].value}),(0,e.jsx)("td",{children:n[221].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[222].value}),(0,e.jsx)("td",{children:n[223].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[224].value}),n[225].value,(0,e.jsx)("code",{children:n[226].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[227].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[228].value}),(0,e.jsxs)("td",{children:[n[229].value,(0,e.jsx)("code",{children:n[230].value}),n[231].value,(0,e.jsx)("code",{children:n[232].value}),n[233].value,(0,e.jsx)("code",{children:n[234].value}),n[235].value,(0,e.jsx)("code",{children:n[236].value}),n[237].value,(0,e.jsx)("code",{children:n[238].value}),n[239].value,(0,e.jsx)("code",{children:n[240].value}),n[241].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/grid/#col",sourceType:"Link",children:n[242].value})}),(0,e.jsx)("td",{children:n[243].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[244].value}),(0,e.jsx)("td",{children:n[245].value}),(0,e.jsx)("td",{children:n[246].value}),(0,e.jsx)("td",{children:n[247].value}),(0,e.jsx)("td",{children:n[248].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[249].value}),(0,e.jsx)("td",{children:n[250].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[251].value})}),(0,e.jsx)("td",{children:n[252].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[253].value}),(0,e.jsx)("td",{children:n[254].value}),(0,e.jsx)("td",{children:n[255].value}),(0,e.jsx)("td",{children:n[256].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[257].value}),(0,e.jsxs)("td",{children:[n[258].value,(0,e.jsx)("code",{children:n[259].value}),n[260].value,(0,e.jsx)("code",{children:n[261].value}),n[262].value,(0,e.jsx)("code",{children:n[263].value}),n[264].value]}),(0,e.jsx)("td",{children:n[265].value}),(0,e.jsx)("td",{children:n[266].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[267].value}),(0,e.jsx)("td",{children:n[268].value}),(0,e.jsx)("td",{children:n[269].value}),(0,e.jsx)("td",{children:n[270].value}),(0,e.jsx)("td",{children:n[271].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[272].value}),(0,e.jsx)("td",{children:n[273].value}),(0,e.jsx)("td",{children:n[274].value}),(0,e.jsx)("td",{children:n[275].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[276].value}),(0,e.jsxs)("td",{children:[n[277].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-basic",sourceType:"Link",children:n[278].value}),n[279].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{to:"#rule",sourceType:"Link",children:n[280].value}),n[281].value]}),(0,e.jsx)("td",{children:n[282].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[283].value}),(0,e.jsxs)("td",{children:[n[284].value,(0,e.jsx)(r.Z,{to:"#shouldupdate",sourceType:"Link",children:n[285].value})]}),(0,e.jsx)("td",{children:n[286].value}),(0,e.jsx)("td",{children:n[287].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[288].value}),(0,e.jsx)("td",{children:n[289].value}),(0,e.jsxs)("td",{children:[n[290].value,(0,e.jsx)(r.Z,{to:"/components/tooltip#api",sourceType:"Link",children:n[291].value})]}),(0,e.jsx)("td",{children:n[292].value}),(0,e.jsx)("td",{children:n[293].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[294].value}),(0,e.jsxs)("td",{children:[n[295].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-customized-form-controls",sourceType:"Link",children:n[296].value}),n[297].value]}),(0,e.jsx)("td",{children:n[298].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[299].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[300].value}),(0,e.jsx)("td",{children:n[301].value}),(0,e.jsx)("td",{children:n[302].value}),(0,e.jsx)("td",{children:n[303].value}),(0,e.jsx)("td",{children:n[304].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[305].value}),(0,e.jsxs)("td",{children:[n[306].value,(0,e.jsx)("code",{children:n[307].value}),n[308].value]}),(0,e.jsxs)("td",{children:[n[309].value,(0,e.jsx)("code",{children:n[310].value})]}),(0,e.jsx)("td",{children:n[311].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[312].value}),n[313].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[314].value}),(0,e.jsxs)("td",{children:[n[315].value,(0,e.jsx)("code",{children:n[316].value}),n[317].value,(0,e.jsx)("code",{children:n[318].value}),n[319].value,(0,e.jsx)("code",{children:n[320].value}),n[321].value,(0,e.jsx)("code",{children:n[322].value})]}),(0,e.jsx)("td",{children:n[323].value}),(0,e.jsx)("td",{children:n[324].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[325].value}),(0,e.jsx)("td",{children:n[326].value}),(0,e.jsx)("td",{children:n[327].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[328].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[329].value}),(0,e.jsxs)("td",{children:[n[330].value,(0,e.jsx)("code",{children:n[331].value}),n[332].value,(0,e.jsx)("code",{children:n[333].value}),n[334].value,(0,e.jsx)("code",{children:n[335].value})]}),(0,e.jsx)("td",{children:n[336].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[337].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[338].value}),(0,e.jsxs)("td",{children:[n[339].value,(0,e.jsx)("code",{children:n[340].value}),n[341].value,(0,e.jsx)("code",{children:n[342].value}),n[343].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/grid/#col",sourceType:"Link",children:n[344].value})}),(0,e.jsx)("td",{children:n[345].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("p",{children:[n[346].value,(0,e.jsx)("code",{children:n[347].value}),n[348].value,(0,e.jsx)("code",{children:n[349].value}),n[350].value,(0,e.jsx)("code",{children:n[351].value}),n[352].value,(0,e.jsx)("code",{children:n[353].value}),n[354].value,(0,e.jsx)("code",{children:n[355].value}),n[356].value,(0,e.jsx)("code",{children:n[357].value}),n[358].value]}),(0,e.jsxs)("ol",{children:[(0,e.jsxs)("li",{children:[n[359].value,(0,e.jsx)("code",{children:n[360].value}),n[361].value,(0,e.jsx)("strong",{children:n[362].value}),n[363].value,(0,e.jsx)("code",{children:n[364].value}),n[365].value,(0,e.jsx)("code",{children:n[366].value}),n[367].value]}),(0,e.jsxs)("li",{children:[n[368].value,(0,e.jsx)("code",{children:n[369].value}),n[370].value,(0,e.jsx)("code",{children:n[371].value}),n[372].value,(0,e.jsx)("code",{children:n[373].value}),n[374].value,(0,e.jsx)("code",{children:n[375].value}),n[376].value,(0,e.jsx)("code",{children:n[377].value}),n[378].value,(0,e.jsx)("code",{children:n[379].value}),n[380].value]}),(0,e.jsxs)("li",{children:[n[381].value,(0,e.jsx)("code",{children:n[382].value}),n[383].value,(0,e.jsx)("code",{children:n[384].value}),n[385].value]})]}),(0,e.jsxs)("h3",{id:"dependencies",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#dependencies",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"dependencies"]}),(0,e.jsxs)("p",{children:[n[386].value,(0,e.jsx)("code",{children:n[387].value}),n[388].value,(0,e.jsx)("code",{children:n[389].value}),n[390].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-dependencies",sourceType:"Link",children:n[391].value}),n[392].value]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[393].value}),n[394].value,(0,e.jsx)("code",{children:n[395].value}),n[396].value]}),(0,e.jsxs)("h3",{id:"feedbackicons",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#feedbackicons",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FeedbackIcons"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n[397].value})}),(0,e.jsxs)("h3",{id:"shouldupdate",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#shouldupdate",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"shouldUpdate"]}),(0,e.jsxs)("p",{children:[n[398].value,(0,e.jsx)(r.Z,{to:"#dependencies",sourceType:"Link",children:(0,e.jsx)("code",{children:n[399].value})}),n[400].value,(0,e.jsx)("code",{children:n[401].value}),n[402].value]}),(0,e.jsxs)("p",{children:[n[403].value,(0,e.jsx)("code",{children:n[404].value}),n[405].value,(0,e.jsx)("code",{children:n[406].value}),n[407].value,(0,e.jsx)("code",{children:n[408].value}),n[409].value]}),(0,e.jsxs)("p",{children:[n[410].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/34500",sourceType:"a",children:n[411].value})]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[412].value}),(0,e.jsxs)("p",{children:[n[413].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-horizontal-login",sourceType:"Link",children:n[414].value}),n[415].value]}),(0,e.jsxs)("p",{children:[n[416].value,(0,e.jsx)("code",{children:n[417].value}),n[418].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[419].value}),(0,e.jsxs)("p",{children:[n[420].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-control-hooks",sourceType:"Link",children:n[421].value}),n[422].value]}),(0,e.jsxs)("h3",{id:"messagevariables",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#messagevariables",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"messageVariables"]}),(0,e.jsxs)("p",{children:[n[423].value,(0,e.jsx)("code",{children:n[424].value}),n[425].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[426].value}),(0,e.jsxs)("h2",{id:"formlist",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formlist",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form.List"]}),(0,e.jsx)("p",{children:n[427].value}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[428].value}),(0,e.jsx)("th",{children:n[429].value}),(0,e.jsx)("th",{children:n[430].value}),(0,e.jsx)("th",{children:n[431].value}),(0,e.jsx)("th",{children:n[432].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[433].value}),(0,e.jsx)("td",{children:n[434].value}),(0,e.jsx)("td",{children:n[435].value}),(0,e.jsx)("td",{children:n[436].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[437].value}),(0,e.jsxs)("td",{children:[n[438].value,(0,e.jsx)("code",{children:n[439].value}),n[440].value]}),(0,e.jsx)("td",{children:n[441].value}),(0,e.jsx)("td",{children:n[442].value}),(0,e.jsx)("td",{children:n[443].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[444].value}),(0,e.jsxs)("td",{children:[n[445].value,(0,e.jsx)("code",{children:n[446].value}),n[447].value,(0,e.jsx)(r.Z,{to:"#getfieldsvalue",sourceType:"Link",children:n[448].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[449].value})}),(0,e.jsx)("td",{children:n[450].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[451].value}),(0,e.jsxs)("td",{children:[n[452].value,(0,e.jsx)(r.Z,{to:"#formerrorlist",sourceType:"Link",children:n[453].value})]}),(0,e.jsx)("td",{children:n[454].value}),(0,e.jsx)("td",{children:n[455].value}),(0,e.jsx)("td",{children:n[456].value})]})]})]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[457].value}),(0,e.jsxs)("p",{children:[n[458].value,(0,e.jsx)("code",{children:n[459].value}),n[460].value,(0,e.jsx)("code",{children:n[461].value}),n[462].value,(0,e.jsx)("code",{children:n[463].value}),n[464].value]}),(0,e.jsxs)("h2",{id:"operation",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#operation",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"operation"]}),(0,e.jsx)("p",{children:n[465].value}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[466].value}),(0,e.jsx)("th",{children:n[467].value}),(0,e.jsx)("th",{children:n[468].value}),(0,e.jsx)("th",{children:n[469].value}),(0,e.jsx)("th",{children:n[470].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[471].value}),(0,e.jsx)("td",{children:n[472].value}),(0,e.jsx)("td",{children:n[473].value}),(0,e.jsx)("td",{children:n[474].value}),(0,e.jsx)("td",{children:n[475].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[476].value}),(0,e.jsx)("td",{children:n[477].value}),(0,e.jsx)("td",{children:n[478].value}),(0,e.jsx)("td",{children:n[479].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[480].value}),(0,e.jsx)("td",{children:n[481].value}),(0,e.jsx)("td",{children:n[482].value}),(0,e.jsx)("td",{children:n[483].value}),(0,e.jsx)("td",{children:n[484].value})]})]})]}),(0,e.jsxs)("h2",{id:"formerrorlist",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formerrorlist",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form.ErrorList"]}),(0,e.jsxs)("p",{children:[n[485].value,(0,e.jsx)("code",{children:n[486].value}),n[487].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-dynamic-form-item",sourceType:"Link",children:n[488].value}),n[489].value]}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[490].value}),(0,e.jsx)("th",{children:n[491].value}),(0,e.jsx)("th",{children:n[492].value}),(0,e.jsx)("th",{children:n[493].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[494].value}),(0,e.jsx)("td",{children:n[495].value}),(0,e.jsx)("td",{children:n[496].value}),(0,e.jsx)("td",{children:n[497].value})]})})]}),(0,e.jsxs)("h2",{id:"formprovider",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formprovider",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form.Provider"]}),(0,e.jsxs)("p",{children:[n[498].value,(0,e.jsx)("code",{children:n[499].value}),n[500].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-form-context",sourceType:"Link",children:n[501].value}),n[502].value]}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[503].value}),(0,e.jsx)("th",{children:n[504].value}),(0,e.jsx)("th",{children:n[505].value}),(0,e.jsx)("th",{children:n[506].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[507].value}),(0,e.jsx)("td",{children:n[508].value}),(0,e.jsx)("td",{children:n[509].value}),(0,e.jsx)("td",{children:n[510].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[511].value}),(0,e.jsx)("td",{children:n[512].value}),(0,e.jsx)("td",{children:n[513].value}),(0,e.jsx)("td",{children:n[514].value})]})]})]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[515].value}),(0,e.jsxs)("h3",{id:"forminstance",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#forminstance",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FormInstance"]}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[516].value}),(0,e.jsx)("th",{children:n[517].value}),(0,e.jsx)("th",{children:n[518].value}),(0,e.jsx)("th",{children:n[519].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[520].value}),(0,e.jsx)("td",{children:n[521].value}),(0,e.jsxs)("td",{children:[n[522].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[523].value}),n[524].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[525].value}),(0,e.jsx)("td",{children:n[526].value}),(0,e.jsxs)("td",{children:[n[527].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[528].value}),n[529].value]}),(0,e.jsx)("td",{children:n[530].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[531].value}),(0,e.jsx)("td",{children:n[532].value}),(0,e.jsxs)("td",{children:[n[533].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[534].value}),n[535].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[536].value}),(0,e.jsxs)("td",{children:[n[537].value,(0,e.jsx)("code",{children:n[538].value}),n[539].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#getfieldsvalue",sourceType:"Link",children:n[540].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[541].value}),(0,e.jsx)("td",{children:n[542].value}),(0,e.jsxs)("td",{children:[n[543].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[544].value}),n[545].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[546].value}),(0,e.jsxs)("td",{children:[n[547].value,(0,e.jsx)("code",{children:n[548].value}),n[549].value,(0,e.jsx)("code",{children:n[550].value})]}),(0,e.jsxs)("td",{children:[n[551].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[552].value}),n[553].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[554].value}),(0,e.jsx)("td",{children:n[555].value}),(0,e.jsxs)("td",{children:[n[556].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[557].value}),n[558].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[559].value}),(0,e.jsx)("td",{children:n[560].value}),(0,e.jsxs)("td",{children:[n[561].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[562].value}),n[563].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[564].value}),(0,e.jsxs)("td",{children:[n[565].value,(0,e.jsx)("code",{children:n[566].value})]}),(0,e.jsxs)("td",{children:[n[567].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[568].value}),n[569].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[570].value}),(0,e.jsx)("td",{children:n[571].value}),(0,e.jsxs)("td",{children:[n[572].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[573].value}),n[574].value,(0,e.jsx)(r.Z,{href:"https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options",sourceType:"a",children:n[575].value}),n[576].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[577].value}),(0,e.jsx)("td",{children:n[578].value}),(0,e.jsxs)("td",{children:[n[579].value,(0,e.jsx)(r.Z,{to:"#fielddata",sourceType:"Link",children:n[580].value}),n[581].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[582].value}),(0,e.jsxs)("td",{children:[n[583].value,(0,e.jsx)("strong",{children:n[584].value}),n[585].value]}),(0,e.jsxs)("td",{children:[n[586].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[587].value}),n[588].value]}),(0,e.jsx)("td",{children:n[589].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[590].value}),(0,e.jsxs)("td",{children:[n[591].value,(0,e.jsx)("strong",{children:n[592].value}),n[593].value,(0,e.jsx)("code",{children:n[594].value}),n[595].value]}),(0,e.jsx)("td",{children:n[596].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[597].value}),(0,e.jsxs)("td",{children:[n[598].value,(0,e.jsx)("code",{children:n[599].value}),n[600].value]}),(0,e.jsx)("td",{children:n[601].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[602].value}),(0,e.jsxs)("td",{children:[n[603].value,(0,e.jsx)("code",{children:n[604].value}),n[605].value]}),(0,e.jsxs)("td",{children:[n[606].value,(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[607].value}),n[608].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[609].value}),n[610].value,(0,e.jsx)("code",{children:n[611].value}),n[612].value]})]})]})]}),(0,e.jsxs)("h4",{id:"validatefields-return-sample",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#validatefields-return-sample",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"validateFields return sample"]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[613].value}),(0,e.jsxs)("h2",{id:"hooks",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#hooks",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Hooks"]}),(0,e.jsxs)("h3",{id:"formuseform",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formuseform",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form.useForm"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n[614].value})}),(0,e.jsx)("p",{children:n[615].value}),(0,e.jsxs)("h3",{id:"formuseforminstance",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formuseforminstance",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form.useFormInstance"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n[616].value})}),(0,e.jsxs)("p",{children:[n[617].value,(0,e.jsx)("code",{children:n[618].value}),n[619].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[620].value}),(0,e.jsxs)("h3",{id:"formusewatch",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formusewatch",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form.useWatch"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n[621].value})}),(0,e.jsxs)("p",{children:[n[622].value,(0,e.jsx)("code",{children:n[623].value}),n[624].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[625].value}),(0,e.jsxs)("p",{children:[n[626].value,(0,e.jsx)("code",{children:n[627].value}),n[628].value,(0,e.jsx)("code",{children:n[629].value}),n[630].value,(0,e.jsx)("code",{children:n[631].value}),n[632].value]}),(0,e.jsxs)("p",{children:[n[633].value,(0,e.jsx)("code",{children:n[634].value}),n[635].value,(0,e.jsx)("code",{children:n[636].value}),n[637].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[638].value}),(0,e.jsxs)("h3",{id:"formitemusestatus",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formitemusestatus",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Form.Item.useStatus"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n[639].value})}),(0,e.jsxs)("p",{children:[n[640].value,(0,e.jsx)("code",{children:n[641].value}),n[642].value,(0,e.jsx)("code",{children:n[643].value}),n[644].value,(0,e.jsx)("code",{children:n[645].value}),n[646].value,(0,e.jsx)("code",{children:n[647].value}),n[648].value,(0,e.jsx)("code",{children:n[649].value}),n[650].value,(0,e.jsx)("code",{children:n[651].value}),n[652].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[653].value}),(0,e.jsxs)("h4",{id:"difference-between-other-data-fetching-method",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#difference-between-other-data-fetching-method",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Difference between other data fetching method"]}),(0,e.jsxs)("p",{children:[n[654].value,(0,e.jsx)("code",{children:n[655].value}),n[656].value,(0,e.jsx)("code",{children:n[657].value}),n[658].value,(0,e.jsx)("code",{children:n[659].value}),n[660].value]}),(0,e.jsxs)("h3",{id:"interface",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#interface",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Interface"]}),(0,e.jsxs)("h4",{id:"namepath",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#namepath",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"NamePath"]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n[661].value})}),(0,e.jsxs)("h4",{id:"getfieldsvalue",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#getfieldsvalue",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"GetFieldsValue"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[662].value}),n[663].value]}),(0,e.jsxs)("h5",{id:"getfieldsvaluenamelist-true--namepath-filterfunc-filterfunc",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#getfieldsvaluenamelist-true--namepath-filterfunc-filterfunc",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"getFieldsValue(nameList?: true | ",(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[664].value}),"[], filterFunc?: FilterFunc)"]}),(0,e.jsxs)("p",{children:[n[665].value,(0,e.jsx)("code",{children:n[666].value}),n[667].value]}),(0,e.jsxs)("p",{children:[n[668].value,(0,e.jsx)("code",{children:n[669].value}),n[670].value,(0,e.jsx)("code",{children:n[671].value}),n[672].value,(0,e.jsx)("code",{children:n[673].value}),n[674].value,(0,e.jsx)("code",{children:n[675].value}),n[676].value]}),(0,e.jsxs)("p",{children:[n[677].value,(0,e.jsx)("code",{children:n[678].value}),n[679].value,(0,e.jsx)("code",{children:n[680].value}),n[681].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[682].value}),(0,e.jsxs)("h5",{id:"getfieldsvalue-strict-boolean-filter-filterfunc-",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#getfieldsvalue-strict-boolean-filter-filterfunc-",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"getFieldsValue({ strict?: boolean, filter?: FilterFunc })"]}),(0,e.jsxs)("p",{children:[n[683].value,(0,e.jsx)("code",{children:n[684].value}),n[685].value,(0,e.jsx)("code",{children:n[686].value}),n[687].value,(0,e.jsx)("code",{children:n[688].value}),n[689].value,(0,e.jsx)("code",{children:n[690].value}),n[691].value,(0,e.jsx)("code",{children:n[692].value}),n[693].value,(0,e.jsx)("code",{children:n[694].value}),n[695].value,(0,e.jsx)("code",{children:n[696].value}),n[697].value]}),(0,e.jsxs)("h4",{id:"filterfunc",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#filterfunc",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FilterFunc"]}),(0,e.jsxs)("p",{children:[n[698].value,(0,e.jsx)("code",{children:n[699].value}),n[700].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[701].value}),(0,e.jsxs)("h4",{id:"fielddata",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#fielddata",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FieldData"]}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[702].value}),(0,e.jsx)("th",{children:n[703].value}),(0,e.jsx)("th",{children:n[704].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[705].value}),(0,e.jsx)("td",{children:n[706].value}),(0,e.jsx)("td",{children:n[707].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[708].value}),(0,e.jsx)("td",{children:n[709].value}),(0,e.jsx)("td",{children:n[710].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[711].value}),(0,e.jsx)("td",{children:n[712].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{to:"#namepath",sourceType:"Link",children:n[713].value}),n[714].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[715].value}),(0,e.jsx)("td",{children:n[716].value}),(0,e.jsx)("td",{children:n[717].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[718].value}),(0,e.jsx)("td",{children:n[719].value}),(0,e.jsx)("td",{children:n[720].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[721].value}),(0,e.jsx)("td",{children:n[722].value}),(0,e.jsx)("td",{children:n[723].value})]})]})]}),(0,e.jsxs)("h4",{id:"rule",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rule",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Rule"]}),(0,e.jsx)("p",{children:n[724].value}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[725].value}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[726].value}),(0,e.jsx)("th",{children:n[727].value}),(0,e.jsx)("th",{children:n[728].value}),(0,e.jsx)("th",{children:n[729].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[730].value}),(0,e.jsxs)("td",{children:[n[731].value,(0,e.jsx)("code",{children:n[732].value}),n[733].value,(0,e.jsx)("code",{children:n[734].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#rule",sourceType:"Link",children:n[735].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[736].value}),(0,e.jsxs)("td",{children:[n[737].value,(0,e.jsx)("code",{children:n[738].value}),n[739].value,(0,e.jsx)("code",{children:n[740].value}),n[741].value]}),(0,e.jsx)("td",{children:n[742].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[743].value}),(0,e.jsxs)("td",{children:[n[744].value,(0,e.jsx)("code",{children:n[745].value}),n[746].value,(0,e.jsx)("code",{children:n[747].value}),n[748].value,(0,e.jsx)("code",{children:n[749].value})]}),(0,e.jsxs)("td",{children:[n[750].value,(0,e.jsx)(r.Z,{to:"#rule",sourceType:"Link",children:n[751].value}),n[752].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[753].value}),(0,e.jsx)("td",{children:n[754].value}),(0,e.jsx)("td",{children:n[755].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[756].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[757].value}),n[758].value,(0,e.jsx)("code",{children:n[759].value}),n[760].value,(0,e.jsx)("code",{children:n[761].value}),n[762].value,(0,e.jsx)("code",{children:n[763].value})]}),(0,e.jsx)("td",{children:n[764].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[765].value}),(0,e.jsxs)("td",{children:[n[766].value,(0,e.jsx)(r.Z,{to:"#validatemessages",sourceType:"Link",children:n[767].value}),n[768].value]}),(0,e.jsx)("td",{children:n[769].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[770].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[771].value}),n[772].value,(0,e.jsx)("code",{children:n[773].value}),n[774].value,(0,e.jsx)("code",{children:n[775].value}),n[776].value,(0,e.jsx)("code",{children:n[777].value})]}),(0,e.jsx)("td",{children:n[778].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[779].value}),(0,e.jsx)("td",{children:n[780].value}),(0,e.jsx)("td",{children:n[781].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[782].value}),(0,e.jsx)("td",{children:n[783].value}),(0,e.jsx)("td",{children:n[784].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[785].value}),(0,e.jsx)("td",{children:n[786].value}),(0,e.jsx)("td",{children:n[787].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[788].value}),(0,e.jsxs)("td",{children:[n[789].value,(0,e.jsx)("code",{children:n[790].value}),n[791].value,(0,e.jsx)("code",{children:n[792].value}),n[793].value,(0,e.jsx)("code",{children:n[794].value}),n[795].value,(0,e.jsx)("code",{children:n[796].value}),n[797].value,(0,e.jsx)("code",{children:n[798].value}),n[799].value,(0,e.jsx)(r.Z,{href:"https://github.com/yiminghe/async-validator#type",sourceType:"a",children:n[800].value})]}),(0,e.jsx)("td",{children:n[801].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[802].value}),(0,e.jsxs)("td",{children:[n[803].value,(0,e.jsx)("code",{children:n[804].value}),n[805].value]}),(0,e.jsx)("td",{children:n[806].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[807].value}),(0,e.jsxs)("td",{children:[n[808].value,(0,e.jsx)(r.Z,{to:"#components-form-demo-register",sourceType:"Link",children:n[809].value})]}),(0,e.jsxs)("td",{children:[n[810].value,(0,e.jsx)(r.Z,{to:"#rule",sourceType:"Link",children:n[811].value}),n[812].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[813].value}),(0,e.jsx)("td",{children:n[814].value}),(0,e.jsx)("td",{children:n[815].value}),(0,e.jsx)("td",{children:n[816].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[817].value}),(0,e.jsxs)("td",{children:[n[818].value,(0,e.jsx)("code",{children:n[819].value}),n[820].value]}),(0,e.jsx)("td",{children:n[821].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h4",{id:"watchoptions",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#watchoptions",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"WatchOptions"]}),(0,e.jsxs)(l.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[822].value}),(0,e.jsx)("th",{children:n[823].value}),(0,e.jsx)("th",{children:n[824].value}),(0,e.jsx)("th",{children:n[825].value}),(0,e.jsx)("th",{children:n[826].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[827].value}),(0,e.jsx)("td",{children:n[828].value}),(0,e.jsx)("td",{children:n[829].value}),(0,e.jsx)("td",{children:n[830].value}),(0,e.jsx)("td",{children:n[831].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[832].value}),(0,e.jsxs)("td",{children:[n[833].value,(0,e.jsx)("code",{children:n[834].value})]}),(0,e.jsx)("td",{children:n[835].value}),(0,e.jsx)("td",{children:n[836].value}),(0,e.jsx)("td",{children:n[837].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(s.Z,{component:"Form"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"why-cant-switchcheckbox-bind-data",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-cant-switchcheckbox-bind-data",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why can't Switch\u3001Checkbox bind data?"]}),(0,e.jsxs)("p",{children:[n[838].value,(0,e.jsx)("code",{children:n[839].value}),n[840].value,(0,e.jsx)("code",{children:n[841].value}),n[842].value,(0,e.jsx)("code",{children:n[843].value}),n[844].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[845].value}),(0,e.jsxs)("h3",{id:"custom-validator-not-working",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-validator-not-working",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Custom validator not working"]}),(0,e.jsxs)("p",{children:[n[846].value,(0,e.jsx)("code",{children:n[847].value}),n[848].value,(0,e.jsx)("code",{children:n[849].value}),n[850].value,(0,e.jsx)("code",{children:n[851].value}),n[852].value,(0,e.jsx)("code",{children:n[853].value}),n[854].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[855].value}),(0,e.jsxs)("h3",{id:"how-does-name-fill-value-when-its-an-array",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-does-name-fill-value-when-its-an-array",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How does ",(0,e.jsx)("code",{children:n[856].value})," fill value when it's an array?"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[857].value}),n[858].value,(0,e.jsx)("code",{children:n[859].value}),n[860].value]}),(0,e.jsxs)("h3",{id:"why-is-there-a-form-warning-when-used-in-modal",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-is-there-a-form-warning-when-used-in-modal",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why is there a form warning when used in Modal?"]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[861].value,(0,e.jsx)("code",{children:n[862].value}),n[863].value,(0,e.jsx)("code",{children:n[864].value}),n[865].value]})}),(0,e.jsxs)("p",{children:[n[866].value,(0,e.jsx)("code",{children:n[867].value}),n[868].value,(0,e.jsx)(r.Z,{href:"https://codesandbox.io/s/antd-reproduction-template-ibu5c",sourceType:"a",children:n[869].value}),n[870].value]}),(0,e.jsxs)("h3",{id:"why-is-component-defaultvalue-not-working-when-inside-formitem",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-is-component-defaultvalue-not-working-when-inside-formitem",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why is component ",(0,e.jsx)("code",{children:n[871].value})," not working when inside Form.Item?"]}),(0,e.jsxs)("p",{children:[n[872].value,(0,e.jsx)("code",{children:n[873].value}),n[874].value,(0,e.jsx)("code",{children:n[875].value}),n[876].value]}),(0,e.jsxs)("h3",{id:"why-can-not-call-ref-of-form-at-first-time",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-can-not-call-ref-of-form-at-first-time",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why can not call ",(0,e.jsx)("code",{children:n[877].value})," of Form at first time?"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[878].value}),n[879].value,(0,e.jsx)(r.Z,{href:"https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs",sourceType:"a",children:n[880].value})]}),(0,e.jsxs)("h3",{id:"why-will-resetfields-re-mount-component",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-will-resetfields-re-mount-component",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why will ",(0,e.jsx)("code",{children:n[881].value})," re-mount component?"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[882].value}),n[883].value]}),(0,e.jsxs)("h3",{id:"difference-between-form-initialvalues-and-item-initialvalue",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#difference-between-form-initialvalues-and-item-initialvalue",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Difference between Form initialValues and Item initialValue?"]}),(0,e.jsxs)("p",{children:[n[884].value,(0,e.jsx)("code",{children:n[885].value}),n[886].value,(0,e.jsx)("code",{children:n[887].value}),n[888].value]}),(0,e.jsxs)("ol",{children:[(0,e.jsxs)("li",{children:[n[889].value,(0,e.jsx)("code",{children:n[890].value}),n[891].value]}),(0,e.jsxs)("li",{children:[n[892].value,(0,e.jsx)("code",{children:n[893].value}),n[894].value,(0,e.jsx)("code",{children:n[895].value}),n[896].value,(0,e.jsx)("code",{children:n[897].value})]})]}),(0,e.jsxs)("h3",{id:"why-cant-getfieldsvalue-get-value-at-first-render",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-cant-getfieldsvalue-get-value-at-first-render",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why can't ",(0,e.jsx)("code",{children:n[898].value})," get value at first render?"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[899].value}),n[900].value,(0,e.jsx)("code",{children:n[901].value}),n[902].value]}),(0,e.jsxs)("h3",{id:"why-does-onfieldschange-trigger-three-times-on-change-when-field-sets-rules",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-does-onfieldschange-trigger-three-times-on-change-when-field-sets-rules",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why does ",(0,e.jsx)("code",{children:n[903].value})," trigger three times on change when field sets ",(0,e.jsx)("code",{children:n[904].value}),"?"]}),(0,e.jsx)("p",{children:n[905].value}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:n[906].value}),(0,e.jsx)("li",{children:n[907].value}),(0,e.jsx)("li",{children:n[908].value})]}),(0,e.jsxs)("p",{children:[n[909].value,(0,e.jsx)("code",{children:n[910].value}),n[911].value,(0,e.jsx)("code",{children:n[912].value}),n[913].value,(0,e.jsx)("code",{children:n[914].value}),n[915].value,(0,e.jsx)("code",{children:n[916].value}),n[917].value,(0,e.jsx)("code",{children:n[918].value}),n[919].value]}),(0,e.jsxs)("h3",{id:"why-doesnt-formlist-support-label-and-need-errorlist-to-show-errors",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-doesnt-formlist-support-label-and-need-errorlist-to-show-errors",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why doesn't Form.List support ",(0,e.jsx)("code",{children:n[920].value})," and need ErrorList to show errors?"]}),(0,e.jsxs)("p",{children:[n[921].value,(0,e.jsx)("code",{children:n[922].value}),n[923].value,(0,e.jsx)("code",{children:n[924].value}),n[925].value,(0,e.jsx)("code",{children:n[926].value}),n[927].value]}),(0,e.jsxs)("h3",{id:"why-cant-formitem-dependencies-work-on-formlist-field",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-cant-formitem-dependencies-work-on-formlist-field",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why can't Form.Item ",(0,e.jsx)("code",{children:n[928].value})," work on Form.List field?"]}),(0,e.jsxs)("p",{children:[n[929].value,(0,e.jsx)("code",{children:n[930].value}),n[931].value]}),(0,e.jsx)(o.Z,{lang:"tsx",children:n[932].value}),(0,e.jsxs)("p",{children:[n[933].value,(0,e.jsx)("code",{children:n[934].value})]}),(0,e.jsxs)("h3",{id:"why-doesnt-normalize-support-async",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-doesnt-normalize-support-async",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why doesn't ",(0,e.jsx)("code",{children:n[935].value})," support async?"]}),(0,e.jsxs)("p",{children:[n[936].value,(0,e.jsx)("code",{children:n[937].value}),n[938].value,(0,e.jsx)("code",{children:n[939].value}),n[940].value]}),(0,e.jsx)("style",{dangerouslySetInnerHTML:{__html:`
.site-form-item-icon {
  color: rgba(0, 0, 0, 0.25);
}
`}}),(0,e.jsxs)("h3",{id:"scrolltofirsterror-and-scrolltofield-not-working",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#scrolltofirsterror-and-scrolltofield-not-working",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:n[941].value})," and ",(0,e.jsx)("code",{children:n[942].value})," not working?"]}),(0,e.jsx)("ol",{children:(0,e.jsx)("li",{children:n[943].value})}),(0,e.jsxs)("p",{children:[n[944].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/28370",sourceType:"a",children:n[945].value}),n[946].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/27994",sourceType:"a",children:n[947].value})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[948].value}),n[949].value,(0,e.jsx)("code",{children:n[950].value}),n[951].value,(0,e.jsx)("code",{children:n[952].value}),n[953].value,(0,e.jsx)(r.Z,{href:"https://codesandbox.io/s/antd-reproduction-template-forked-25nul?file=/index.js",sourceType:"a",children:n[954].value}),n[955].value]}),(0,e.jsx)("ol",{start:"2",children:(0,e.jsx)("li",{children:n[956].value})}),(0,e.jsxs)("p",{children:[n[957].value,(0,e.jsx)("code",{children:n[958].value}),n[959].value,(0,e.jsx)("code",{children:n[960].value}),n[961].value,(0,e.jsx)("code",{children:n[962].value}),n[963].value]}),(0,e.jsxs)("h3",{id:"continue-why-not-use-ref-to-bind-element",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#continue-why-not-use-ref-to-bind-element",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Continue, why not use ",(0,e.jsx)("code",{children:n[964].value})," to bind element?"]}),(0,e.jsxs)("p",{children:[n[965].value,(0,e.jsx)("code",{children:n[966].value}),n[967].value,(0,e.jsx)("code",{children:n[968].value}),n[969].value,(0,e.jsx)("code",{children:n[970].value}),n[971].value]}),(0,e.jsxs)("h3",{id:"setfieldsvalue-do-not-trigger-onfieldschange-or-onvalueschange",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#setfieldsvalue-do-not-trigger-onfieldschange-or-onvalueschange",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:n[972].value})," do not trigger ",(0,e.jsx)("code",{children:n[973].value})," or ",(0,e.jsx)("code",{children:n[974].value}),"?"]}),(0,e.jsxs)("p",{children:[n[975].value,(0,e.jsx)("code",{children:n[976].value}),n[977].value]}),(0,e.jsxs)("h3",{id:"why-formitem-not-update-value-when-children-is-nest",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-formitem-not-update-value-when-children-is-nest",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why Form.Item not update value when children is nest?"]}),(0,e.jsxs)("p",{children:[n[978].value,(0,e.jsx)("code",{children:n[979].value}),n[980].value,(0,e.jsx)("code",{children:n[981].value}),n[982].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[983].value}),(0,e.jsx)("p",{children:n[984].value}),(0,e.jsx)(o.Z,{lang:"jsx",children:n[985].value})]})]})})}a.default=d}}]);
