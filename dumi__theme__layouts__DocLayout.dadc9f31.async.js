"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{148050:function(ie,yn,t){t.d(yn,{Z:function(){return tn}});var pn=t(168400),w=t.n(pn),fn=t(667294),b=t(186548),On=t(65630),ln=t(879587),jn=t(785893),d,s="https://github.com/ant-design/ant-design/edit/master/",G=(0,On.kc)(function(j){var xn=j.token,Mn=j.css,p=xn.colorIcon,P=xn.colorText,A=xn.iconCls;return{editButton:Mn(d||(d=w()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),A,p,P)}});function tn(j){var xn=j.title,Mn=j.filename,p=G(),P=p.styles;return(0,jn.jsx)(ln.Z,{title:xn,children:(0,jn.jsx)("a",{className:P.editButton,href:"".concat(s).concat(Mn),target:"_blank",rel:"noopener noreferrer",children:(0,jn.jsx)(b.Z,{})})})}},472638:function(ie,yn,t){var pn=t(97857),w=t.n(pn),fn=t(952677),b=t.n(fn),On=t(805574),ln=t.n(On),jn=t(513769),d=t.n(jn),s=t(667294),G=t(830084),tn=t(574865),j=t.n(tn),xn=t(785893),Mn=["to","children"],p=(0,s.forwardRef)(function(P,A){var n=P.to,q=P.children,En=d()(P,Mn),Kn=(0,s.useTransition)(),Gn=ln()(Kn,2),Fn=Gn[0],ee=Gn[1],Qn=(0,G.s0)(),te=(0,G.TH)(),Vn=te.pathname,An=(0,s.useMemo)(function(){return b()(n)==="object"?"".concat(n.pathname||Vn).concat(n.search||"").concat(n.hash||""):n},[n]),Hn=function(Zn){An!=null&&An.startsWith("http")||!Zn.metaKey&&!Zn.ctrlKey&&!Zn.shiftKey&&(Zn.preventDefault(),ee(function(){An&&Qn(An)}))};return(0,s.useLayoutEffect)(function(){Fn?j().start():j().done()},[Fn]),(0,xn.jsx)("a",w()(w()({ref:A,href:An,onClick:Hn},En),{},{children:q}))});yn.Z=p},334230:function(ie,yn,t){t.r(yn),t.d(yn,{default:function(){return Tr}});var pn=t(805574),w=t.n(pn),fn=t(294184),b=t.n(fn),On=t(727484),ln=t.n(On),jn=t(533852),d=t(830084),s=t(667294),G=t(715778),tn=t(773036),j=t(302559),xn=t(438746),Mn=t(168400),p=t.n(Mn),P=t(370917),A=t(65630),n=t(785893),q,En={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},Kn=function(){var e=(0,A.Fg)(),o=function l(u){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return x<=10?`
.palette-`.concat(u,"-").concat(x,` {
  background: `).concat(e["".concat(u,"-").concat(x)],`;
}
`).concat(l(u,x+1),`
    `):""},i=function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return u<=13?`
.palette-gray-`.concat(u,` {
  background: `).concat(En[u],`;
}
`).concat(l(u+1),`
    `):""};return(0,n.jsx)(P.xB,{styles:(0,P.iv)(q||(q=p()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,o("blue"),o("purple"),o("cyan"),o("green"),o("magenta"),o("red"),o("volcano"),o("orange"),o("gold"),o("yellow"),o("lime"),o("geekblue"),i())})},Gn=Kn,Fn,ee=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(Fn||(Fn=p()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Qn,te=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(Qn||(Qn=p()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},Vn,An=function(){var a=(0,A.Fg)(),e=a.headerHeight,o=a.margin;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(Vn||(Vn=p()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      html {
        scroll-padding-top: `,`px;
      }
    `])),e+o)})},Hn=t(510274),oe,Zn=function(){var e=(0,A.Fg)(),o=e.antCls,i=e.colorPrimary;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(oe||(oe=p()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,o,o,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,o,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),o,o,o,i,new Hn.C(i).setAlpha(.75).toHex8String(),o,o,e.colorWhite,o,new Hn.C(i).setAlpha(.75).toHexString(),o,o,new Hn.C(i).setAlpha(.75).toHexString(),o,o,o,o,new Hn.C(i).setAlpha(.6).toHexString(),o,o,o)})},le=Zn,se,ce=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(se||(se=p()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},wn,m=function(){var e=(0,A.Fg)(),o=e.antCls,i=e.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(wn||(wn=p()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,o,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,i,e.colorTextSecondary,e.colorText,o,o,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,o,o,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,i,e.colorBgContainer,i,e.green6,e.colorBgContainer,e.purple3,e.purple6,o)})},y=m,r,c=function(){var a=(0,A.Fg)(),e=a.antCls,o=a.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(r||(r=p()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),o,e,a.colorPrimary,o,e)})},h,S=function(){var a=(0,A.Fg)(),e=a.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(h||(h=p()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,e,a.colorLinkHover)})},z,D=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(z||(z=p()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},I,f=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(I||(I=p()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},W,O=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(W||(W=p()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},U,on=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(U||(U=p()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},rn,an="dumi-default-",sn=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(rn||(rn=p()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),an,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,an,a.colorBgElevated,a.colorBgElevated,an,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},H,Cn=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(H||(H=p()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},nn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(te,{}),(0,n.jsx)(An,{}),(0,n.jsx)(le,{}),(0,n.jsx)(ce,{}),(0,n.jsx)(y,{}),(0,n.jsx)(c,{}),(0,n.jsx)(S,{}),(0,n.jsx)(D,{}),(0,n.jsx)(f,{}),(0,n.jsx)(O,{}),(0,n.jsx)(on,{}),(0,n.jsx)(Cn,{}),(0,n.jsx)(Gn,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(sn,{})]})},Q=nn,Dn=t(857278),Sn=t(430932),cn=t(985093),kn=t(115668),In=t(642207),re=t(301210),V=t(13923),vn=t(825035),$n=t(937993),he=t(448118),de=t(938545),_n=t(569980),we=t(391298),ge=t(630770),Yn=t(438199),ue=t(693399),qn="ant-where-checker",fe={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Be(){var a=(0,j.Z)(fe),e=w()(a,1),o=e[0],i=s.useState(!0),l=w()(i,2),u=l[0],x=l[1];return s.useEffect(function(){var g=document.createElement("p");g.className=qn,g.style.position="fixed",g.style.pointerEvents="none",g.style.visibility="hidden",g.style.width="0",document.body.appendChild(g),(0,ue.updateCSS)(`
:where(.`.concat(qn,`) {
  content: "__CHECK__";
}
    `),qn);var C=getComputedStyle(g),v=C.content;x(String(v).includes("CHECK")),document.body.removeChild(g),(0,ue.removeCSS)(qn)},[]),u?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[o.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:o.whereDocUrl,children:o.whereDocTitle})]})})}var je,ae,xe={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},ze=function(){var e=(0,s.useContext)(Yn.Z),o=e.isMobile;return(0,A.kc)(function(i){var l=i.token,u=i.css,x=new Hn.C((0,ge.Z)("#f0f3fa","#fff")).onBackground(l.colorBgContainer).toHexString();return{holder:u(je||(je=p()([`
      background: `,`;
    `])),x),footer:u(ae||(ae=p()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),x,l.colorTextSecondary,l.colorText,o?60:0,o?20:0,l.marginXXL,l.fontSize)}})()},Ze=function(){var e=(0,xn.Z)(),o=(0,j.Z)(xe),i=w()(o,2),l=i[0],u=i[1],x=ze(),g=x.styles,C=e.getLink,v=s.useMemo(function(){var E=u==="cn",N={title:(0,n.jsx)(d._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:E?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:E?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:E?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(d._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(d._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(d._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(d._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(d._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(d._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(d._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(d._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},T={title:(0,n.jsx)(d._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(Dn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(Sn.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(cn.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(kn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(kn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(d._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};E&&T.items.push({icon:(0,n.jsx)(In.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.work_with_us"}),url:C("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:d.rU});var M={title:(0,n.jsx)(d._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(re.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(V.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.change-log"}),url:C("/changelog"),LinkComponent:d.rU},{icon:(0,n.jsx)(vn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.faq"}),url:C("/docs/react/faq"),LinkComponent:d.rU},{icon:(0,n.jsx)($n.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(he.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(de.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(vn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(vn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},R={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(d._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(d._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(d._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(d._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(d._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(d._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(_n.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.theme"}),url:C("/theme-editor"),LinkComponent:d.rU}]};return[N,T,M,R]},[u,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(we.Z,{columns:v,className:g.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:l.owner})]})}),(0,n.jsx)(Be,{})]})},Ee=Ze,Re=t(97857),F=t.n(Re),Le=t(9783),ve=t.n(Le),Ne=t(660532),Fe=t(469181),$e=t(344682),We=t(11739),Ue=t(664095),Ce=t(883458),Me=t(24569),Xe=t(316165),X="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",mn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",hn=function(e){return(0,n.jsx)(Xe.Z,F()(F()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?X:mn})})}))},Wn=hn,Rn=t(562925),zn=t(373638),be,Jn,ye=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.headerHeight,l=e.colorTextHeading,u=e.fontFamily,x=e.mobileMaxWidth;return{logo:o(be||(be=p()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,l,u,i,l,x),title:o(Jn||(Jn=p()([`
      line-height: 32px;
    `])))}}),Ae=function(e){var o=e.isZhCN,i=(0,d.TH)(),l=i.search,u=ye(),x=u.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(d.rU,{to:zn.J1("/",o,l),className:x.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:x.title,children:"Ant Design"})]})})},De=Ae,xo=t(280882),vo=t(963918),pe=t(988872),nt,et,tt,ot,rt=(0,A.kc)(function(a){var e=a.css,o=a.token;return{smallStyle:e(nt||(nt=p()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(et||(et=p()([`
    color: `,`;
  `])),o.colorTextQuaternary),downOutlined:e(tt||(tt=p()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(ot||(ot=p()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),at=function(){var e=rt(),o=e.styles;return(0,n.jsxs)("span",{className:o.smallStyle,children:["(",(0,n.jsx)(d._H,{id:"app.implementation.community"}),")"]})},it=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(at,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(at,{})]}),key:"vue"}]},bo=function(e){var o=e.isRTL,i=rt(),l=i.styles;return(0,n.jsx)(vo.Z,{menu:{items:it()},placement:"bottomRight",children:(0,n.jsxs)(pe.ZP,{size:"small",children:[(0,n.jsx)(d._H,{id:"app.header.menu.more"}),(0,n.jsx)(xo.Z,{className:b()(o?l.downOutlinedRTL:l.downOutlined,l.down)})]})})},yo=bo,wo=t(719632),me=t.n(wo),lt=t(923232),ne=t(472638),st,ct,jo={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},Co=(0,A.kc)(function(a){var e=a.token,o=e.antCls,i=e.iconCls,l=e.fontFamily,u=e.headerHeight,x=e.menuItemBorder,g=e.colorPrimary,C=e.colorText;return{nav:(0,A.iv)(st||(st=p()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),l,o,o,o,40+12*2,u,u,x,C,o,i,o,g,o,o),popoverMenuNav:(0,A.iv)(ct||(ct=p()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),o,o,o,o,o)}}),So=function(a){var e,o,i,l=a.isZhCN,u=a.isMobile,x=a.responsive,g=a.directionText,C=a.onLangChange,v=a.onDirectionChange,E=(0,d.TH)(),N=E.pathname,T=E.search,M=(0,j.Z)(jo),R=w()(M,1),Z=R[0],Y=(0,d.yh)(),$=((e=Y["/docs/blog"])===null||e===void 0||(o=e[0])===null||o===void 0?void 0:o.children)||[],L=Co(),k=L.styles,_=u?"inline":"horizontal",Ln=N.split("/").filter(function(B){return B}).slice(0,-1).join("/"),en=Ln||"home";N.startsWith("/changelog")?en="docs/react":N.startsWith("/docs/resources")&&(en="docs/resources");var Nn,Tn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(d._H,{id:"app.header.lang"}),onClick:C,key:"switch-lang"},{label:g,onClick:v,key:"switch-direction"}].concat(me()(it()));u?Nn=Tn:x==="crowded"&&(Nn=[{label:(0,n.jsx)(Ne.Z,{}),key:"additional",children:me()(Tn)}]);var Un=[{label:(0,n.jsx)(ne.Z,{to:zn.J1("/docs/spec/introduce",l,T),children:Z.design}),key:"docs/spec"},{label:(0,n.jsx)(ne.Z,{to:zn.J1("/docs/react/introduce",l,T),children:Z.development}),key:"docs/react"},{label:(0,n.jsx)(ne.Z,{to:zn.J1("/components/overview/",l,T),children:Z.components}),key:"components"},$.length?{label:(0,n.jsx)(ne.Z,{to:zn.J1($.sort(function(B,dn){return B.frontmatter.date>dn.frontmatter.date?-1:1})[0].link,l,T),children:Z.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(ne.Z,{to:zn.J1("/docs/resources",l,T),children:Z.resources}),key:"docs/resources"},l?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(me()((i=Nn)!==null&&i!==void 0?i:[]));return(0,n.jsx)(lt.Z,{mode:_,selectedKeys:[en],className:k.nav,disabledOverflow:!0,items:Un,style:{borderRight:0}})},dt=t(879587),ut,pt,mt,ht,gt,Se="1.2em",ko=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.colorText,l=e.colorBorder,u=e.colorBgContainer,x=e.colorBgTextHover,g=e.borderRadius,C=e.controlHeight,v=e.motionDurationMid;return{btn:o(ut||(ut=p()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,l,C,C,g,v,v,x,Se,Se,Se),innerDiv:o(pt||(pt=p()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Se,Se),labelStyle:o(mt||(mt=p()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Se,i,i),label1Style:o(ht||(ht=p()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,u),label2Style:o(gt||(gt=p()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),zo=function(e){var o=e.label1,i=e.label2,l=e.tooltip1,u=e.tooltip2,x=e.value,g=e.pure,C=e.onClick,v=ko(),E=v.styles,N=E.btn,T=E.innerDiv,M=E.labelStyle,R=E.label1Style,Z=E.label2Style,Y=(0,n.jsx)("button",{onClick:C,className:N,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[g&&(x===1?o:i),!g&&(0,n.jsxs)("div",{className:T,children:[(0,n.jsx)("span",{className:b()(M,x===1?R:Z),children:o}),(0,n.jsx)("span",{className:b()(M,x===1?Z:R),children:i})]})]})},"lang-button");return l||u?(0,n.jsx)(dt.Z,{title:x===1?l:u,children:Y}):Y},Ke=zo,ft,xt,vt,bt,yt,wt,jt,Ct=1120,St=1200,Eo={cn:{message:"\u8BED\u96C0\u516C\u76CA\u8BA1\u5212\uFF1A\u5927\u5B66\u751F\u8BA4\u8BC1\u6559\u80B2\u90AE\u7BB1\uFF0C\u5373\u53EF\u514D\u8D39\u83B7\u5F97\u8BED\u96C0\u4F1A\u5458\u3002\u8BED\u96C0\uFF0C\u652F\u4ED8\u5B9D\u5320\u5FC3\u6253\u9020\u7684\u5728\u7EBF\u6587\u6863\u5E73\u53F0\u3002",shortMessage:"\u652F\u4ED8\u5B9D\u8BED\u96C0 \xB7 \u5927\u5B66\u751F\u516C\u76CA\u8BA1\u5212\u706B\u70ED\u8FDB\u884C\u4E2D\uFF01",more:"\u4E86\u89E3\u66F4\u591A"}},Lo=(0,A.kc)(function(a){var e=a.token,o=a.css,i="#ced4d9";return{header:o(ft||(ft=p()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,i,i,i),menuRow:o(xt||(xt=p()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:o(vt||(vt=p()([`
      width: 16px;
    `]))),popoverMenu:ve()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:o(bt||(bt=p()([`
      width: 100%;
      background: #daf5eb;
      text-align: center;
      word-break: keep-all;
    `]))),link:o(yt||(yt=p()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:o(wt||(wt=p()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `]))),message:o(jt||(jt=p()([`
      color: rgba(0, 0, 0, 0.88);
    `])))}}),No=function(){var e=(0,j.Z)(Eo),o=w()(e,2),i=o[0],l=o[1],u=(0,d.WF)(),x=u.pkg,g=(0,zn.Is)(),C=(0,s.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),v=w()(C,2),E=v[0],N=v[1],T=(0,s.useContext)(Yn.Z),M=T.direction,R=T.isMobile,Z=T.bannerVisible,Y=T.updateSiteConfig,$=(0,s.useRef)(null),L=(0,d.TH)(),k=L.pathname,_=L.search,Ln=Lo(),en=Ln.styles,Nn=(0,s.useCallback)(function(){N(function(un){return F()(F()({},un),{},{menuVisible:!1})})},[]),Tn=(0,s.useCallback)(function(){N(function(un){return F()(F()({},un),{},{windowWidth:window.innerWidth})})},[]),Un=(0,s.useCallback)(function(){N(function(un){return F()(F()({},un),{},{menuVisible:!0})})},[]),B=(0,s.useCallback)(function(un){N(function(Xn){return F()(F()({},Xn),{},{menuVisible:un})})},[]),dn=function(){Y({direction:M!=="rtl"?"rtl":"ltr"})},bn=function(){Y({bannerVisible:!1}),zn.Fy()&&localStorage.setItem(Rn.ANT_DESIGN_NOT_SHOW_BANNER,ln()().toISOString())};(0,s.useEffect)(function(){Nn()},[L]),(0,s.useEffect)(function(){return Tn(),window.addEventListener("resize",Tn),function(){window.removeEventListener("resize",Tn),$.current&&clearTimeout($.current)}},[]);var Pn=(0,s.useCallback)(function(un){var Xn=window.location.href,He=window.location.pathname;if(/overview/.test(He)&&/0?[1-39][0-3]?x/.test(un)){window.location.href=Xn.replace(window.location.origin,un).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(un)?"":"/react","/introduce")).replace(/\/$/,"");return}var qe=new URL(Xn.replace(window.location.origin,un));qe.host.includes("antgroup")&&(window.location.href="".concat(qe.href.replace(/\/$/,""),"/")),window.location.href=qe.href.replace(/\/$/,"")},[]),Bn=(0,s.useCallback)(function(){var un="".concat(window.location.protocol,"//"),Xn=window.location.href.slice(un.length);zn.Fy()&&localStorage.setItem("locale",zn.KE(k)?"en-US":"zh-CN"),window.location.href=un+Xn.replace(window.location.pathname,zn.J1(k,!zn.KE(k),_).pathname)},[L]),Je=(0,s.useMemo)(function(){return M!=="rtl"?"RTL":"LTR"},[M]),K=(0,s.useMemo)(function(){return M==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[M]),J=E.menuVisible,gn=E.windowWidth,ke=E.searching,po=F()(ve()({},x.version,x.version),g==null?void 0:g.docVersions),Pr=Object.keys(po).map(function(un){return{value:po[un],label:un}}),mo=["","index","index-cn"].includes(k),ho=l==="cn",Br=M==="rtl",Qe=null;gn<Ct?Qe="crowded":gn<St&&(Qe="narrow");var Mr=b()(en.header,"clearfix",{"home-header":mo}),_e={isZhCN:ho,isRTL:Br},go=(0,n.jsx)(So,F()(F()({},_e),{},{responsive:Qe,isMobile:R,directionText:Je,onLangChange:Bn,onDirectionChange:dn}),"nav"),Pe=[go,(0,n.jsx)(Fe.Z,{className:"version",size:"small",defaultValue:x.version,onChange:Pn,dropdownStyle:K,popupMatchSelectWidth:!1,getPopupContainer:function(Xn){return Xn.parentNode},options:Pr},"version"),(0,n.jsx)(yo,F()({},_e),"more"),(0,n.jsx)(Ke,{onClick:Bn,value:zn.KE(k)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Ke,{onClick:dn,value:M==="rtl"?2:1,label1:(0,n.jsx)(Wn,{className:en.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Wn,{className:en.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Ke,{value:1,label1:(0,n.jsx)(re.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];gn<Ct?Pe=ke?[]:[go]:gn<St&&(Pe=ke?[]:Pe);var fo=mo?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Mr,children:[R&&(0,n.jsx)($e.Z,{overlayClassName:en.popoverMenu,placement:"bottomRight",content:Pe,trigger:"click",open:J,arrow:{arrowPointAtCenter:!0},onOpenChange:B,children:(0,n.jsx)(Ne.Z,{className:"nav-phone-icon",onClick:Un})}),ho&&Z&&(0,n.jsx)(We.Z,{className:en.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:en.icon,src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),(0,n.jsx)("span",{className:en.message,children:R?i.shortMessage:i.message}),(0,n.jsx)("a",{className:en.link,href:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd",target:"_blank",rel:"noreferrer",onClick:function(){var Xn,He;(Xn=(He=window).gtag)===null||Xn===void 0||Xn.call(He,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd"})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:bn}),(0,n.jsxs)(Ue.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(Ce.Z,F()(F()({},fo[0]),{},{children:(0,n.jsx)(De,F()(F()({},_e),{},{location:L}))})),(0,n.jsxs)(Ce.Z,F()(F()({},fo[1]),{},{className:en.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Me.ZP,{})}),!R&&Pe]}))]})]})},To=No,Ar=t(945462),Po=t(377376),Ie=t(185209),Bo=function(){var e=(0,d.eL)(),o=(0,s.useMemo)(function(){var x;if(!e.frontmatter.subtitle&&!e.frontmatter.title)x="404 Not Found - Ant Design";else{var g;x="".concat(e.frontmatter.subtitle||""," ").concat(((g=e.frontmatter)===null||g===void 0?void 0:g.title)||""," - Ant Design")}var C=e.frontmatter.description||"";return[x,C]},[e]),i=w()(o,2),l=i[0],u=i[1];return(0,n.jsxs)(d.ql,{children:[(0,n.jsx)("title",{children:l}),(0,n.jsx)("meta",{property:"og:title",content:l}),u&&(0,n.jsx)("meta",{name:"description",content:u})]})},kt=Bo,zt=t(148050),Mo=t(823493),Ao=t.n(Mo),Do=t(468990),Io=t(658192),Et,Lt,Nt,Tt=["scroll","resize"],Oo=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.boxShadowSecondary,l=e.antCls;return{affixTabs:o(Et||(Et=p()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,l,l,l),affixTabsFixed:o(Lt||(Lt=p()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:o(Nt||(Nt=p()([`
      text-transform: capitalize;
    `])))}}),Pt=32,Ho=function(){var e=s.useRef(null),o=s.useRef([]),i=s.useState(!1),l=w()(i,2),u=l[0],x=l[1],g=s.useState(null),C=w()(g,2),v=C[0],E=C[1],N=Oo(),T=N.styles,M=T.affixTabs,R=T.affixTabsFixed,Z=T.span;function Y(L){var k=document.getElementById(L);if(k){var _=k.offsetTop-e.current.offsetHeight-Pt;(0,Io.Z)(_)}}s.useEffect(function(){o.current=Array.from(document.querySelectorAll("h2[id]")).map(function(L){var k=L.id;return k}),x(!0)},[]),s.useEffect(function(){var L=decodeURIComponent((location.hash||"").slice(1));L&&Y(L)},[u]);var $=s.useMemo(function(){function L(){for(var k=window,_=k.scrollY,Ln=e.current.offsetHeight,en=o.current.length-1;en>=0;en-=1){var Nn=o.current[en],Tn=document.getElementById(Nn),Un=Tn.offsetTop-Ln-Pt;if(Un<=_){E(Nn);return}}E(null)}return Ao()(L)},[]);return s.useEffect(function(){return Tt.forEach(function(L){return window.addEventListener(L,$)}),$(),function(){Tt.forEach(function(L){return window.removeEventListener(L,$)})}},[]),(0,n.jsx)("div",{className:b()(M,v&&R),ref:e,children:(0,n.jsx)(Do.Z,{activeKey:v,onChange:Y,items:o.current.map(function(L){return{key:L,label:(0,n.jsx)("span",{className:Z,children:L.replace(/-/g," ")})}})})})},Zo=Ho,Bt,Mt,At,Dt=40,Oe=1208,Ge=24,Ro=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.antCls;return{resourcePage:o(Bt||(Bt=p()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),Oe),resourceContent:o(Mt||(Mt=p()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Dt,Oe,Ge,i),banner:o(At||(At=p()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Dt,Oe,Oe,Ge,Ge)}}),Fo=function(e){var o,i=e.children,l=Ro(),u=l.styles,x=(0,d.eL)();return(0,n.jsx)(tn.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Po.Z,{children:[(0,n.jsx)(kt,{}),(0,n.jsxs)("div",{id:"resources-page",className:u.resourcePage,children:[(0,n.jsx)(Zo,{}),(0,n.jsxs)("div",{className:u.banner,children:[(0,n.jsxs)(Ie.Z.Title,{style:{fontSize:30},children:[(o=x.frontmatter)===null||o===void 0?void 0:o.title,(0,n.jsx)(zt.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:x.frontmatter.filename})]}),(0,n.jsx)("section",{children:x.frontmatter.description})]}),(0,n.jsx)("div",{className:u.resourceContent,children:i}),(0,n.jsx)(Ee,{})]})]})})},$o=Fo,Wo=t(720841),Uo=t(538294),It=t(575054),Ot=t(796586),Xo=t(605071),Ve=t(209269),Ko=t(217187),Te=t(618073),Ht=t(206171),Go=t(844183),Vo=t(566254),Yo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,d.yh)(),i=(0,xn.Z)(),l=i.pathname,u=i.search,x=(0,d.tx)(),g=e.before,C=e.after,v=(0,s.useMemo)(function(){var E,N=me()(x!=null?x:[]);if(l.startsWith("/docs/spec")){var T=N.splice(0,1);N.push.apply(N,me()(T))}if(l.startsWith("/docs/react")){var M,R=(M=Object.entries(o).find(function(L){var k=w()(L,1),_=k[0];return _.startsWith("/changelog")}))===null||M===void 0?void 0:M[1];R&&N.splice(1,0,R[0])}if(l.startsWith("/changelog")){var Z,Y=(Z=Object.entries(o).find(function(L){var k=w()(L,1),_=k[0];return _.startsWith("/docs/react")}))===null||Z===void 0?void 0:Z[1];Y&&(N.unshift(Y[0]),N.push.apply(N,me()(Y.slice(1))))}var $=function(k){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return k&&_&&(0,n.jsx)(Go.Z,{color:k==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:k.replace("VERSION",Vo.Z)})};return(E=N==null?void 0:N.reduce(function(L,k){if(k!=null&&k.title)if(l.startsWith("/docs/spec")){var _,Ln,en=k.children.reduce(function(B,dn){var bn,Pn,Bn=(bn=(Pn=dn.frontmatter)===null||Pn===void 0?void 0:Pn.type)!==null&&bn!==void 0?bn:"default";return B[Bn]||(B[Bn]=[]),B[Bn].push(dn),B},{}),Nn=[];Nn.push.apply(Nn,me()((_=(Ln=en.default)===null||Ln===void 0?void 0:Ln.map(function(B){return{label:(0,n.jsxs)(ne.Z,{to:"".concat(B.link).concat(u),children:[g,B==null?void 0:B.title,C]}),key:B.link.replace(/(-cn$)/g,"")}}))!==null&&_!==void 0?_:[])),Object.entries(en).forEach(function(B){var dn=w()(B,2),bn=dn[0],Pn=dn[1];bn!=="default"&&Nn.push({type:"group",label:bn,key:bn,children:Pn==null?void 0:Pn.map(function(Bn){return{label:(0,n.jsxs)(ne.Z,{to:"".concat(Bn.link).concat(u),children:[g,Bn==null?void 0:Bn.title,C]}),key:Bn.link.replace(/(-cn$)/g,"")}})})}),L.push({label:k==null?void 0:k.title,key:k==null?void 0:k.title,children:Nn})}else{var Tn;L.push({type:"group",label:k==null?void 0:k.title,key:k==null?void 0:k.title,children:(Tn=k.children)===null||Tn===void 0?void 0:Tn.map(function(B){var dn,bn;return{label:(0,n.jsxs)(ne.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[g,(0,n.jsx)("span",{children:B==null?void 0:B.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(dn=B.frontmatter)===null||dn===void 0?void 0:dn.subtitle},"chinese"),$((bn=B.frontmatter)===null||bn===void 0?void 0:bn.tag,!g&&!C),C]}),key:B.link.replace(/(-cn$)/g,"")}})})}else{var Un=k.children||[];Un.every(function(B){var dn;return B==null||(dn=B.frontmatter)===null||dn===void 0?void 0:dn.date})&&Un.sort(function(B,dn){var bn,Pn;return((bn=B.frontmatter)===null||bn===void 0?void 0:bn.date)>((Pn=dn.frontmatter)===null||Pn===void 0?void 0:Pn.date)?-1:1}),L.push.apply(L,me()(Un.map(function(B){return{label:(0,n.jsxs)(ne.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[g,B==null?void 0:B.title,$(B.frontmatter.tag,!g&&!C),C]}),key:B.link.replace(/(-cn$)/g,"")}})))}return L},[]))!==null&&E!==void 0?E:[]},[x,o,l,u,e]);return[v,l]},Zt=Yo,Rt,Ft,$t,Wt,Jo=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.colorSplit,l=e.iconCls,u=e.fontSizeIcon;return{prevNextNav:o(Rt||(Rt=p()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),i),pageNav:o(Ft||(Ft=p()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),l,u),prevNav:o($t||($t=p()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:o(Wt||(Wt=p()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Qo=function a(e){return Array.isArray(e)?e.reduce(function(o,i){if(!i)return o;if("children"in i&&i.children){var l;return o.concat((l=a(i.children))!==null&&l!==void 0?l:[])}return o.concat(i)},[]):null},_o=function(e){var o=e.rtl,i=Jo(),l=i.styles,u={className:"footer-nav-icon-before"},x={className:"footer-nav-icon-after"},g=o?(0,n.jsx)(Te.Z,F()({},u)):(0,n.jsx)(Ht.Z,F()({},u)),C=o?(0,n.jsx)(Ht.Z,F()({},x)):(0,n.jsx)(Te.Z,F()({},x)),v=Zt({before:g,after:C}),E=w()(v,2),N=E[0],T=E[1],M=(0,s.useContext)(Yn.Z),R=M.isMobile,Z=(0,s.useMemo)(function(){var k=Qo(N);if(!k)return[null,null];var _=-1;return k.forEach(function(Ln,en){Ln&&Ln.key===T&&(_=en)}),[k[_-1],k[_+1]]},[N,T]),Y=w()(Z,2),$=Y[0],L=Y[1];return R?null:(0,n.jsxs)("section",{className:l.prevNextNav,children:[$&&s.cloneElement($.label,{className:b()(l.pageNav,l.prevNav,$.className)}),L&&s.cloneElement(L.label,{className:b()(l.pageNav,l.nextNav,L.className)})]})},qo=_o,nr=t(302281),er=t(15060),tr=t(889812),Ut,Xt,Kt,or=(0,A.kc)(function(a){var e=a.token,o=a.css;return{history:o(Ut||(Ut=p()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:o(Xt||(Xt=p()([`
    // white-space: pre;
  `]))),ref:o(Kt||(Kt=p()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),rr={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function ar(a){var e=a.changelog,o=e===void 0?"":e,i=a.refs,l=i===void 0?[]:i,u=a.styles,x=s.useMemo(function(){for(var g=[],C=!1,v="",E=0;E<o.length;E+=1){var N=o[E];if(N!=="`")v+=N;else{var T=v;C&&(T=(0,n.jsx)("code",{children:T})),g.push(T),v="",C=!C}}return g.push(v),g},[o]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:x}),l==null?void 0:l.map(function(g){var C;return(0,n.jsxs)("a",{className:u.ref,href:g,target:"_blank",rel:"noreferrer",children:["#",(C=g.match(/^.*\/(\d+)$/))===null||C===void 0?void 0:C[1]]},g)})]})}function ir(a,e){var o=(0,tr.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return t.e(2104).then(t.t.bind(t,332104,19))}}:{key:"component-changelog-en",request:function(){return t.e(5212).then(t.t.bind(t,365212,19))}});return(0,s.useMemo)(function(){var i=a.replace(/-/g,""),l=Object.keys(o).find(function(u){return u.toLowerCase()===i.toLowerCase()});return o[l]},[o,a])}function lr(a){var e,o=a.pathname,i=o===void 0?"":o,l=(0,j.Z)(rr),u=w()(l,2),x=u[0],g=u[1],C=s.useState(!1),v=w()(C,2),E=v[0],N=v[1],T=or(),M=T.styles,R=((e=i.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",Z=ir(R,g),Y=s.useMemo(function(){var $={};return Z==null||Z.forEach(function(L){$[L.version]=$[L.version]||[],$[L.version].push(L)}),Object.keys($).map(function(L){var k=$[L];return{children:(0,n.jsxs)(Ie.Z,{children:[(0,n.jsx)("h4",{children:L}),(0,n.jsx)("ul",{children:k.map(function(_,Ln){return(0,n.jsx)("li",{className:M.li,children:(0,n.jsx)(ar,F()(F()({},_),{},{styles:M}))},Ln)})})]})}})},[Z]);return!Z||!Z.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(pe.ZP,{className:M.history,icon:(0,n.jsx)(V.Z,{}),onClick:function(){N(!0)},children:x.changelog}),(0,n.jsx)(nr.Z,{title:x.changelog,extra:(0,n.jsx)(ne.Z,{style:{fontSize:14},to:"/changelog".concat(g==="cn"?"-cn":""),children:x.full}),open:E,width:"40vw",onClose:function(){N(!1)},destroyOnClose:!0,children:(0,n.jsx)(er.Z,{items:Y})})]})}var sr=function(a){return(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(lr,F()({},a))})},cr=t(524229),Gt=t(211646),dr=t(294047),Vt=t(315816),ur=function(e){var o=e.className,i=e.style;return(0,n.jsx)("svg",{className:o,style:i,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Yt=ur,Jt,Qt,_t,qt,no,eo,to,Ye="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",pr=(0,A.kc)(function(a){var e=a.token,o=a.css;return{card:o(Jt||(Jt=p()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:o(Qt||(Qt=p()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:o(_t||(_t=p()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:o(qt||(qt=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:o(no||(no=p()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:o(eo||(eo=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:o(to||(to=p()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),mr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},hr=function(e){var o=e.zhihuLink,i=e.yuqueLink,l=e.juejinLink,u=(0,j.Z)(mr),x=w()(u,1),g=x[0],C=pr(),v=C.styles,E=v.card,N=v.bigTitle,T=v.cardBody,M=v.left,R=v.title,Z=v.subTitle,Y=v.btn;return!o&&!i&&!l?null:(0,n.jsxs)(dr.Z,{className:E,bordered:!1,children:[(0,n.jsx)("h3",{className:N,children:g.bigTitle}),o&&(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(kn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(pe.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:g.zhiHu})]})]})]}),(0,n.jsx)(pe.ZP,{type:"primary",className:Y,icon:(0,n.jsx)(kn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:o,children:g.buttonText})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Vt.Z,{}),(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(Gt.Z,{className:"logo yuque-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(pe.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:g.yuQue})]})]})]}),(0,n.jsx)(pe.ZP,{type:"primary",className:Y,icon:(0,n.jsx)(Gt.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:i,children:g.buttonText})]})]}),l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Vt.Z,{}),(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(Yt,{className:"logo juejin-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(pe.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:g.junjin})]})]})]}),(0,n.jsx)(pe.ZP,{type:"primary",className:Y,icon:(0,n.jsx)(Yt,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:l,children:g.buttonText})]})]})]})},gr=hr,oo,ro,ao,io,lo,fr=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.antCls;return{contributorsList:o(oo||(oo=p()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),i,i,e.motionDurationSlow,i),listMobile:o(ro||(ro=p()([`
      margin: 1em 0 !important;
    `]))),toc:o(ao||(ao=p()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),i,i),tocWrapper:o(io||(io=p()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:o(lo||(lo=p()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),xr=function(e){var o=e.num,i=o===void 0?3:o;return(0,n.jsx)("li",{children:Array.from({length:i}).map(function(l,u){return(0,n.jsx)(It.Z.Avatar,{size:"small",active:!0,style:{marginLeft:u===0?0:-8}},u)})})},vr=function(e){var o=e.name,i=e.avatar,l=(0,s.useState)(!0),u=w()(l,2),x=u[0],g=u[1],C=(0,s.useState)(!1),v=w()(C,2),E=v[0],N=v[1];return(0,s.useLayoutEffect)(function(){var T=new Image;T.src=i,T.onload=function(){return g(!1)},T.onerror=function(){return N(!0)}},[]),E?null:x?(0,n.jsx)(It.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(Ot.C,{size:"small",src:i,alt:o,children:o})},br=function(e){var o,i,l,u,x,g,C=e.children,v=(0,d.eL)(),E=(0,d.zh)(),N=(0,xn.Z)(),T=N.pathname,M=N.hash,R=(0,d.YB)(),Z=R.formatMessage,Y=fr(),$=Y.styles,L=(0,A.Fg)(),k=(0,s.useContext)(Yn.Z),_=k.direction,Ln=k.isMobile,en=(0,Ko.Z)(!1),Nn=w()(en,2),Tn=Nn[0],Un=Nn[1],B=(0,s.useMemo)(function(){var K;return((K=v.toc)===null||K===void 0?void 0:K.filter(function(J){return J._debug_demo}).map(function(J){return J.id}))||[]},[v]),dn=B.includes(M.slice(1));(0,s.useLayoutEffect)(function(){Un(dn)},[]);var bn=(0,s.useMemo)(function(){return{showDebug:Tn,setShowDebug:Un}},[Tn,B]),Pn=(0,s.useMemo)(function(){return((E==null?void 0:E.toc)||v.toc).reduce(function(K,J){if(J.depth===2)K.push(F()({},J));else if(J.depth===3){var gn=K[K.length-1];gn&&(gn.children=gn.children||[],gn.children.push(F()({},J)))}return K},[])},[E==null?void 0:E.toc,v.toc]),Bn=_==="rtl",Je=(0,s.useMemo)(function(){var K=v.frontmatter.author;return K?typeof K=="string"?K.split(",").map(function(J){return{name:J,avatar:"https://github.com/".concat(J,".png")}}):Array.isArray(K)?K:[]:[]},[v.frontmatter.author]);return(0,n.jsx)(cr.Z.Provider,{value:bn,children:(0,n.jsxs)(Ce.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!v.frontmatter.toc&&(0,n.jsx)("section",{className:$.tocWrapper,children:(0,n.jsx)(Xo.Z,{className:$.toc,affix:!1,targetOffset:L.marginXXL,showInkInFixed:!0,items:Pn.map(function(K){var J;return{href:"#".concat(K.id),title:K.title,key:K.id,children:(J=K.children)===null||J===void 0?void 0:J.filter(function(gn){return Tn||!B.includes(gn.id)}).map(function(gn){return{key:gn.id,href:"#".concat(gn.id),title:(0,n.jsx)("span",{className:b()(B.includes(gn.id)&&"toc-debug"),children:gn==null?void 0:gn.title})}})}})})}),(0,n.jsxs)("article",{className:b()($.articleWrapper,{rtl:Bn}),children:[(o=v.frontmatter)!==null&&o!==void 0&&o.title?(0,n.jsxs)(Ie.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Ve.Z,{size:"small",children:[(i=v.frontmatter)===null||i===void 0?void 0:i.title,(l=v.frontmatter)===null||l===void 0?void 0:l.subtitle,!T.startsWith("/components/overview")&&(0,n.jsx)(zt.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:v.frontmatter.filename})]}),T.startsWith("/components/")&&(0,n.jsx)(sr,{pathname:T})]}):null,v.frontmatter.date||v.frontmatter.author?(0,n.jsx)(Ie.Z.Paragraph,{children:(0,n.jsxs)(Ve.Z,{children:[v.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Wo.Z,{})," ",ln()(v.frontmatter.date).format("YYYY-MM-DD")]}),Je.map(function(K){return(0,n.jsx)("a",{href:"https://github.com/".concat(K.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Ve.Z,{size:3,children:[(0,n.jsx)(vr,{name:K.name,avatar:K.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",K.name]})]})},K.name)})]})}):null,!v.frontmatter.__autoDescription&&v.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:C}),(((u=v.frontmatter)===null||u===void 0?void 0:u.zhihu_url)||((x=v.frontmatter)===null||x===void 0?void 0:x.yuque_url)||((g=v.frontmatter)===null||g===void 0?void 0:g.juejin_url))&&(0,n.jsx)(gr,{zhihuLink:v.frontmatter.zhihu_url,yuqueLink:v.frontmatter.yuque_url,juejinLink:v.frontmatter.juejin_url}),v.frontmatter.filename&&(0,n.jsx)(Uo.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:b()($.contributorsList,ve()({},$.listMobile,Ln)),fileName:v.frontmatter.filename,renderItem:function(J,gn){var ke;return!J||gn?(0,n.jsx)(xr,{}):(ke=J.username)!==null&&ke!==void 0&&ke.includes("github-actions")?null:(0,n.jsx)(dt.Z,{mouseEnterDelay:.3,title:"".concat(Z({id:"app.content.contributors"}),": ").concat(J.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(J.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(Ot.C,{size:"small",src:J.url,alt:J.username,children:J.username})})})},J.username)}})]}),(0,n.jsx)(qo,{rtl:Bn}),(0,n.jsx)(Ee,{})]})})},yr=br,wr=t(650010),so,co,jr=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.antCls,l=e.fontFamily,u=e.colorSplit;return{asideContainer:o(so||(so=p()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),l,i,i,i,i,i,i,u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:o(co||(co=p()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),Cr=function(){var e=(0,d.tx)(),o=(0,s.useContext)(Yn.Z),i=o.isMobile,l=o.theme,u=jr(),x=u.styles,g=Zt(),C=w()(g,2),v=C[0],E=C[1],N=l.includes("dark"),T=(0,A.Fg)(),M=T.colorBgContainer,R=(0,n.jsx)(tn.ZP,{theme:{components:{Menu:{itemBg:M,darkItemBg:M}}},children:(0,n.jsx)(lt.Z,{items:v,inlineIndent:30,className:x.asideContainer,mode:"inline",theme:N?"dark":"light",selectedKeys:[E],defaultOpenKeys:e==null?void 0:e.map(function(Z){var Y=Z.title;return Y}).filter(function(Z){return Z})})});return i?(0,n.jsx)(wr.Z,{children:R},"Mobile-menu"):(0,n.jsx)(Ce.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:x.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:R})})},Sr=Cr,uo,kr=(0,A.kc)(function(a){var e=a.css,o=a.token;return{main:e(uo||(uo=p()([`
    display: flex;
    margin-top: `,`px;
  `])),o.contentMarginTop)}}),zr=function(e){var o=e.children,i=kr(),l=i.styles;return(0,n.jsxs)("main",{className:l.main,children:[(0,n.jsx)(kt,{}),(0,n.jsx)(Sr,{}),(0,n.jsx)(yr,{children:o})]})},Er=zr,Lr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Nr=function(){var e=(0,d.pC)(),o=(0,xn.Z)(),i=o.pathname,l=o.search,u=(0,j.Z)(Lr),x=w()(u,2),g=x[0],C=x[1],v=(0,s.useRef)(null),E=(0,s.useContext)(Yn.Z),N=E.direction;(0,s.useLayoutEffect)(function(){C==="cn"?ln().locale("zh-cn"):ln().locale("en")},[]),(0,s.useEffect)(function(){var M=document.getElementById("nprogress-style");M&&(v.current=setTimeout(function(){var R;(R=M.parentNode)===null||R===void 0||R.removeChild(M)},0))},[]),(0,s.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+l)},[o]);var T=(0,s.useMemo)(function(){return["","/"].some(function(M){return M===i})||["/index"].some(function(M){return i.startsWith(M)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(Ee,{})]}):i.startsWith("/docs/resource")?(0,n.jsx)($o,{children:e}):i.startsWith("/theme-editor")?e:(0,n.jsx)(Er,{children:e})},[i,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:C==="cn"?"zh-CN":C,"data-direction":N,className:b()({rtl:N==="rtl"})}),(0,n.jsx)("title",{children:g==null?void 0:g.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:g.description}),(0,n.jsx)("meta",{property:"og:title",content:g==null?void 0:g.title}),(0,n.jsx)("meta",{property:"og:description",content:g.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(tn.ZP,{direction:N,locale:C==="cn"?G.Z:void 0,children:[(0,n.jsx)(Q,{}),(0,n.jsx)(To,{}),T]})]})},Tr=Nr},647727:function(ie,yn,t){t.d(yn,{Z:function(){return pn.Z}});var pn=t(332231)},605071:function(ie,yn,t){t.d(yn,{Z:function(){return m}});var pn=t(97857),w=t.n(pn),fn=t(9783),b=t.n(fn),On=t(719632),ln=t.n(On),jn=t(805574),d=t.n(jn),s=t(667294),G=t(294184),tn=t.n(G),j=t(656790),xn=t(517423),Mn=t(982673),p=t(658192),P=t(252901),A=t(73287),n=s.createContext(void 0),q=n,En=t(785893),Kn=function(r){var c=r.href,h=r.title,S=r.prefixCls,z=r.children,D=r.className,I=r.target,f=r.replace,W=s.useContext(q),O=W||{},U=O.registerLink,on=O.unregisterLink,rn=O.scrollTo,an=O.onClick,sn=O.activeLink,H=O.direction;s.useEffect(function(){return U==null||U(c),function(){on==null||on(c)}},[c]);var Cn=function(V){f&&(V.preventDefault(),window.location.replace(c)),an==null||an(V,{title:h,href:c}),rn==null||rn(c)};if(!1)var nn;var Q=s.useContext(A.E_),Dn=Q.getPrefixCls,Sn=Dn("anchor",S),cn=sn===c,kn=tn()("".concat(Sn,"-link"),D,b()({},"".concat(Sn,"-link-active"),cn)),In=tn()("".concat(Sn,"-link-title"),b()({},"".concat(Sn,"-link-title-active"),cn));return(0,En.jsxs)("div",{className:kn,children:[(0,En.jsx)("a",{className:In,href:c,title:typeof h=="string"?h:"",target:I,onClick:Cn,children:h}),H!=="horizontal"?z:null]})},Gn=Kn,Fn=t(548073),ee=t(141035),Qn=t(986943),te=function(r){var c,h,S=r.componentCls,z=r.holderOffsetBlock,D=r.motionDurationSlow,I=r.lineWidthBold,f=r.colorPrimary,W=r.lineType,O=r.colorSplit;return b()({},"".concat(S,"-wrapper"),(h={marginBlockStart:-z,paddingBlockStart:z},b()(h,S,w()(w()({},(0,Fn.Wf)(r)),{},b()({position:"relative",paddingInlineStart:I},"".concat(S,"-link"),(c={paddingBlock:r.linkPaddingBlock,paddingInline:"".concat(r.linkPaddingInlineStart,"px 0"),"&-title":w()(w()({},Fn.vS),{},{position:"relative",display:"block",marginBlockEnd:r.anchorTitleBlock,color:r.colorText,transition:"all ".concat(r.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},b()(c,"&-active > ".concat(S,"-link-title"),{color:r.colorPrimary}),b()(c,"".concat(S,"-link"),{paddingBlock:r.anchorPaddingBlockSecondary}),c)))),b()(h,"&:not(".concat(S,"-wrapper-horizontal)"),b()({},S,b()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(I,"px ").concat(W," ").concat(O),content:'" "'}},"".concat(S,"-ink"),b()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(D," ease-in-out"),width:I,backgroundColor:f},"&".concat(S,"-ink-visible"),{display:"inline-block"})))),b()(h,"".concat(S,"-fixed ").concat(S,"-ink ").concat(S,"-ink"),{display:"none"}),h))},Vn=function(r){var c,h=r.componentCls,S=r.motionDurationSlow,z=r.lineWidthBold,D=r.colorPrimary;return b()({},"".concat(h,"-wrapper-horizontal"),b()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(r.lineType," ").concat(r.colorSplit),content:'" "'}},h,(c={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},b()(c,"".concat(h,"-link:first-of-type"),{paddingInline:0}),b()(c,"".concat(h,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(S," ease-in-out, width ").concat(S," ease-in-out"),height:z,backgroundColor:D}),c)))},An=(0,ee.Z)("Anchor",function(y){var r=y.fontSize,c=y.fontSizeLG,h=y.paddingXXS,S=(0,Qn.TS)(y,{holderOffsetBlock:h,anchorPaddingBlockSecondary:h/2,anchorTitleBlock:r/14*3,anchorBallSize:c/2});return[te(S),Vn(S)]},function(y){return{linkPaddingBlock:y.paddingXXS,linkPaddingInlineStart:y.padding}});function Hn(){return window}function oe(y,r){if(!y.getClientRects().length)return 0;var c=y.getBoundingClientRect();return c.width||c.height?r===window?(r=y.ownerDocument.documentElement,c.top-r.clientTop):c.top-r.getBoundingClientRect().top:c.top}var Zn=/#([\S ]+)$/,le=function(r){var c,h,S=r.rootClassName,z=r.anchorPrefixCls,D=r.className,I=r.style,f=r.offsetTop,W=r.affix,O=W===void 0?!0:W,U=r.showInkInFixed,on=U===void 0?!1:U,rn=r.children,an=r.items,sn=r.direction,H=sn===void 0?"vertical":sn,Cn=r.bounds,nn=r.targetOffset,Q=r.onClick,Dn=r.onChange,Sn=r.getContainer,cn=r.getCurrentAnchor,kn=r.replace;if(!1)var In;var re=s.useState([]),V=d()(re,2),vn=V[0],$n=V[1],he=s.useState(null),de=d()(he,2),_n=de[0],we=de[1],ge=s.useRef(_n),Yn=s.useRef(null),ue=s.useRef(null),qn=s.useRef(!1),fe=s.useContext(A.E_),Be=fe.direction,je=fe.getTargetContainer,ae=fe.anchor,xe=(c=Sn!=null?Sn:je)!==null&&c!==void 0?c:Hn,ze=JSON.stringify(vn),Ze=(0,j.zX)(function(X){vn.includes(X)||$n(function(mn){return[].concat(ln()(mn),[X])})}),Ee=(0,j.zX)(function(X){vn.includes(X)&&$n(function(mn){return mn.filter(function(hn){return hn!==X})})}),Re=function(){var mn,hn=(mn=Yn.current)===null||mn===void 0?void 0:mn.querySelector(".".concat(z,"-link-title-active"));if(hn&&ue.current){var Wn=ue.current.style,Rn=H==="horizontal";Wn.top=Rn?"":"".concat(hn.offsetTop+hn.clientHeight/2,"px"),Wn.height=Rn?"":"".concat(hn.clientHeight,"px"),Wn.left=Rn?"".concat(hn.offsetLeft,"px"):"",Wn.width=Rn?"".concat(hn.clientWidth,"px"):"",Rn&&(0,xn.Z)(hn,{scrollMode:"if-needed",block:"nearest"})}},F=function(mn){var hn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Wn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,Rn=[],zn=xe();if(mn.forEach(function(Jn){var ye=Zn.exec(Jn==null?void 0:Jn.toString());if(ye){var Ae=document.getElementById(ye[1]);if(Ae){var De=oe(Ae,zn);De<hn+Wn&&Rn.push({link:Jn,top:De})}}}),Rn.length){var be=Rn.reduce(function(Jn,ye){return ye.top>Jn.top?ye:Jn});return be.link}return""},Le=(0,j.zX)(function(X){if(ge.current!==X){var mn=typeof cn=="function"?cn(X):X;we(mn),ge.current=mn,Dn==null||Dn(X)}}),ve=s.useCallback(function(){if(!qn.current){var X=F(vn,nn!==void 0?nn:f||0,Cn);Le(X)}},[ze,nn,f]),Ne=s.useCallback(function(X){Le(X);var mn=Zn.exec(X);if(mn){var hn=document.getElementById(mn[1]);if(hn){var Wn=xe(),Rn=(0,Mn.Z)(Wn,!0),zn=oe(hn,Wn),be=Rn+zn;be-=nn!==void 0?nn:f||0,qn.current=!0,(0,p.Z)(be,{getContainer:xe,callback:function(){qn.current=!1}})}}},[nn,f]),Fe=tn()(S,"".concat(z,"-wrapper"),(h={},b()(h,"".concat(z,"-wrapper-horizontal"),H==="horizontal"),b()(h,"".concat(z,"-rtl"),Be==="rtl"),h),D,ae==null?void 0:ae.className),$e=tn()(z,b()({},"".concat(z,"-fixed"),!O&&!on)),We=tn()("".concat(z,"-ink"),b()({},"".concat(z,"-ink-visible"),_n)),Ue=w()(w()({maxHeight:f?"calc(100vh - ".concat(f,"px)"):"100vh"},ae==null?void 0:ae.style),I),Ce=function X(mn){return Array.isArray(mn)?mn.map(function(hn){return(0,s.createElement)(Gn,w()(w()({replace:kn},hn),{},{key:hn.key}),H==="vertical"&&X(hn.children))}):null},Me=(0,En.jsx)("div",{ref:Yn,className:Fe,style:Ue,children:(0,En.jsxs)("div",{className:$e,children:[(0,En.jsx)("span",{className:We,ref:ue}),"items"in r?Ce(an):rn]})});s.useEffect(function(){var X=xe();return ve(),X==null||X.addEventListener("scroll",ve),function(){X==null||X.removeEventListener("scroll",ve)}},[ze]),s.useEffect(function(){typeof cn=="function"&&Le(cn(ge.current||""))},[cn]),s.useEffect(function(){Re()},[H,cn,ze,_n]);var Xe=s.useMemo(function(){return{registerLink:Ze,unregisterLink:Ee,scrollTo:Ne,activeLink:_n,onClick:Q,direction:H}},[_n,Q,Ne,H]);return(0,En.jsx)(q.Provider,{value:Xe,children:O?(0,En.jsx)(P.Z,{offsetTop:f,target:xe,children:Me}):Me})},se=function(r){var c=r.prefixCls,h=r.rootClassName,S=s.useContext(A.E_),z=S.getPrefixCls,D=z("anchor",c),I=An(D),f=d()(I,2),W=f[0],O=f[1];return W((0,En.jsx)(le,w()(w()({},r),{},{rootClassName:tn()(O,h),anchorPrefixCls:D})))},ce=se,wn=ce;wn.Link=Gn;var m=wn},302281:function(ie,yn,t){t.d(yn,{Z:function(){return ce}});var pn=t(97857),w=t.n(pn),fn=t(9783),b=t.n(fn),On=t(805574),ln=t.n(On),jn=t(513769),d=t.n(jn),s=t(667294),G=t(294184),tn=t.n(G),j=t(650010),xn=t(851863),Mn=t(73287),p=t(976883),P=t(578294),A=t(358245),n=t(46287),q=t(785893),En=function(m){var y=m.prefixCls,r=m.title,c=m.footer,h=m.extra,S=m.closeIcon,z=m.closable,D=m.onClose,I=m.headerStyle,f=m.drawerStyle,W=m.bodyStyle,O=m.footerStyle,U=m.children,on=s.useCallback(function(Q){return(0,q.jsx)("button",{type:"button",onClick:D,"aria-label":"Close",className:"".concat(y,"-close"),children:Q})},[D]),rn=(0,n.Z)(z,S,on,void 0,!0),an=ln()(rn,2),sn=an[0],H=an[1],Cn=s.useMemo(function(){return!r&&!sn?null:(0,q.jsxs)("div",{style:I,className:tn()("".concat(y,"-header"),b()({},"".concat(y,"-header-close-only"),sn&&!r&&!h)),children:[(0,q.jsxs)("div",{className:"".concat(y,"-header-title"),children:[H,r&&(0,q.jsx)("div",{className:"".concat(y,"-title"),children:r})]}),h&&(0,q.jsx)("div",{className:"".concat(y,"-extra"),children:h})]})},[sn,H,h,I,y,r]),nn=s.useMemo(function(){if(!c)return null;var Q="".concat(y,"-footer");return(0,q.jsx)("div",{className:Q,style:O,children:c})},[c,O,y]);return(0,q.jsxs)("div",{className:"".concat(y,"-wrapper-body"),style:f,children:[Cn,(0,q.jsx)("div",{className:"".concat(y,"-body"),style:W,children:U}),nn]})},Kn=En,Gn=t(141035),Fn=t(986943),ee=function(m){var y,r=m.componentCls,c=m.motionDurationSlow,h={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(c)}}};return b()({},r,(y={},b()(y,"".concat(r,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(c)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),b()(y,"".concat(r,"-panel-motion"),{"&-left":[h,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[h,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[h,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[h,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),y))},Qn=ee,te=function(m){var y,r,c=m.componentCls,h=m.zIndexPopup,S=m.colorBgMask,z=m.colorBgElevated,D=m.motionDurationSlow,I=m.motionDurationMid,f=m.padding,W=m.paddingLG,O=m.fontSizeLG,U=m.lineHeightLG,on=m.lineWidth,rn=m.lineType,an=m.colorSplit,sn=m.marginSM,H=m.colorIcon,Cn=m.colorIconHover,nn=m.colorText,Q=m.fontWeightStrong,Dn=m.footerPaddingBlock,Sn=m.footerPaddingInline,cn="".concat(c,"-content-wrapper");return b()({},c,(r={position:"fixed",inset:0,zIndex:h,pointerEvents:"none","&-pure":(y={position:"relative",background:z},b()(y,"&".concat(c,"-left"),{boxShadow:m.boxShadowDrawerLeft}),b()(y,"&".concat(c,"-right"),{boxShadow:m.boxShadowDrawerRight}),b()(y,"&".concat(c,"-top"),{boxShadow:m.boxShadowDrawerUp}),b()(y,"&".concat(c,"-bottom"),{boxShadow:m.boxShadowDrawerDown}),y),"&-inline":{position:"absolute"}},b()(r,"".concat(c,"-mask"),{position:"absolute",inset:0,zIndex:h,background:S,pointerEvents:"auto"}),b()(r,cn,{position:"absolute",zIndex:h,maxWidth:"100vw",transition:"all ".concat(D),"&-hidden":{display:"none"}}),b()(r,"&-left > ".concat(cn),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:m.boxShadowDrawerLeft}),b()(r,"&-right > ".concat(cn),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:m.boxShadowDrawerRight}),b()(r,"&-top > ".concat(cn),{top:0,insetInline:0,boxShadow:m.boxShadowDrawerUp}),b()(r,"&-bottom > ".concat(cn),{bottom:0,insetInline:0,boxShadow:m.boxShadowDrawerDown}),b()(r,"".concat(c,"-content"),{width:"100%",height:"100%",overflow:"auto",background:z,pointerEvents:"auto"}),b()(r,"".concat(c,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),b()(r,"".concat(c,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(f,"px ").concat(W,"px"),fontSize:O,lineHeight:U,borderBottom:"".concat(on,"px ").concat(rn," ").concat(an),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),b()(r,"".concat(c,"-extra"),{flex:"none"}),b()(r,"".concat(c,"-close"),{display:"inline-block",marginInlineEnd:sn,color:H,fontWeight:Q,fontSize:O,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(I),textRendering:"auto","&:focus, &:hover":{color:Cn,textDecoration:"none"}}),b()(r,"".concat(c,"-title"),{flex:1,margin:0,color:nn,fontWeight:m.fontWeightStrong,fontSize:O,lineHeight:U}),b()(r,"".concat(c,"-body"),{flex:1,minWidth:0,minHeight:0,padding:W,overflow:"auto"}),b()(r,"".concat(c,"-footer"),{flexShrink:0,padding:"".concat(Dn,"px ").concat(Sn,"px"),borderTop:"".concat(on,"px ").concat(rn," ").concat(an)}),b()(r,"&-rtl",{direction:"rtl"}),r))},Vn=(0,Gn.Z)("Drawer",function(wn){var m=(0,Fn.TS)(wn,{});return[te(m),Qn(m)]},function(wn){return{zIndexPopup:wn.zIndexPopupBase,footerPaddingBlock:wn.paddingXS,footerPaddingInline:wn.padding}}),An=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],Hn=["prefixCls","style","className","placement"],oe=null,Zn={distance:180},le=function(m){var y=m.rootClassName,r=m.width,c=m.height,h=m.size,S=h===void 0?"default":h,z=m.mask,D=z===void 0?!0:z,I=m.push,f=I===void 0?Zn:I,W=m.open,O=m.afterOpenChange,U=m.onClose,on=m.prefixCls,rn=m.getContainer,an=m.style,sn=m.className,H=m.visible,Cn=m.afterVisibleChange,nn=d()(m,An),Q=s.useContext(Mn.E_),Dn=Q.getPopupContainer,Sn=Q.getPrefixCls,cn=Q.direction,kn=Q.drawer,In=Sn("drawer",on),re=Vn(In),V=ln()(re,2),vn=V[0],$n=V[1],he=rn===void 0&&Dn?function(){return Dn(document.body)}:rn,de=tn()(b()({"no-mask":!D},"".concat(In,"-rtl"),cn==="rtl"),y,$n);if(!1)var _n,we;var ge=s.useMemo(function(){return r!=null?r:S==="large"?736:378},[r,S]),Yn=s.useMemo(function(){return c!=null?c:S==="large"?736:378},[c,S]),ue={motionName:(0,xn.m)(In,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},qn=function(je){return{motionName:(0,xn.m)(In,"panel-motion-".concat(je)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},fe=(0,A.H)();return vn((0,q.jsx)(P.BR,{children:(0,q.jsx)(p.Ux,{status:!0,override:!0,children:(0,q.jsx)(j.Z,w()(w()({prefixCls:In,onClose:U,maskMotion:ue,motion:qn},nn),{},{open:W!=null?W:H,mask:D,push:f,width:ge,height:Yn,style:w()(w()({},kn==null?void 0:kn.style),an),className:tn()(kn==null?void 0:kn.className,sn),rootClassName:de,getContainer:he,afterOpenChange:O!=null?O:Cn,panelRef:fe,children:(0,q.jsx)(Kn,w()(w()({prefixCls:In},nn),{},{onClose:U}))}))})}))},se=function(m){var y=m.prefixCls,r=m.style,c=m.className,h=m.placement,S=h===void 0?"right":h,z=d()(m,Hn),D=s.useContext(Mn.E_),I=D.getPrefixCls,f=I("drawer",y),W=Vn(f),O=ln()(W,2),U=O[0],on=O[1],rn=tn()(f,"".concat(f,"-pure"),"".concat(f,"-").concat(S),on,c);return U((0,q.jsx)("div",{className:rn,style:r,children:(0,q.jsx)(Kn,w()({prefixCls:f},z))}))};le._InternalPanelDoNotUseOrYouWillBeFired=se;var ce=le},377376:function(ie,yn,t){var pn=t(83996),w=t(296708),fn=pn.ZP;fn.Header=pn.h4,fn.Footer=pn.$_,fn.Content=pn.VY,fn.Sider=w.Z,yn.Z=fn},715778:function(ie,yn,t){t.d(yn,{Z:function(){return j}});var pn=t(174219),w=t(97857),fn=t.n(w),b=t(585369),On={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},ln=On,jn={lang:fn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},b.Z),timePickerLocale:fn()({},ln)};jn.lang.ok="\u786E\u5B9A";var d=jn,s=d,G="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",tn={locale:"zh-cn",Pagination:pn.Z,DatePicker:d,TimePicker:ln,Calendar:s,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:G,method:G,array:G,object:G,number:G,date:G,boolean:G,integer:G,float:G,regexp:G,email:G,url:G,hex:G},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},j=tn},15060:function(ie,yn,t){t.d(yn,{Z:function(){return m}});var pn=t(97857),w=t.n(pn),fn=t(805574),b=t.n(fn),On=t(513769),ln=t.n(On),jn=t(667294),d=t(294184),s=t.n(d),G=t(73287),tn=t(9783),j=t.n(tn),xn=t(548073),Mn=t(141035),p=t(986943),P=function(r){var c,h,S,z,D,I,f=r.componentCls;return j()({},f,w()(w()({},(0,xn.Wf)(r)),{},(I={margin:0,padding:0,listStyle:"none"},j()(I,"".concat(f,"-item"),{position:"relative",margin:0,paddingBottom:r.itemPaddingBottom,fontSize:r.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:r.itemHeadSize,insetInlineStart:(r.itemHeadSize-r.tailWidth)/2,height:"calc(100% - ".concat(r.itemHeadSize,"px)"),borderInlineStart:"".concat(r.tailWidth,"px ").concat(r.lineType," ").concat(r.tailColor)},"&-pending":(c={},j()(c,"".concat(f,"-item-head"),{fontSize:r.fontSizeSM,backgroundColor:"transparent"}),j()(c,"".concat(f,"-item-tail"),{display:"none"}),c),"&-head":{position:"absolute",width:r.itemHeadSize,height:r.itemHeadSize,backgroundColor:r.dotBg,border:"".concat(r.dotBorderWidth,"px ").concat(r.lineType," transparent"),borderRadius:"50%","&-blue":{color:r.colorPrimary,borderColor:r.colorPrimary},"&-red":{color:r.colorError,borderColor:r.colorError},"&-green":{color:r.colorSuccess,borderColor:r.colorSuccess},"&-gray":{color:r.colorTextDisabled,borderColor:r.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:r.itemHeadSize/2,insetInlineStart:r.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:r.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(r.fontSize*r.lineHeight-r.fontSize)+r.lineWidth,marginInlineStart:r.margin+r.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(h={},j()(h,"> ".concat(f,"-item-tail"),{display:"none"}),j()(h,"> ".concat(f,"-item-content"),{minHeight:r.controlHeightLG*1.2}),h)}),j()(I,"&".concat(f,`-alternate,
        &`).concat(f,`-right,
        &`).concat(f,"-label"),j()({},"".concat(f,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(r.marginXXS,"px"),"&-custom":{marginInlineStart:r.tailWidth/2}},"&-left":j()({},"".concat(f,"-item-content"),{insetInlineStart:"calc(50% - ".concat(r.marginXXS,"px)"),width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"start"}),"&-right":j()({},"".concat(f,"-item-content"),{width:"calc(50% - ".concat(r.marginSM,"px)"),margin:0,textAlign:"end"})})),j()(I,"&".concat(f,"-right"),j()({},"".concat(f,"-item-right"),(S={},j()(S,"".concat(f,`-item-tail,
            `).concat(f,`-item-head,
            `).concat(f,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((r.itemHeadSize+r.tailWidth)/2,"px)")}),j()(S,"".concat(f,"-item-content"),{width:"calc(100% - ".concat(r.itemHeadSize+r.marginXS,"px)")}),S))),j()(I,"&".concat(f,`-pending
        `).concat(f,`-item-last
        `).concat(f,"-item-tail"),{display:"block",height:"calc(100% - ".concat(r.margin,"px)"),borderInlineStart:"".concat(r.tailWidth,"px dotted ").concat(r.tailColor)}),j()(I,"&".concat(f,`-reverse
        `).concat(f,`-item-last
        `).concat(f,"-item-tail"),{display:"none"}),j()(I,"&".concat(f,"-reverse ").concat(f,"-item-pending"),(z={},j()(z,"".concat(f,"-item-tail"),{insetBlockStart:r.margin,display:"block",height:"calc(100% - ".concat(r.margin,"px)"),borderInlineStart:"".concat(r.tailWidth,"px dotted ").concat(r.tailColor)}),j()(z,"".concat(f,"-item-content"),{minHeight:r.controlHeightLG*1.2}),z)),j()(I,"&".concat(f,"-label"),(D={},j()(D,"".concat(f,"-item-label"),{position:"absolute",insetBlockStart:-(r.fontSize*r.lineHeight-r.fontSize)+r.tailWidth,width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"end"}),j()(D,"".concat(f,"-item-right"),j()({},"".concat(f,"-item-label"),{insetInlineStart:"calc(50% + ".concat(r.marginSM,"px)"),width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"start"})),D)),j()(I,"&-rtl",j()({direction:"rtl"},"".concat(f,"-item-head-custom"),{transform:"translate(50%, -50%)"})),I)))},A=(0,Mn.Z)("Timeline",function(y){var r=(0,p.TS)(y,{itemHeadSize:10,customHeadPaddingVertical:y.paddingXXS,paddingInlineEnd:2});return[P(r)]},function(y){return{tailColor:y.colorSplit,tailWidth:y.lineWidthBold,dotBorderWidth:y.wireframe?y.lineWidthBold:y.lineWidth*3,dotBg:y.colorBgContainer,itemPaddingBottom:y.padding*1.25}}),n=t(785893),q=["prefixCls","className","color","dot","pending","position","label","children"],En=function(r){var c,h=r.prefixCls,S=r.className,z=r.color,D=z===void 0?"blue":z,I=r.dot,f=r.pending,W=f===void 0?!1:f,O=r.position,U=r.label,on=r.children,rn=ln()(r,q),an=jn.useContext(G.E_),sn=an.getPrefixCls,H=sn("timeline",h),Cn=s()("".concat(H,"-item"),j()({},"".concat(H,"-item-pending"),W),S),nn=/blue|red|green|gray/.test(D||"")?void 0:D,Q=s()("".concat(H,"-item-head"),(c={},j()(c,"".concat(H,"-item-head-custom"),!!I),j()(c,"".concat(H,"-item-head-").concat(D),!nn),c));return(0,n.jsxs)("li",w()(w()({},rn),{},{className:Cn,children:[U&&(0,n.jsx)("div",{className:"".concat(H,"-item-label"),children:U}),(0,n.jsx)("div",{className:"".concat(H,"-item-tail")}),(0,n.jsx)("div",{className:Q,style:{borderColor:nn,color:nn},children:I}),(0,n.jsx)("div",{className:"".concat(H,"-item-content"),children:on})]}))},Kn=En,Gn=t(719632),Fn=t.n(Gn),ee=t(100628),Qn=t.n(ee),te=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],Vn=["className"],An=function(r){var c,h=r.prefixCls,S=r.className,z=r.pending,D=z===void 0?!1:z,I=r.children,f=r.items,W=r.rootClassName,O=r.reverse,U=O===void 0?!1:O,on=r.direction,rn=r.hashId,an=r.pendingDot,sn=r.mode,H=sn===void 0?"":sn,Cn=ln()(r,te),nn=function(vn,$n){return H==="alternate"?vn==="right"?"".concat(h,"-item-right"):vn==="left"||$n%2===0?"".concat(h,"-item-left"):"".concat(h,"-item-right"):H==="left"?"".concat(h,"-item-left"):H==="right"||vn==="right"?"".concat(h,"-item-right"):""},Q=Fn()(f||[]),Dn=typeof D=="boolean"?null:D;D&&Q.push({pending:!!D,dot:an||(0,n.jsx)(Qn(),{}),children:Dn}),U&&Q.reverse();var Sn=Q.length,cn="".concat(h,"-item-last"),kn=Q.filter(function(V){return!!V}).map(function(V,vn){var $n,he=vn===Sn-2?cn:"",de=vn===Sn-1?cn:"",_n=V.className,we=ln()(V,Vn);return(0,jn.createElement)(Kn,w()(w()({},we),{},{className:s()([_n,!U&&D?he:de,nn(($n=V==null?void 0:V.position)!==null&&$n!==void 0?$n:"",vn)]),key:(V==null?void 0:V.key)||vn}))}),In=Q.some(function(V){return!!(V!=null&&V.label)}),re=s()(h,(c={},j()(c,"".concat(h,"-pending"),!!D),j()(c,"".concat(h,"-reverse"),!!U),j()(c,"".concat(h,"-").concat(H),!!H&&!In),j()(c,"".concat(h,"-label"),In),j()(c,"".concat(h,"-rtl"),on==="rtl"),c),S,W,rn);return(0,n.jsx)("ul",w()(w()({},Cn),{},{className:re,children:kn}))},Hn=An,oe=t(45598);function Zn(y,r){return y&&Array.isArray(y)?y:(0,oe.default)(r).map(function(c){var h,S;return w()({children:(h=c==null||(S=c.props)===null||S===void 0?void 0:S.children)!==null&&h!==void 0?h:""},c.props)})}var le=Zn,se=["prefixCls","children","items","className","style"],ce=function(r){var c=jn.useContext(G.E_),h=c.getPrefixCls,S=c.direction,z=c.timeline,D=r.prefixCls,I=r.children,f=r.items,W=r.className,O=r.style,U=ln()(r,se),on=h("timeline",D);if(!1)var rn;var an=A(on),sn=b()(an,2),H=sn[0],Cn=sn[1],nn=le(f,I);return H((0,n.jsx)(Hn,w()(w()({},U),{},{className:s()(z==null?void 0:z.className,W),style:w()(w()({},z==null?void 0:z.style),O),prefixCls:on,direction:S,items:nn,hashId:Cn})))};ce.Item=Kn;var wn=ce,m=wn}}]);
