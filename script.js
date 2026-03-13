/**
 * 1. RELOAD VS NAVIGATION LOGIC
 * Detects if the user hit the 'Reload' button to wipe history.
 */
(function() {
    const perfEntries = performance.getEntriesByType("navigation");
    const isReload = perfEntries.length > 0 && perfEntries[0].type === "reload";
    
    if (isReload || !sessionStorage.getItem('session_initialized')) {
        Object.keys(sessionStorage).forEach(key => {
            if (key.startsWith('chat_history_')) sessionStorage.removeItem(key);
        });
        sessionStorage.setItem('session_initialized', 'true');
    }
})();

const AI_LOGO_SVG = `<svg class="logo-status-icon logo-blinking" width="18" height="18" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 0C23.7614 0 26 2.23858 26 5C26 5.80348 25.8085 6.56169 25.4717 7.23438L31.0273 19C33.7762 19.0147 36 21.2477 36 24C36 25.1964 35.5788 26.2937 34.8779 27.1543L37.168 32.0039C39.8516 32.0925 42 34.2948 42 37C42 39.7614 39.7614 42 37 42C34.2386 42 32 39.7614 32 37C32 36.0318 32.2755 35.128 32.752 34.3623L30.1885 28.9326C28.493 28.6558 27.0846 27.5277 26.417 26H15.583C14.9153 27.5279 13.5065 28.6561 11.8105 28.9326L9.24707 34.3623C9.72369 35.1281 10 36.0316 10 37C10 39.7614 7.76142 42 5 42C2.23858 42 0 39.7614 0 37C0 34.2951 2.14786 32.093 4.83105 32.0039L7.12109 27.1543C6.42049 26.2938 6 25.1961 6 24C6 21.248 8.22329 19.0152 10.9717 19L16.5273 7.23438C16.1907 6.56178 16 5.80333 16 5C16 2.23858 18.2386 0 21 0ZM21 10C20.9178 10 20.8361 9.99709 20.7549 9.99316L15.3242 21.4922C15.4194 21.656 15.5066 21.8251 15.583 22H26.417C26.4934 21.8252 26.5797 21.6559 26.6748 21.4922L21.2441 9.99316C21.1632 9.99705 21.0819 10 21 10Z" fill="#3758F9"/><path d="M23 5C23 6.10457 22.1046 7 21 7C19.8954 7 19 6.10457 19 5C19 3.89543 19.8954 3 21 3C22.1046 3 23 3.89543 23 5Z" fill="white"/><path d="M13 24C13 25.1046 12.1046 26 11 26C9.89543 26 9 25.1046 9 24C9 22.8954 9.89543 22 11 22C12.1046 22 13 22.8954 13 24Z" fill="white"/><path d="M33 24C33 25.1046 32.1046 26 31 26C29.8954 26 29 25.1046 29 24C29 22.8954 29.8954 22 31 22C32.1046 22 33 22.8954 33 24Z" fill="white"/><path d="M39 37C39 38.1046 38.1046 39 37 39C35.8954 39 35 38.1046 35 37C35 35.8954 35.8954 35 37 35C38.1046 35 39 35.8954 39 37Z" fill="white"/><path d="M7 37C7 38.1046 6.10457 39 5 39C3.89543 39 3 38.1046 3 37C3 35.8954 3.89543 35 5 35C6.10457 35 7 35.8954 7 37Z" fill="white"/></svg>`;

let isTyping = false;
let currentProjectId = 'home';
let defaultHomePrompts = '';

document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('main-chat-container');
    const landingContent = document.getElementById('landing-content');
    const projectMessages = document.getElementById('project-messages');
    const promptContainer = document.querySelector('#prompt-container');

    // Capture the HTML exactly as you wrote it in index.html
    if (promptContainer) {
        defaultHomePrompts = promptContainer.innerHTML;
    }

    const saveState = (id, html) => { if (id) sessionStorage.setItem(`chat_history_${id}`, html); };
    const getState = (id) => sessionStorage.getItem(`chat_history_${id}`);

    // --- NAVIGATION ---
    window.goHome = function() {
        if (isTyping) return;
        
        if (currentProjectId) saveState(currentProjectId, projectMessages.innerHTML);
        currentProjectId = 'home';
        
        landingContent.style.display = 'block'; 
        projectMessages.style.display = 'block';
        projectMessages.classList.add('pt-12');

        const savedHistory = getState('home');
        projectMessages.innerHTML = savedHistory || '';
        
        // RESTORE THE ORIGINAL HTML
        if (promptContainer) {
            promptContainer.innerHTML = defaultHomePrompts; 
        }
        
        updateSidebarUI('home');
        
        requestAnimationFrame(() => { 
            chatContainer.scrollTop = chatContainer.scrollHeight; 
        });
    };

    window.startProject = function(projectId) {
        if (isTyping) return;
        // ADD THIS LINE: Save the project (or home) you are LEAVING
        if (currentProjectId) saveState(currentProjectId, projectMessages.innerHTML);
        if (typeof PROJECT_CONTENT === 'undefined' || !PROJECT_CONTENT[projectId]) return;
        
        currentProjectId = projectId;
        landingContent.style.display = 'none';
        projectMessages.style.display = 'block';
        projectMessages.classList.remove('pt-12');

        const savedHistory = getState(projectId);
        if (savedHistory) {
            projectMessages.innerHTML = savedHistory;
            requestAnimationFrame(() => { chatContainer.scrollTop = chatContainer.scrollHeight; });
        } else {
            projectMessages.innerHTML = '';
            chatContainer.scrollTop = 0;
            addMessage(PROJECT_CONTENT[projectId].jumpstart);
        }

        updateProjectPrompts(projectId);
        updateSidebarUI(projectId);
    };

    // --- HOME PROMPT HANDLER ---
    window.handleGeneralPrompt = function(key) {
        if (isTyping || !GENERAL_ANSWERS[key]) return;
        
        const labels = {
            'contact': 'How can we work together?',
            'stack': 'What is your design stack?',
            'philosophy': 'Tell me about your design philosophy'
        };

        currentProjectId = 'home';
        landingContent.style.display = 'block';
        projectMessages.style.display = 'block';
        projectMessages.classList.add('pt-12');

        addUserMessage(labels[key] || "Tell me more");
        setTimeout(() => { typeMessage(GENERAL_ANSWERS[key]); }, 400);
        updateSidebarUI('home');
    };

    // --- UI ENGINE ---
    function addMessage(htmlContent) {
        const messageDiv = document.createElement('div');
        messageDiv.className = "mb-16 w-full px-4";
        messageDiv.innerHTML = htmlContent;
        projectMessages.appendChild(messageDiv);
        saveState(currentProjectId, projectMessages.innerHTML);
    }

    window.addUserMessage = function(text) {
        const userWrapper = document.createElement('div');
        userWrapper.className = "flex flex-col items-end mb-8 w-full px-4 user-message-instance";
        userWrapper.innerHTML = `
            <div class="bg-[#3b5cf6] text-white px-6 py-3 rounded-[24px] rounded-tr-none max-w-[80%] shadow-sm">
                <p class="text-base font-medium">${text}</p>
            </div>
        `;
        projectMessages.appendChild(userWrapper);
        
        // Save immediately after adding
        saveState(currentProjectId, projectMessages.innerHTML);
        
        setTimeout(() => {
            const containerRect = chatContainer.getBoundingClientRect();
            const bubbleRect = userWrapper.getBoundingClientRect();
            const scrollTarget = chatContainer.scrollTop + (bubbleRect.top - containerRect.top) - 100;
            chatContainer.scrollTo({ top: scrollTarget, behavior: 'smooth' });
        }, 30);
    };

    window.typeMessage = function(htmlContent) {
        if (isTyping) return;
        isTyping = true;
        if (promptContainer) {
            promptContainer.style.opacity = "0.5";
            promptContainer.style.pointerEvents = "none";
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = "mb-16 w-full px-4 flex gap-4 items-start";
        messageDiv.innerHTML = `
            <div class="flex-shrink-0 mt-1 logo-wrapper">${AI_LOGO_SVG}</div>
            <div class="typewriter-target w-full text-gray-800 text-base leading-relaxed"></div>
        `;
        projectMessages.appendChild(messageDiv);

        const target = messageDiv.querySelector('.typewriter-target');
        const logo = messageDiv.querySelector('svg');
        const temp = document.createElement('div');
        temp.innerHTML = htmlContent;
        
        typeNode(temp, target, () => {
            isTyping = false;
            if (promptContainer) {
                promptContainer.style.opacity = "1";
                promptContainer.style.pointerEvents = "auto";
            }
            logo.classList.remove('logo-blinking');
            
            // SAVE HERE: This captures the home chat once the AI finishes talking
            saveState(currentProjectId, projectMessages.innerHTML);
        });
    };

    function typeNode(source, destination, callback) {
        const nodes = Array.from(source.childNodes);
        let nodeIndex = 0;
        function processNextNode() {
            if (nodeIndex >= nodes.length) { if (callback) callback(); return; }
            const currentNode = nodes[nodeIndex];
            if (currentNode.nodeType === Node.TEXT_NODE) {
                let charIndex = 0;
                const text = currentNode.textContent;
                const textSpan = document.createElement('span');
                destination.appendChild(textSpan);
                function typeChar() {
                    if (charIndex < text.length) {
                        const chunk = text.slice(charIndex, charIndex + 2);
                        textSpan.textContent += chunk;
                        charIndex += 2;
                        setTimeout(typeChar, chunk.includes('.') ? 80 : 12);
                    } else { nodeIndex++; processNextNode(); }
                }
                typeChar();
            } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
                if (currentNode.tagName.toLowerCase() === 'svg') {
                    destination.appendChild(currentNode.cloneNode(true));
                    nodeIndex++; processNextNode();
                } else {
                    const newElement = currentNode.cloneNode(false);
                    destination.appendChild(newElement);
                    typeNode(currentNode, newElement, () => { nodeIndex++; processNextNode(); });
                }
            } else { nodeIndex++; processNextNode(); }
        }
        processNextNode();
    }

    // --- DYNAMIC PROJECT PROMPTS (With Restored SVGs) ---
    window.updateProjectPrompts = function(projectId) {
        if (!promptContainer) return;
        promptContainer.innerHTML = '';
        const steps = [
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg> View problem & challenge`, key: 'problem' },
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" /></svg> Explore design Solutions`, key: 'solutions' },
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg> See the impact and results`, key: 'results' },
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg> Retro & learnings`, key: 'retro' },
            { html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> Go back to Home`, key: 'home' }
        ];

        steps.forEach(step => {
            const btn = document.createElement('button');
            btn.className = "bg-[#F3F4F6] border border-[#111928] px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-200 transition text-[#111928]";
            btn.innerHTML = step.html;
            btn.onclick = () => {
                if (isTyping) return;
                if (step.key === 'home') window.goHome();
                else {
                    addUserMessage(btn.innerText.trim());
                    setTimeout(() => { typeMessage(PROJECT_CONTENT[projectId][step.key]); }, 400);
                }
            };
            promptContainer.appendChild(btn);
        });
    }


    // --- SIDEBAR UI ---
    function updateSidebarUI(projectId) {
        document.querySelectorAll('.nav-item').forEach(link => {
            link.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'font-medium');
        });
        const elementId = (projectId === 'home' || !projectId) ? 'nav-home' : `nav-${projectId}`;
        const activeLink = document.getElementById(elementId);
        if (activeLink) activeLink.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'font-medium');
    }

    // --- SIDEBAR CLICK PROTECTION ---
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // STOP the browser from reloading the page
            
            // 1. Save whatever is currently on screen before switching
            if (currentProjectId) {
                saveState(currentProjectId, projectMessages.innerHTML);
            }

            // 2. Extract target (e.g., 'nav-home' -> 'home')
            const targetId = link.id.replace('nav-', '');
            
            // 3. Navigate via JS only
            if (targetId === 'home') {
                window.goHome();
            } else {
                window.startProject(targetId);
            }
        });
    });


    // --- RESUME MODAL ---
    window.viewResume = function() {
        const modal = document.getElementById('resume-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeResume = function() {
        const modal = document.getElementById('resume-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
});