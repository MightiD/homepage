import { useTranslation } from "next-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";

import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();

  const { widget } = service;
  const { data, error } = useWidgetAPI(widget, "traffic");

  if (error) {
    return <Container service={service} error={error} />;
  }

  if (!data) {
    return (
      <Container service={service}>
        <Block label="wgdashboard.recv" />
        <Block label="wgdashboard.sent" />
      </Container>
    );
  }

  console.log(data.data)

  return (
    <Container service={service}>
      <Block label="wgdashboard.receive" value={`${data.data.recv} MB/s`} />
      <Block label="wgdashboard.sent" value={`${data.data.sent} MB/s`} />
    </Container>
  );
}