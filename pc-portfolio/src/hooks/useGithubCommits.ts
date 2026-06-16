import { useState, useEffect } from "react";

export function useGithubCommits(owner: string, repo: string | undefined): number | null {
    const [commits, setCommits] = useState<number | null>(null);

    useEffect(() => {
        if (!owner || !repo) {
            setCommits(0);
            return;
        }

        setCommits(null);

        fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
            .then((response) => {
                const linkHeader = response.headers.get("Link");
                if (linkHeader) {
                    const match = linkHeader.match(/page=(\d+)>; rel="last"/);
                    if (match) setCommits(Number(match[1]));
                } else {
                    response.json().then((data) => {
                        if (Array.isArray(data)) setCommits(data.length);
                    });
                }
            })
            .catch((err) => {
                console.error("Erro ao buscar commits:", err);
                setCommits(0);
            });
    }, [owner, repo]);

    return commits;
}