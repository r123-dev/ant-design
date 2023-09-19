"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8242],{946968:function(h,a,t){t.r(a);var p=t(502143),x=t(968521),m=t(720719),j=t(521587),s=t(759907),c=t(828089),v=t(825673),g=t(902068),k=t(574399),_=t(863942),f=t(316073),b=t(24628),E=t(719260),D=t(956140),i=t(127179),l=t(905388),y=t(245583),P=t(606965),C=t(268696),A=t(587302),r=t(424128),w=t(249706),T=t(795127),B=t(116846),R=t(720538),F=t(212039),M=t(73024),O=t(553913),d=t(830084),S=t(667294),e=t(785893);function o(){var u=(0,d.eL)(),n=u.texts;return(0,e.jsx)(d.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(l.Z,{items:[{demo:{id:"components-date-picker-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/date-picker/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002</p>"}},{demo:{id:"components-date-picker-demo-range-picker"},previewerProps:{title:"\u8303\u56F4\u9009\u62E9\u5668",filename:"components/date-picker/demo/range-picker.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>picker</code> \u5C5E\u6027\uFF0C\u6307\u5B9A\u8303\u56F4\u9009\u62E9\u5668\u7C7B\u578B\u3002</p>"}},{demo:{id:"components-date-picker-demo-switchable"},previewerProps:{title:"\u5207\u6362\u4E0D\u540C\u7684\u9009\u62E9\u5668",filename:"components/date-picker/demo/switchable.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:"<p>\u63D0\u4F9B\u9009\u62E9\u5668\uFF0C\u81EA\u7531\u5207\u6362\u4E0D\u540C\u7C7B\u578B\u7684\u65E5\u671F\u9009\u62E9\u5668\uFF0C\u5E38\u7528\u4E8E\u65E5\u671F\u7B5B\u9009\u573A\u5408\u3002</p>"}},{demo:{id:"components-date-picker-demo-format"},previewerProps:{title:"\u65E5\u671F\u683C\u5F0F",filename:"components/date-picker/demo/format.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u4F7F\u7528 <code>format</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u663E\u793A\u683C\u5F0F\u3002\u5F53 <code>format</code> \u4E3A\u6570\u7EC4\u65F6\uFF0C\u9009\u62E9\u5668\u8F93\u5165\u6846\u53EF\u4EE5\u8F93\u5165\u6570\u7EC4\u4E2D\u4EFB\u610F\u4E00\u4E2A\u6709\u6548\u683C\u5F0F\u3002</p>"}},{demo:{id:"components-date-picker-demo-time"},previewerProps:{title:"\u65E5\u671F\u65F6\u95F4\u9009\u62E9",filename:"components/date-picker/demo/time.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u589E\u52A0\u9009\u62E9\u65F6\u95F4\u529F\u80FD\uFF0C\u5F53 <code>showTime</code> \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5176\u5C5E\u6027\u4F1A\u4F20\u9012\u7ED9\u5185\u5EFA\u7684 <code>TimePicker</code>\u3002</p>"}},{demo:{id:"components-date-picker-demo-disabled"},previewerProps:{title:"\u7981\u7528",filename:"components/date-picker/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u9009\u62E9\u6846\u7684\u4E0D\u53EF\u7528\u72B6\u6001\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u5355\u72EC\u7981\u7528 RangePicker \u7684\u5176\u4E2D\u4E00\u9879\u3002</p>"}},{demo:{id:"components-date-picker-demo-disabled-date"},previewerProps:{title:"\u4E0D\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4",filename:"components/date-picker/demo/disabled-date.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u53EF\u7528 <code>disabledDate</code> \u548C <code>disabledTime</code> \u5206\u522B\u7981\u6B62\u9009\u62E9\u90E8\u5206\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u5176\u4E2D <code>disabledTime</code> \u9700\u8981\u548C <code>showTime</code> \u4E00\u8D77\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-date-picker-demo-select-in-range"},previewerProps:{title:"\u9009\u62E9\u4E0D\u8D85\u8FC7\u4E03\u5929\u7684\u8303\u56F4",filename:"components/date-picker/demo/select-in-range.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:"<p>\u4F7F\u7528 <code>changeOnBlur</code> \u914D\u5408 <code>onCalendarChange</code> \u548C <code>disabledDate</code> \u6765\u9650\u5236\u52A8\u6001\u7684\u65E5\u671F\u533A\u95F4\u9009\u62E9\u3002</p>"}},{demo:{id:"components-date-picker-demo-preset-ranges"},previewerProps:{title:"\u9884\u8BBE\u8303\u56F4",filename:"components/date-picker/demo/preset-ranges.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u53EF\u4EE5\u9884\u8BBE\u5E38\u7528\u7684\u65E5\u671F\u8303\u56F4\u4EE5\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002\u81EA <code>5.8.0</code> \u5F00\u59CB\uFF0Cpreset value \u652F\u6301\u56DE\u8C03\u51FD\u6570\u8FD4\u56DE\u503C\u65B9\u5F0F\u3002</p>"}},{demo:{id:"components-date-picker-demo-extra-footer"},previewerProps:{title:"\u989D\u5916\u7684\u9875\u811A",filename:"components/date-picker/demo/extra-footer.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u5728\u6D6E\u5C42\u4E2D\u52A0\u5165\u989D\u5916\u7684\u9875\u811A\uFF0C\u4EE5\u6EE1\u8DB3\u67D0\u4E9B\u5B9A\u5236\u4FE1\u606F\u7684\u9700\u6C42\u3002</p>"}},{demo:{id:"components-date-picker-demo-size"},previewerProps:{title:"\u4E09\u79CD\u5927\u5C0F",filename:"components/date-picker/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:"<p>\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4E3A <code>middle</code>\u3002</p>"}},{demo:{id:"components-date-picker-demo-cell-render"},previewerProps:{title:"\u5B9A\u5236\u5355\u5143\u683C",filename:"components/date-picker/demo/cell-render.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u4F7F\u7528 <code>cellRender</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u5185\u5BB9\u548C\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-date-picker-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/date-picker/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A DatePicker \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-date-picker-demo-bordered"},previewerProps:{title:"\u65E0\u8FB9\u6846",filename:"components/date-picker/demo/bordered.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u65E0\u8FB9\u6846\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-date-picker-demo-placement"},previewerProps:{title:"\u5F39\u51FA\u4F4D\u7F6E",filename:"components/date-picker/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>placement</code> \u624B\u52A8\u6307\u5B9A\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"components-date-picker-demo-mode"},previewerProps:{debug:!0,title:"\u53D7\u63A7\u9762\u677F",filename:"components/date-picker/demo/mode.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:"<p>\u901A\u8FC7\u7EC4\u5408 <code>mode</code> \u4E0E <code>onPanelChange</code> \u63A7\u5236\u8981\u5C55\u793A\u7684\u9762\u677F\u3002</p>"}},{demo:{id:"components-date-picker-demo-start-end"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9009\u62E9",filename:"components/date-picker/demo/start-end.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:`<p>\u5F53 <code>RangePicker</code> \u65E0\u6CD5\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E24\u4E2A <code>DatePicker</code> \u5B9E\u73B0\u7C7B\u4F3C\u7684\u529F\u80FD\u3002</p>
<blockquote>
<ul>
<li>\u901A\u8FC7\u8BBE\u7F6E <code>disabledDate</code> \u65B9\u6CD5\uFF0C\u6765\u7EA6\u675F\u5F00\u59CB\u548C\u7ED3\u675F\u65E5\u671F\u3002</li>
<li>\u901A\u8FC7 <code>open</code> <code>onOpenChange</code> \u6765\u4F18\u5316\u4EA4\u4E92\u3002</li>
</ul>
</blockquote>`}},{demo:{id:"components-date-picker-demo-suffix"},previewerProps:{debug:!0,title:"\u540E\u7F00\u56FE\u6807",filename:"components/date-picker/demo/suffix.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002</p>"}},{demo:{id:"components-date-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/date-picker/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalDatePicker } = DatePicker;
const App = () => <InternalDatePicker />;
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-date-picker-demo-component-token"},previewerProps:{debug:!0,title:"\u7EC4\u4EF6 Token",filename:"components/date-picker/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
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
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[1].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[2].value})]}),(0,e.jsx)("p",{children:n[3].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[4].value}),(0,e.jsx)("li",{children:n[5].value}),(0,e.jsx)("li",{children:n[6].value}),(0,e.jsx)("li",{children:n[7].value}),(0,e.jsx)("li",{children:n[8].value}),(0,e.jsx)("li",{children:n[9].value})]}),(0,e.jsxs)("h3",{id:"\u56FD\u9645\u5316\u914D\u7F6E",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u56FD\u9645\u5316\u914D\u7F6E",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u56FD\u9645\u5316\u914D\u7F6E"]}),(0,e.jsxs)("p",{children:[n[10].value,(0,e.jsx)(r.Z,{href:"https://ant.design/components/config-provider-cn/",sourceType:"a",children:n[11].value}),n[12].value]}),(0,e.jsxs)("p",{children:[n[13].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json",sourceType:"a",children:n[14].value}),n[15].value]}),(0,e.jsx)(s.Z,{lang:"jsx",children:n[16].value}),(0,e.jsx)(s.Z,{lang:"jsx",children:n[17].value}),(0,e.jsxs)("h3",{id:"\u5171\u540C\u7684-api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u540C\u7684-api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5171\u540C\u7684 API"]}),(0,e.jsx)("p",{children:n[18].value}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[19].value}),(0,e.jsx)("th",{children:n[20].value}),(0,e.jsx)("th",{children:n[21].value}),(0,e.jsx)("th",{children:n[22].value}),(0,e.jsx)("th",{children:n[23].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:n[28].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[29].value}),(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[33].value}),(0,e.jsx)("td",{children:n[34].value}),(0,e.jsx)("td",{children:n[35].value}),(0,e.jsx)("td",{children:n[36].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[37].value}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{children:n[39].value}),(0,e.jsx)("td",{children:n[40].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[41].value}),(0,e.jsxs)("td",{children:[n[42].value,(0,e.jsx)("code",{children:n[43].value}),n[44].value]}),(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{children:n[47].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[48].value}),(0,e.jsxs)("td",{children:[n[49].value,(0,e.jsx)("code",{children:n[50].value}),n[51].value]}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{children:n[53].value}),(0,e.jsx)("td",{children:n[54].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{children:n[57].value}),(0,e.jsx)("td",{children:n[58].value}),(0,e.jsx)("td",{children:n[59].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[60].value}),(0,e.jsx)("td",{children:n[61].value}),(0,e.jsx)("td",{children:n[62].value}),(0,e.jsx)("td",{children:n[63].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{children:n[65].value}),(0,e.jsx)("td",{children:n[66].value}),(0,e.jsx)("td",{children:n[67].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[68].value}),(0,e.jsxs)("td",{children:[n[69].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8",sourceType:"a",children:n[70].value}),n[71].value,(0,e.jsx)(r.Z,{to:"#components-date-picker-demo-format",sourceType:"Link",children:n[72].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[73].value})}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://github.com/react-component/picker/blob/f512f18ed59d6791280d1c3d7d37abbb9867eb0b/src/utils/uiUtil.ts#L155-L177",sourceType:"a",children:n[74].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{children:n[76].value}),(0,e.jsx)("td",{children:n[77].value}),(0,e.jsx)("td",{children:n[78].value}),(0,e.jsx)("td",{children:n[79].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[80].value}),(0,e.jsx)("td",{children:n[81].value}),(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{children:n[83].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[84].value}),(0,e.jsx)("td",{children:n[85].value}),(0,e.jsx)("td",{children:n[86].value}),(0,e.jsx)("td",{children:n[87].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[88].value}),(0,e.jsx)("td",{children:n[89].value}),(0,e.jsx)("td",{children:n[90].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json",sourceType:"a",children:n[91].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[92].value}),(0,e.jsxs)("td",{children:[n[93].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-datepickerrangepicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD%E6%9C%88%E4%BB%BD",sourceType:"Link",children:n[94].value}),n[95].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[96].value}),n[97].value,(0,e.jsx)("code",{children:n[98].value}),n[99].value,(0,e.jsx)("code",{children:n[100].value}),n[101].value,(0,e.jsx)("code",{children:n[102].value}),n[103].value,(0,e.jsx)("code",{children:n[104].value})]}),(0,e.jsx)("td",{children:n[105].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[106].value}),(0,e.jsx)("td",{children:n[107].value}),(0,e.jsx)("td",{children:n[108].value}),(0,e.jsx)("td",{children:n[109].value}),(0,e.jsx)("td",{children:n[110].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[111].value}),(0,e.jsx)("td",{children:n[112].value}),(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:n[114].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[115].value}),(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{children:n[119].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[120].value}),(0,e.jsx)("td",{children:n[121].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[122].value}),n[123].value,(0,e.jsx)("code",{children:n[124].value}),n[125].value,(0,e.jsx)("code",{children:n[126].value}),n[127].value,(0,e.jsx)("code",{children:n[128].value}),n[129].value,(0,e.jsx)("code",{children:n[130].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[131].value})}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[132].value}),n[133].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[134].value}),(0,e.jsx)("td",{children:n[135].value}),(0,e.jsx)("td",{children:n[136].value}),(0,e.jsx)("td",{children:n[137].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[138].value}),(0,e.jsx)("td",{children:n[139].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[140].value}),n[141].value,(0,e.jsx)("code",{children:n[142].value}),n[143].value,(0,e.jsx)("code",{children:n[144].value}),n[145].value,(0,e.jsx)("code",{children:n[146].value})]}),(0,e.jsx)("td",{children:n[147].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[148].value}),(0,e.jsx)("td",{children:n[149].value}),(0,e.jsx)("td",{children:n[150].value}),(0,e.jsx)("td",{children:n[151].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[152].value}),(0,e.jsx)("td",{children:n[153].value}),(0,e.jsx)("td",{children:n[154].value}),(0,e.jsx)("td",{children:n[155].value}),(0,e.jsx)("td",{children:n[156].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[157].value}),(0,e.jsxs)("td",{children:[n[158].value,(0,e.jsx)("code",{children:n[159].value}),n[160].value]}),(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[163].value}),(0,e.jsxs)("td",{children:[n[164].value,(0,e.jsx)("code",{children:n[165].value}),n[166].value,(0,e.jsx)("code",{children:n[167].value}),n[168].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[169].value}),n[170].value,(0,e.jsx)("code",{children:n[171].value}),n[172].value,(0,e.jsx)("code",{children:n[173].value})]}),(0,e.jsx)("td",{children:n[174].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[175].value}),(0,e.jsx)("td",{children:n[176].value}),(0,e.jsx)("td",{children:n[177].value}),(0,e.jsx)("td",{children:n[178].value}),(0,e.jsx)("td",{children:n[179].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[180].value}),(0,e.jsx)("td",{children:n[181].value}),(0,e.jsx)("td",{children:n[182].value}),(0,e.jsx)("td",{children:n[183].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[184].value}),(0,e.jsx)("td",{children:n[185].value}),(0,e.jsx)("td",{children:n[186].value}),(0,e.jsx)("td",{children:n[187].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[188].value}),(0,e.jsxs)("td",{children:[n[189].value,(0,e.jsx)("code",{children:n[190].value}),n[191].value]}),(0,e.jsx)("td",{children:n[192].value}),(0,e.jsx)("td",{children:n[193].value}),(0,e.jsx)("td",{children:n[194].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[195].value}),(0,e.jsxs)("td",{children:[n[196].value,(0,e.jsx)("code",{children:n[197].value}),n[198].value]}),(0,e.jsx)("td",{children:n[199].value}),(0,e.jsx)("td",{children:n[200].value}),(0,e.jsx)("td",{children:n[201].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[202].value}),(0,e.jsx)("td",{children:n[203].value}),(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{children:n[205].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[206].value}),(0,e.jsx)("td",{children:n[207].value}),(0,e.jsx)("td",{children:n[208].value}),(0,e.jsx)("td",{children:n[209].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"\u5171\u540C\u7684\u65B9\u6CD5",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u540C\u7684\u65B9\u6CD5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5171\u540C\u7684\u65B9\u6CD5"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[210].value}),(0,e.jsx)("th",{children:n[211].value}),(0,e.jsx)("th",{children:n[212].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[213].value}),(0,e.jsx)("td",{children:n[214].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[215].value}),(0,e.jsx)("td",{children:n[216].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepicker",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepicker",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[217].value}),(0,e.jsx)("th",{children:n[218].value}),(0,e.jsx)("th",{children:n[219].value}),(0,e.jsx)("th",{children:n[220].value}),(0,e.jsx)("th",{children:n[221].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[222].value}),(0,e.jsxs)("td",{children:[n[223].value,(0,e.jsx)("code",{children:n[224].value}),n[225].value,(0,e.jsx)("code",{children:n[226].value}),n[227].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[228].value})}),(0,e.jsx)("td",{children:n[229].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[230].value}),(0,e.jsx)("td",{children:n[231].value}),(0,e.jsx)("td",{children:n[232].value}),(0,e.jsx)("td",{children:n[233].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[234].value}),(0,e.jsxs)("td",{children:[n[235].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8",sourceType:"a",children:n[236].value}),n[237].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[238].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[239].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[240].value}),(0,e.jsx)("td",{children:n[241].value}),(0,e.jsx)("td",{children:n[242].value}),(0,e.jsx)("td",{children:n[243].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[244].value}),(0,e.jsxs)("td",{children:[n[245].value,(0,e.jsx)("code",{children:n[246].value}),n[247].value]}),(0,e.jsx)("td",{children:n[248].value}),(0,e.jsx)("td",{children:n[249].value}),(0,e.jsx)("td",{children:n[250].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[251].value}),(0,e.jsx)("td",{children:n[252].value}),(0,e.jsx)("td",{children:n[253].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/time-picker-cn#api",sourceType:"Link",children:n[254].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[255].value}),(0,e.jsxs)("td",{children:[n[256].value,(0,e.jsx)(r.Z,{to:"#components-date-picker-demo-disabled-date",sourceType:"Link",children:n[257].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[258].value})}),(0,e.jsx)("td",{children:n[259].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[260].value}),(0,e.jsx)("td",{children:n[261].value}),(0,e.jsx)("td",{children:n[262].value}),(0,e.jsx)("td",{children:n[263].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[264].value}),(0,e.jsx)("td",{children:n[265].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[266].value})}),(0,e.jsx)("td",{children:n[267].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[268].value}),(0,e.jsx)("td",{children:n[269].value}),(0,e.jsx)("td",{children:n[270].value}),(0,e.jsx)("td",{children:n[271].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[272].value}),(0,e.jsx)("td",{children:n[273].value}),(0,e.jsx)("td",{children:n[274].value}),(0,e.jsx)("td",{children:n[275].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[276].value}),(0,e.jsx)("td",{children:n[277].value}),(0,e.jsx)("td",{children:n[278].value}),(0,e.jsx)("td",{children:n[279].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickeryear",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickeryear",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=year]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[280].value}),(0,e.jsx)("th",{children:n[281].value}),(0,e.jsx)("th",{children:n[282].value}),(0,e.jsx)("th",{children:n[283].value}),(0,e.jsx)("th",{children:n[284].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[285].value}),(0,e.jsx)("td",{children:n[286].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[287].value})}),(0,e.jsx)("td",{children:n[288].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[289].value}),(0,e.jsxs)("td",{children:[n[290].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8",sourceType:"a",children:n[291].value}),n[292].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[293].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[294].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[295].value}),(0,e.jsx)("td",{children:n[296].value}),(0,e.jsx)("td",{children:n[297].value}),(0,e.jsx)("td",{children:n[298].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[299].value}),(0,e.jsx)("td",{children:n[300].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[301].value})}),(0,e.jsx)("td",{children:n[302].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[303].value}),(0,e.jsx)("td",{children:n[304].value}),(0,e.jsx)("td",{children:n[305].value}),(0,e.jsx)("td",{children:n[306].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickerquarter",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickerquarter",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=quarter]"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[307].value}),n[308].value]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[309].value}),(0,e.jsx)("th",{children:n[310].value}),(0,e.jsx)("th",{children:n[311].value}),(0,e.jsx)("th",{children:n[312].value}),(0,e.jsx)("th",{children:n[313].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[314].value}),(0,e.jsx)("td",{children:n[315].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[316].value})}),(0,e.jsx)("td",{children:n[317].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[318].value}),(0,e.jsxs)("td",{children:[n[319].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8",sourceType:"a",children:n[320].value}),n[321].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[322].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[323].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[324].value}),(0,e.jsx)("td",{children:n[325].value}),(0,e.jsx)("td",{children:n[326].value}),(0,e.jsx)("td",{children:n[327].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[328].value}),(0,e.jsx)("td",{children:n[329].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[330].value})}),(0,e.jsx)("td",{children:n[331].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[332].value}),(0,e.jsx)("td",{children:n[333].value}),(0,e.jsx)("td",{children:n[334].value}),(0,e.jsx)("td",{children:n[335].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickermonth",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickermonth",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=month]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[336].value}),(0,e.jsx)("th",{children:n[337].value}),(0,e.jsx)("th",{children:n[338].value}),(0,e.jsx)("th",{children:n[339].value}),(0,e.jsx)("th",{children:n[340].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[341].value}),(0,e.jsx)("td",{children:n[342].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[343].value})}),(0,e.jsx)("td",{children:n[344].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[345].value}),(0,e.jsxs)("td",{children:[n[346].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8",sourceType:"a",children:n[347].value}),n[348].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[349].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[350].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[351].value}),(0,e.jsx)("td",{children:n[352].value}),(0,e.jsx)("td",{children:n[353].value}),(0,e.jsx)("td",{children:n[354].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[355].value}),(0,e.jsx)("td",{children:n[356].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[357].value})}),(0,e.jsx)("td",{children:n[358].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[359].value}),(0,e.jsx)("td",{children:n[360].value}),(0,e.jsx)("td",{children:n[361].value}),(0,e.jsx)("td",{children:n[362].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickerweek",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickerweek",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=week]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[363].value}),(0,e.jsx)("th",{children:n[364].value}),(0,e.jsx)("th",{children:n[365].value}),(0,e.jsx)("th",{children:n[366].value}),(0,e.jsx)("th",{children:n[367].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[368].value}),(0,e.jsx)("td",{children:n[369].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[370].value})}),(0,e.jsx)("td",{children:n[371].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[372].value}),(0,e.jsxs)("td",{children:[n[373].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8",sourceType:"a",children:n[374].value}),n[375].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[376].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[377].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[378].value}),(0,e.jsx)("td",{children:n[379].value}),(0,e.jsx)("td",{children:n[380].value}),(0,e.jsx)("td",{children:n[381].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[382].value}),(0,e.jsx)("td",{children:n[383].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[384].value})}),(0,e.jsx)("td",{children:n[385].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[386].value}),(0,e.jsx)("td",{children:n[387].value}),(0,e.jsx)("td",{children:n[388].value}),(0,e.jsx)("td",{children:n[389].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"rangepicker",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"RangePicker"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[390].value}),(0,e.jsx)("th",{children:n[391].value}),(0,e.jsx)("th",{children:n[392].value}),(0,e.jsx)("th",{children:n[393].value}),(0,e.jsx)("th",{children:n[394].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[395].value}),(0,e.jsx)("td",{children:n[396].value}),(0,e.jsx)("td",{children:n[397].value}),(0,e.jsx)("td",{children:n[398].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[399].value}),(0,e.jsxs)("td",{children:[n[400].value,(0,e.jsx)("code",{children:n[401].value}),n[402].value]}),(0,e.jsx)("td",{children:n[403].value}),(0,e.jsx)("td",{children:n[404].value}),(0,e.jsx)("td",{children:n[405].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[406].value}),(0,e.jsx)("td",{children:n[407].value}),(0,e.jsx)("td",{children:n[408].value}),(0,e.jsx)("td",{children:n[409].value}),(0,e.jsx)("td",{children:n[410].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[411].value}),(0,e.jsx)("td",{children:n[412].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[413].value}),n[414].value]}),(0,e.jsx)("td",{children:n[415].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[416].value}),(0,e.jsx)("td",{children:n[417].value}),(0,e.jsx)("td",{children:n[418].value}),(0,e.jsx)("td",{children:n[419].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[420].value}),(0,e.jsx)("td",{children:n[421].value}),(0,e.jsxs)("td",{children:[n[422].value,(0,e.jsx)("code",{children:n[423].value}),n[424].value,(0,e.jsx)("code",{children:n[425].value}),n[426].value]}),(0,e.jsx)("td",{children:n[427].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[428].value}),(0,e.jsxs)("td",{children:[n[429].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8",sourceType:"a",children:n[430].value}),n[431].value]}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#formattype",sourceType:"Link",children:n[432].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[433].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[434].value}),(0,e.jsxs)("td",{children:[n[435].value,(0,e.jsx)("code",{children:n[436].value}),n[437].value]}),(0,e.jsx)("td",{children:n[438].value}),(0,e.jsx)("td",{children:n[439].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[440].value}),(0,e.jsx)("td",{children:n[441].value}),(0,e.jsx)("td",{children:n[442].value}),(0,e.jsx)("td",{children:n[443].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[444].value}),(0,e.jsx)("td",{children:n[445].value}),(0,e.jsx)("td",{children:n[446].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[447].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[448].value}),(0,e.jsx)("td",{children:n[449].value}),(0,e.jsx)("td",{children:n[450].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"/components/time-picker-cn#api",sourceType:"Link",children:n[451].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[452].value}),(0,e.jsxs)("td",{children:[n[453].value,(0,e.jsx)(r.Z,{to:"#components-date-picker-demo-disabled-date",sourceType:"Link",children:n[454].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[455].value}),n[456].value]}),(0,e.jsx)("td",{children:n[457].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[458].value}),(0,e.jsx)("td",{children:n[459].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:n[460].value}),n[461].value]}),(0,e.jsx)("td",{children:n[462].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[463].value}),(0,e.jsxs)("td",{children:[n[464].value,(0,e.jsx)("code",{children:n[465].value}),n[466].value]}),(0,e.jsxs)("td",{children:[n[467].value,(0,e.jsx)("code",{children:n[468].value}),n[469].value,(0,e.jsx)("code",{children:n[470].value}),n[471].value]}),(0,e.jsx)("td",{children:n[472].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[473].value}),(0,e.jsx)("td",{children:n[474].value}),(0,e.jsx)("td",{children:n[475].value}),(0,e.jsx)("td",{children:n[476].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h4",{id:"formattype",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formattype",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"formatType"]}),(0,e.jsx)(s.Z,{lang:"typescript",children:n[477].value}),(0,e.jsxs)("h2",{id:"\u4E3B\u9898\u53D8\u91CFdesign-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898\u53D8\u91CFdesign-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898\u53D8\u91CF\uFF08Design Token\uFF09"]})]}),(0,e.jsx)(i.Z,{component:"DatePicker"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"\u5F53\u6211\u6307\u5B9A\u4E86-datepickerrangepicker-\u7684-mode-\u5C5E\u6027\u540E\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD\u6708\u4EFD",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5F53\u6211\u6307\u5B9A\u4E86-datepickerrangepicker-\u7684-mode-\u5C5E\u6027\u540E\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD\u6708\u4EFD",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5F53\u6211\u6307\u5B9A\u4E86 DatePicker/RangePicker \u7684 mode \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F"]}),(0,e.jsxs)("p",{children:[n[478].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-datepickerrangepicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD%E6%9C%88%E4%BB%BD",sourceType:"Link",children:n[479].value})]}),(0,e.jsxs)("h3",{id:"\u4E3A\u4F55\u65E5\u671F\u9009\u62E9\u5E74\u4EFD\u540E\u8FD4\u56DE\u7684\u662F\u65E5\u671F\u9762\u677F\u800C\u4E0D\u662F\u6708\u4EFD\u9762\u677F",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u65E5\u671F\u9009\u62E9\u5E74\u4EFD\u540E\u8FD4\u56DE\u7684\u662F\u65E5\u671F\u9762\u677F\u800C\u4E0D\u662F\u6708\u4EFD\u9762\u677F",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4F55\u65E5\u671F\u9009\u62E9\u5E74\u4EFD\u540E\u8FD4\u56DE\u7684\u662F\u65E5\u671F\u9762\u677F\u800C\u4E0D\u662F\u6708\u4EFD\u9762\u677F\uFF1F"]}),(0,e.jsx)("p",{children:n[480].value}),(0,e.jsxs)("h3",{id:"\u5982\u4F55\u5728-datepicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u5982-momentjs-",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u5728-datepicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u5982-momentjs-",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 Moment.js \uFF09\uFF1F"]}),(0,e.jsxs)("p",{children:[n[481].value,(0,e.jsx)(r.Z,{to:"/docs/react/use-custom-date-library#datepicker",sourceType:"Link",children:n[482].value})]}),(0,e.jsxs)("h3",{id:"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"]}),(0,e.jsxs)("p",{children:[n[483].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%97%B6%E9%97%B4%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E5%9B%BD%E9%99%85%E5%8C%96-locale-%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88",sourceType:"Link",children:n[484].value}),n[485].value]}),(0,e.jsxs)("h3",{id:"\u5982\u4F55\u4FEE\u6539\u5468\u7684\u8D77\u59CB\u65E5",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4FEE\u6539\u5468\u7684\u8D77\u59CB\u65E5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u4FEE\u6539\u5468\u7684\u8D77\u59CB\u65E5\uFF1F"]}),(0,e.jsxs)("p",{children:[n[486].value,(0,e.jsx)(r.Z,{to:"/docs/react/i18n-cn",sourceType:"Link",children:n[487].value}),n[488].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/5605",sourceType:"a",children:n[489].value}),n[490].value,(0,e.jsx)("code",{children:n[491].value}),n[492].value,(0,e.jsx)(r.Z,{href:"https://codesandbox.io/s/dayjs-day-of-week-x9tuj2?file=/demo.tsx",sourceType:"a",children:n[493].value})]}),(0,e.jsx)(s.Z,{lang:"js",children:n[494].value}),(0,e.jsxs)("h3",{id:"\u4E3A\u4F55\u4F7F\u7528-panelrender-\u65F6\u539F\u6765\u9762\u677F\u65E0\u6CD5\u5207\u6362",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u4F7F\u7528-panelrender-\u65F6\u539F\u6765\u9762\u677F\u65E0\u6CD5\u5207\u6362",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4F55\u4F7F\u7528 ",(0,e.jsx)("code",{children:n[495].value})," \u65F6\uFF0C\u539F\u6765\u9762\u677F\u65E0\u6CD5\u5207\u6362\uFF1F"]}),(0,e.jsxs)("p",{children:[n[496].value,(0,e.jsx)("code",{children:n[497].value}),n[498].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/27263",sourceType:"a",children:n[499].value}),n[500].value]})]})]})})}a.default=o}}]);
