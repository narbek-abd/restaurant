import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import s from "./style.module.scss";
import g from "Src/App.module.scss";
import useOnClickOutside from "Src/hooks/useOnClickOutside";
import trapFocus from "Src/utils/trapFocus";
import cx from "classnames";
import IconClose from "Src/assets/icons/close.svg";

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalTabIndex = useRef<HTMLDivElement>(null);
  let previousActiveElem: Element | null = document.activeElement;

  let modalRoot = document.getElementById("app-modal");

  if (!modalRoot) {
    let rootElem = document.createElement("div");
    rootElem.setAttribute("id", "app-modal");

    document.body.append(rootElem);
    modalRoot = rootElem;
  }

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    closeModal();
  });

  function closeModal() {
    onClose();
  }

  useEffect(() => {
    if (isOpen) {
      if (modalTabIndex.current !== null) modalTabIndex.current.focus();
      if (modalRef.current !== null) trapFocus(modalRef.current);
    } else {
      if (previousActiveElem !== null) {
        (previousActiveElem as HTMLElement).focus();
      }
    }
  }, [isVisible]);

  return ReactDOM.createPortal(
    <>
      <div
        className={cx(s.modalOverlay, { [s.modalOverlayVisible]: isVisible })}
      >
        <div
          className={cx(s.modal, { [s.modalVisible]: isVisible })}
          ref={modalRef}
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={modalTabIndex}
            tabIndex={0}
            aria-hidden="true"
            className={s.modalTab}
          ></div>

          {children}

          <button className={s.modalCloser} onClick={closeModal}>
            <IconClose />

            <span className={g.scOnly}>Закрыть</span>
          </button>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
