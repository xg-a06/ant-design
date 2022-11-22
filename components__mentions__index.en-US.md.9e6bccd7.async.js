"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[878],{52546:function(m,o,e){e.r(o);var p=e(2143),_=e(50250),c=e(59378),v=e(78190),a=e(74775),l=e(5937),Z=e(2068),h=e(74399),x=e(46004),f=e(35708),O=e(30138),M=e(56140),i=e(5388),g=e(49545),P=e(92169),E=e(13140),b=e(95127),y=e(74418),s=e(22130),u=e(67294),n=e(13946);function d(){var r=(0,s.eL)(),t=r.texts;return(0,n.tZ)(s.dY,null,(0,n.tZ)(u.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(i.Z,{items:[{demo:{id:"components-mentions-demo-basic"},previewerProps:{title:"Basic",filename:"components/mentions/demo/basic.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const App = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
);
export default App;
`,description:"<p>Basic usage.</p>"}},{demo:{id:"components-mentions-demo-async"},previewerProps:{title:"Asynchronous loading",filename:"components/mentions/demo/async.tsx",jsx:`import React, { useCallback, useRef, useState } from 'react';
import { Mentions } from 'antd';
import debounce from 'lodash/debounce';
const { Option } = Mentions;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const loadGithubUsers = (key) => {
    if (!key) {
      setUsers([]);
      return;
    }
    fetch(\`https://api.github.com/search/users?q=\${key}\`)
      .then((res) => res.json())
      .then(({ items = [] }) => {
        if (ref.current !== key) return;
        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };
  const debounceLoadGithubUsers = useCallback(debounce(loadGithubUsers, 800), []);
  const onSearch = (search) => {
    console.log('Search:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      loading={loading}
      onSearch={onSearch}
    >
      {users.map(({ login, avatar_url: avatar }) => (
        <Option key={login} value={login} className="antd-demo-dynamic-option">
          <img src={avatar} alt={login} />
          <span>{login}</span>
        </Option>
      ))}
    </Mentions>
  );
};
export default App;
`,description:"<p>async</p>",style:`.antd-demo-dynamic-option img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}`}},{demo:{id:"components-mentions-demo-form"},previewerProps:{title:"With Form",filename:"components/mentions/demo/form.tsx",jsx:`import React from 'react';
import { Button, Form, Mentions } from 'antd';
const { Option, getMentions } = Mentions;
const App = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };
  const checkMention = async (_, value) => {
    const mentions = getMentions(value);
    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };
  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="coders"
        label="Top coders"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            validator: checkMention,
          },
        ]}
      >
        <Mentions rows={1}>
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Mentions rows={3} placeholder="You can use @ to ref user here">
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 14,
          offset: 6,
        }}
      >
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Controlled mode, for example, to work with <code>Form</code>.</p>"}},{demo:{id:"components-mentions-demo-prefix"},previewerProps:{title:"Customize Trigger Token",filename:"components/mentions/demo/prefix.tsx",jsx:`import React, { useState } from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};
const App = () => {
  const [prefix, setPrefix] = useState('@');
  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
    >
      {(MOCK_DATA[prefix] || []).map((value) => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </Mentions>
  );
};
export default App;
`,description:"<p>Customize Trigger Token by <code>prefix</code> props. Default to <code>@</code>, <code>Array&#x3C;string></code> also supported.</p>"}},{demo:{id:"components-mentions-demo-readonly"},previewerProps:{title:"disabled or readOnly",filename:"components/mentions/demo/readonly.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const getOptions = () =>
  ['afc163', 'zombiej', 'yesmeck'].map((value) => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
const App = () => (
  <>
    <div
      style={{
        marginBottom: 10,
      }}
    >
      <Mentions
        style={{
          width: '100%',
        }}
        placeholder="this is disabled Mentions"
        disabled
      >
        {getOptions()}
      </Mentions>
    </div>
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder="this is readOnly Mentions"
      readOnly
    >
      {getOptions()}
    </Mentions>
  </>
);
export default App;
`,description:"<p>Configurate <code>disabled</code> and <code>readOnly</code>.</p>"}},{demo:{id:"components-mentions-demo-placement"},previewerProps:{title:"Placement",filename:"components/mentions/demo/placement.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const App = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    placement="top"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
);
export default App;
`,description:"<p>Change the suggestions placement.</p>"}},{demo:{id:"components-mentions-demo-autosize"},previewerProps:{title:"autoSize",filename:"components/mentions/demo/autoSize.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const App = () => (
  <Mentions
    autoSize
    style={{
      width: '100%',
    }}
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
);
export default App;
`,description:"<p>Height autoSize.</p>"}},{demo:{id:"components-mentions-demo-status"},previewerProps:{title:"Status",filename:"components/mentions/demo/status.tsx",jsx:`import React from 'react';
import { Mentions, Space } from 'antd';
const { Option } = Mentions;
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const App = () => {
  const options = (
    <>
      <Option value="afc163">afc163</Option>
      <Option value="zombieJ">zombieJ</Option>
      <Option value="yesmeck">yesmeck</Option>
    </>
  );
  return (
    <Space direction="vertical">
      <Mentions onChange={onChange} onSelect={onSelect} defaultValue="@afc163" status="error">
        {options}
      </Mentions>
      <Mentions onChange={onChange} onSelect={onSelect} defaultValue="@afc163" status="warning">
        {options}
      </Mentions>
    </Space>
  );
};
export default App;
`,description:"<p>Add status to Mentions with <code>status</code>, which could be <code>error</code> or <code>warning</code>\u3002</p>"}},{demo:{id:"components-mentions-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/mentions/demo/render-panel.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalMentions } = Mentions;
const App = () => (
  <InternalMentions
    style={{
      width: '100%',
    }}
    value="@"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
  </InternalMentions>
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(a.Z,{lang:"jsx"},t[2].value),(0,n.tZ)("h3",{id:"mention"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mention"},(0,n.tZ)("span",{className:"icon icon-link"})),"Mention"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[31].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[34].value),t[35].value,(0,n.tZ)("code",null,t[36].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[37].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[41].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[45].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,t[65].value),(0,n.tZ)("td",null,t[66].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null,t[69].value),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"mention-methods"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mention-methods"},(0,n.tZ)("span",{className:"icon icon-link"})),"Mention methods"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[83].value),(0,n.tZ)("th",null,t[84].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null,t[86].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[87].value),(0,n.tZ)("td",null,t[88].value)))),(0,n.tZ)("h3",{id:"option"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#option"},(0,n.tZ)("span",{className:"icon icon-link"})),"Option"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[89].value),(0,n.tZ)("th",null,t[90].value),(0,n.tZ)("th",null,t[91].value),(0,n.tZ)("th",null,t[92].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[93].value),(0,n.tZ)("td",null,t[94].value),(0,n.tZ)("td",null,t[95].value),(0,n.tZ)("td",null,t[96].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value)))))))}o.default=d}}]);
