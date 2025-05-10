import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget =  {
  api: "{url}/api/{endpoint}" ,
  proxyHandler: credentialedProxyHandler ,

  mappings:  {
    traffic:  {
      endpoint: "getWireguardConfigurationRealtimeTraffic?configurationName={configuration}",
      segments: ["configuration"]
    },
  },
};

export default widget;