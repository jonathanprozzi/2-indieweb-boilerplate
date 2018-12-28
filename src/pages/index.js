import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <h2>Hello!</h2>
    <p>Lorem ipsum dolor amet selfies pinterest brunch DIY snackwave. Post-ironic truffaut pok pok hot chicken tattooed bespoke normcore man braid. Crucifix neutra tbh tumeric literally church-key gluten-free stumptown. Tbh flexitarian messenger bag four loko af hashtag. Direct trade coloring book mumblecore retro, crucifix lumbersexual affogato cloud bread. Plaid snackwave vinyl, knausgaard poutine austin vegan freegan disrupt waistcoat art party meditation chambray succulents kinfolk. Mustache bespoke viral, readymade man bun you probably haven't heard of them bitters air plant.</p>

    <p>Mixtape kinfolk cornhole tumeric succulents selfies. Ugh four dollar toast before they sold out, poke chillwave chia farm-to-table twee. Literally pork belly snackwave, wolf vinyl you probably haven't heard of them DIY kale chips hashtag shabby chic dreamcatcher succulents shoreditch. Whatever slow-carb selvage 3 wolf moon, celiac fixie scenester literally. Craft beer forage keytar marfa DIY kickstarter XOXO.
    </p>
  </Layout>
);

export default IndexPage;
