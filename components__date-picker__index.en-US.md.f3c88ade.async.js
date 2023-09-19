"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8182],{296347:function(h,s,t){t.r(s);var p=t(502143),m=t(968521),x=t(720719),j=t(521587),a=t(759907),c=t(828089),v=t(825673),g=t(902068),k=t(574399),_=t(863942),f=t(316073),b=t(24628),y=t(719260),P=t(956140),i=t(127179),o=t(905388),D=t(245583),w=t(606965),C=t(268696),T=t(587302),r=t(424128),R=t(249706),S=t(795127),E=t(116846),O=t(720538),M=t(212039),L=t(73024),Z=t(553913),d=t(830084),A=t(667294),e=t(785893);function l(){var u=(0,d.eL)(),n=u.texts;return(0,e.jsx)(d.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(o.Z,{items:[{demo:{id:"components-date-picker-demo-basic"},previewerProps:{title:"Basic",filename:"components/date-picker/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
);
export default App;
`,description:"<p>Basic use case. Users can select or input a date in panel.</p>"}},{demo:{id:"components-date-picker-demo-range-picker"},previewerProps:{title:"Range Picker",filename:"components/date-picker/demo/range-picker.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" />
  </Space>
);
export default App;
`,description:"<p>Set range picker type by <code>picker</code> prop.</p>"}},{demo:{id:"components-date-picker-demo-switchable"},previewerProps:{title:"Switchable picker",filename:"components/date-picker/demo/switchable.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Select, Space, TimePicker } from 'antd';
const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};
const App = () => {
  const [type, setType] = useState('time');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
};
export default App;
`,description:"<p>Switch in different types of pickers by Select.</p>"}},{demo:{id:"components-date-picker-demo-format"},previewerProps:{title:"Date Format",filename:"components/date-picker/demo/format.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => \`custom format: \${value.format(dateFormat)}\`;
const customWeekStartEndFormat = (value) =>
  \`\${dayjs(value).startOf('week').format(weekFormat)} ~ \${dayjs(value)
    .endOf('week')
    .format(weekFormat)}\`;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
    <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
  </Space>
);
export default App;
`,description:"<p>We can set the date format by <code>format</code>. When <code>format</code> is an array, the input box can be entered in any of the valid formats of the array.</p>"}},{demo:{id:"components-date-picker-demo-time"},previewerProps:{title:"Choose Time",filename:"components/date-picker/demo/time.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker showTime onChange={onChange} onOk={onOk} />
    <RangePicker
      showTime={{
        format: 'HH:mm',
      }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
);
export default App;
`,description:"<p>This property provide an additional time selection. When <code>showTime</code> is an Object, its properties will be passed on to built-in <code>TimePicker</code>.</p>"}},{demo:{id:"components-date-picker-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/date-picker/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
    <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled />
    <RangePicker
      defaultValue={[dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]}
      disabled
    />
    <RangePicker
      defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
      disabled={[false, true]}
    />
  </Space>
);
export default App;
`,description:"<p>A disabled state of the <code>DatePicker</code>. You can also set as array to disable one of input.</p>"}},{demo:{id:"components-date-picker-demo-disabled-date"},previewerProps:{title:"Disabled Date & Time",filename:"components/date-picker/demo/disabled-date.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});
const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
    />
    <DatePicker picker="month" disabledDate={disabledDate} />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
);
export default App;
`,description:"<p>Disabled part of dates and time by <code>disabledDate</code> and <code>disabledTime</code> respectively, and <code>disabledTime</code> only works with <code>showTime</code>.</p>"}},{demo:{id:"components-date-picker-demo-select-in-range"},previewerProps:{title:"Select range dates in 7 days",filename:"components/date-picker/demo/select-in-range.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const App = () => {
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const disabledDate = (current) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
    return !!tooEarly || !!tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <RangePicker
      value={dates || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => {
        setDates(val);
      }}
      onChange={(val) => {
        setValue(val);
      }}
      onOpenChange={onOpenChange}
      changeOnBlur
    />
  );
};
export default App;
`,description:"<p>Using <code>changeOnBlur</code> work with <code>onCalendarChange</code> and <code>disabledDate</code> to limit date selection.</p>"}},{demo:{id:"components-date-picker-demo-preset-ranges"},previewerProps:{title:"Preset Ranges",filename:"components/date-picker/demo/preset-ranges.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const onChange = (date) => {
  if (date) {
    console.log('Date: ', date);
  } else {
    console.log('Clear');
  }
};
const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
const rangePresets = [
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()],
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()],
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().add(-30, 'd'), dayjs()],
  },
  {
    label: 'Last 90 Days',
    value: [dayjs().add(-90, 'd'), dayjs()],
  },
];
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      presets={[
        {
          label: 'Yesterday',
          value: dayjs().add(-1, 'd'),
        },
        {
          label: 'Last Week',
          value: dayjs().add(-7, 'd'),
        },
        {
          label: 'Last Month',
          value: dayjs().add(-1, 'month'),
        },
      ]}
      onChange={onChange}
    />
    <RangePicker presets={rangePresets} onChange={onRangeChange} />
    <RangePicker
      presets={[
        {
          label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
          value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
        },
        ...rangePresets,
      ]}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onRangeChange}
    />
  </Space>
);
export default App;
`,description:"<p>We can set preset ranges to RangePicker to improve user experience. Since <code>5.8.0</code>, preset value supports callback function.</p>"}},{demo:{id:"components-date-picker-demo-extra-footer"},previewerProps:{title:"Extra Footer",filename:"components/date-picker/demo/extra-footer.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
  </Space>
);
export default App;
`,description:"<p>Render extra footer in panel for customized requirements.</p>"}},{demo:{id:"components-date-picker-demo-size"},previewerProps:{title:"Three Sizes",filename:"components/date-picker/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Radio, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => {
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Space direction="vertical" size={12}>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <DatePicker size={size} />
      <DatePicker size={size} picker="month" />
      <RangePicker size={size} />
      <DatePicker size={size} picker="week" />
    </Space>
  );
};
export default App;
`,description:"<p>The input box comes in three sizes. <code>middle</code> will be used if <code>size</code> is omitted.</p>"}},{demo:{id:"components-date-picker-demo-cell-render"},previewerProps:{title:"Customized Cell Rendering",filename:"components/date-picker/demo/cell-render.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space, theme } from 'antd';
const App = () => {
  const { token } = theme.useToken();
  const style = {
    border: \`1px solid \${token.colorPrimary}\`,
    borderRadius: '50%',
  };
  const cellRender = React.useCallback((current, info) => {
    if (info.type !== 'date') {
      return info.originNode;
    }
    if (typeof current === 'number') {
      return <div className="ant-picker-cell-inner">{current}</div>;
    }
    return (
      <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
        {current.date()}
      </div>
    );
  }, []);
  return (
    <Space size={12} direction="vertical">
      <DatePicker cellRender={cellRender} />
      <DatePicker.RangePicker cellRender={cellRender} />
    </Space>
  );
};
export default App;
`,description:"<p>We can customize the rendering of the cells in the calendar by providing a <code>cellRender</code> function to <code>DatePicker</code>.</p>"}},{demo:{id:"components-date-picker-demo-status"},previewerProps:{title:"Status",filename:"components/date-picker/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <DatePicker
      status="error"
      style={{
        width: '100%',
      }}
    />
    <DatePicker
      status="warning"
      style={{
        width: '100%',
      }}
    />
    <DatePicker.RangePicker
      status="error"
      style={{
        width: '100%',
      }}
    />
    <DatePicker.RangePicker
      status="warning"
      style={{
        width: '100%',
      }}
    />
  </Space>
);
export default App;
`,description:"<p>Add status to DatePicker with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-date-picker-demo-bordered"},previewerProps:{title:"Bordered-less",filename:"components/date-picker/demo/bordered.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker bordered={false} />
    <DatePicker picker="week" bordered={false} />
    <DatePicker picker="month" bordered={false} />
    <DatePicker picker="year" bordered={false} />
    <RangePicker bordered={false} />
    <RangePicker picker="week" bordered={false} />
    <RangePicker picker="month" bordered={false} />
    <RangePicker picker="year" bordered={false} />
  </Space>
);
export default App;
`,description:"<p>Bordered-less style component.</p>"}},{demo:{id:"components-date-picker-demo-placement"},previewerProps:{title:"Placement",filename:"components/date-picker/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Radio } from 'antd';
const { RangePicker } = DatePicker;
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
      <DatePicker placement={placement} />
      <br />
      <br />
      <RangePicker placement={placement} />
    </>
  );
};
export default App;
`,description:"<p>You can manually specify the position of the popup via <code>placement</code>.</p>"}},{demo:{id:"components-date-picker-demo-mode"},previewerProps:{debug:!0,title:"Controlled Panels",filename:"components/date-picker/demo/mode.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const ControlledDatePicker = () => {
  const [mode, setMode] = useState('time');
  const handleOpenChange = (open) => {
    if (open) {
      setMode('time');
    }
  };
  const handlePanelChange = (_, newMode) => {
    setMode(newMode);
  };
  return (
    <DatePicker
      mode={mode}
      showTime
      onOpenChange={handleOpenChange}
      onPanelChange={handlePanelChange}
    />
  );
};
const ControlledRangePicker = () => {
  const [mode, setMode] = useState(['month', 'month']);
  const [value, setValue] = useState([null, null]);
  const handlePanelChange = (newValue, newModes) => {
    setValue(newValue);
    setMode([
      newModes[0] === 'date' ? 'month' : newModes[0],
      newModes[1] === 'date' ? 'month' : newModes[1],
    ]);
  };
  return (
    <RangePicker
      placeholder={['Start month', 'End month']}
      format="YYYY-MM"
      value={value}
      mode={mode}
      onChange={setValue}
      onPanelChange={handlePanelChange}
    />
  );
};
const App = () => (
  <Space direction="vertical" size={12}>
    <ControlledDatePicker />
    <ControlledRangePicker />
  </Space>
);
export default App;
`,description:"<p>Determine which panel to show with <code>mode</code> and <code>onPanelChange</code>.</p>"}},{demo:{id:"components-date-picker-demo-start-end"},previewerProps:{debug:!0,title:"Customized Range Picker",filename:"components/date-picker/demo/start-end.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
const App = () => {
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [endOpen, setEndOpen] = useState(false);
  const disabledStartDate = (startDate) => {
    if (!startDate || !endValue) {
      return false;
    }
    return startDate.valueOf() > endValue.valueOf();
  };
  const disabledEndDate = (endDate) => {
    if (!endDate || !startValue) {
      return false;
    }
    return endDate.valueOf() <= startValue.valueOf();
  };
  const handleStartOpenChange = (open) => {
    if (!open) {
      setEndOpen(true);
    }
  };
  const handleEndOpenChange = (open) => {
    setEndOpen(open);
  };
  return (
    <Space>
      <DatePicker
        disabledDate={disabledStartDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={startValue}
        placeholder="Start"
        onChange={setStartValue}
        onOpenChange={handleStartOpenChange}
      />
      <DatePicker
        disabledDate={disabledEndDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={endValue}
        placeholder="End"
        onChange={setEndValue}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </Space>
  );
};
export default App;
`,description:`<p>When <code>RangePicker</code> does not satisfied your requirements, try to implement similar functionality with two <code>DatePicker</code>.</p>
<blockquote>
<ul>
<li>Use the <code>disabledDate</code> property to limit the start and end dates.</li>
<li>Improve user experience with <code>open</code> and <code>onOpenChange</code>.</li>
</ul>
</blockquote>`}},{demo:{id:"components-date-picker-demo-suffix"},previewerProps:{debug:!0,title:"Suffix",filename:"components/date-picker/demo/suffix.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
const smileIcon = <SmileOutlined />;
const { RangePicker } = DatePicker;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker suffixIcon={smileIcon} onChange={onChange} />
    <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="month" />
    <RangePicker suffixIcon={smileIcon} onChange={onChange} />
    <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="week" />
    <DatePicker suffixIcon="ab" onChange={onChange} />
    <DatePicker suffixIcon="ab" onChange={onChange} picker="month" />
    <RangePicker suffixIcon="ab" onChange={onChange} />
    <DatePicker suffixIcon="ab" onChange={onChange} picker="week" />
  </Space>
);
export default App;
`,description:"<p>Basic use case. Users can select or input a date in panel.</p>"}},{demo:{id:"components-date-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/date-picker/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalDatePicker } = DatePicker;
const App = () => <InternalDatePicker />;
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}},{demo:{id:"components-date-picker-demo-component-token"},previewerProps:{debug:!0,title:"Component Token",filename:"components/date-picker/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ConfigProvider, DatePicker, Space, TimePicker } from 'antd';
import dayjs from 'dayjs';

/** Test usage. Do not use in your production. */

const { RangePicker } = DatePicker;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        DatePicker: {
          presetsWidth: 160,
          zIndexPopup: 888,
          cellHoverWithRangeBg: '#f0f0f0',
          cellActiveWithRangeBg: '#e6bbff',
          cellRangeBorderColor: 'green',
          timeColumnWidth: 80,
          timeColumnHeight: 250,
          timeCellHeight: 30,
          cellWidth: 64,
          cellHeight: 40,
          textHeight: 45,
          withoutTimeCellHeight: 70,
        },
      },
    }}
  >
    <Space direction="vertical">
      <DatePicker
        presets={[
          {
            label: 'Yesterday',
            value: dayjs().add(-1, 'd'),
          },
          {
            label: 'Last Week',
            value: dayjs().add(-7, 'd'),
          },
          {
            label: 'Last Month',
            value: dayjs().add(-1, 'month'),
          },
        ]}
        onChange={onChange}
      />
      <RangePicker />
      <TimePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="month" />
    </Space>
  </ConfigProvider>
);
export default App;
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[1].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[2].value})]}),(0,e.jsx)("p",{children:n[3].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[4].value}),(0,e.jsx)("li",{children:n[5].value}),(0,e.jsx)("li",{children:n[6].value}),(0,e.jsx)("li",{children:n[7].value}),(0,e.jsx)("li",{children:n[8].value}),(0,e.jsx)("li",{children:n[9].value})]}),(0,e.jsxs)("h3",{id:"localization",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#localization",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Localization"]}),(0,e.jsxs)("p",{children:[n[10].value,(0,e.jsx)(r.Z,{href:"https://ant.design/components/config-provider/",sourceType:"a",children:n[11].value}),n[12].value]}),(0,e.jsxs)("p",{children:[n[13].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json",sourceType:"a",children:n[14].value}),n[15].value]}),(0,e.jsx)(a.Z,{lang:"jsx",children:n[16].value}),(0,e.jsx)(a.Z,{lang:"jsx",children:n[17].value}),(0,e.jsxs)("h3",{id:"common-api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#common-api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Common API"]}),(0,e.jsx)("p",{children:n[18].value}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[19].value}),(0,e.jsx)("th",{children:n[20].value}),(0,e.jsx)("th",{children:n[21].value}),(0,e.jsx)("th",{children:n[22].value}),(0,e.jsx)("th",{children:n[23].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:n[28].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[29].value}),(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[33].value}),(0,e.jsx)("td",{children:n[34].value}),(0,e.jsx)("td",{children:n[35].value}),(0,e.jsx)("td",{children:n[36].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[37].value}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{children:n[39].value}),(0,e.jsx)("td",{children:n[40].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[41].value}),(0,e.jsxs)("td",{children:[n[42].value,(0,e.jsx)("code",{children:n[43].value}),n[44].value]}),(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{children:n[47].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[48].value}),(0,e.jsxs)("td",{children:[n[49].value,(0,e.jsx)("code",{children:n[50].value}),n[51].value]}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{children:n[53].value}),(0,e.jsx)("td",{children:n[54].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{children:n[57].value}),(0,e.jsx)("td",{children:n[58].value}),(0,e.jsx)("td",{children:n[59].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[60].value}),(0,e.jsx)("td",{children:n[61].value}),(0,e.jsx)("td",{children:n[62].value}),(0,e.jsx)("td",{children:n[63].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{children:n[65].value}),(0,e.jsx)("td",{children:n[66].value}),(0,e.jsx)("td",{children:n[67].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[68].value}),(0,e.jsxs)("td",{children:[n[69].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:n[70].value}),n[71].value,(0,e.jsx)(r.Z,{to:"#components-date-picker-demo-format",sourceType:"Link",children:n[72].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[73].value})}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://github.com/react-component/picker/blob/f512f18ed59d6791280d1c3d7d37abbb9867eb0b/src/utils/uiUtil.ts#L155-L177",sourceType:"a",children:n[74].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{children:n[76].value}),(0,e.jsx)("td",{children:n[77].value}),(0,e.jsx)("td",{children:n[78].value}),(0,e.jsx)("td",{children:n[79].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[80].value}),(0,e.jsxs)("td",{children:[n[81].value,(0,e.jsx)("code",{children:n[82].value}),n[83].value,(0,e.jsx)("code",{children:n[84].value})]}),(0,e.jsx)("td",{children:n[85].value}),(0,e.jsx)("td",{children:n[86].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[87].value}),(0,e.jsxs)("td",{children:[n[88].value,(0,e.jsx)("code",{children:n[89].value}),n[90].value]}),(0,e.jsx)("td",{children:n[91].value}),(0,e.jsx)("td",{children:n[92].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[93].value}),(0,e.jsx)("td",{children:n[94].value}),(0,e.jsx)("td",{children:n[95].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json",sourceType:"a",children:n[96].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[97].value}),(0,e.jsxs)("td",{children:[n[98].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#when-set-mode-to-datepickerrangepicker-cannot-select-year-or-month-anymore",sourceType:"Link",children:n[99].value}),n[100].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[101].value}),n[102].value,(0,e.jsx)("code",{children:n[103].value}),n[104].value,(0,e.jsx)("code",{children:n[105].value}),n[106].value,(0,e.jsx)("code",{children:n[107].value}),n[108].value,(0,e.jsx)("code",{children:n[109].value})]}),(0,e.jsx)("td",{children:n[110].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[111].value}),(0,e.jsx)("td",{children:n[112].value}),(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:n[114].value}),(0,e.jsx)("td",{children:n[115].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{children:n[119].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[120].value}),(0,e.jsx)("td",{children:n[121].value}),(0,e.jsx)("td",{children:n[122].value}),(0,e.jsx)("td",{children:n[123].value}),(0,e.jsx)("td",{children:n[124].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[125].value}),(0,e.jsx)("td",{children:n[126].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[127].value}),n[128].value,(0,e.jsx)("code",{children:n[129].value}),n[130].value,(0,e.jsx)("code",{children:n[131].value}),n[132].value,(0,e.jsx)("code",{children:n[133].value}),n[134].value,(0,e.jsx)("code",{children:n[135].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[136].value})}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[137].value}),n[138].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[139].value}),(0,e.jsx)("td",{children:n[140].value}),(0,e.jsx)("td",{children:n[141].value}),(0,e.jsx)("td",{children:n[142].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[143].value}),(0,e.jsx)("td",{children:n[144].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[145].value}),n[146].value,(0,e.jsx)("code",{children:n[147].value}),n[148].value,(0,e.jsx)("code",{children:n[149].value}),n[150].value,(0,e.jsx)("code",{children:n[151].value})]}),(0,e.jsx)("td",{children:n[152].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[153].value}),(0,e.jsx)("td",{children:n[154].value}),(0,e.jsx)("td",{children:n[155].value}),(0,e.jsx)("td",{children:n[156].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[157].value}),(0,e.jsxs)("td",{children:[n[158].value,(0,e.jsx)("code",{children:n[159].value}),n[160].value]}),(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[163].value}),(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{children:n[165].value}),(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[168].value}),(0,e.jsxs)("td",{children:[n[169].value,(0,e.jsx)("code",{children:n[170].value}),n[171].value,(0,e.jsx)("code",{children:n[172].value}),n[173].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[174].value}),n[175].value,(0,e.jsx)("code",{children:n[176].value}),n[177].value,(0,e.jsx)("code",{children:n[178].value})]}),(0,e.jsx)("td",{children:n[179].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[180].value}),(0,e.jsx)("td",{children:n[181].value}),(0,e.jsx)("td",{children:n[182].value}),(0,e.jsx)("td",{children:n[183].value}),(0,e.jsx)("td",{children:n[184].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[185].value}),(0,e.jsx)("td",{children:n[186].value}),(0,e.jsx)("td",{children:n[187].value}),(0,e.jsx)("td",{children:n[188].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[189].value}),(0,e.jsx)("td",{children:n[190].value}),(0,e.jsx)("td",{children:n[191].value}),(0,e.jsx)("td",{children:n[192].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[193].value}),(0,e.jsx)("td",{children:n[194].value}),(0,e.jsx)("td",{children:n[195].value}),(0,e.jsx)("td",{children:n[196].value}),(0,e.jsx)("td",{children:n[197].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[198].value}),(0,e.jsx)("td",{children:n[199].value}),(0,e.jsx)("td",{children:n[200].value}),(0,e.jsx)("td",{children:n[201].value}),(0,e.jsx)("td",{children:n[202].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[203].value}),(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{children:n[205].value}),(0,e.jsx)("td",{children:n[206].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[207].value}),(0,e.jsx)("td",{children:n[208].value}),(0,e.jsx)("td",{children:n[209].value}),(0,e.jsx)("td",{children:n[210].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"common-methods",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#common-methods",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Common Methods"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[211].value}),(0,e.jsx)("th",{children:n[212].value}),(0,e.jsx)("th",{children:n[213].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[214].value}),(0,e.jsx)("td",{children:n[215].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[216].value}),(0,e.jsx)("td",{children:n[217].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepicker",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepicker",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[218].value}),(0,e.jsx)("th",{children:n[219].value}),(0,e.jsx)("th",{children:n[220].value}),(0,e.jsx)("th",{children:n[221].value}),(0,e.jsx)("th",{children:n[222].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[223].value}),(0,e.jsx)("td",{children:n[224].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[225].value})}),(0,e.jsx)("td",{children:n[226].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[227].value}),(0,e.jsx)("td",{children:n[228].value}),(0,e.jsx)("td",{children:n[229].value}),(0,e.jsx)("td",{children:n[230].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[231].value}),(0,e.jsxs)("td",{children:[n[232].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:n[233].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[234].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[235].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[236].value}),(0,e.jsx)("td",{children:n[237].value}),(0,e.jsx)("td",{children:n[238].value}),(0,e.jsx)("td",{children:n[239].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[240].value}),(0,e.jsxs)("td",{children:[n[241].value,(0,e.jsx)("code",{children:n[242].value}),n[243].value]}),(0,e.jsx)("td",{children:n[244].value}),(0,e.jsx)("td",{children:n[245].value}),(0,e.jsx)("td",{children:n[246].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[247].value}),(0,e.jsx)("td",{children:n[248].value}),(0,e.jsx)("td",{children:n[249].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/time-picker/#api",sourceType:"Link",children:n[250].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[251].value}),(0,e.jsxs)("td",{children:[n[252].value,(0,e.jsx)(r.Z,{to:"#components-date-picker-demo-disabled-date",sourceType:"Link",children:n[253].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[254].value})}),(0,e.jsx)("td",{children:n[255].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[256].value}),(0,e.jsxs)("td",{children:[n[257].value,(0,e.jsx)("code",{children:n[258].value}),n[259].value]}),(0,e.jsx)("td",{children:n[260].value}),(0,e.jsx)("td",{children:n[261].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[262].value}),(0,e.jsx)("td",{children:n[263].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[264].value})}),(0,e.jsx)("td",{children:n[265].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[266].value}),(0,e.jsx)("td",{children:n[267].value}),(0,e.jsx)("td",{children:n[268].value}),(0,e.jsx)("td",{children:n[269].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[270].value}),(0,e.jsx)("td",{children:n[271].value}),(0,e.jsx)("td",{children:n[272].value}),(0,e.jsx)("td",{children:n[273].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[274].value}),(0,e.jsx)("td",{children:n[275].value}),(0,e.jsx)("td",{children:n[276].value}),(0,e.jsx)("td",{children:n[277].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickeryear",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickeryear",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=year]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[278].value}),(0,e.jsx)("th",{children:n[279].value}),(0,e.jsx)("th",{children:n[280].value}),(0,e.jsx)("th",{children:n[281].value}),(0,e.jsx)("th",{children:n[282].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[283].value}),(0,e.jsx)("td",{children:n[284].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[285].value})}),(0,e.jsx)("td",{children:n[286].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[287].value}),(0,e.jsxs)("td",{children:[n[288].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:n[289].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[290].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[291].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[292].value}),(0,e.jsx)("td",{children:n[293].value}),(0,e.jsx)("td",{children:n[294].value}),(0,e.jsx)("td",{children:n[295].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[296].value}),(0,e.jsx)("td",{children:n[297].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[298].value})}),(0,e.jsx)("td",{children:n[299].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[300].value}),(0,e.jsx)("td",{children:n[301].value}),(0,e.jsx)("td",{children:n[302].value}),(0,e.jsx)("td",{children:n[303].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickerquarter",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickerquarter",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=quarter]"]}),(0,e.jsxs)("p",{children:[n[304].value,(0,e.jsx)("code",{children:n[305].value}),n[306].value]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[307].value}),(0,e.jsx)("th",{children:n[308].value}),(0,e.jsx)("th",{children:n[309].value}),(0,e.jsx)("th",{children:n[310].value}),(0,e.jsx)("th",{children:n[311].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[312].value}),(0,e.jsx)("td",{children:n[313].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[314].value})}),(0,e.jsx)("td",{children:n[315].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[316].value}),(0,e.jsxs)("td",{children:[n[317].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:n[318].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[319].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[320].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[321].value}),(0,e.jsx)("td",{children:n[322].value}),(0,e.jsx)("td",{children:n[323].value}),(0,e.jsx)("td",{children:n[324].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[325].value}),(0,e.jsx)("td",{children:n[326].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[327].value})}),(0,e.jsx)("td",{children:n[328].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[329].value}),(0,e.jsx)("td",{children:n[330].value}),(0,e.jsx)("td",{children:n[331].value}),(0,e.jsx)("td",{children:n[332].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickermonth",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickermonth",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=month]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[333].value}),(0,e.jsx)("th",{children:n[334].value}),(0,e.jsx)("th",{children:n[335].value}),(0,e.jsx)("th",{children:n[336].value}),(0,e.jsx)("th",{children:n[337].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[338].value}),(0,e.jsx)("td",{children:n[339].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[340].value})}),(0,e.jsx)("td",{children:n[341].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[342].value}),(0,e.jsxs)("td",{children:[n[343].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:n[344].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[345].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[346].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[347].value}),(0,e.jsx)("td",{children:n[348].value}),(0,e.jsx)("td",{children:n[349].value}),(0,e.jsx)("td",{children:n[350].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[351].value}),(0,e.jsx)("td",{children:n[352].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[353].value})}),(0,e.jsx)("td",{children:n[354].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[355].value}),(0,e.jsx)("td",{children:n[356].value}),(0,e.jsx)("td",{children:n[357].value}),(0,e.jsx)("td",{children:n[358].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickerweek",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickerweek",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=week]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[359].value}),(0,e.jsx)("th",{children:n[360].value}),(0,e.jsx)("th",{children:n[361].value}),(0,e.jsx)("th",{children:n[362].value}),(0,e.jsx)("th",{children:n[363].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[364].value}),(0,e.jsx)("td",{children:n[365].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[366].value})}),(0,e.jsx)("td",{children:n[367].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[368].value}),(0,e.jsxs)("td",{children:[n[369].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:n[370].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[371].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[372].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[373].value}),(0,e.jsx)("td",{children:n[374].value}),(0,e.jsx)("td",{children:n[375].value}),(0,e.jsx)("td",{children:n[376].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[377].value}),(0,e.jsx)("td",{children:n[378].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[379].value})}),(0,e.jsx)("td",{children:n[380].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[381].value}),(0,e.jsx)("td",{children:n[382].value}),(0,e.jsx)("td",{children:n[383].value}),(0,e.jsx)("td",{children:n[384].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"rangepicker",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"RangePicker"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[385].value}),(0,e.jsx)("th",{children:n[386].value}),(0,e.jsx)("th",{children:n[387].value}),(0,e.jsx)("th",{children:n[388].value}),(0,e.jsx)("th",{children:n[389].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[390].value}),(0,e.jsx)("td",{children:n[391].value}),(0,e.jsx)("td",{children:n[392].value}),(0,e.jsx)("td",{children:n[393].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[394].value}),(0,e.jsxs)("td",{children:[n[395].value,(0,e.jsx)("code",{children:n[396].value}),n[397].value]}),(0,e.jsx)("td",{children:n[398].value}),(0,e.jsx)("td",{children:n[399].value}),(0,e.jsx)("td",{children:n[400].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[401].value}),(0,e.jsx)("td",{children:n[402].value}),(0,e.jsx)("td",{children:n[403].value}),(0,e.jsx)("td",{children:n[404].value}),(0,e.jsx)("td",{children:n[405].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[406].value}),(0,e.jsx)("td",{children:n[407].value}),(0,e.jsxs)("td",{children:[n[408].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[409].value}),n[410].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[411].value}),n[412].value]}),(0,e.jsx)("td",{children:n[413].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[414].value}),(0,e.jsx)("td",{children:n[415].value}),(0,e.jsx)("td",{children:n[416].value}),(0,e.jsx)("td",{children:n[417].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[418].value}),(0,e.jsx)("td",{children:n[419].value}),(0,e.jsxs)("td",{children:[n[420].value,(0,e.jsx)("code",{children:n[421].value}),n[422].value,(0,e.jsx)("code",{children:n[423].value}),n[424].value]}),(0,e.jsx)("td",{children:n[425].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[426].value}),(0,e.jsxs)("td",{children:[n[427].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:n[428].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[429].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[430].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[431].value}),(0,e.jsxs)("td",{children:[n[432].value,(0,e.jsx)("code",{children:n[433].value}),n[434].value]}),(0,e.jsx)("td",{children:n[435].value}),(0,e.jsx)("td",{children:n[436].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[437].value}),(0,e.jsx)("td",{children:n[438].value}),(0,e.jsx)("td",{children:n[439].value}),(0,e.jsx)("td",{children:n[440].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[441].value}),(0,e.jsx)("td",{children:n[442].value}),(0,e.jsx)("td",{children:n[443].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[444].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[445].value}),(0,e.jsx)("td",{children:n[446].value}),(0,e.jsx)("td",{children:n[447].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/time-picker/#api",sourceType:"Link",children:n[448].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[449].value}),(0,e.jsxs)("td",{children:[n[450].value,(0,e.jsx)(r.Z,{to:"#components-date-picker-demo-disabled-date",sourceType:"Link",children:n[451].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[452].value}),n[453].value]}),(0,e.jsx)("td",{children:n[454].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[455].value}),(0,e.jsx)("td",{children:n[456].value}),(0,e.jsxs)("td",{children:[n[457].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[458].value}),n[459].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[460].value}),n[461].value]}),(0,e.jsx)("td",{children:n[462].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[463].value}),(0,e.jsxs)("td",{children:[n[464].value,(0,e.jsx)("code",{children:n[465].value}),n[466].value]}),(0,e.jsxs)("td",{children:[n[467].value,(0,e.jsx)("code",{children:n[468].value}),n[469].value,(0,e.jsx)("code",{children:n[470].value}),n[471].value]}),(0,e.jsx)("td",{children:n[472].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[473].value}),(0,e.jsx)("td",{children:n[474].value}),(0,e.jsx)("td",{children:n[475].value}),(0,e.jsx)("td",{children:n[476].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h4",{id:"formattype",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formattype",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"formatType"]}),(0,e.jsx)(a.Z,{lang:"typescript",children:n[477].value}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(i.Z,{component:"DatePicker"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"when-set-mode-to-datepickerrangepicker-cannot-select-year-or-month-anymore",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-set-mode-to-datepickerrangepicker-cannot-select-year-or-month-anymore",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When set mode to DatePicker/RangePicker, cannot select year or month anymore?"]}),(0,e.jsxs)("p",{children:[n[478].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#when-set-mode-to-datepickerrangepicker-cannot-select-year-or-month-anymore",sourceType:"Link",children:n[479].value})]}),(0,e.jsxs)("h3",{id:"why-does-the-date-picker-switch-to-the-date-panel-after-selecting-the-year-instead-of-the-month-panel",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-does-the-date-picker-switch-to-the-date-panel-after-selecting-the-year-instead-of-the-month-panel",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why does the date picker switch to the date panel after selecting the year instead of the month panel?"]}),(0,e.jsx)("p",{children:n[480].value}),(0,e.jsxs)("h3",{id:"how-to-use-datepicker-with-customize-date-library-like-dayjs",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use-datepicker-with-customize-date-library-like-dayjs",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to use DatePicker with customize date library like dayjs?"]}),(0,e.jsxs)("p",{children:[n[481].value,(0,e.jsx)(r.Z,{to:"/docs/react/use-custom-date-library#datepicker",sourceType:"Link",children:n[482].value})]}),(0,e.jsxs)("h3",{id:"why-config-dayjslocale-globally-not-work",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-config-dayjslocale-globally-not-work",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why config dayjs.locale globally not work?"]}),(0,e.jsxs)("p",{children:[n[483].value,(0,e.jsx)("code",{children:n[484].value}),n[485].value,(0,e.jsx)("code",{children:n[486].value}),n[487].value,(0,e.jsx)("code",{children:n[488].value}),n[489].value,(0,e.jsxs)(r.Z,{to:"/components/config-provider",sourceType:"Link",children:[n[490].value,(0,e.jsx)("code",{children:n[491].value})]}),n[492].value]}),(0,e.jsxs)("h4",{id:"date-related-components-locale-is-not-working",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#date-related-components-locale-is-not-working",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Date-related components locale is not working?"]}),(0,e.jsxs)("p",{children:[n[493].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#date-related-components-locale-is-not-working",sourceType:"Link",children:n[494].value})]}),(0,e.jsxs)("h3",{id:"how-to-modify-start-day-of-week",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-modify-start-day-of-week",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to modify start day of week?"]}),(0,e.jsxs)("p",{children:[n[495].value,(0,e.jsx)(r.Z,{to:"/docs/react/i18n",sourceType:"Link",children:n[496].value}),n[497].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/5605",sourceType:"a",children:n[498].value}),n[499].value,(0,e.jsx)("code",{children:n[500].value}),n[501].value]}),(0,e.jsx)("ul",{children:(0,e.jsxs)("li",{children:[n[502].value,(0,e.jsx)(r.Z,{href:"https://codesandbox.io/s/dayjs-day-of-week-x9tuj2?file=/demo.tsx",sourceType:"a",children:n[503].value})]})}),(0,e.jsx)(a.Z,{lang:"js",children:n[504].value}),(0,e.jsxs)("h3",{id:"why-origin-panel-dont-switch-when-using-panelrender",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-origin-panel-dont-switch-when-using-panelrender",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why origin panel don't switch when using ",(0,e.jsx)("code",{children:n[505].value}),"?"]}),(0,e.jsxs)("p",{children:[n[506].value,(0,e.jsx)("code",{children:n[507].value}),n[508].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/27263",sourceType:"a",children:n[509].value}),n[510].value]})]})]})})}s.default=l}}]);
