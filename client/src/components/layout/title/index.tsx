import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import React from "react";

import logo from "../../../assets/logo.png";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="ChairCare Solutions" style={{ width: collapsed ? '30px' : '30px', marginLeft: "18px" }} />
          <span style={{ display: collapsed ? 'none' : 'block', fontSize: '16px', fontWeight: 'bold', color: '#777', textTransform: 'none', marginRight: "32px" }}>ChairCare Solutions</span>
        </div>
      </Link>
    </Button>
  );
};
