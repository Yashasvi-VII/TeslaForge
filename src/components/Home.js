import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftbuttontext="Custom order"
        rightbuttontext="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftbuttontext="Custom order"
        rightbuttontext="Existing inventory"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftbuttontext="Custom order"
        rightbuttontext="Existing inventory"
      />

      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftbuttontext="Custom order"
        rightbuttontext="Existing inventory"
      />

      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftbuttontext="ORDER NOW"
        rightbuttontext="LEARN MORE"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy
        From Your Roo"
        backgroundImg="solar-roof.jpg"
        leftbuttontext="ORDER NOW"
        rightbuttontext="LEARN MORE"
      />
      <Section
        title="Accessories"
        // description="Produce Clean Energy
        backgroundImg="accessories.jpg"
        leftbuttontext="SHOP NOW"
        //rightbuttontext="LEARN MORE"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
