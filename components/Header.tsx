import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="flex p-5">
        <h1 className="text-3xl font-extrabold flex-1">Invi Web</h1>
        <div className="px-5 pt-2">Templates</div>
        <div className="px-5 pt-2">Plugins</div>
        <div className="px-5 pt-2">How to Use</div>
        <Button className="px-5">Login</Button>
      </nav>
    </header>
  );
};

export default Header;
