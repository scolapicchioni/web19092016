export class Chart{
    constructor(){}

    drawBarChart({data=[], labels=[], canvasId=""}={}){
        const canvas = document.getElementById(canvasId);
        if(canvas){
            const ctx = canvas.getContext("2d");
            
            const canvasHeight = canvas.offsetHeight;
            const canvasWidth = canvas.offsetWidth;

            const borderSize = 10;

            const chartHeight = canvasHeight - (2 * borderSize);
            const chartWidth = canvasWidth - (2 * borderSize);

            const numberOfBars = data.length;
            const barDistance = 10; 
            const width = (canvasWidth / numberOfBars) - barDistance;
            
            const unity = chartHeight / data.reduce((p,c)=>p>c?p:c);

            ctx.clearRect(0,0,canvasWidth, canvasHeight);
            for(let i = 0; i< data.length ; i++){
                const x = i * (width + barDistance);
                const height = data[i] * unity;
                const y = chartHeight - borderSize - height;
                ctx.fillRect(x,y,width, height);
                ctx.fillText(labels[i],x,chartHeight);
            }
        }
    }
}