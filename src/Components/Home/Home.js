import './Home.css';
import ContentBoxx from "../ContentBox1/ContentBox";
import ContactUs from '../Contact_Us/ContactUs';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Chart from 'chart.js/auto';
import LineChart from '../LineChart/LineChart.jsx';
import { HomeAbout } from '../Home/HomeCarousel';
import ProjectBox from '../ProjectBox/ProjectBox.jsx';
import EventsBox from '../EventsBox/EventBox.jsx';


import TeamPicMain from '../Resources/Home_main.jpeg';
import Pinaka from '../Resources/exploded pinaka.png';
import Cansat from '../Resources/exploaded cansat.jpg';
import Home_Contact1 from '../Resources/Home_ContactUs1.JPG';
import Home_Contact2 from '../Resources/Home_ContactUs2.JPG';
import { EventsPics } from '../EventsBox/EventsPics.js';
import FillerImage from '../FillerImage/FillerImage.jsx';
import O2 from '../Resources/O2-01.png';







function Home(props) {
    const cntntsize = "1.45vmax";
    const eventswidth = "30vh";

    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, []);


    // const fs = 125; // Sample frequency in Hz

    // // Define frequency bands
    // const f_vlf = [0.0033, 0.04]; // Very low frequency band (Hz)
    // const f_lf = [0.04, 0.15];     // Low frequency band (Hz)
    // const f_hf = [0.15, 0.4];      // High frequency band (Hz)

    // // Assuming heart_rate_data is an array containing heart rate data
    // const heart_rate_data = [-3.3521e-006, -0.00078597, -0.01444, -0.069323, -0.13504, -0.13201, -0.11715, -0.18003, -0.19048, -0.1092, -0.13844, -0.19835, -0.13095, -0.11182, -0.16376, -0.12906, -0.081186, -0.13302, -0.14731, -0.085075, -0.12198, -0.16608, -0.097208, 0.096487, -0.16829, -0.11396, -0.071979, -0.16063, -0.14684, -0.048945, 0.083339, -0.11158, 0.011667, 0.050128, 0.017387, 0.087601, 0.099052, 0.033043, 0.055315, 0.11767, 0.075126, 0.00092971, -0.0066405, -0.016547, -0.039243, -0.0017631, 0.0014236, -0.11669, -0.15701, -0.097203, -0.16523, -0.22374, -0.13687, -0.13928, -0.19477, -0.13843, -0.10777, -0.16704, -0.15722, -0.15078, -0.25347];

    // // Compute Lomb-Scargle periodogram
    // // This function needs to be implemented separately in JavaScript or you can use an existing library

    // // Compute power spectrum density (PSD)
    // const power = computePowerSpectrumDensity(heart_rate_data, fs);
    // const psd = power.map(value => value / (0.5 * heart_rate_data.length));

    // // Compute indices for frequency bands
    // const freq = computeFrequency(heart_rate_data.length, fs);
    // const ind_vlf = findIndices(freq, f_vlf);
    // const ind_lf = findIndices(freq, f_lf);
    // const ind_hf = findIndices(freq, f_hf);

    // // Compute VLF, LF, and HF components
    // const VLF = trapz(psd, ind_vlf);
    // const LF = trapz(psd, ind_lf);
    // const HF = trapz(psd, ind_hf);

    // // Display results
    // console.log('VLF Power: ', VLF);
    // console.log('LF Power: ', LF);
    // console.log('HF Power: ', HF);

    // // Helper functions
    // function computePowerSpectrumDensity(data, sampleFrequency) {
    //     const n = data.length;
    //     const f = []; // Frequencies
    //     const p = []; // Power

    //     // Compute frequencies
    //     for (let i = 0; i < n; i++) {
    //         f.push(i / (n * sampleFrequency));
    //     }

    //     // Compute mean
    //     let mean = 0;
    //     for (let i = 0; i < n; i++) {
    //         mean += data[i];
    //     }
    //     mean /= n;

    //     // Compute power spectrum density using Lomb-Scargle periodogram
    //     for (let i = 0; i < n; i++) {
    //         let tau = 0;
    //         for (let j = 0; j < n; j++) {
    //             tau += (data[j] - mean) * Math.cos(2 * Math.PI * f[i] * j);
    //         }
    //         let c = 0;
    //         let s = 0;
    //         for (let j = 0; j < n; j++) {
    //             c += Math.cos(4 * Math.PI * f[i] * j);
    //             s += Math.sin(4 * Math.PI * f[i] * j);
    //         }
    //         p.push((tau * tau) / ((c * c) + (s * s)));
    //     }

    //     return p;
    // }

    // function computeFrequency(dataLength, sampleFrequency) {
    //     const freq = [];
    //     for (let i = 0; i < dataLength / 2; i++) {
    //         freq.push((i / dataLength) * sampleFrequency);
    //     }
    //     return freq;
    // }

    // function findIndices(freq, band) {
    //     const indices = [];
    //     for (let i = 0; i < freq.length; i++) {
    //         if (freq[i] >= band[0] && freq[i] <= band[1]) {
    //             indices.push(i);
    //         }
    //     }
    //     return indices;
    // }

    // function trapz(data, indices) {
    //     let integral = 0;
    //     for (let i = 1; i < indices.length; i++) {
    //         integral += 0.5 * (data[indices[i]] + data[indices[i - 1]]);
    //     }
    //     return integral;
    // }

    return (
        <>
            <div className='HomeWrapper' style={{ color: props.color }}>
                {/* <div className='WholePage' id='TitleContainer' > */}
                {/* <h1 data-aos="fade-in" id='TitleText' style={{ marginBlock: 'auto', color: props.color }}>TECH FORGE</h1> */}
                <h1 id='TitleText' style={{ marginTop: "50px", marginBottom: "50px" }}>TECH FORGE</h1>
                {/* </div> */}
                {/* <div style={{width : "600px", height : "400px", margin : "0 auto"}}> */}

                <div style={{ display: "flex", justifyContent: "space-around", maxHeight: "600px", marginBottom: "20px" }}>
                    <LineChart
                        id="id"
                        data={{
                            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550],
                            datasets: [
                                {
                                    id: 1,
                                    label: 'Heart Beat',
                                    data: [-3.3521e-006, -0.00078597, -0.01444, -0.069323, -0.13504, -0.13201, -0.11715, -0.18003, -0.19048, -0.1092, -0.13844, -0.19835, -0.13095, -0.11182, -0.16376, - 0.12906, -0.081186, -0.13302, -0.14731, -0.085075, -0.12198, -0.16608, -0.097208, - 0.096487, -0.16829, -0.11396, -0.071979, -0.16063, -0.14684, -0.048945, - 0.083339, -0.11158, 0.011667, 0.050128,
                                        0.017387, 0.087601, 0.099052, 0.033043, 0.055315, 0.11767, 0.075126, 0.00092971, -0.0066405, -0.016547, -0.039243, -0.0017631, 0.0014236, -0.11669, -0.15701, -0.097203, -0.16523, -
                                    0.22374, -0.13687, -0.13928, -0.19477, -0.13843, -0.10777, -0.16704, -0.15722, -
                                    0.15078, -0.25347, -0.21894, 0.12456, 0.63318, 1.3865, 2.338, 2.707, 2.1455, 1.0973, 0.19961, - 0.47019, -0.91259, -0.88259, -0.7607, -0.71554, -0.5154, -0.3101, -0.21767, - 0.10917, 0.017239, 0.009699, -0.027035, 0.059993, 0.051329, - 0.013513, 0.060047, 0.092538, 0.026493, 0.048626, 0.11683, 0.068182, 0.016884,

                                        0.077782, 0.090676, 0.046846, 0.092566, 0.13618, 0.10997, 0.13734, 0.20043, 0.19478, 0.19395, .28779, 0.3444, 0.35288, 0.45451, 0.54366, 0.52055, 0.5846, 0.70123, 0.66845, 0.64716, 0.7188, 0.70188, 0.63048, 0.64335, 0.64998, 0.53268, 0.4599, 0.44727, 0.31589, 0.22536, 0.2468, 0.16227,
                                        0.066743, 0.089265, 0.051448, -0.039128, -3.3521e-006, -0.00078597, -0.01444, -0.069323, -0.13504, -0.13201, -0.11715, -0.18003, -0.19048, -0.1092, -0.13844, -0.19835, -0.13095, -0.11182, -0.16376, - 0.12906, -0.081186, -0.13302, -0.14731, -0.085075, -0.12198, -0.16608, -0.097208, - 0.096487, -0.16829, -0.11396, -0.071979, -0.16063, -0.14684, -0.048945, - 0.083339, -0.11158, 0.011667, 0.050128,
                                        0.017387, 0.087601, 0.099052, 0.033043, 0.055315, 0.11767, 0.075126, 0.00092971, -0.0066405, -0.016547, -0.039243, -0.0017631, 0.0014236, -0.11669, -0.15701, -0.097203, -0.16523, -
                                    0.22374, -0.13687, -0.13928, -0.19477, -0.13843, -0.10777, -0.16704, -0.15722, -
                                    0.15078, -0.25347, -0.21894, 0.12456, 0.63318, 1.3865, 2.338, 2.707, 2.1455, 1.0973, 0.19961, - 0.47019, -0.91259, -0.88259, -0.7607, -0.71554, -0.5154, -0.3101, -0.21767, - 0.10917, 0.017239, 0.009699, -0.027035, 0.059993, 0.051329, - 0.013513, 0.060047, 0.092538, 0.026493, 0.048626, 0.11683, 0.068182, 0.016884,

                                        0.077782, 0.090676, 0.046846, 0.092566, 0.13618, 0.10997, 0.13734, 0.20043, 0.19478, 0.19395, .28779, 0.3444, 0.35288, 0.45451, 0.54366, 0.52055, 0.5846, 0.70123, 0.66845, 0.64716, 0.7188, 0.70188, 0.63048, 0.64335, 0.64998, 0.53268, 0.4599, 0.44727, 0.31589, 0.22536, 0.2468, 0.16227,
                                        0.066743, 0.089265, 0.051448, -0.039128, -3.3521e-006, -0.00078597, -0.01444, -0.069323, -0.13504, -0.13201, -0.11715, -0.18003, -0.19048, -0.1092, -0.13844, -0.19835, -0.13095, -0.11182, -0.16376, - 0.12906, -0.081186, -0.13302, -0.14731, -0.085075, -0.12198, -0.16608, -0.097208, - 0.096487, -0.16829, -0.11396, -0.071979, -0.16063, -0.14684, -0.048945, - 0.083339, -0.11158, 0.011667, 0.050128,
                                        0.017387, 0.087601, 0.099052, 0.033043, 0.055315, 0.11767, 0.075126, 0.00092971, -0.0066405, -0.016547, -0.039243, -0.0017631, 0.0014236, -0.11669, -0.15701, -0.097203, -0.16523, -
                                    0.22374, -0.13687, -0.13928, -0.19477, -0.13843, -0.10777, -0.16704, -0.15722, -
                                    0.15078, -0.25347, -0.21894, 0.12456, 0.63318, 1.3865, 2.338, 2.707, 2.1455, 1.0973, 0.19961, - 0.47019, -0.91259, -0.88259, -0.7607, -0.71554, -0.5154, -0.3101, -0.21767, - 0.10917, 0.017239, 0.009699, -0.027035, 0.059993, 0.051329, - 0.013513, 0.060047, 0.092538, 0.026493, 0.048626, 0.11683, 0.068182, 0.016884,

                                        0.077782, 0.090676, 0.046846, 0.092566, 0.13618, 0.10997, 0.13734, 0.20043, 0.19478, 0.19395, .28779, 0.3444, 0.35288, 0.45451, 0.54366, 0.52055, 0.5846, 0.70123, 0.66845, 0.64716, 0.7188, 0.70188, 0.63048, 0.64335, 0.64998, 0.53268, 0.4599, 0.44727, 0.31589, 0.22536, 0.2468, 0.16227,
                                        0.066743, 0.089265, 0.051448, -0.039128, -3.3521e-006, -0.00078597, -0.01444, -0.069323, -0.13504, -0.13201, -0.11715, -0.18003, -0.19048, -0.1092, -0.13844, -0.19835, -0.13095, -0.11182, -0.16376, - 0.12906, -0.081186, -0.13302, -0.14731, -0.085075, -0.12198, -0.16608, -0.097208, - 0.096487, -0.16829, -0.11396, -0.071979, -0.16063, -0.14684, -0.048945, - 0.083339, -0.11158, 0.011667, 0.050128,
                                        0.017387, 0.087601, 0.099052, 0.033043, 0.055315, 0.11767, 0.075126, 0.00092971, -0.0066405, -0.016547, -0.039243, -0.0017631, 0.0014236, -0.11669, -0.15701, -0.097203, -0.16523, -
                                    0.22374, -0.13687, -0.13928, -0.19477, -0.13843, -0.10777, -0.16704, -0.15722, -
                                    0.15078, -0.25347, -0.21894, 0.12456, 0.63318, 1.3865, 2.338, 2.707, 2.1455, 1.0973, 0.19961, - 0.47019, -0.91259, -0.88259, -0.7607, -0.71554, -0.5154, -0.3101, -0.21767, - 0.10917, 0.017239, 0.009699, -0.027035, 0.059993, 0.051329, - 0.013513, 0.060047, 0.092538, 0.026493, 0.048626, 0.11683, 0.068182, 0.016884,

                                        0.077782, 0.090676, 0.046846, 0.092566, 0.13618, 0.10997, 0.13734, 0.20043, 0.19478, 0.19395, .28779, 0.3444, 0.35288, 0.45451, 0.54366, 0.52055, 0.5846, 0.70123, 0.66845, 0.64716, 0.7188, 0.70188, 0.63048, 0.64335, 0.64998, 0.53268, 0.4599, 0.44727, 0.31589, 0.22536, 0.2468, 0.16227,
                                        0.066743, 0.089265, 0.051448, -0.039128],
                                },

                            ],
                        }}
                    />




                </div>
                <div style={{ display: "flex", justifyContent: "space-around", maxHeight: "400px" }}>
                    <FillerImage
                        style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", border: "2px solid #008080", borderRadius: "10px", background: `linear-gradient(#008080, #00808090)` }}
                        head="O"
                        hs={2}
                        val="97%"
                        alt="sample"
                    />

                    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                        <FillerImage
                            style={{ display: "flex", flexDirection: "row", border: "2px solid #008080", borderRadius: "10px", alignItems: "center", gap: "20px", background: `linear-gradient(#008080, #00808090)` }}
                            head="H"
                            hs="F"
                            val={0.095}
                            alt="sample"
                        />
                        <FillerImage
                            style={{ display: "flex", flexDirection: "row", border: "2px solid #008080", borderRadius: "10px", alignItems: "center", gap: "20px", background: `linear-gradient(#008080, #00808090)` }}
                            head="L"
                            hs="F"
                            val={0.054}
                            alt="sample"
                        />
                    </div>
                    <FillerImage
                        style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", border: "2px solid #008080", borderRadius: "10px", background: `linear-gradient(#008080, #00808090)` }}
                        head="Ratio"
                        hs="lf/hf"
                        val={0.57}
                        alt="sample"
                    />
                </div>
                <div style={{ height: "20px" }}></div>
                {/* </div> */}
                {/* <div className='HomeWholePage' style={{ paddingTop: '10vh', paddingLeft: '6vw', paddingRight: '6vw' }}>
                    <div data-aos="fade-right">
                        <ContentBoxx
                            giveid="AboutUs"
                            heading="ABOUT US"
                            activeimg={TeamPicMain}
                            activealt="ex1"
                            carouselItemsImages={HomeAbout}
                            text="Team Sammard provides a platform for space enthusiasts to channel their passion and showcase their skills. Team Sammard participates in two major competitions- the American Astronautical Society (AAS) and NASA's annual rocket science competition CanSat and Spaceport America Cup(SAC). The multidisciplinary nature of the team brings together the best of minds across various fields to ensure we all can touch the skies ourselves."
                            link='/about-us'
                            colour={props.color}
                            linkText="Know More About Us"
                        />
                    </div>
                </div>
                <div className='HomeWholePage' style={{ paddingTop: '8vh' }}>
                    <h1 data-aos="fade-right" style={{ paddingBottom: '0', textAlign: 'center', fontSize: '7.75vmin', color: props.color, fontFamily: 'xspace' }}>PROJECTS</h1>
                    <div data-aos="fade-right" className='SponsorsView' style={{ width: '100vw', display: 'flex', gap: '1vmin', WebkitJustifyContent: 'space-evenly', justifyContent: 'space-evenly', paddingBottom: '5vw', paddingInline: '3vw', paddingTop: '0' }}>
                        <div className='projFlex'>
                            <ProjectBox
                                heading="CANSAT"
                                src={Cansat}
                                alt="ex1"
                                pathid="cansat"
                            />
                            <ProjectBox
                                heading="SA CUP"
                                src={Pinaka}
                                alt="ex1"
                                pathid="sacup"
                            />
                        </div>
                    </div>
                </div>
                <div className='HomeWholePage' style={{ paddingTop: '5vw', paddingLeft: '6vw', paddingRight: '6vw' }}>
                    <div data-aos="fade-right">

                        <EventsBox
                            heading="EVENTS"
                            List={EventsPics}
                        />
                    </div>
                </div>
                <div className='BasePage'>
                    <div data-aos="fade-right" className='PictureBox'>
                        <FillerImage
                            src={Home_Contact1}
                            alt="Blank"
                        />
                        <FillerImage
                            src={Home_Contact2}
                            alt="Blank"
                        />
                    </div>
                    <div className='Address'>
                        <ContactUs />
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Home;