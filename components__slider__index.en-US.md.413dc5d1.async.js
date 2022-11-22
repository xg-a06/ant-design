"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6341],{4773:function(s,u,n){n.r(u);var p=n(2143),m=n(50250),_=n(59378),c=n(78190),v=n(74775),l=n(5937),Z=n(2068),h=n(74399),x=n(46004),f=n(35708),g=n(30138),C=n(56140),d=n(5388),E=n(49545),b=n(92169),P=n(13140),S=n(95127),A=n(74418),a=n(22130),o=n(67294),e=n(13946);function r(){var i=(0,a.eL)(),t=i.texts;return(0,e.tZ)(a.dY,null,(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,t[1].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(d.Z,{items:[{demo:{id:"components-slider-demo-basic"},previewerProps:{title:"Basic",filename:"components/slider/demo/basic.tsx",jsx:`import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
const App = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
    </>
  );
};
export default App;
`,description:"<p>Basic slider. When <code>range</code> is <code>true</code>, display as dual thumb mode. When <code>disable</code> is <code>true</code>, the slider will not be interactable.</p>",style:`.code-box-demo .ant-slider {
  margin-bottom: 16px;
}`}},{demo:{id:"components-slider-demo-input-number"},previewerProps:{title:"Slider with InputNumber",filename:"components/slider/demo/input-number.tsx",jsx:`import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';
const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const DecimalStep = () => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={1}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={0.01}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={1}
          style={{
            margin: '0 16px',
          }}
          step={0.01}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const App = () => (
  <div>
    <IntegerStep />
    <DecimalStep />
  </div>
);
export default App;
`,description:'<p>Synchronize with <a href="/components/input-number/">InputNumber</a> component.</p>'}},{demo:{id:"components-slider-demo-icon-slider"},previewerProps:{title:"Slider with icon",filename:"components/slider/demo/icon-slider.tsx",jsx:`import React, { useState } from 'react';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
const IconSlider = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
  return (
    <div className="icon-wrapper">
      <FrownOutlined className={preColorCls} />
      <Slider {...props} onChange={setValue} value={value} />
      <SmileOutlined className={nextColorCls} />
    </div>
  );
};
const App = () => <IconSlider min={0} max={20} />;
export default App;
`,description:"<p>You can add an icon beside the slider to make it meaningful.</p>",style:`.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 16px;
  line-height: 1;
}

.icon-wrapper .icon-wrapper-active {
  color: rgba(0, 0, 0, 0.45);
}

.icon-wrapper .anticon:first-child {
  left: 0;
}

.icon-wrapper .anticon:last-child {
  right: 0;
}`}},{demo:{id:"components-slider-demo-tip-formatter"},previewerProps:{title:"Customize tooltip",filename:"components/slider/demo/tip-formatter.tsx",jsx:`import React from 'react';
import { Slider } from 'antd';
const formatter = (value) => \`\${value}%\`;
const App = () => (
  <>
    <Slider
      tooltip={{
        formatter,
      }}
    />
    <Slider
      tooltip={{
        formatter: null,
      }}
    />
  </>
);
export default App;
`,description:"<p>Use <code>tooltip.formatter</code> to format content of <code>Tooltip</code>. If <code>tooltip.formatter</code> is null, hide it.</p>"}},{demo:{id:"components-slider-demo-event"},previewerProps:{title:"Event",filename:"components/slider/demo/event.tsx",jsx:`import React from 'react';
import { Slider } from 'antd';
const onChange = (value) => {
  console.log('onChange: ', value);
};
const onAfterChange = (value) => {
  console.log('onAfterChange: ', value);
};
const App = () => (
  <>
    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </>
);
export default App;
`,description:"<p>The <code>onChange</code> callback function will fire when the user changes the slider's value. The <code>onAfterChange</code> callback function will fire when <code>onmouseup</code> fired.</p>"}},{demo:{id:"components-slider-demo-mark"},previewerProps:{title:"Graduated slider",filename:"components/slider/demo/mark.tsx",jsx:`import React from 'react';
import { Slider } from 'antd';
const marks = {
  0: '0\xB0C',
  26: '26\xB0C',
  37: '37\xB0C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100\xB0C</strong>,
  },
};
const App = () => (
  <>
    <h4>included=true</h4>
    <Slider marks={marks} defaultValue={37} />
    <Slider range marks={marks} defaultValue={[26, 37]} />

    <h4>included=false</h4>
    <Slider marks={marks} included={false} defaultValue={37} />

    <h4>marks & step</h4>
    <Slider marks={marks} step={10} defaultValue={37} />

    <h4>step=null</h4>
    <Slider marks={marks} step={null} defaultValue={37} />
  </>
);
export default App;
`,description:"<p>Using <code>marks</code> property to mark a graduated slider, use <code>value</code> or <code>defaultValue</code> to specify the position of thumb. When <code>included</code> is false, means that different thumbs are coordinative. when <code>step</code> is null, users can only slide the thumbs onto marks.</p>",style:`#components-slider-demo-mark h4 {
  margin: 0 0 16px;
}
#components-slider-demo-mark .ant-slider-with-marks {
  margin-bottom: 44px;
}`}},{demo:{id:"components-slider-demo-vertical"},previewerProps:{title:"Vertical",filename:"components/slider/demo/vertical.tsx",jsx:`import React from 'react';
import { Slider } from 'antd';
const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};
const marks = {
  0: '0\xB0C',
  26: '26\xB0C',
  37: '37\xB0C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100\xB0C</strong>,
  },
};
const App = () => (
  <>
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider vertical range step={10} defaultValue={[20, 50]} />
    </div>
    <div style={style}>
      <Slider vertical range marks={marks} defaultValue={[26, 37]} />
    </div>
  </>
);
export default App;
`,description:"<p>The vertical Slider.</p>"}},{demo:{id:"components-slider-demo-show-tooltip"},previewerProps:{title:"Control visible of ToolTip",filename:"components/slider/demo/show-tooltip.tsx",jsx:`import React from 'react';
import { Slider } from 'antd';
const App = () => (
  <Slider
    defaultValue={30}
    tooltip={{
      open: true,
    }}
  />
);
export default App;
`,description:"<p>When <code>tooltip.open</code> is <code>true</code>, ToolTip will always show, or ToolTip will not show anyway, even if dragging or hovering.</p>"}},{demo:{id:"components-slider-demo-reverse"},previewerProps:{title:"Reverse",filename:"components/slider/demo/reverse.tsx",jsx:`import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
const App = () => {
  const [reverse, setReverse] = useState(true);
  return (
    <>
      <Slider defaultValue={30} reverse={reverse} />
      <Slider range defaultValue={[20, 50]} reverse={reverse} />
      Reversed: <Switch size="small" checked={reverse} onChange={setReverse} />
    </>
  );
};
export default App;
`,description:"<p>Using <code>reverse</code> to render slider reversely.</p>"}},{demo:{id:"components-slider-demo-dragabletrack"},previewerProps:{title:"Draggable track",filename:"components/slider/demo/dragableTrack.tsx",jsx:`import React from 'react';
import { Slider } from 'antd';
const App = () => (
  <Slider
    range={{
      draggableTrack: true,
    }}
    defaultValue={[20, 50]}
  />
);
export default App;
`,description:"<p>Make range track draggable when set <code>range.draggableTrack</code>.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[2].value),(0,e.tZ)("th",null,t[3].value),(0,e.tZ)("th",null,t[4].value),(0,e.tZ)("th",null,t[5].value),(0,e.tZ)("th",null,t[6].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[7].value),(0,e.tZ)("td",null,t[8].value),(0,e.tZ)("td",null,t[9].value),(0,e.tZ)("td",null,t[10].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[11].value),(0,e.tZ)("td",null,t[12].value,(0,e.tZ)("code",null,t[13].value),t[14].value),(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null,t[16].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null,t[18].value),(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null,t[20].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[21].value),(0,e.tZ)("td",null,t[22].value),(0,e.tZ)("td",null,t[23].value),(0,e.tZ)("td",null,t[24].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[25].value),(0,e.tZ)("td",null,t[26].value,(0,e.tZ)("code",null,t[27].value),t[28].value),(0,e.tZ)("td",null,t[29].value),(0,e.tZ)("td",null,t[30].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[31].value),(0,e.tZ)("td",null,t[32].value,(0,e.tZ)("code",null,t[33].value),t[34].value),(0,e.tZ)("td",null,t[35].value),(0,e.tZ)("td",null,t[36].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[37].value),(0,e.tZ)("td",null,t[38].value),(0,e.tZ)("td",null,t[39].value),(0,e.tZ)("td",null,t[40].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[41].value),(0,e.tZ)("td",null,t[42].value),(0,e.tZ)("td",null,t[43].value),(0,e.tZ)("td",null,t[44].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[45].value),(0,e.tZ)("td",null,t[46].value),(0,e.tZ)("td",null,t[47].value),(0,e.tZ)("td",null,t[48].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[49].value),(0,e.tZ)("td",null,t[50].value),(0,e.tZ)("td",null,t[51].value),(0,e.tZ)("td",null,t[52].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[53].value),(0,e.tZ)("td",null,t[54].value,(0,e.tZ)("code",null,t[55].value),t[56].value,(0,e.tZ)("code",null,t[57].value),t[58].value),(0,e.tZ)("td",null,t[59].value),(0,e.tZ)("td",null,t[60].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[61].value),(0,e.tZ)("td",null,t[62].value),(0,e.tZ)("td",null,(0,e.tZ)(a.rU,{to:"#tooltip"},t[63].value)),(0,e.tZ)("td",null,t[64].value),(0,e.tZ)("td",null,t[65].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[66].value),(0,e.tZ)("td",null,t[67].value,(0,e.tZ)("code",null,t[68].value),t[69].value),(0,e.tZ)("td",null,t[70].value),(0,e.tZ)("td",null,t[71].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[72].value),(0,e.tZ)("td",null,t[73].value),(0,e.tZ)("td",null,t[74].value),(0,e.tZ)("td",null,t[75].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[76].value),(0,e.tZ)("td",null,t[77].value),(0,e.tZ)("td",null,t[78].value),(0,e.tZ)("td",null,t[79].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[80].value),(0,e.tZ)("td",null,t[81].value),(0,e.tZ)("td",null,t[82].value),(0,e.tZ)("td",null,t[83].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[84].value),(0,e.tZ)("td",null,t[85].value),(0,e.tZ)("td",null,t[86].value),(0,e.tZ)("td",null,t[87].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[88].value),(0,e.tZ)("td",null,t[89].value),(0,e.tZ)("td",null,t[90].value),(0,e.tZ)("td",null,t[91].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"range"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#range"},(0,e.tZ)("span",{className:"icon icon-link"})),"range"),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[92].value),(0,e.tZ)("th",null,t[93].value),(0,e.tZ)("th",null,t[94].value),(0,e.tZ)("th",null,t[95].value),(0,e.tZ)("th",null,t[96].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[97].value),(0,e.tZ)("td",null,t[98].value),(0,e.tZ)("td",null,t[99].value),(0,e.tZ)("td",null,t[100].value),(0,e.tZ)("td",null,t[101].value)))),(0,e.tZ)("h3",{id:"tooltip"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tooltip"},(0,e.tZ)("span",{className:"icon icon-link"})),"tooltip"),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[102].value),(0,e.tZ)("th",null,t[103].value),(0,e.tZ)("th",null,t[104].value),(0,e.tZ)("th",null,t[105].value),(0,e.tZ)("th",null,t[106].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[107].value),(0,e.tZ)("td",null,t[108].value),(0,e.tZ)("td",null,t[109].value),(0,e.tZ)("td",null,t[110].value),(0,e.tZ)("td",null,t[111].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[112].value),(0,e.tZ)("td",null,t[113].value,(0,e.tZ)(a.rU,{to:"/components/tooltip/"},t[114].value)),(0,e.tZ)("td",null,t[115].value),(0,e.tZ)("td",null,t[116].value),(0,e.tZ)("td",null,t[117].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[118].value),(0,e.tZ)("td",null,t[119].value),(0,e.tZ)("td",null,t[120].value),(0,e.tZ)("td",null,t[121].value),(0,e.tZ)("td",null,t[122].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[123].value),(0,e.tZ)("td",null,t[124].value,(0,e.tZ)("code",null,t[125].value),t[126].value),(0,e.tZ)("td",null,t[127].value),(0,e.tZ)("td",null,t[128].value),(0,e.tZ)("td",null,t[129].value)))),(0,e.tZ)("h2",{id:"methods"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,e.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[130].value),(0,e.tZ)("th",null,t[131].value),(0,e.tZ)("th",null,t[132].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[133].value),(0,e.tZ)("td",null,t[134].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[135].value),(0,e.tZ)("td",null,t[136].value),(0,e.tZ)("td",null)))))))}u.default=r}}]);
