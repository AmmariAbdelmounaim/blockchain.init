"use client";
import { Fragment } from "react";
import ConnectWallet from "@/components/ConnectWallet";
import { IncredibleStorage } from "@/components/IncredibleStorage/IncredibleStorage";

export default function Home() {
  return (
    <Fragment>
      <ConnectWallet />
      <IncredibleStorage />
    </Fragment>
  );
}
