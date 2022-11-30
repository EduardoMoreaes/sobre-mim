function draw() {
        const canvas = document.getElementById("canvas");
        if (canvas.getContext) {
                const ctx = canvas.getContext("2d");

                ctx.fillStyle = "rgb(200, 0, 0)";
                ctx.fillRect(0, 50, 100, 40);

                ctx.fillStyle = "rgb(90, 50, 30)";
                ctx.fillRect(200, 0, 100, 40);

                ctx.drawImage(document.getElementById('project_1'),
                        0, 0, 100, 110, 0, 50, 104, 100);
                
                ctx.drawImage(document.getElementById('project_2'),
                        0, 0, 100, 110, 200, 0, 104, 100);

                ctx.drawImage(document.getElementById('project_3'),
                        0, 0, 100, 110, 200, 100, 104, 100);
        
        }
}
