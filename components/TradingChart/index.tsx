"use client";
import React, { useEffect, useRef } from "react";

const TradingChart = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTradingViewWidget = () => {
      if (container.current) {
        // Clear any existing children
        container.current.innerHTML = "";

        // Create widget container
        const widgetContainer = document.createElement("div");
        widgetContainer.className = "tradingview-widget-container__widget";
        widgetContainer.style.height = "100%";
        widgetContainer.style.width = "100%";

        // Create script element
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

        // Widget configuration
        const config = {
          autosize: true,
          symbol: "BITSTAMP:BTCUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          allow_symbol_change: true,
          calendar: false,
          support_host: "https://www.tradingview.com",
        };

        // Attach configuration to script
        script.innerHTML = `
          window.onload = function() {
            new TradingView.widget(${JSON.stringify(config)});
          }
        `;

        // Append elements
        container.current.appendChild(widgetContainer);
        container.current.appendChild(script);
      }
    };

    loadTradingViewWidget();
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "400px", width: "100%" }}
    />
  );
};

export default TradingChart;
