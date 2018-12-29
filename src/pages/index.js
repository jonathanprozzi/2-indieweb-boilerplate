import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import PostListing from "../components/postlisting";
import Archive from "../components/archive";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <h2>Hello!</h2>
    <p>
      Vegan gluten-free asymmetrical, banjo hammock ethical chillwave keytar art
      party blue bottle listicle. Flexitarian brooklyn tacos tofu, kinfolk tbh
      flannel synth kogi bushwick meditation. Drinking vinegar tousled ethical,
      godard 90's enamel pin franzen post-ironic yr scenester lyft. Celiac
      quinoa subway tile brunch coloring book farm-to-table. Activated charcoal
      lumbersexual cold-pressed gluten-free chillwave banjo humblebrag literally
      beard intelligentsia tattooed four loko stumptown vape. Pour-over iceland
      letterpress pop-up seitan shaman.
    </p>
    <hr />
    <PostListing />
    <hr />
    <Archive />
  </Layout>
);

export default IndexPage;
