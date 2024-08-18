"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function ChildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TonConnectUIProvider manifestUrl="https://eton-pi.vercel.app/tonconnect-manifest.json">
        {children}
      </TonConnectUIProvider>
    </div>
  );
}
