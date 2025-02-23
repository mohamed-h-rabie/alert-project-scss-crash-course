import { X } from "lucide-react";
import "./index.scss";
import React from "react";
interface Iprops {
  className: string;
  icon: React.ReactNode;
  title: string;
  describtion: string;
}

const Alert = ({ className, icon, title, describtion }: Iprops) => {
  return (
    <div className={className}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className="close" size={20} />
      </div>
      <p>{describtion}</p>
    </div>
  );
};

export default Alert;
