import React from "react";
import { Title2 } from "../../../components/core";
import PriceCard from "../../../components/PriceCard";
import { PricingWrapper, PricesCardContainer } from "./style";

const Pricing = () => {
  return (
    <PricingWrapper>
      <Title2> Choose your plan </Title2>
      <PricesCardContainer>
        <PriceCard
          title="Starter"
          offers={["Dashboard", "Limited Support", "Forever free"]}
        />
        <PriceCard
          title="Premium"
          price={29}
          variant="contained"
          offers={[
            "Dashboard & Analysis",
            "Premium Support",
            "Tracking Service",
          ]}
        />
        <PriceCard
          title="Enterprise"
          price={49}
          offers={[
            "All features in Premium",
            "Realtime overview",
            "Mobile app",
          ]}
        />
      </PricesCardContainer>
    </PricingWrapper>
  );
};

export default Pricing;
