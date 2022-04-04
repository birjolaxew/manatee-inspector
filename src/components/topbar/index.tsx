import React from "react";
import { Link, NavLink, useMatch } from "react-router-dom";

import { useApplications } from "../../hooks";
import { AppSelector } from "../../pages/LandingPage";
import { HomeIcon, NodeSelectIcon, PlusIcon, SettingsIcon } from "../icons";

import style from "./topbar.module.css";

const Divider = () => <div className={style.divider} />;

export default function Topbar() {
    const { active } = useApplications();
    const isSettings = !!useMatch("/settings");

    return <div className={style.bar}>
        <NodeSelectButton disabled={!active} />
        <Divider />
        <Link to="/settings/" className={style["button"]}>
            <PlusIcon />
        </Link>
        <div className={[style.item, style["text-item"]].join(" ")}>
            Application:
            <AppSelector />
        </div>
        <span className={style.filler} />
        <Link to={isSettings ? "/" : "/settings/"} className={[style["button"], isSettings ? "active" : ""].join(" ")}>
            <SettingsIcon />
        </Link>
    </div>
}

export const NodeSelectButton = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button className={[style.item, style.button, className].join(" ")}>
        <NodeSelectIcon />
    </button>;
}