import HeaderBox from "@/components/HeaderBox";
import TotalBalenceBox from "@/components/TotalBalenceBox";
import React from "react";

function Home() {
  const LoggedIn = { firstName: "Vaishaal" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || "Guest"}
            subtext="Access and Manage your Bank Accounts"
          />
          <TotalBalenceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={1025.5}
          />
        </header>
      </div>
    </section>
  );
}

export default Home;
