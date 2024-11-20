"use client";
import React, { useEffect, useState } from "react";
import { Alert } from "antd";

interface CustomAlertProps {
  message: string;
  type: "success" | "info" | "warning" | "error";
  visible: boolean;
  duration?: number;
  onClose?: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type, visible, duration = 2000, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose){ onClose(); }
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <Alert
      message={message}
      type={type}
      showIcon
      closable
      onClose={() => setIsVisible(false)}
      className="!absolute top-20 left-1/2 transform -translate-x-1/2 w-96 z-50"
    />
  );
};

export default CustomAlert;
