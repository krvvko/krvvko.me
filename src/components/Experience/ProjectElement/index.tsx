import React, {useEffect, useState} from "react";
import './index.css';
import {ProjectElementProps} from "../../../utils/interfaces";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {useNavigate} from "react-router-dom";
import {useAnimation} from "../../../utils/AnimationContext";
import {usePreferences} from "../../../utils/PreferencesContext";

const ProjectElement: React.FC<ProjectElementProps> = ({
                                                           ProjectCreationDay,
                                                           ProjectDeployed,
                                                           ProjectDifficulty,
                                                           ProjectImages,
                                                           ProjectLongDescription,
                                                           ProjectName,
                                                           ProjectShortDescription,
                                                           ProjectSourceUrl,
                                                           ProjectTechnologies,
                                                           ProjectUrl,
                                                           id,
                                                           onClick
                                                       }) => {
    const [animatedName, setAnimatedName] = useState<string>(ProjectName);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [width, setWidth] = useState(0);
    const {reducedMotion} = usePreferences();
    const {startAnimation, isInProcess} = useAnimation();
    const navigate = useNavigate();
    const formattedDate: string = new Date(ProjectCreationDay).toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout((): void => {
            setWidth(ProjectDifficulty * 10);
        }, 100);

        return () => clearTimeout(timer);
    }, [ProjectDifficulty]);

    const animationSpeed: number = 15;
    const getRandomSymbol = () => {
        const symbols: string = '!@#$%^&*()_+{}:"<>?|[];\',./';
        return symbols[Math.floor(Math.random() * symbols.length)];
    };

    const animateName = (): void => {
        if (!isAnimating) {
            setIsAnimating(true);
            setAnimatedName('');
            let i: number = 0;
            const animate = (step: number, currentAnimatedName: string): void => {
                if (i < ProjectName.length) {
                    if (step < 2 + Math.floor(Math.random() * 4)) {
                        setAnimatedName(currentAnimatedName + getRandomSymbol());
                        setTimeout(() => animate(step + 1, currentAnimatedName), animationSpeed);
                    } else {
                        currentAnimatedName += ProjectName[i];
                        setAnimatedName(currentAnimatedName);
                        i++;
                        setTimeout(() => animate(0, currentAnimatedName), animationSpeed);
                    }
                } else {
                    setIsAnimating(false);
                }
            };
            animate(0, '');
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        if (!isInProcess) {
            if (reducedMotion) {
                window.scrollTo(0, 0)
            }
            reducedMotion ? navigate(`/project/${id}`) : startAnimation(`/project/${id}`);
        }
    }

    return (
        <AnimationOnScroll animateIn="animate__fadeIn project-element-wrapper"
                           animateOnce={true}>
            <button onClick={handleClick} className="project-element"
                    onMouseEnter={animateName}>
                <span className="project-id ">PRJ {id}</span>
                <span className="project-name auto">{animatedName}</span>
                <span className="project-desc auto">{ProjectShortDescription}</span>
                <div className="project-techs">{ProjectTechnologies && ProjectTechnologies.length > 0 ? ProjectTechnologies.map((tech: string, key: number) => (
                    <span key={key}
                          className={`project-tech ${tech}`}>{tech}</span>)) : '-'}</div>
                <div className="project-img">
                    <i className="icon img"></i>
                    <span>{ProjectImages ? ProjectImages.length : 0}</span>
                </div>
                <div className="project-url">{ProjectUrl ?
                    <a target="_blank" rel="noreferrer" href={ProjectUrl}><i
                        className="icon web"/></a> : '-'}</div>
                <div className="project-source">{ProjectSourceUrl ?
                    <a target="_blank" rel="noreferrer" href={ProjectSourceUrl}><i
                        className="icon github"/></a> : '-'}</div>
                <span
                    className={`project-deployed ${ProjectDeployed ? 'true' : 'false'}`}>{ProjectDeployed ? 'Deployed' : 'Not Deployed'}</span>
                <span className="project-date auto">{formattedDate}</span>
                <div className="experience-level auto">
                    <div className="experience-level-inner"
                         style={{width: `${width}%`}}></div>
                </div>
            </button>
        </AnimationOnScroll>
    )
}

export default ProjectElement;