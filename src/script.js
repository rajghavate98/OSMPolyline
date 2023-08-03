var latlngs = []; // Array to store latitude and longitude
        var latlngs1 = [];
        // Read file when selected by the user
        const fileSelector = document.getElementById('file-selector');
        fileSelector.addEventListener('change', (event) => {
            const fileList = event.target.files;
           
            if (fileList.length > 0) {
                const file = fileList[0];
                const reader = new FileReader();

                reader.onload = function(event) {
                    let data = event.target.result;
                    if (typeof data !== 'string') {
                        data = data.toString(); // Convert data to string
                    }

                    const lines = data.split('\n');

                    for (let index = 0; index < lines.length; index++) {
                        const line = lines[index];
                        const [lat, lng] = line.trim().split(',').map(Number);
                        latlngs.push([lat, lng]);
                    }

                    console.log(latlngs[1]);
                };

                reader.readAsText(file);
            }
        });
        const fileSelector1 = document.getElementById('file-selector1');
        fileSelector1.addEventListener('change', (event) => {
            const fileList = event.target.files;
            
            if (fileList.length > 0) {
                const file = fileList[0];
                const reader = new FileReader();

                reader.onload = function(event) {
                    let data = event.target.result;
                    if (typeof data !== 'string') {
                        data = data.toString(); // Convert data to string
                    }

                    const lines = data.split('\n');

                    for (let index = 0; index < lines.length; index++) {
                        const line = lines[index];
                        const [lat, lng] = line.trim().split(',').map(Number);
                        latlngs1.push([lat, lng]);
                    }

                    console.log(latlngs1[1]);
                };

                reader.readAsText(file);
            }
        });

        // Initialize the map
        var map = L.map('map').setView([28.2134221, 77.3032325], 20);

        // Add the OSM tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);

        function handleSubmit() {
            var filteredLatLngs = latlngs.filter(([lat, lng]) => lat !== undefined && lng !== undefined);

            if (filteredLatLngs.length > 1) {
                var polyline = L.polyline(filteredLatLngs, { color: 'blue' }).addTo(map);
                map.fitBounds(polyline.getBounds());
            }
        } 
        function handleSubmit1() {
            var filteredLatLngs = latlngs1.filter(([lat, lng]) => lat !== undefined && lng !== undefined);

            if (filteredLatLngs.length > 1) {
                var polyline = L.polyline(filteredLatLngs, { color: 'red' }).addTo(map);
                map.fitBounds(polyline.getBounds());
            }
        }     
