import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactMarkdown from "react-markdown";

export const TrafficRoute = () => {
    const [markdown, setMarkdown] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/projects/traffic-route-optimizer.md")
        .then((res) => {
            if (!res.ok) throw new Error("README not found");
            return res.text();
        })
        .then((text) => setMarkdown(text))
        .catch((err) => {
            console.error("Markdown fetch error:", err);
            setError(true);
        });
    }, []);

    return (
        <HelmetProvider>
        <Helmet>
        <title>Traffic Route Optimizer | Deepansh</title>
        </Helmet>
        <div className="markdown-body">
        <ReactMarkdown>{markdown}</ReactMarkdown>}
        </div>
        </HelmetProvider>
    );
};
