import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}


const Alert = ({ children, onClose }: Props) => {
  const [alertVisible, setAlertVisibility] = useState(false);
  
  return (
    <div className="alert alert-primary alert-dismissible">
        { children }
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert
