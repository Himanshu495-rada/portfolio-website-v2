import React from "react";
import {
  HouseSimple,
  Stack,
  GraduationCap,
  EnvelopeSimple,
  User,
} from "@phosphor-icons/react";
import { useNavigate, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const nav = useNavigate();

  return (
    <>
      <div className={styles.navContainer}>
        <ul>
          <li>
            <NavLink to={"/"} aria-label="Home">
              <HouseSimple />
            </NavLink>
          </li>
          <li>
            <User onClick={() => nav("/about")} />
          </li>
          <li>
            <Stack onClick={() => nav("/projects")} />
          </li>
          <li>
            <GraduationCap onClick={() => nav("/experience")} />
          </li>
          <li>
            <EnvelopeSimple onClick={() => nav("/contact")} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
