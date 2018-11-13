import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      404
    </Layout>
  );
});

export default withIntl(IndexPage);
