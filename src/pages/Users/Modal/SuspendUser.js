import React from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const SuspendUserModal = ({ isOpen, onClose }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onClose}
      style={{
        width: "35%",
        borderRadius: "20px",
        border: "1px solid var(--light-2, #EAEAEA)",
        boxShadow: "0px 20px 32px 0px rgba(102, 102, 102, 0.12)",
        padding: "28px",
      }}
    >
      <div className="d-flex d-flex-column gap-3">
        <div className="d-flex d-justify-space-between">
          <p className="font-18 f-700">Do you want to suspend user?</p>
          <button className="closeButton" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                fill="#252322"
              />
            </svg>{" "}
          </button>
        </div>

        <p className="text-grey">
          The user will no longer be able to trade in the marketplace
        </p>

        <button className="red-button mt-5 align-self-end f-700">
          Suspend user
        </button>
      </div>
    </Dialog>
  );
};

export default SuspendUserModal;
