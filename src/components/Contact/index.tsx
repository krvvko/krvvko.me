import React from "react";
import './index.css';
import {Link} from "react-router-dom";
import LinkElement from "./LinkElement";
import { useServerData } from "../../utils/ServerDataContext";
import ContactDescriptionElement from "./ContactDescriptionElement";
import {usePreferences} from "../../utils/PreferencesContext";

const Contact: React.FC = () => {
    const {experience, projects} = useServerData();
    const {translation} = usePreferences();

    return (
        <div className="contact-me-container">
            <div className="contact-me-links">
                <div className="contact-me-links-top">
                    <LinkElement link={'https://github.com/krvvko'} title={'Github'} username={'@krvvko'}
                                 icon={'github2'}/>
                    <LinkElement link={'https://www.linkedin.com/in/krvvko/'} title={'Linked In'} username={'@krvvko'}
                                 icon={'linkedin'}/>
                </div>
                <div className="contact-me-links-bottom">
                    <Link to='mailto:krvvko@gmail.com' target="_blank" rel="noreferrer" className="contact-me-link-bottom mail">
                        <i className="icon email"></i>
                        <span>{translation.contact.emailMe}</span>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/krvvko_resume.pdf`} target="_blank" rel="noreferrer" className="contact-me-link-bottom portfolio">
                        <i className="icon portfolio"></i>
                        <span>{translation.contact.myResume} (pdf)</span>
                    </Link>
                    <Link to='https://booking.appointy.com/krvvko/' target="_blank" rel="noreferrer" className="contact-me-link-bottom appointment">
                        <i className="icon time"></i>
                        <span>{translation.contact.scheduleMeeting}</span>
                    </Link>
                </div>
            </div>
            <div className="contact-me-desc">
                <ContactDescriptionElement title={translation.contact.projectsCompleted} amount={projects?.length} suffix={'+'} />
                <ContactDescriptionElement title={translation.contact.learnedTechnologies} amount={experience?.length} />
                <ContactDescriptionElement title={translation.contact.developingExperience} amount={4} suffix={translation.contact.suffix} />
            </div>
        </div>
    )
}

export default Contact;