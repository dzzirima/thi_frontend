"use client"

import { useState } from 'react';
import { Tabs, Placeholder, ButtonGroup, Button, Panel, Timeline } from 'rsuite';
export default function TimeLines(){
  const [activeKey, setActiveKey] = useState('status');

  return (
    <Panel>
      {/* <ButtonGroup>
        {['image', 'square', 'circle'].map(key => (
          <Button key={key} active={key === activeKey} onClick={() => setActiveKey(key)}>
            {key}
          </Button>
        ))}
      </ButtonGroup> */}
      <hr />
      <Tabs activeKey={activeKey} onSelect={setActiveKey}>
        <Tabs.Tab eventKey="status" title="status">
        <Timeline align="left">
  <Timeline.Item time="24 Apr 2024 15:29">Your order starts processing</Timeline.Item>
    <Timeline.Item time="24 Apr 2024 15:29">Your order to be ready for delivery</Timeline.Item>
    <Timeline.Item time="Yesterday 16:28">Your Deliveryhas been out of the library</Timeline.Item>
    <Timeline.Item time="Today 02:34">Send to Shanghai Hongkou Company</Timeline.Item>
    <Timeline.Item time="Today 15:05">Sending you a piece</Timeline.Item>
  </Timeline>
        </Tabs.Tab>
        <Tabs.Tab eventKey="square" title="Square">
          <Placeholder.Paragraph graph="square" />
        </Tabs.Tab>
        <Tabs.Tab eventKey="circle" title="Circle">
          <Placeholder.Paragraph graph="circle" />
        </Tabs.Tab>
      </Tabs>
    </Panel>
  );
};