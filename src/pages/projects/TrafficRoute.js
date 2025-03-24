import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactMarkdown from "react-markdown";

export const TrafficRoute = () => {
    const [markdown, setMarkdown] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/traffic-route-readme.md")
        .then((res) => {
            if (!res.ok) throw new Error("README not found");
            return res.text();
        })
        .then((text) => {
            setMarkdown(text);
        })
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

        <div
        className="markdown-body"
        style={{
            position: "relative",
            zIndex: 10,
            background: "white",
            padding: "2rem",
            maxWidth: "900px",
            margin: "0 auto",
        }}
        >
        <h2>Traffic Route Optimizer</h2>

        <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>

        </HelmetProvider>
    );

};
