import React, {useEffect, useState} from "react";
import './index.css';
import {ExperienceElementProps} from "../../../utils/interfaces";
import {AnimationOnScroll} from "react-animation-on-scroll";

const ExperienceElement: React.FC<ExperienceElementProps> = ({
        name,
        language,
        knowledgeLevel,
        startDate,
        description,
        id}) => {
    const [width, setWidth] = useState<number>(0);
    const formattedDate: string = new Date(startDate).toLocaleDateString(
        "en-US",{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
);
    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout((): void => {
            setWidth(knowledgeLevel * 10);
        }, 100);

        return () => clearTimeout(timer);
    }, [knowledgeLevel]);

    return (
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className="experience-element">
                <span className="experience-id">TECH {id}</span>
                <span className="experience-name">{name}</span>
                <span className="experience-lang">{language}</span>
                <span className="experience-description">{description}</span>
                <span className="experience-date">{formattedDate}</span>
                <div className="experience-level">
                    <div className="experience-level-inner"
                         style={{width: `${width}%`}}></div>
                </div>
            </div>
        </AnimationOnScroll>

    )
}

export default ExperienceElement;