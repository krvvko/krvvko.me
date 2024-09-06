import React, {useEffect, useState} from "react";
import './index.css';
import {ProjectElementProps} from "../../../utils/interfaces";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {useNavigate} from "react-router-dom";
import {useAnimation} from "../../../utils/AnimationContext";
import {usePreferences} from "../../../utils/PreferencesContext";

const ProjectElement: React.FC<ProjectElementProps> = ({
                                                           creation_date,
                                                           deployed,
                                                           difficulty,
                                                           images,
                                                           full_description_en,
                                                           full_description_ru,
                                                           name_ru,
                                                           name_en,
                                                           short_description_en,
                                                           short_description_ru,
                                                           source,
                                                           technologies,
                                                           url,
                                                           id,
                                                           index,
                                                           onClick
                                                       }) => {
    const {reducedMotion, language} = usePreferences();
    const [animatedName, setAnimatedName] = useState<string>(
        language === 'ru' ? name_ru : name_en
    );
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [width, setWidth] = useState(0);
    const {startAnimation, isInProcess} = useAnimation();
    const navigate = useNavigate();
    const formattedDate: string = new Date(creation_date).toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout((): void => {
            setWidth(difficulty * 10);
        }, 100);

        return () => clearTimeout(timer);
    }, [difficulty]);

    const animationSpeed: number = 15;
    const getRandomSymbol = () => {
        const symbols: string = '!@#$%^&*()_+{}:"<>?|[];\',./';
        return symbols[Math.floor(Math.random() * symbols.length)];
    };

    const animateName = (): void => {
        const ProjectName = language === 'ru' ? name_ru : name_en;

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
                    onMouseEnter={reducedMotion ? () => {} : animateName}>
                <span className="project-id">PRJ {index}</span>
                <span className="project-name auto">{animatedName}</span>
                <span className="project-desc auto">{language === 'ru' ? short_description_ru : short_description_en}</span>
                <div className="project-techs">
                    {technologies && technologies.length > 0 ?
                        technologies.map((tech: string, key: number) => (
                            <span key={key} className={`project-tech ${tech}`}>{tech}</span>
                        )) : '-'}
                </div>
                <div className="project-img">
                    <i className="icon img"></i>
                    <span>{images ? images.length : 0}</span>
                </div>
                <div className="project-url">
                    {url ?
                        <a target="_blank" rel="noreferrer" href={url}>
                            <i className="icon web"/>
                        </a> : '-'}
                </div>
                <div className="project-source">
                    {source ?
                        <a target="_blank" rel="noreferrer" href={source}>
                            <i className="icon github"/>
                        </a> : '-'}
                </div>
                <span className={`project-deployed ${deployed ? 'true' : 'false'}`}>
                {deployed ? 'Deployed' : 'Not Deployed'}
            </span>
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