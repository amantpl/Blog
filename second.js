document.getElementById('bold').addEventListener('click', function() {
    document.execCommand('bold');
  });
  
  document.getElementById('italic').addEventListener('click', function() {
    document.execCommand('italic');
  });
  
  document.getElementById('underline').addEventListener('click', function() {
    document.execCommand('underline');
  });
  
  document.getElementById('strikethrough').addEventListener('click', function() {
    document.execCommand('strikeThrough');
  });
  
  document.getElementById('superscript').addEventListener('click', function() {
    document.execCommand('superscript');
  });
  
  document.getElementById('subscript').addEventListener('click', function() {
    document.execCommand('subscript');
  });
  
  document.getElementById('insertOrderedList').addEventListener('click', function() {
    document.execCommand('insertOrderedList');
  });
  
  document.getElementById('insertUnorderedList').addEventListener('click', function() {
    document.execCommand('insertUnorderedList');
  });
  
  document.getElementById('undo').addEventListener('click', function() {
    document.execCommand('undo');
  });
  
  document.getElementById('redo').addEventListener('click', function() {
    document.execCommand('redo');
  });
  
  document.getElementById('justifyLeft').addEventListener('click', function() {
    document.execCommand('justifyLeft');
  });
  
  document.getElementById('justifyCenter').addEventListener('click', function() {
    document.execCommand('justifyCenter');
  });
  
  document.getElementById('justifyRight').addEventListener('click', function() {
    document.execCommand('justifyRight');
  });
  
  document.getElementById('justifyFull').addEventListener('click', function() {
    document.execCommand('justifyFull');
  });
  
  document.getElementById('indent').addEventListener('click', function() {
    document.execCommand('indent');
  });
  
  document.getElementById('outdent').addEventListener('click', function() {
    document.execCommand('outdent');
  });
  
  document.getElementById('formatBlock').addEventListener('change', function() {
    const format = this.value;
    document.execCommand('formatBlock', false, format);
  });
  
  document.getElementById('fontName').addEventListener('change', function() {
    const font = this.value;
    document.execCommand('fontName', false, font);
  });
  
  document.getElementById('fontSize').addEventListener('change', function() {
    const size = this.value;
    document.execCommand('fontSize', false, size);
  });


  // Font Names (You can add more custom fonts here)
const fonts = [
    'Arial', 'Verdana', 'Georgia', 'Times New Roman', 'Courier New', 'Tahoma', 'Trebuchet MS', 'Comic Sans MS', 'Lucida Sans'
  ];
  
  // Font Sizes (You can customize this list as well)
  const fontSizes = [
    '8', '10', '12', '14', '16', '18', '20', '24', '30', '36', '48', '72'
  ];
  
  // Populate the fontName select element with font options
  const fontNameSelect = document.getElementById('fontName');
  fonts.forEach(font => {
    const option = document.createElement('option');
    option.value = font;
    option.textContent = font;
    fontNameSelect.appendChild(option);
  });
  
  // Populate the fontSize select element with font size options
  const fontSizeSelect = document.getElementById('fontSize');
  fontSizes.forEach(size => {
    const option = document.createElement('option');
    option.value = size;
    option.textContent = size + 'px';
    fontSizeSelect.appendChild(option);
  });
  
  // Add event listeners to apply the selected font and font size to the editable area
  fontNameSelect.addEventListener('change', function() {
    const font = this.value;
    document.execCommand('fontName', false, font);
  });
  
  fontSizeSelect.addEventListener('change', function() {
    const size = this.value;
    document.execCommand('fontSize', false, size);
  });
  
  
  document.getElementById('foreColor').addEventListener('input', function() {
    const color = this.value;
    document.execCommand('foreColor', false, color);
  });
  
  document.getElementById('backColor').addEventListener('input', function() {
    const color = this.value;
    document.execCommand('backColor', false, color);
  });
  

  // Add the event listener for the Text-to-Speech button
document.getElementById('textToSpeech').addEventListener('click', function() {
    const text = document.getElementById('text-input').innerText.trim(); // Get the text from the editable area
  
    if (text === '') {
      alert('Please enter some text to read out!');
      return;
    }
  
    // Check if the SpeechSynthesis API is available
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(); // Create a new speech utterance
      speech.text = text; // Set the text to be read out
      speech.lang = 'en-US'; // Set the language (you can change this if needed)
  
      // Optional: Adjust voice and rate (if needed)
      speech.rate = 1; // Speed of speech (1 is normal)
      speech.pitch = 1; // Pitch of speech (1 is normal)
  
      // Speak the text
      window.speechSynthesis.speak(speech);
    } else {
      alert('Text-to-Speech is not supported in this browser.');
    }
  });

  function showEditor() {
    var title = document.getElementById("editor-title").value;
    if (title) {
      document.getElementById("display-title").innerText = title;
      document.querySelector(".title-section").style.display = "none";
      document.querySelector(".editor-section").style.display = "block";
    } else {
      alert("Please enter a title.");
    }
  }
  
// Save functionality
document.getElementById("save").addEventListener("click", function() {
    const content = document.getElementById("text-input").innerHTML;
    // Save the content (you can send this to the server or download it as a file)
    console.log("Saved Content:", content);
});

// Clear functionality
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("text-input").innerHTML = "";
});


// Event listener for the "New Post" button
document.querySelector('.new-post').addEventListener('click', function() {
    // Show the editor container
    const editorContainer = document.querySelector('.editor-container');
    editorContainer.style.display = 'block'; // Make the editor container visible
});


document.querySelector('#close').addEventListener('click', function() {
    const editorContainer = document.querySelector('.editor-container');
    editorContainer.style.display = 'none'; // Hide the editor container
});

document.getElementById("save").addEventListener("click", function() {
    const content = document.getElementById("text-input").innerHTML; // Get the content of the text editor
    const title = document.getElementById("editor-title").value; // Get the title from the editor

    if (content.trim() !== "") {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post'); 

        // Add the title and content inside the new div
        postDiv.innerHTML = `<h3>${title}</h3><div>${content}</div>`;

        // Append the new div to the body or to a specific container (e.g., a posts container)
        document.body.appendChild(postDiv);

        // Hide the "No Posts Yet" message
        const noPostDiv = document.querySelector('.no-post');
        if (noPostDiv) {
            noPostDiv.style.display = 'none'; // Hide the no-post message
        }

        // Optionally, hide the editor after saving
        document.querySelector('.editor-container').style.display = 'none';
    } else {
        alert('Please enter some content to save.');
    }
});
