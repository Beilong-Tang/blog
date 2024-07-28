<style>
        .audio-container {
            display: flex;
            flex-direction: column;
            gap: 10px; /* Space between the rows */
        }
        .audio-row {
            display: flex;
            gap: 10px; /* Space between the audio elements in a row */
        }
        .audio-item {
            text-align: center; /* Center-align the captions */
        }
        .audio-item audio {
            width: 100%; /* Make audio elements take the full width of their container */
        }
    </style>

# WavSEFLM

Using WavLM and SEF Network and Lanaguage Model for target Speaker Separation

Full audio goes to: 

demo: 

<div class="audio-container" id="audioContainer">
        <!-- Rows will be dynamically added here -->
    </div>

<script>
        // Number of rows to create
        const numRows = 23;
        const audiosPerRow = 4;

        // Get the container element
        const container = document.getElementById('audioContainer');
        const name = ["mix", "clean", "output", "enroll"]

        // Loop to create rows
        for (let i = 0; i < numRows; i++) {
            // Create a new div for each row
            const row = document.createElement('div');
            row.className = 'audio-row';

            // Loop to create audio elements within the row
            for (let j = 0; j < audiosPerRow; j++) {
                const audioIndex = i * audiosPerRow + j + 1;

                // Create a container for each audio and its caption
                const audioItem = document.createElement('div');
                audioItem.className = 'audio-item';

                // Create the audio element
                const audio = document.createElement('audio');
                audio.controls = true;
                const source = document.createElement('source');
                source.src = `./audio/wavseflm/${i}_clean.wav`; // Dynamic source based on the index
                source.type = 'audio/mpeg';
                audio.appendChild(source);

                // Create the caption
                const caption = document.createElement('p');
                caption.textContent = `Caption for Audio ${name[j]}`;

                // Append the audio and caption to the audio item container
                audioItem.appendChild(audio);
                audioItem.appendChild(caption);

                // Append the audio item to the row
                row.appendChild(audioItem);
            }

            // Append the row to the container
            container.appendChild(row);
        }
    </script>

<!-- <script>
        // Number of rows to create
        const numRows = 20;

        // Get the container element
        const container = document.getElementById('audioContainer');

        // Loop to create rows
        for (let i = 1; i <= numRows; i++) {
            const row_ = document.creatElement('div')
            row_.className = "audio-container"
            for (let j = 0; j< 4; j++){
            // Create a new div for each row
            const row = document.createElement('div');
            row.className = 'audio-item';

            // Create the audio element
            const audio = document.createElement('audio');
            audio.controls = true;
            const source = document.createElement('source');
            source.src = `audio${i}.mp3`; // Dynamic source based on the index
            source.type = 'audio/mpeg';
            audio.appendChild(source);

            // Create the caption
            const caption = document.createElement('p');
            caption.textContent = `Caption for Audio ${i}`;

            // Append the audio and caption to the row
            row.appendChild(audio);
            row.appendChild(caption);

            // Append the row to the container
            row_.appendChild(row)
            
            }
            container.appendChild(row_);
        }
    </script> -->