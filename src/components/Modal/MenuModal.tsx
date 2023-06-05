import { useEffect, useState } from "react";
import Modal from "react-modal";
import crossSvg from "@/assets/svgs/cross.svg";
import plusSvg from "@/assets/svgs/plus.svg";
import { Link, useNavigate } from "react-router-dom";
import logoutSvg from "@/assets/svgs/logout.svg";
import axios from "axios";
import { Button } from "../Button";

// Modal.setAppElement("#app");

export default function MenuModal({
  hideModal,
  show,
  datas,
}: {
  hideModal: any;
  show: boolean;
  datas: string[];
}) {
  const navigate = useNavigate();

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // set the background color for the overlay
    },
  };

  const onLoginOut = () => {
    axios.post("api/signout", {});
    localStorage.clear();
    navigate("/sign");
  };

  const onCreatePortPolio = () => {
    navigate("/chatbot");
    hideModal();
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={hideModal}
      ariaHideApp={false}
      className="absolute inset-y-0 left-0 float-left z-50 rounded-br-3xl transition-colors  bg-white w-72 "
      contentLabel="Example Modal"
      style={customStyles}
    ></Modal>
  );
}
