import React from 'react'
import {CanvasJSChart} from 'canvasjs-react-charts';

function Skills() {
    const options = {
        animationEnabled: true,
        theme: "light2",
        zoomEnabled:true,
        title:{
            text: "Technology Skills"
        },
       
        axisY: {
            title: "For 100(Score by myself)",
            includeZero: true,
            interval: 10,           
        },
        data: [{
            type: "bar",
            
            dataPoints: [
                { y:  80, label: "PHP(Core)" },
                { y:  70, label: "CodeIgniter" },
                { y:  70, label: "Laravel" },
                { y:  60, label: "Symfony" },
                { y:  60, label: "React" },
                { y:  80, label: "HTML" },
                { y:  80, label: "CSS" },
                { y:  80, label: "Javascript" },
                { y:  70, label: "jQuery" },
                { y:  50, label: "Gitlab (CI/CD)" },
                { y:  70, label: "Git" },
            ]
        }],
    }
    return (
        <div>
            <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
        </div>
    )
}

export default Skills
