import './index.css'
import {NavLink} from "react-router-dom";

const Logo = () => {
    return(
        <NavLink to="/" className="nav-bar-link">
            <div className="logo-container">

                <div className="header-text-block">
                    <span className="header-title"> krvvko</span>
                </div>

                <svg className="header-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                    <path d="M221.885,143.581c-2.198-9.014-5.014-17.223-8.019-24.521c-2.408-5.853-4.952-11.109-7.403-15.706
			c-3.581-6.722-6.984-12.031-9.528-15.706H56.786v-0.003h-9.25c-8.891,0-16.125-7.234-16.125-16.125
			c0-8.891,7.234-16.125,16.125-16.125h72.304v-31.41H47.537C21.325,23.985,0,45.311,0,71.521c0,24.159,18.12,44.151,41.481,47.137
			c0,0.005,0,0.009,0,0.015c1.508,28.835,7.371,54.645,17.475,76.874c10.01,22.009,24.176,40.636,42.133,55.346
			c31.149,25.537,64.791,32.217,77.805,33.914c2.712,0.346,4.387,0.461,4.691,0.482l0.482,0.031h9.005
			c3.455-5.225,6.638-10.46,9.539-15.706c2.921-5.225,5.56-10.46,7.937-15.706C227.089,217.451,230.911,180.48,221.885,143.581z
			 M169.524,171.214h-24.522v-24.522h24.522V171.214z"/>
                    <path d="M502.105,203.337c-1.267,5.162-2.806,10.512-4.649,15.988c-1.215,3.591-2.586,7.308-4.157,11.12v0.01
			c-3.351,8.177-7.549,16.784-12.805,25.527c-12.177,20.281-30.05,41.348-56.247,59.744c-4.335,3.047-8.889,6.01-13.695,8.889
			c-4.544,2.722-9.298,5.371-14.271,7.916c0.775,3.801,1.183,7.727,1.183,11.748c0,27.222-18.562,50.203-43.689,56.947
			c-5.205-24.956-27.324-43.706-53.824-43.706H235.67v10.26c0,30.368,24.619,54.987,54.988,54.987
			c-30.369,0-54.988,24.619-54.988,54.987v10.26h64.282c30.085,0,54.512-24.165,54.966-54.141c0.002,0,0.004,0,0.005,0
			C442.916,425.582,512,351.273,512,261.144C512,240.884,508.513,221.43,502.105,203.337z"/>
                    <path d="M358.891,88.844c2.618,5.12,5.256,10.805,7.759,17.014c2.188,5.403,4.272,11.214,6.157,17.391
			c0.953,3.12,1.853,6.345,2.691,9.654c7.895,31.212,10.983,75.198-8.722,125.54c-1.864,4.774-3.937,9.601-6.23,14.481
			c-2.22,4.712-4.638,9.465-7.277,14.271c11.235,2.911,21.182,9.046,28.773,17.37c4.858-2.482,9.528-5.089,14.02-7.832
			c4.555-2.775,8.931-5.675,13.109-8.722c27.736-20.155,47.19-46.08,58.09-77.47c0.639-1.843,1.236-3.675,1.79-5.487
			c2.618-8.512,4.345-16.616,5.466-23.956c1.539-10.104,1.927-18.763,1.916-25.087C448.602,119.584,406.689,94.456,358.891,88.844z"
                    />
                    <path d="M345.05,140.61c-1.979-7.821-4.377-15.025-6.942-21.548c-2.272-5.78-4.68-11.036-7.047-15.706
			c-3.214-6.356-6.366-11.622-9.025-15.706h-88.328c2.523,4.67,5.12,9.926,7.633,15.706c2.125,4.869,4.178,10.114,6.083,15.706
			c1.675,4.911,3.225,10.083,4.596,15.517c7.528,29.757,10.544,71.513-7.57,119.331c-1.948,5.162-4.157,10.408-6.628,15.706
			c-2.408,5.172-5.078,10.418-8.031,15.706h88.119c3.33-5.225,6.397-10.46,9.203-15.706c2.817-5.225,5.361-10.46,7.654-15.706
			C351.164,216.446,354.63,178.501,345.05,140.61z"/>
                </svg>
            </div>
        </NavLink>

    )
}

export default Logo;