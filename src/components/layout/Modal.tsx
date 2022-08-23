import { ModalProps } from "../../models/props";


const Modal = ({ children, onClose }: ModalProps) => (
  <div className="modal" onClick={onClose}>
    <div className="modal__content">
      {children}
    </div>
  </div>
);

export default Modal;