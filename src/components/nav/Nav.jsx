import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineDesktop,
  AiOutlineAudit,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsGripHorizontal } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import Draggable, { DraggableCore } from "react-draggable";

const Nav = ( {inViews}) => {
  const [activeNav, setActiveNav] = useState("#");

  // console.log(Object.entries(inViews).map(item => {
  //   console.log(item)
  // }))

  useEffect(()=>{

    if(inViews[0]){
      setActiveNav("#")
    }
    if(inViews[1]){
      setActiveNav("#about")
    }
    if(inViews[2]){
      setActiveNav("#experience")
    }
    if(inViews[3]){
      console.log("hi")
      setActiveNav("#projects")
    }
    if(inViews[4]){
      setActiveNav("#contacts")
    }

  }, inViews)



  return (
        <Draggable>
          <nav>
            <a className="gripper">
              <BsGripHorizontal />
            </a>

            <a
              href="#"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              <AiOutlineHome />
            </a>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              <AiOutlineUser />
            </a>
            <a
              href="#experience"
              onClick={() => setActiveNav("#experience")}
              className={activeNav === "#experience" ? "active" : ""}
            >
              <AiOutlineDesktop />
            </a>
            <a
              href="#projects"
              onClick={() => setActiveNav("#projects")}
              className={activeNav === "#projects" ? "active" : ""}
            >
              <AiOutlineAudit />
            </a>
            <a
              href="#contacts"
              onClick={() => setActiveNav("#contacts")}
              className={activeNav === "#contacts" ? "active" : ""}
            >
              <AiOutlinePhone />
            </a>
          </nav>
        </Draggable>


  );
};

export default Nav;
