import React from "react";
import "./Toast.css";

interface INoticeProps {
  type: string;
  content: string;
}

const iconList: { [key: string]: string } = {
  success: "check-circle",
  loading: "spinner",
  warning: "exclamation-circle",
  error: "times-circle",
  info: "info-circle"
};

class Notice extends React.Component<INoticeProps, {}> {
  render() {
    const { type, content } = this.props;
    return (
      <div className={`toast-notice ${type}`}>
        <span>{iconList[type]}</span>
        <span>{content}</span>
      </div>
    );
  }
}

export default Notice;
