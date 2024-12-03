document.getElementById("ResumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Type casting for form elements
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

    // Ensure that all form elements are available
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
       
        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
            <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;

        // Append the resume content and download link to the output div
        const resumeOutputElement = document.getElementById('resume_output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove('hidden');

            // Create container for buttons
            const buttonContainer = document.createElement('div');
            buttonContainer.id = 'buttonContainer';
            resumeOutputElement.appendChild(buttonContainer);

            // Add download PDF button
            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download as PDF';  
            downloadButton.addEventListener('click', () => {
                window.print(); // Open the print dialog, allowing the user to save a PDF
            });
            buttonContainer.appendChild(downloadButton);

            // Add shareable link button
            const shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = 'Copy shareable link';
            shareLinkButton.addEventListener('click', async () => {
                try {
                    // Create a unique shareable link (simulate it in this case)
                    const shareLink = `https://yourdomain.com/resume/${name.replace(/\s+/g, '_')}_cv.html`;

                    // Use clipboard API to copy the shareable link
                    await navigator.clipboard.writeText(shareLink);
                    alert('Shareable link copied to clipboard');
                } catch (error) {
                    console.log('Failed to copy link', error);
                    alert('Failed to copy link to clipboard. Please try again');
                }
            });
            buttonContainer.appendChild(shareLinkButton);
        }

    } else {
        console.error('One or more input elements are missing');
    }
});