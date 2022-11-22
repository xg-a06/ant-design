"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3005],{13555:function(o,e,n){n.r(e);var r=n(2143),Z=n(50250),v=n(59378),c=n(78190),m=n(74775),u=n(5937),p=n(2068),x=n(74399),C=n(46004),E=n(35708),h=n(30138),P=n(56140),d=n(5388),D=n(49545),O=n(92169),f=n(13140),M=n(95127),A=n(74418),a=n(22130),i=n(67294),t=n(13946);function s(){var _=(0,a.eL)(),l=_.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,l[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,l[1].value),(0,t.tZ)("li",null,l[2].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-statistic-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/statistic/demo/basic.tsx",jsx:`import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button
        style={{
          marginTop: 16,
        }}
        type="primary"
      >
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u5C55\u793A\u3002</p>"}},{demo:{id:"components-statistic-demo-unit"},previewerProps:{title:"\u5355\u4F4D",filename:"components/statistic/demo/unit.tsx",jsx:`import React from 'react';
import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
);
export default App;
`,description:"<p>\u901A\u8FC7\u524D\u7F00\u548C\u540E\u7F00\u6DFB\u52A0\u5355\u4F4D\u3002</p>"}},{demo:{id:"components-statistic-demo-card"},previewerProps:{title:"\u5728\u5361\u7247\u4E2D\u4F7F\u7528",filename:"components/statistic/demo/card.tsx",jsx:`import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const App = () => (
  <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{
              color: '#3f8600',
            }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{
              color: '#cf1322',
            }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
);
export default App;
`,description:"<p>\u5728\u5361\u7247\u4E2D\u5C55\u793A\u7EDF\u8BA1\u6570\u503C\u3002</p>",style:`.site-statistic-demo-card {
  padding: 30px;
  background: #ececec;
}`}},{demo:{id:"components-statistic-demo-countdown"},previewerProps:{title:"\u5012\u8BA1\u65F6",filename:"components/statistic/demo/countdown.tsx",jsx:`import React from 'react';
import { Col, Row, Statistic } from 'antd';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const App = () => {
  const onFinish = () => {
    console.log('finished!');
  };
  const onChange = (val) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      </Col>
      <Col span={12}>
        <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
      </Col>
      <Col
        span={24}
        style={{
          marginTop: 32,
        }}
      >
        <Countdown title="Day Level" value={deadline} format="D \u5929 H \u65F6 m \u5206 s \u79D2" />
      </Col>
      <Col span={12}>
        <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
      </Col>
    </Row>
  );
};
export default App;
`,description:"<p>\u5012\u8BA1\u65F6\u7EC4\u4EF6\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h4",{id:"statistic"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#statistic"},(0,t.tZ)("span",{className:"icon icon-link"})),"Statistic"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[3].value),(0,t.tZ)("th",null,l[4].value),(0,t.tZ)("th",null,l[5].value),(0,t.tZ)("th",null,l[6].value),(0,t.tZ)("th",null,l[7].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[8].value),(0,t.tZ)("td",null,l[9].value),(0,t.tZ)("td",null,l[10].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[11].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[12].value),(0,t.tZ)("td",null,l[13].value),(0,t.tZ)("td",null,l[14].value),(0,t.tZ)("td",null,l[15].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[16].value),(0,t.tZ)("td",null,l[17].value),(0,t.tZ)("td",null,l[18].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[19].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[20].value),(0,t.tZ)("td",null,l[21].value),(0,t.tZ)("td",null,l[22].value),(0,t.tZ)("td",null,l[23].value),(0,t.tZ)("td",null,l[24].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[25].value),(0,t.tZ)("td",null,l[26].value),(0,t.tZ)("td",null,l[27].value),(0,t.tZ)("td",null,l[28].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[29].value),(0,t.tZ)("td",null,l[30].value),(0,t.tZ)("td",null,l[31].value),(0,t.tZ)("td",null,l[32].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[33].value),(0,t.tZ)("td",null,l[34].value),(0,t.tZ)("td",null,l[35].value),(0,t.tZ)("td",null,l[36].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[37].value),(0,t.tZ)("td",null,l[38].value),(0,t.tZ)("td",null,l[39].value),(0,t.tZ)("td",null,l[40].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[41].value),(0,t.tZ)("td",null,l[42].value),(0,t.tZ)("td",null,l[43].value),(0,t.tZ)("td",null,l[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[45].value),(0,t.tZ)("td",null,l[46].value),(0,t.tZ)("td",null,l[47].value),(0,t.tZ)("td",null,l[48].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h4",{id:"statisticcountdown"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#statisticcountdown"},(0,t.tZ)("span",{className:"icon icon-link"})),"Statistic.Countdown"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[49].value),(0,t.tZ)("th",null,l[50].value),(0,t.tZ)("th",null,l[51].value),(0,t.tZ)("th",null,l[52].value),(0,t.tZ)("th",null,l[53].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[54].value),(0,t.tZ)("td",null,l[55].value,(0,t.tZ)("a",{href:"https://day.js.org/"},l[56].value)),(0,t.tZ)("td",null,l[57].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[58].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[59].value),(0,t.tZ)("td",null,l[60].value),(0,t.tZ)("td",null,l[61].value),(0,t.tZ)("td",null,l[62].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[63].value),(0,t.tZ)("td",null,l[64].value),(0,t.tZ)("td",null,l[65].value),(0,t.tZ)("td",null,l[66].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[67].value),(0,t.tZ)("td",null,l[68].value),(0,t.tZ)("td",null,l[69].value),(0,t.tZ)("td",null,l[70].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[71].value),(0,t.tZ)("td",null,l[72].value),(0,t.tZ)("td",null,l[73].value),(0,t.tZ)("td",null,l[74].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[75].value),(0,t.tZ)("td",null,l[76].value),(0,t.tZ)("td",null,l[77].value),(0,t.tZ)("td",null,l[78].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[79].value),(0,t.tZ)("td",null,l[80].value),(0,t.tZ)("td",null,l[81].value),(0,t.tZ)("td",null,l[82].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[83].value),(0,t.tZ)("td",null,l[84].value),(0,t.tZ)("td",null,l[85].value),(0,t.tZ)("td",null,l[86].value),(0,t.tZ)("td",null,l[87].value)))))))}e.default=s}}]);
