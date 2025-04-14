import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import { useEffect, useRef } from "react";

interface ModalProps {
  active: boolean;
  setActiveModal: () => void;
  children?: React.ReactNode;
}
export const Modal = ({ active, setActiveModal, children }: ModalProps) => {
  const modalRoot = document.getElementById("modal");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current === event.target) {
        setActiveModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const modal = (
    <div
      className={`${styles.modal} ${active && styles.active}`}
      ref={modalRef}
    >
      <div className={styles["modal__inner"]} id="modal">
        {children}
      </div>
    </div>
  );

  if (!modalRoot) return;
  return createPortal(modal, modalRoot);
};
