import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactMarkdown from "react-markdown";

const ProjectPage = () => {
    const { slug } = useParams(); // 🔑 Get the dynamic part from the URL
    const [markdown, setMarkdown] = useState("Loading project...");
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`/projects/${slug}.md`)
        .then((res) => {
            if (!res.ok) throw new Error("Project not found.");
            return res.text();
        })
        .then((text) => setMarkdown(text))
        .catch((err) => {
            console.error(err);
            setError(true);
            setMarkdown("❌ Project README not found.");
        });
    }, [slug]);

    return (
        <HelmetProvider>
        <Helmet>
        <title>{slug.replace(/-/g, " ")} | Deepansh</title>
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

        {error ? (
            <p style={{ color: "red" }}>{markdown}</p>
        ) : (
            <ReactMarkdown>{markdown}</ReactMarkdown>
        )}
        </div>
        </HelmetProvider>
    );
};

export default ProjectPage;
