"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7339],{481426:function(h,i,r){r.r(i);var p=r(502143),_=r(968521),m=r(720719),u=r(521587),x=r(759907),c=r(828089),g=r(825673),v=r(902068),j=r(574399),f=r(863942),k=r(316073),b=r(24628),P=r(719260),y=r(956140),s=r(127179),a=r(905388),A=r(245583),E=r(606965),C=r(268696),D=r(587302),t=r(424128),w=r(249706),O=r(795127),M=r(116846),L=r(720538),R=r(212039),T=r(73024),I=r(553913),o=r(830084),B=r(667294),n=r(785893);function d(){var l=(0,o.eL)(),e=l.texts;return(0,n.jsx)(o.dY,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsx)("p",{children:e[0].value}),(0,n.jsxs)("h2",{id:"when-to-use",children:[(0,n.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,n.jsx)("p",{children:e[1].value}),(0,n.jsxs)("blockquote",{children:[(0,n.jsx)("p",{children:e[2].value}),(0,n.jsxs)("p",{children:[e[3].value,(0,n.jsx)("code",{children:e[4].value}),e[5].value,(0,n.jsx)("code",{children:e[6].value}),e[7].value]})]}),(0,n.jsxs)("h2",{id:"examples",children:[(0,n.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,n.jsx)(a.Z,{items:[{demo:{id:"components-anchor-demo-basic"},previewerProps:{iframe:"200",title:"Basic",filename:"components/anchor/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor, Row, Col } from 'antd';
const App = () => (
  <Row>
    <Col span={16}>
      <div
        id="part-1"
        style={{
          height: '100vh',
          background: 'rgba(255,0,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          height: '100vh',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{
          height: '100vh',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
    </Col>
    <Col span={8}>
      <Anchor
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);
export default App;
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"components-anchor-demo-horizontal"},previewerProps:{iframe:"200",title:"Horizontal Anchor",filename:"components/anchor/demo/horizontal.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor } from 'antd';
const App = () => (
  <>
    <div
      style={{
        padding: '20px',
      }}
    >
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#FFFBE9',
        }}
      />
    </div>
  </>
);
export default App;
`,description:"<p>Horizontally aligned anchors</p>"}},{demo:{id:"components-anchor-demo-static"},previewerProps:{title:"Static Anchor",filename:"components/anchor/demo/static.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor } from 'antd';
const App = () => (
  <Anchor
    affix={false}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>Do not change state when page is scrolling.</p>"}},{demo:{id:"components-anchor-demo-onclick"},previewerProps:{title:"Customize the onClick event",filename:"components/anchor/demo/onClick.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor } from 'antd';
const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};
const App = () => (
  <Anchor
    affix={false}
    onClick={handleClick}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>Clicking on an anchor does not record history.</p>"}},{demo:{id:"components-anchor-demo-customizehighlight"},previewerProps:{title:"Customize the anchor highlight",filename:"components/anchor/demo/customizeHighlight.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor } from 'antd';
const getCurrentAnchor = () => '#components-anchor-demo-static';
const App = () => (
  <Anchor
    affix={false}
    getCurrentAnchor={getCurrentAnchor}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>Customize the anchor highlight.</p>"}},{demo:{id:"components-anchor-demo-targetoffset"},previewerProps:{iframe:"200",title:"Set Anchor scroll offset",filename:"components/anchor/demo/targetOffset.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Anchor, Row, Col } from 'antd';
const App = () => {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <div>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{
              height: '100vh',
              background: 'rgba(255,0,0,0.02)',
              marginTop: '30vh',
            }}
          >
            Part 1
          </div>
          <div
            id="part-2"
            style={{
              height: '100vh',
              background: 'rgba(0,255,0,0.02)',
            }}
          >
            Part 2
          </div>
          <div
            id="part-3"
            style={{
              height: '100vh',
              background: 'rgba(0,0,255,0.02)',
            }}
          >
            Part 3
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Part 1',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Part 2',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Part 3',
              },
            ]}
          />
        </Col>
      </Row>

      <div
        style={{
          height: '30vh',
          background: 'rgba(0,0,0,0.85)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '75%',
          color: '#FFF',
        }}
        ref={topRef}
      >
        <div>Fixed Top Block</div>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>Anchor target scroll to screen center.</p>"}},{demo:{id:"components-anchor-demo-onchange"},previewerProps:{title:"Listening for anchor link change",filename:"components/anchor/demo/onChange.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor } from 'antd';
const onChange = (link) => {
  console.log('Anchor:OnChange', link);
};
const App = () => (
  <Anchor
    affix={false}
    onChange={onChange}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>Listening for anchor link change.</p>"}},{demo:{id:"components-anchor-demo-replace"},previewerProps:{iframe:"200",title:"Replace href in history",filename:"components/anchor/demo/replace.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor, Col, Row } from 'antd';
const App = () => (
  <Row>
    <Col span={16}>
      <div
        id="part-1"
        style={{
          height: '100vh',
          background: 'rgba(255,0,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          height: '100vh',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{
          height: '100vh',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
    </Col>
    <Col span={8}>
      <Anchor
        replace
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);
export default App;
`,description:"<p>Replace path in browser history, so back button returns to previous page instead of previous anchor item.</p>"}},{demo:{id:"components-anchor-demo-legacy-anchor"},previewerProps:{debug:!0,title:"Deprecated JSX demo",filename:"components/anchor/demo/legacy-anchor.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
const App = () => (
  <Anchor affix={false}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
    </Link>
  </Anchor>
);
export default App;
`,description:"<p>Debug usage</p>"}},{demo:{id:"components-anchor-demo-component-token"},previewerProps:{iframe:"800",debug:!0,title:"Component Token",filename:"components/anchor/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Anchor, Col, ConfigProvider, Row } from 'antd';

/** Test usage. Do not use in your production. */

export default () => (
  <ConfigProvider
    theme={{
      components: {
        Anchor: {
          linkPaddingBlock: 100,
          linkPaddingInlineStart: 50,
        },
      },
    }}
  >
    <Row>
      <Col span={16}>
        <div
          id="part-1"
          style={{
            height: '100vh',
            background: 'rgba(255,0,0,0.02)',
          }}
        />
        <div
          id="part-2"
          style={{
            height: '100vh',
            background: 'rgba(0,255,0,0.02)',
          }}
        />
        <div
          id="part-3"
          style={{
            height: '100vh',
            background: 'rgba(0,0,255,0.02)',
          }}
        />
      </Col>
      <Col span={8}>
        <Anchor
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'Part 1',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: 'Part 2',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: 'Part 3',
            },
          ]}
        />
      </Col>
    </Row>
  </ConfigProvider>
);
`,description:"<p>Component Token Debug</p>"}}]}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"api",children:[(0,n.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsxs)("p",{children:[e[8].value,(0,n.jsx)(t.Z,{to:"/docs/react/common-props",sourceType:"Link",children:e[9].value})]}),(0,n.jsxs)("h3",{id:"anchor-props",children:[(0,n.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#anchor-props",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Anchor Props"]}),(0,n.jsxs)(c.Z,{className:"component-api-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:e[10].value}),(0,n.jsx)("th",{children:e[11].value}),(0,n.jsx)("th",{children:e[12].value}),(0,n.jsx)("th",{children:e[13].value}),(0,n.jsx)("th",{children:e[14].value})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[15].value}),(0,n.jsx)("td",{children:e[16].value}),(0,n.jsx)("td",{children:e[17].value}),(0,n.jsx)("td",{children:e[18].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[19].value}),(0,n.jsx)("td",{children:e[20].value}),(0,n.jsx)("td",{children:e[21].value}),(0,n.jsx)("td",{children:e[22].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[23].value}),(0,n.jsx)("td",{children:e[24].value}),(0,n.jsx)("td",{children:e[25].value}),(0,n.jsx)("td",{children:e[26].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[27].value}),(0,n.jsx)("td",{children:e[28].value}),(0,n.jsx)("td",{children:e[29].value}),(0,n.jsx)("td",{children:e[30].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[31].value}),(0,n.jsx)("td",{children:e[32].value}),(0,n.jsx)("td",{children:e[33].value}),(0,n.jsx)("td",{children:e[34].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[35].value}),(0,n.jsxs)("td",{children:[e[36].value,(0,n.jsx)("code",{children:e[37].value})]}),(0,n.jsx)("td",{children:e[38].value}),(0,n.jsx)("td",{children:e[39].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[40].value}),(0,n.jsxs)("td",{children:[e[41].value,(0,n.jsx)("code",{children:e[42].value}),e[43].value,(0,n.jsx)(t.Z,{to:"#components-anchor-demo-targetoffset",sourceType:"Link",children:e[44].value})]}),(0,n.jsx)("td",{children:e[45].value}),(0,n.jsx)("td",{children:e[46].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[47].value}),(0,n.jsx)("td",{children:e[48].value}),(0,n.jsx)("td",{children:e[49].value}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[50].value}),(0,n.jsxs)("td",{children:[e[51].value,(0,n.jsx)("code",{children:e[52].value}),e[53].value]}),(0,n.jsx)("td",{children:e[54].value}),(0,n.jsx)("td",{children:e[55].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[56].value}),(0,n.jsx)("td",{children:e[57].value}),(0,n.jsxs)("td",{children:[e[58].value,(0,n.jsx)(t.Z,{to:"#anchoritem",sourceType:"Link",children:e[59].value})]}),(0,n.jsx)("td",{children:e[60].value}),(0,n.jsx)("td",{children:e[61].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[62].value}),(0,n.jsx)("td",{children:e[63].value}),(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:e[64].value}),e[65].value,(0,n.jsx)("code",{children:e[66].value})]}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e[67].value})}),(0,n.jsx)("td",{children:e[68].value})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[69].value}),(0,n.jsx)("td",{children:e[70].value}),(0,n.jsx)("td",{children:e[71].value}),(0,n.jsx)("td",{children:e[72].value}),(0,n.jsx)("td",{children:e[73].value})]})]})]}),(0,n.jsxs)("h3",{id:"anchoritem",children:[(0,n.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#anchoritem",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"AnchorItem"]}),(0,n.jsxs)(c.Z,{className:"component-api-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:e[74].value}),(0,n.jsx)("th",{children:e[75].value}),(0,n.jsx)("th",{children:e[76].value}),(0,n.jsx)("th",{children:e[77].value}),(0,n.jsx)("th",{children:e[78].value})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[79].value}),(0,n.jsx)("td",{children:e[80].value}),(0,n.jsx)("td",{children:e[81].value}),(0,n.jsx)("td",{children:e[82].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[83].value}),(0,n.jsx)("td",{children:e[84].value}),(0,n.jsx)("td",{children:e[85].value}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[86].value}),(0,n.jsx)("td",{children:e[87].value}),(0,n.jsx)("td",{children:e[88].value}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[89].value}),(0,n.jsx)("td",{children:e[90].value}),(0,n.jsx)("td",{children:e[91].value}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[92].value}),(0,n.jsxs)("td",{children:[e[93].value,(0,n.jsx)("code",{children:e[94].value})]}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.Z,{to:"#anchoritem",sourceType:"Link",children:e[95].value}),e[96].value]}),(0,n.jsx)("td",{children:e[97].value}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[98].value}),(0,n.jsx)("td",{children:e[99].value}),(0,n.jsx)("td",{children:e[100].value}),(0,n.jsx)("td",{children:e[101].value}),(0,n.jsx)("td",{children:e[102].value})]})]})]}),(0,n.jsxs)("h3",{id:"link-props",children:[(0,n.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#link-props",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Link Props"]}),(0,n.jsx)("p",{children:e[103].value}),(0,n.jsxs)(c.Z,{className:"component-api-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:e[104].value}),(0,n.jsx)("th",{children:e[105].value}),(0,n.jsx)("th",{children:e[106].value}),(0,n.jsx)("th",{children:e[107].value}),(0,n.jsx)("th",{children:e[108].value})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[109].value}),(0,n.jsx)("td",{children:e[110].value}),(0,n.jsx)("td",{children:e[111].value}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[112].value}),(0,n.jsx)("td",{children:e[113].value}),(0,n.jsx)("td",{children:e[114].value}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e[115].value}),(0,n.jsx)("td",{children:e[116].value}),(0,n.jsx)("td",{children:e[117].value}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]})]})]}),(0,n.jsxs)("h2",{id:"design-token",children:[(0,n.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,n.jsx)(s.Z,{component:"Anchor"})]})})}i.default=d}}]);
