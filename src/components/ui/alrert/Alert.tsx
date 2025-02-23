import { X } from "lucide-react";
import "./index.scss";
import React from "react";
interface Iprops {
  type: "warning" | "error" | "success" | "note" | "info";
  icon: React.ReactNode;
  title: string;
  describtion: string;
}

const Alert = ({ type, icon, title, describtion }: Iprops) => {
  return (
    <div className={type}>
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
