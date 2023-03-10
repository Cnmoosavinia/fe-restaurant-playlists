import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "./Authentication";
import logosolo from "../images/logosolo.jpg";

export default function LogoAndUser() {
    const { user } = useAuth0();
    return (
        <div className="LogoAndUser">
            <div className="logo">
                <Link to="/">
                    <img alt="Munchify logo" src={logosolo} />
                    <div className="company-name">
                        Munchify
                        {/* (if header is too cluttered, we can hide
                    this with media queries) */}
                    </div>
                </Link>
            </div>
            <div className="user-details">
                <div>
                    <Link to="/profile">
                        {user !== undefined ? <div>{user.name}</div> : null}
                    </Link>
                    <AuthenticationButton />
                </div>
                <Link to="/profile">
                    <div className="profile-pic">
                        {user !== undefined ? (
                            <img alt="avatar" src={user.picture}></img>
                        ) : null}
                    </div>
                </Link>
            </div>
        </div>
    );
}
