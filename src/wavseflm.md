<style>
        .audio-container {
            display: flex;
            justify-content: space-between;
            gap: 10px; /* Space between the audio elements */
        }
        .audio-item {
            flex: 1; /* Allow audio items to grow and shrink as needed */
            text-align: center; /* Center-align the captions */
        }
        .audio-item audio {
            width: 100%; /* Make audio elements take the full width of the container */
        }
    </style>

# WavSEFLM

Using WavLM and SEF Network and Lanaguage Model for target Speaker Separation

Full audio goes to: 

demo: 

  <div class="audio-container">
        <div class="audio-item">
            <audio controls>
                <source src="./audio/wavseflm/0_mix.wav" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <p>Caption for Audio 1</p>
        </div>
        <div class="audio-item">
            <audio controls>
                <source src="./audio/wavseflm/0_clean.wav" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <p>Caption for Audio 2</p>
        </div>
        <div class="audio-item">
            <audio controls>
                <source src="./audio/wavseflm/0_output_.wav" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <p>Caption for Audio 3</p>
        </div>
        <div class="audio-item">
            <audio controls>
                <source src="./audio/wavseflm/0_regi.wav" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <p>Caption for Audio 3</p>
        </div>
    </div>