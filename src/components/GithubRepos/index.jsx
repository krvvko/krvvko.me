import './index.css'
import {useEffect, useState} from "react";
import axios from "axios";

const GithubRepos = ({sortBy, reposAmount}) => {

    const [sortType, setSortType] = useState(sortBy);
    const [repos, setRepos] = useState([]);

    async function getRepos() {
        await axios
            .get("https://api.github.com/users/krvvko/repos")
            .then((res) => {
                const reposData = res.data;
                setRepos(reposData);
            });
    }
    const getSortType = (a, b) => {
        const result =
            sortType === "date"
                ? new Date(b["created_at"]) - new Date(a["created_at"])
                : sortType === "stars"
                    ? b["stargazers_count"] - a["stargazers_count"]
                    : setSortType("stars");
        return Number(result);
    };

    const getReposList = (name, description, date, language, id, stargazers_count) => {
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let date_n = new Date(date);
        let month = months[date_n.getMonth()];
        return (
            <a key={id} className="repo-container" href={`https://github.com/krvvko/${name}`} target="_blank">
                    <svg className="repo-svg" width="32px" height="32px" viewBox="0 0 32 32"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                    <div className="repo-text-container">
                        <div className="repo-title-container">
                            <h3 className="repo-headline">{name}</h3>
                            <span className="repo-lang-numbers">{language}</span>
                            <span className="repo-stars">☆{stargazers_count}</span>
                        </div>
                        <p className="repo-description bp-desc">{description}</p>
                        <p className="repo-date bp-date"><span className="repo-date-numbers">{`${month} ${date_n.getDate()}, ${date_n.getFullYear()}`}</span></p>
                    </div>
            </a>
        );
    };

    useEffect(() => {
        getRepos();
    }, []);

    return (
        <div className="all-repos-container">
            {repos
                .sort((a, b) => getSortType(a, b))
                .map((el, index) =>
                    index < reposAmount
                        ? getReposList(
                            el.name,
                            el.description,
                            el["created_at"].split("T")[0],
                            el.language,
                            el.id,
                            el.stargazers_count
                        )
                        : null
                )}
        </div>
    )

}

export default GithubRepos;