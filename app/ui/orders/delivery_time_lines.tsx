import { Timeline } from "rsuite";

export default function DeliveryTimeLines(props: { timelines: [] }) {
  return (
    <Timeline align="left">
      {props.timelines.length != 0 && (
        <div className="">
          {props.timelines.map(() => (
            <Timeline.Item time="24 Apr 2024 15:29">
              Your order starts processing x2
            </Timeline.Item>
          ))}
        </div>
      )}

      {/* <Timeline.Item time="24 Apr 2024 15:29">
          Your order to be ready for delivery
        </Timeline.Item>
        <Timeline.Item time="Yesterday 16:28">
          Your Delivery has been out of the library
        </Timeline.Item>
        <Timeline.Item time="Today 02:34">
          Send to Shanghai Hongkou Company
        </Timeline.Item>
        <Timeline.Item time="Today 15:05">Sending you a piece</Timeline.Item> */}
    </Timeline>
  );
}
